"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import Container from "@/components/ds/Container";
import Figure from "@/components/ds/Figure";
import { ButtonPrimary, ButtonSecondary } from "@/components/ds/Button";
import { cerereSchema, type CerereFormValues, STEPS, TERMEN_OPTIONS, SCOP_OPTIONS, MOLDOVA_MOBILE_REGEX } from "./schema";
import { cn } from "@/lib/utils";

const defaultValues: CerereFormValues = {
    have_garant: undefined as unknown as boolean,
    in_oficiu: undefined as unknown as boolean,
    suma: "",
    termen: undefined as unknown as CerereFormValues["termen"],
    scopul_creditului: undefined as unknown as CerereFormValues["scopul_creditului"],
    nume: "",
    prenume: "",
    adresa_domiciliu: "",
    telefon: "",
    venituri: "",
    are_alte_credite: undefined as unknown as boolean,
    locul_de_munca: "",
    are_bunuri: undefined as unknown as boolean,
    terms: true,
};

function ChoiceButton({ selected, children, className, ...props }: { selected: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type="button"
            className={cn(
                "px-4 py-3 text-[15px] font-semibold transition-colors duration-[120ms]",
                selected ? "bg-dc-accent text-dc-on-accent" : "bg-dc-surface text-dc-text-muted hover:text-dc-text",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

function YesNoChoice({ value, onChange }: { value: boolean | undefined; onChange: (v: boolean) => void }) {
    return (
        <div className="grid grid-cols-2 gap-px bg-dc-line">
            {[
                { label: "Da", v: true },
                { label: "Nu", v: false },
            ].map((opt) => (
                <ChoiceButton key={opt.label} selected={value === opt.v} onClick={() => onChange(opt.v)}>
                    {opt.label}
                </ChoiceButton>
            ))}
        </div>
    );
}

function OptionGrid({
    options,
    value,
    onChange,
    columns = 2,
}: {
    options: readonly string[];
    value: string | undefined;
    onChange: (v: string) => void;
    columns?: 2 | 3;
}) {
    return (
        <div className={cn("grid gap-px bg-dc-line", columns === 3 ? "grid-cols-3" : "grid-cols-1")}>
            {options.map((opt) => (
                <ChoiceButton key={opt} selected={value === opt} onClick={() => onChange(opt)} className="whitespace-normal">
                    {opt}
                </ChoiceButton>
            ))}
        </div>
    );
}

const labelClass = "text-xs uppercase tracking-[.1em] text-dc-text-muted";
const errorClass = "text-xs text-dc-accent";
const legendClass = "text-xl tracking-[-.02em] text-dc-text text-center";

function PhoneDigits({ value, onChange, showError }: { value: string; onChange: (v: string) => void; showError?: boolean }) {
    const digits = value.replace(/\D/g, "").slice(0, 9);
    const isComplete = MOLDOVA_MOBILE_REGEX.test(digits);

    return (
        <div className="flex flex-col gap-2.5">
            <input
                id="telefon"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                maxLength={9}
                placeholder="06xxxxxxx"
                aria-invalid={showError || undefined}
                value={digits}
                onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 9))}
                className="font-dc-mono tracking-wider"
            />
            <div className="flex justify-between gap-1.5 px-0.5" aria-hidden>
                {Array.from({ length: 9 }).map((_, i) => {
                    const filled = i < digits.length;
                    return (
                        <span
                            key={i}
                            className={cn(
                                "h-[2px] flex-1 transition-colors",
                                filled && isComplete && "bg-dc-proof",
                                filled && !isComplete && "bg-dc-text",
                                !filled && (showError ? "bg-dc-accent/50" : "bg-dc-line"),
                            )}
                        />
                    );
                })}
            </div>
            <FieldDescription className="text-xs text-dc-text-muted">
                9 cifre - începe cu <strong className="text-dc-text">06</strong> sau <strong className="text-dc-text">07</strong>
            </FieldDescription>
        </div>
    );
}

type DisqualifyReason = "garant" | "oficiu" | null;

export default function CerereOnlinePage() {
    const { trackEvent } = useFacebookPixel();
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [disqualify, setDisqualify] = useState<DisqualifyReason>(null);
    /** Errors shown only after Continuă/Trimite on that specific step */
    const [attemptedSteps, setAttemptedSteps] = useState<Record<number, boolean>>({});

    const form = useForm<CerereFormValues>({
        resolver: zodResolver(cerereSchema),
        defaultValues,
        mode: "onSubmit",
        reValidateMode: "onChange",
    });

    const {
        register,
        control,
        handleSubmit,
        watch,
        trigger,
        reset,
        setValue,
        clearErrors,
        formState: { errors, isSubmitting },
    } = form;

    const stepAttempted = !!attemptedSteps[step];

    // Revalidate only the changed field after an attempt on this step
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        const sub = watch((_, { name }) => {
            if (!name || !stepAttempted) return;
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
                trigger(name as FieldPath<CerereFormValues>);
            }, 300);
        });
        return () => {
            sub.unsubscribe();
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [watch, trigger, stepAttempted]);

    useEffect(() => {
        trackEvent("ViewContent");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Clear field errors when entering a step (don't carry over)
    useEffect(() => {
        clearErrors();
    }, [step, clearErrors]);

    const current = STEPS[step];
    const gateAnswer = step === 0 ? watch("have_garant") : step === 1 ? watch("in_oficiu") : undefined;
    const gateBlocked = (step === 0 || step === 1) && gateAnswer === false;

    const markAttempted = () => setAttemptedSteps((prev) => ({ ...prev, [step]: true }));

    const showErr = (name: keyof CerereFormValues) => (stepAttempted && errors[name] ? true : undefined);
    const errMsg = (name: keyof CerereFormValues) => (stepAttempted ? errors[name]?.message : undefined);

    const nextStep = async () => {
        if (step === 0) {
            const v = form.getValues("have_garant");
            if (typeof v !== "boolean") {
                markAttempted();
                await trigger(["have_garant"], { shouldFocus: true });
                return;
            }
            if (!v) {
                setDisqualify("garant");
                return;
            }
            setStep(1);
            return;
        }
        if (step === 1) {
            const v = form.getValues("in_oficiu");
            if (typeof v !== "boolean") {
                markAttempted();
                await trigger(["in_oficiu"], { shouldFocus: true });
                return;
            }
            if (!v) {
                setDisqualify("oficiu");
                return;
            }
            setStep(2);
            return;
        }

        const valid = await trigger(current.fields, { shouldFocus: true });
        if (valid) {
            setStep((s) => Math.min(s + 1, STEPS.length - 1));
        } else {
            markAttempted();
        }
    };

    const prevStep = () => {
        setDisqualify(null);
        setStep((s) => Math.max(0, s - 1));
    };

    const onSubmit = async (values: CerereFormValues) => {
        markAttempted();
        setLoading(true);
        setShowError(false);
        try {
            const payload = {
                ...values,
                terms: true,
                datorii: values.are_alte_credite ? "da" : "0",
                bunuri: values.are_bunuri ? ["Casă / apartament / teren / garaj"] : ["Nu am nimic"],
                subject: `${values.suma} MDL, ${values.termen} luni, ${values.nume}`,
            };

            const res = await fetch("/api/cerere-online", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                trackEvent("Lead");
                setShowSuccess(true);
                reset(defaultValues);
                setStep(0);
                setAttemptedSteps({});
                setDisqualify(null);
            } else {
                setShowError(true);
            }
        } catch {
            setShowError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="dc bg-dc-bg dc-section dc-section--hero">
            <Container>
                <p className="flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                    <span className="block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                    Cerere online
                </p>
                <h1 className="mt-5 text-center text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                    Cerere de credit online
                </h1>

                {disqualify ? (
                    <div className="dc-cell mx-auto mt-14 flex max-w-[480px] flex-col items-center gap-4 p-10 text-center">
                        <h2 className="text-xl tracking-[-.02em] text-dc-text">Nu putem continua</h2>
                        {disqualify === "garant" ? (
                            <p className="text-[15px] leading-[1.55] text-dc-text-muted">
                                Fără cel puțin un <strong className="text-dc-text">fidejusor (garant)</strong> nu putem procesa cererea
                                online.
                            </p>
                        ) : (
                            <p className="text-[15px] leading-[1.55] text-dc-text-muted">
                                Contractul se semnează <strong className="text-dc-text">doar în oficiu</strong>. Dacă nu poți veni, nu putem
                                continua online.
                            </p>
                        )}
                        <div className="mt-2 flex flex-col items-center gap-4">
                            <ButtonSecondary
                                onClick={() => {
                                    setDisqualify(null);
                                    if (disqualify === "garant") {
                                        setValue("have_garant", undefined as unknown as boolean);
                                        setStep(0);
                                    } else {
                                        setValue("in_oficiu", undefined as unknown as boolean);
                                        setStep(1);
                                    }
                                }}
                            >
                                Revin și aleg din nou
                            </ButtonSecondary>
                            <a
                                href="tel:+37361252777"
                                className="text-[15px] text-dc-text-muted underline underline-offset-4 hover:text-white"
                            >
                                Sau sună-ne: 0612 52 777
                            </a>
                        </div>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit, () => markAttempted())}
                        onKeyDown={(e) => {
                            // Avoid accidental full-form submit via Enter on earlier steps
                            if (e.key === "Enter" && current.kind !== "submit") {
                                e.preventDefault();
                                void nextStep();
                            }
                        }}
                        className="mx-auto mt-14 max-w-[480px] border border-dc-line p-8"
                        noValidate
                    >
                        <div className="mb-7 flex items-center justify-between">
                            <Figure size="ordinal" className="text-dc-text-muted">
                                {String(step + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
                            </Figure>
                            <span className="text-xs uppercase tracking-[.1em] text-dc-text-muted">{current.label}</span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Gate: garant */}
                                {step === 0 && (
                                    <div className="flex min-h-[240px] flex-col justify-center py-6">
                                        <FieldSet className="gap-0">
                                            <FieldLegend className={cn(legendClass, "mb-6 px-1 leading-snug")}>
                                                Poți oferi un fidejusor (garant / поручитель)?
                                                <span className="mt-2 block text-sm font-normal text-dc-text-muted">
                                                    Este o condiție obligatorie.
                                                </span>
                                            </FieldLegend>
                                            <Controller
                                                control={control}
                                                name="have_garant"
                                                render={({ field }) => (
                                                    <Field className="mt-6 gap-3">
                                                        <YesNoChoice value={field.value} onChange={field.onChange} />
                                                        {errMsg("have_garant") && (
                                                            <FieldError className={errorClass}>{errMsg("have_garant")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                        </FieldSet>
                                    </div>
                                )}

                                {/* Gate: oficiu */}
                                {step === 1 && (
                                    <div className="flex min-h-[240px] flex-col justify-center py-6">
                                        <FieldSet className="gap-0">
                                            <FieldLegend className={cn(legendClass, "mb-6 px-1 leading-snug")}>
                                                Poți veni în oficiu pentru semnarea contractului?
                                                <span className="mt-2 block text-sm font-normal text-dc-text-muted">Nu semnăm online.</span>
                                            </FieldLegend>
                                            <Controller
                                                control={control}
                                                name="in_oficiu"
                                                render={({ field }) => (
                                                    <Field className="mt-6 gap-3">
                                                        <YesNoChoice value={field.value} onChange={field.onChange} />
                                                        {errMsg("in_oficiu") && (
                                                            <FieldError className={errorClass}>{errMsg("in_oficiu")}</FieldError>
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                        </FieldSet>
                                    </div>
                                )}

                                {/* Credit */}
                                {step === 2 && (
                                    <FieldSet className="gap-2">
                                        <FieldLegend className={cn(legendClass, "mb-6")}>Date despre credit</FieldLegend>
                                        <FieldGroup className="gap-7">
                                            <Field data-invalid={showErr("suma")} className="gap-2.5">
                                                <FieldLabel htmlFor="suma" className={labelClass}>
                                                    Suma (lei)
                                                </FieldLabel>
                                                <input
                                                    id="suma"
                                                    type="number"
                                                    step={100}
                                                    min={10000}
                                                    max={300000}
                                                    aria-invalid={showErr("suma")}
                                                    className="font-dc-mono"
                                                    {...register("suma")}
                                                />
                                                <FieldDescription className="text-xs text-dc-text-muted">
                                                    10 000 – 300 000 lei
                                                </FieldDescription>
                                                {errMsg("suma") && <FieldError className={errorClass}>{errMsg("suma")}</FieldError>}
                                            </Field>

                                            <Field className="gap-2.5">
                                                <FieldLabel className={labelClass}>Termen (luni)</FieldLabel>
                                                <Controller
                                                    control={control}
                                                    name="termen"
                                                    render={({ field }) => (
                                                        <OptionGrid
                                                            options={TERMEN_OPTIONS}
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            columns={3}
                                                        />
                                                    )}
                                                />
                                                {errMsg("termen") && <FieldError className={errorClass}>{errMsg("termen")}</FieldError>}
                                            </Field>

                                            <Field className="gap-2.5">
                                                <FieldLabel className={labelClass}>Scopul creditului</FieldLabel>
                                                <Controller
                                                    control={control}
                                                    name="scopul_creditului"
                                                    render={({ field }) => (
                                                        <OptionGrid options={SCOP_OPTIONS} value={field.value} onChange={field.onChange} />
                                                    )}
                                                />
                                                {errMsg("scopul_creditului") && (
                                                    <FieldError className={errorClass}>{errMsg("scopul_creditului")}</FieldError>
                                                )}
                                            </Field>
                                        </FieldGroup>
                                    </FieldSet>
                                )}

                                {/* Personal */}
                                {step === 3 && (
                                    <FieldSet className="gap-2">
                                        <FieldLegend className={cn(legendClass, "mb-6")}>Date personale</FieldLegend>
                                        <FieldGroup className="gap-7">
                                            <Field data-invalid={showErr("nume")} className="gap-2.5">
                                                <FieldLabel htmlFor="nume" className={labelClass}>
                                                    Nume
                                                </FieldLabel>
                                                <input id="nume" aria-invalid={showErr("nume")} {...register("nume")} />
                                                {errMsg("nume") && <FieldError className={errorClass}>{errMsg("nume")}</FieldError>}
                                            </Field>
                                            <Field data-invalid={showErr("prenume")} className="gap-2.5">
                                                <FieldLabel htmlFor="prenume" className={labelClass}>
                                                    Prenume
                                                </FieldLabel>
                                                <input id="prenume" aria-invalid={showErr("prenume")} {...register("prenume")} />
                                                {errMsg("prenume") && <FieldError className={errorClass}>{errMsg("prenume")}</FieldError>}
                                            </Field>
                                            <Field data-invalid={showErr("adresa_domiciliu")} className="gap-2.5">
                                                <FieldLabel htmlFor="adresa_domiciliu" className={labelClass}>
                                                    Adresa de reședință
                                                </FieldLabel>
                                                <input
                                                    id="adresa_domiciliu"
                                                    placeholder="Oraș/Sat, strada, nr."
                                                    aria-invalid={showErr("adresa_domiciliu")}
                                                    {...register("adresa_domiciliu")}
                                                />
                                                {errMsg("adresa_domiciliu") && (
                                                    <FieldError className={errorClass}>{errMsg("adresa_domiciliu")}</FieldError>
                                                )}
                                            </Field>
                                            <Field className="gap-2.5">
                                                <FieldLabel htmlFor="telefon" className={labelClass}>
                                                    Telefon mobil (Moldova)
                                                </FieldLabel>
                                                <Controller
                                                    control={control}
                                                    name="telefon"
                                                    render={({ field }) => (
                                                        <PhoneDigits
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                            showError={!!showErr("telefon")}
                                                        />
                                                    )}
                                                />
                                                {errMsg("telefon") && <FieldError className={errorClass}>{errMsg("telefon")}</FieldError>}
                                            </Field>
                                        </FieldGroup>
                                    </FieldSet>
                                )}

                                {/* Venit & credite */}
                                {step === 4 && (
                                    <FieldSet className="gap-2">
                                        <FieldLegend className={cn(legendClass, "mb-6")}>Venit &amp; credite</FieldLegend>
                                        <FieldGroup className="gap-7">
                                            <Field data-invalid={showErr("venituri")} className="gap-2.5">
                                                <FieldLabel htmlFor="venituri" className={labelClass}>
                                                    Venit lunar (lei)
                                                </FieldLabel>
                                                <input
                                                    id="venituri"
                                                    type="number"
                                                    min={0}
                                                    aria-invalid={showErr("venituri")}
                                                    className="font-dc-mono"
                                                    {...register("venituri")}
                                                />
                                                <FieldDescription className="text-xs text-dc-text-muted">
                                                    Oficial sau confirmat
                                                </FieldDescription>
                                                {errMsg("venituri") && <FieldError className={errorClass}>{errMsg("venituri")}</FieldError>}
                                            </Field>

                                            <Field className="gap-2.5">
                                                <FieldLabel className={labelClass}>Ai alte credite acum?</FieldLabel>
                                                <Controller
                                                    control={control}
                                                    name="are_alte_credite"
                                                    render={({ field }) => <YesNoChoice value={field.value} onChange={field.onChange} />}
                                                />
                                                <FieldDescription className="text-xs text-dc-text-muted">
                                                    Bănci, OCN, leasing - orice credit activ
                                                </FieldDescription>
                                                {errMsg("are_alte_credite") && (
                                                    <FieldError className={errorClass}>{errMsg("are_alte_credite")}</FieldError>
                                                )}
                                            </Field>

                                            <Field data-invalid={showErr("locul_de_munca")} className="gap-2.5">
                                                <FieldLabel htmlFor="locul_de_munca" className={labelClass}>
                                                    Locul de muncă
                                                </FieldLabel>
                                                <input
                                                    id="locul_de_munca"
                                                    aria-invalid={showErr("locul_de_munca")}
                                                    {...register("locul_de_munca")}
                                                />
                                                <FieldDescription className="text-xs text-dc-text-muted">
                                                    Compania și funcția
                                                </FieldDescription>
                                                {errMsg("locul_de_munca") && (
                                                    <FieldError className={errorClass}>{errMsg("locul_de_munca")}</FieldError>
                                                )}
                                            </Field>
                                        </FieldGroup>
                                    </FieldSet>
                                )}

                                {/* Bunuri + submit */}
                                {step === 5 && (
                                    <FieldSet className="gap-2">
                                        <FieldLegend className={cn(legendClass, "mb-6")}>Bunuri imobile</FieldLegend>
                                        <FieldGroup className="gap-7">
                                            <Field className="gap-3">
                                                <FieldLabel className={labelClass}>Ai bun imobil pe numele tău?</FieldLabel>
                                                <Controller
                                                    control={control}
                                                    name="are_bunuri"
                                                    render={({ field }) => <YesNoChoice value={field.value} onChange={field.onChange} />}
                                                />
                                                <FieldDescription className="text-xs text-dc-text-muted">
                                                    Casă, apartament, teren, garaj, cameră în cămin
                                                </FieldDescription>
                                                {errMsg("are_bunuri") && (
                                                    <FieldError className={errorClass}>{errMsg("are_bunuri")}</FieldError>
                                                )}
                                            </Field>
                                        </FieldGroup>

                                        <p className="mt-8 text-xs leading-[1.7] text-dc-text-muted">
                                            Trimițând cererea, confirmi că: (1) este o cerere preventivă, fără caracter obligatoriu; (2)
                                            Ideal Credit SRL nu este obligată să motiveze un eventual refuz; (3) vei oferi fidejusor și vei
                                            veni în oficiu pentru semnare.
                                        </p>
                                    </FieldSet>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-9 flex justify-between gap-4">
                            {step > 0 && (
                                <ButtonSecondary type="button" onClick={prevStep}>
                                    Înapoi
                                </ButtonSecondary>
                            )}
                            {current.kind !== "submit" ? (
                                <ButtonPrimary
                                    type="button"
                                    onClick={nextStep}
                                    disabled={gateBlocked}
                                    className="ml-auto disabled:opacity-40"
                                >
                                    Continuă
                                </ButtonPrimary>
                            ) : (
                                <ButtonPrimary type="submit" disabled={loading || isSubmitting} className="ml-auto disabled:opacity-60">
                                    {loading ? "Se trimite..." : "Trimite cererea"}
                                </ButtonPrimary>
                            )}
                        </div>
                    </form>
                )}
            </Container>

            {showSuccess && (
                <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                    <DialogContent>
                        <DialogHeader>
                            <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                <span className="block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                                Trimisă
                            </p>
                            <DialogTitle className="mt-1">Cerere trimisă cu succes!</DialogTitle>
                        </DialogHeader>
                        <p className="text-[15px] leading-[1.55] text-dc-text-muted">
                            Revenim cu un apel în cel mult{" "}
                            <Figure size="ordinal" proof>
                                3 ore
                            </Figure>{" "}
                            (Luni - Vineri).
                        </p>
                    </DialogContent>
                </Dialog>
            )}

            {showError && (
                <Dialog open={showError} onOpenChange={setShowError}>
                    <DialogContent>
                        <DialogHeader>
                            <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                <span className="block h-[9px] w-[9px] shrink-0 bg-dc-accent" aria-hidden />
                                Eroare
                            </p>
                            <DialogTitle className="mt-1">Nu am putut trimite cererea</DialogTitle>
                        </DialogHeader>
                        <p className="text-[15px] leading-[1.55] text-dc-text-muted">
                            Vă rugăm să verificați datele introduse și să încercați din nou.
                        </p>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
