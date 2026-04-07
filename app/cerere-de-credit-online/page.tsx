"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, TriangleAlert as Warning } from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cerereSchema, type CerereFormValues, STEPS, BUNURI_OPTIONS } from "./schema";

const defaultValues: CerereFormValues = {
    suma: "",
    termen: "",
    scopul_creditului: "",
    nume: "",
    prenume: "",
    adresa_domiciliu: "",
    telefon: "",
    venituri: "",
    datorii: "",
    locul_de_munca: "",
    bunuri: [],
    terms: false,
    have_garant: false,
    in_oficiu: false,
};

const SCOP_OPTIONS = ["Pentru nevoi personale", "Pentru afaceri", "Refinanțare", "Procurare bun imobil", "Altele"];

export default function CerereOnlinePage() {
    const { trackEvent } = useFacebookPixel();
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

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
        formState: { errors, touchedFields, isSubmitting },
    } = form;

    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        const sub = watch((_, { name }) => {
            if (!name) return;
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
                const touched = Object.keys(touchedFields) as FieldPath<CerereFormValues>[];
                const fieldsToCheck = touched.includes(name as FieldPath<CerereFormValues>)
                    ? touched
                    : [name as FieldPath<CerereFormValues>];
                trigger(fieldsToCheck);
            }, 400);
        });
        return () => {
            sub.unsubscribe();
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [watch, trigger, touchedFields]);

    useEffect(() => {
        trackEvent("ViewContent");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const progress = ((step + 1) / STEPS.length) * 100;

    const nextStep = async () => {
        const valid = await trigger(STEPS[step].fields, { shouldFocus: true });
        if (valid) setStep((s) => s + 1);
    };

    const prevStep = () => setStep((s) => Math.max(0, s - 1));

    const onSubmit = async (values: CerereFormValues) => {
        setLoading(true);
        setShowError(false);
        try {
            const res = await fetch("/api/cerere-online", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    subject: `${values.suma} MDL, ${values.termen} luni, ${values.nume}`,
                }),
            });
            const data = await res.json();
            if (data.success) {
                trackEvent("Lead");
                setShowSuccess(true);
                reset(defaultValues);
                setStep(0);
            } else {
                setShowError(true);
            }
        } catch {
            setShowError(true);
        } finally {
            setLoading(false);
        }
    };

    const invalid = (name: keyof CerereFormValues) => (errors[name] ? true : undefined);

    return (
        <div className="container relative my-4 md:my-6">
            <h1 className="card-title text-center pt-4 mb-4">Cerere de credit online</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto card" noValidate>
                {/* Progress */}
                <div className="p-4 border rounded bg-black-300/40 border-white/5 mb-6">
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400">0%</p>
                        <p className="text-xs text-gray-400 text-right">100%</p>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                            className="bg-brand-500 h-1.5 rounded-full"
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </div>
                    <p className="mt-1.5 text-xs text-center text-brand-500">
                        Pasul {step + 1} din {STEPS.length} - {STEPS[step].label}
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.25 }}
                    >
                        {/* Step 1 */}
                        {step === 0 && (
                            <FieldSet>
                                <FieldLegend className="mb-2 text-green-400 text-center font-bold text-xl">
                                    1. Date despre credit
                                </FieldLegend>
                                <FieldGroup>
                                    <Field data-invalid={invalid("suma") || undefined}>
                                        <FieldLabel htmlFor="suma">Suma (lei)</FieldLabel>
                                        <Input
                                            id="suma"
                                            type="number"
                                            step="100"
                                            min={10000}
                                            max={300000}
                                            aria-invalid={invalid("suma")}
                                            {...register("suma")}
                                        />
                                        <FieldDescription>Minim 10000 lei</FieldDescription>
                                        {errors.suma?.message && <FieldError>{errors.suma.message}</FieldError>}
                                    </Field>
                                    <Field data-invalid={invalid("termen") || undefined}>
                                        <FieldLabel htmlFor="termen">Termen (luni)</FieldLabel>
                                        <Input
                                            id="termen"
                                            type="number"
                                            step="1"
                                            min={6}
                                            max={60}
                                            aria-invalid={invalid("termen")}
                                            {...register("termen")}
                                        />
                                        <FieldDescription>Minim 6 luni, maxim 60 luni</FieldDescription>
                                        {errors.termen?.message && <FieldError>{errors.termen.message}</FieldError>}
                                    </Field>
                                    <Field data-invalid={invalid("scopul_creditului") || undefined}>
                                        <FieldLabel>Scopul creditului</FieldLabel>
                                        <Controller
                                            control={control}
                                            name="scopul_creditului"
                                            render={({ field }) => (
                                                <Select value={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger
                                                        size="default"
                                                        className="w-full h-10!"
                                                        aria-invalid={invalid("scopul_creditului")}
                                                    >
                                                        <SelectValue
                                                            className="text-gray-500 text-sm"
                                                            placeholder="Selectează scopul creditului"
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {SCOP_OPTIONS.map((o) => (
                                                            <SelectItem key={o} value={o}>
                                                                {o}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.scopul_creditului?.message && <FieldError>{errors.scopul_creditului.message}</FieldError>}
                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                        )}

                        {/* Step 2 */}
                        {step === 1 && (
                            <FieldSet>
                                <FieldLegend className="mb-2 text-green-400 text-center font-bold text-xl">2. Date personale</FieldLegend>
                                <FieldGroup>
                                    {(
                                        [
                                            { key: "nume", label: "Nume", type: "text" },
                                            { key: "prenume", label: "Prenume", type: "text" },
                                            {
                                                key: "adresa_domiciliu",
                                                label: "Adresa de reședință",
                                                type: "text",
                                                placeholder: "Oraș/Sat, strada, număr/apartament.",
                                            },
                                            {
                                                key: "telefon",
                                                label: "Telefon mobil din Moldova",
                                                type: "tel",
                                                hint: "doar din 9 cifre",
                                                maxLength: 9,
                                            },
                                        ] as Array<{
                                            key: "nume" | "prenume" | "adresa_domiciliu" | "telefon";
                                            label: string;
                                            type: string;
                                            placeholder?: string;
                                            hint?: string;
                                            maxLength?: number;
                                        }>
                                    ).map(({ key, label, type, placeholder, hint, maxLength }) => (
                                        <Field key={key} data-invalid={invalid(key) || undefined}>
                                            <FieldLabel htmlFor={key}>{label}</FieldLabel>
                                            <Input
                                                id={key}
                                                type={type}
                                                placeholder={placeholder}
                                                maxLength={maxLength}
                                                aria-invalid={invalid(key)}
                                                {...register(key)}
                                            />
                                            {hint && <FieldDescription>{hint}</FieldDescription>}
                                            {errors[key]?.message && <FieldError>{errors[key]?.message}</FieldError>}
                                        </Field>
                                    ))}
                                </FieldGroup>
                            </FieldSet>
                        )}

                        {/* Step 3 */}
                        {step === 2 && (
                            <FieldSet>
                                <FieldLegend className="mb-2 text-green-400 text-center font-bold text-xl">3. Date financiare</FieldLegend>
                                <FieldGroup>
                                    <Field data-invalid={invalid("venituri") || undefined}>
                                        <FieldLabel htmlFor="venituri">Venit lunar, oficial sau confirmat (lei)</FieldLabel>
                                        <Input
                                            id="venituri"
                                            type="number"
                                            min={0}
                                            aria-invalid={invalid("venituri")}
                                            {...register("venituri")}
                                        />
                                        <FieldDescription>Salariu, transferuri regulate, salariu de peste hotare, ...</FieldDescription>
                                        {errors.venituri?.message && <FieldError>{errors.venituri.message}</FieldError>}
                                    </Field>
                                    <Field data-invalid={invalid("datorii") || undefined}>
                                        <FieldLabel htmlFor="datorii">Achitări lunare pentru alte credite</FieldLabel>
                                        <Input
                                            id="datorii"
                                            type="number"
                                            min={0}
                                            aria-invalid={invalid("datorii")}
                                            {...register("datorii")}
                                        />
                                        <FieldDescription>Dacă nu ai, pune 0</FieldDescription>
                                        {errors.datorii?.message && <FieldError>{errors.datorii.message}</FieldError>}
                                    </Field>
                                    <Field data-invalid={invalid("locul_de_munca") || undefined}>
                                        <FieldLabel htmlFor="locul_de_munca">Locul de muncă</FieldLabel>
                                        <Input
                                            id="locul_de_munca"
                                            type="text"
                                            aria-invalid={invalid("locul_de_munca")}
                                            {...register("locul_de_munca")}
                                        />
                                        <FieldDescription>Compania și funcția</FieldDescription>
                                        {errors.locul_de_munca?.message && <FieldError>{errors.locul_de_munca.message}</FieldError>}
                                    </Field>
                                    <Controller
                                        control={control}
                                        name="bunuri"
                                        render={({ field }) => (
                                            <FieldSet data-invalid={invalid("bunuri") || undefined}>
                                                <FieldLegend variant="label">Aveți careva bunuri imobile în proprietate?</FieldLegend>
                                                <FieldGroup>
                                                    {BUNURI_OPTIONS.map((opt) => {
                                                        const id = `bun-${opt}`;
                                                        const checked = field.value.includes(opt);
                                                        return (
                                                            <Field key={opt} orientation="horizontal">
                                                                <Checkbox
                                                                    id={id}
                                                                    className="ring-1 ring-white/40"
                                                                    checked={checked}
                                                                    onCheckedChange={(c) =>
                                                                        field.onChange(
                                                                            c
                                                                                ? [...field.value, opt]
                                                                                : field.value.filter((b) => b !== opt),
                                                                        )
                                                                    }
                                                                />
                                                                <FieldLabel htmlFor={id} className="font-normal">
                                                                    {opt}
                                                                </FieldLabel>
                                                            </Field>
                                                        );
                                                    })}
                                                </FieldGroup>
                                                {errors.bunuri?.message && <FieldError>{errors.bunuri.message}</FieldError>}
                                            </FieldSet>
                                        )}
                                    />
                                </FieldGroup>
                            </FieldSet>
                        )}

                        {/* Step 4 */}
                        {step === 3 && (
                            <FieldSet>
                                <FieldLegend className="mb-2 text-green-400 text-center font-bold text-xl">4. Declarații</FieldLegend>
                                <FieldGroup>
                                    {(
                                        [
                                            {
                                                name: "have_garant",
                                                label: "Sunt gata să ofer unul sau mai mulți fidejusori (garant/поручитель).",
                                            },
                                            {
                                                name: "in_oficiu",
                                                label: "În caz de aprobare, voi veni (împreună cu fidejusorii) în oficiul companiei, pentru a semna contractul de credit.",
                                            },
                                        ] as const
                                    ).map(({ name, label }) => (
                                        <Controller
                                            key={name}
                                            control={control}
                                            name={name}
                                            render={({ field }) => (
                                                <Field data-invalid={invalid(name) || undefined}>
                                                    <FieldLabel>{label}</FieldLabel>
                                                    <div className="flex gap-3">
                                                        {[{ label: "Da", value: true }].map((opt) => {
                                                            const selected = field.value === opt.value;
                                                            return (
                                                                <Button
                                                                    key={opt.label}
                                                                    type="button"
                                                                    variant="outline"
                                                                    size="lg"
                                                                    onClick={() => field.onChange(opt.value)}
                                                                    className={
                                                                        selected
                                                                            ? "border-green-500 bg-green-500/10 text-white hover:bg-green-500/15"
                                                                            : ""
                                                                    }
                                                                >
                                                                    {opt.label}
                                                                </Button>
                                                            );
                                                        })}
                                                    </div>
                                                    {errors[name]?.message && <FieldError>{errors[name]?.message}</FieldError>}
                                                </Field>
                                            )}
                                        />
                                    ))}
                                    <ul className="list-disc list-inside space-y-1 text-red-300 text-sm">
                                        <li>Înțeleg că aceasta este o cerere de credit online preventivă, fără caracter obligatoriu.</li>
                                        <li>
                                            În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să argumenteze
                                            motivul acelui refuz.
                                        </li>
                                    </ul>
                                    <Controller
                                        control={control}
                                        name="terms"
                                        render={({ field }) => (
                                            <Field orientation="horizontal" data-invalid={invalid("terms") || undefined}>
                                                <Checkbox
                                                    className="ring-1 ring-white/40"
                                                    id="terms"
                                                    checked={!!field.value}
                                                    onCheckedChange={(c) => field.onChange(!!c)}
                                                />
                                                <FieldContent>
                                                    <FieldLabel htmlFor="terms">Accept declarațiile de mai sus.</FieldLabel>
                                                    {errors.terms?.message && <FieldError>{errors.terms.message}</FieldError>}
                                                </FieldContent>
                                            </Field>
                                        )}
                                    />
                                </FieldGroup>
                            </FieldSet>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="flex justify-between mt-8">
                    {step > 0 && (
                        <Button type="button" variant="outline" size="lg" onClick={prevStep}>
                            Înapoi
                        </Button>
                    )}
                    {step < STEPS.length - 1 ? (
                        <Button type="button" size="lg" onClick={nextStep} className="ml-auto bg-green-600 text-white hover:bg-green-500">
                            Continuă
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            size="lg"
                            disabled={loading || isSubmitting}
                            className="ml-auto bg-green-600 text-white hover:bg-green-500"
                        >
                            {loading ? "Se trimite..." : "Trimite cererea"}
                        </Button>
                    )}
                </div>
            </form>

            {/* Success dialog */}
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Cerere trimisă cu succes!</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-center py-4">
                        <Check className="text-green-500 h-20 w-20 mx-auto" />
                        <p className="text-lg">Revenim cu un apel în cel mult 3 ore (Luni - Vineri).</p>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Error dialog */}
            <Dialog open={showError} onOpenChange={setShowError}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Eroare</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-center py-4">
                        <Warning className="text-red-500 h-20 w-20 mx-auto" />
                        <div>Vă rugăm să verificați datele introduse și să încercați din nou.</div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
