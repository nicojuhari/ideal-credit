"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, TriangleAlert as Warning } from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
    terms: false as unknown as true,
    have_garant: false as unknown as true,
    in_oficiu: false as unknown as true,
};

const inputCls =
    "w-full rounded-md border bg-black-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors";
const errorCls = "border-red-500/60 focus:ring-red-500";
const okCls = "border-white/10";

function FieldError({ message }: { message?: string }) {
    return (
        <AnimatePresence>
            {message && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-red-500 text-xs mt-1"
                >
                    {message}
                </motion.p>
            )}
        </AnimatePresence>
    );
}

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

    // Debounced live validation as user types: re-validate touched fields ~400ms after the
    // last change. Avoids flashing errors on the very first keystroke while still feeling live.
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

    const cls = (name: keyof CerereFormValues) => `${inputCls} ${errors[name] ? errorCls : okCls}`;

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
                            <div>
                                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">1. Date despre credit</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm mb-1">
                                            Suma (lei) <span className="text-xs text-gray-400">Minim 10000 lei</span>
                                        </label>
                                        <input
                                            type="number"
                                            step="100"
                                            min={10000}
                                            max={300000}
                                            className={cls("suma")}
                                            {...register("suma")}
                                        />
                                        <FieldError message={errors.suma?.message} />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1">
                                            Termen (luni) <span className="text-xs text-gray-400">Minim 6 luni, maxim 60 luni</span>
                                        </label>
                                        <input type="number" step="1" min={6} max={60} className={cls("termen")} {...register("termen")} />
                                        <FieldError message={errors.termen?.message} />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1">Scopul creditului</label>
                                        <select className={cls("scopul_creditului")} {...register("scopul_creditului")}>
                                            <option value="">Selectează scopul creditului</option>
                                            {[
                                                "Pentru nevoi personale",
                                                "Pentru afaceri",
                                                "Refinanțare",
                                                "Procurare bun imobil",
                                                "Altele",
                                            ].map((o) => (
                                                <option key={o} value={o}>
                                                    {o}
                                                </option>
                                            ))}
                                        </select>
                                        <FieldError message={errors.scopul_creditului?.message} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {step === 1 && (
                            <div>
                                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">2. Date personale</h2>
                                <div className="space-y-6">
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
                                                label: "Telefon mobil",
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
                                        <div key={key}>
                                            <label className="block text-sm mb-1">
                                                {label} {hint && <span className="text-xs text-gray-400">({hint})</span>}
                                            </label>
                                            <input
                                                type={type}
                                                placeholder={placeholder}
                                                maxLength={maxLength}
                                                className={cls(key)}
                                                {...register(key)}
                                            />
                                            <FieldError message={errors[key]?.message} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 3 */}
                        {step === 2 && (
                            <div>
                                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">3. Date financiare</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block mb-1">Venit lunar, oficial sau confirmat (lei)</label>
                                        <p className="text-xs text-gray-400 mb-1">
                                            Salariu, transferuri regulate, salariu de peste hotare, ...
                                        </p>
                                        <input type="number" min={0} className={cls("venituri")} {...register("venituri")} />
                                        <FieldError message={errors.venituri?.message} />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Achitări lunare pentru alte credite</label>
                                        <p className="text-xs text-gray-400 mb-1">Dacă nu ai, pune 0</p>
                                        <input type="number" min={0} className={cls("datorii")} {...register("datorii")} />
                                        <FieldError message={errors.datorii?.message} />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Locul de muncă</label>
                                        <p className="text-xs text-gray-400 mb-1">Compania și funcția</p>
                                        <input type="text" className={cls("locul_de_munca")} {...register("locul_de_munca")} />
                                        <FieldError message={errors.locul_de_munca?.message} />
                                    </div>
                                    <Controller
                                        control={control}
                                        name="bunuri"
                                        render={({ field }) => (
                                            <div>
                                                <label className="block mb-1">Aveți careva bunuri imobile în proprietate?</label>
                                                <div className="mt-2 space-y-2">
                                                    {BUNURI_OPTIONS.map((opt) => {
                                                        const checked = field.value.includes(opt);
                                                        return (
                                                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={checked}
                                                                    onChange={(e) =>
                                                                        field.onChange(
                                                                            e.target.checked
                                                                                ? [...field.value, opt]
                                                                                : field.value.filter((b) => b !== opt),
                                                                        )
                                                                    }
                                                                    onBlur={field.onBlur}
                                                                    className="accent-green-500 w-4! h-4! shrink-0"
                                                                />
                                                                <span className="text-sm text-gray-400">{opt}</span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                                <FieldError message={errors.bunuri?.message} />
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 4 */}
                        {step === 3 && (
                            <div>
                                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">4. Declarații</h2>
                                <div className="space-y-6">
                                    <Controller
                                        control={control}
                                        name="have_garant"
                                        render={({ field }) => (
                                            <div>
                                                <label className="block text-sm mb-3">
                                                    Sunt gata să ofer unul sau mai mulți fidejusori (garant/поручитель).
                                                </label>
                                                <div className="flex gap-4">
                                                    {[
                                                        { label: "Da", value: true },
                                                        { label: "Nu", value: false },
                                                    ].map(({ label, value }) => (
                                                        <label
                                                            key={label}
                                                            className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md border transition-colors ${
                                                                field.value === value
                                                                    ? "border-green-500 bg-green-500/10"
                                                                    : "border-white/10"
                                                            }`}
                                                        >
                                                            <input
                                                                type="radio"
                                                                checked={field.value === value}
                                                                onChange={() => field.onChange(value as unknown as true)}
                                                                className="accent-green-500 w-4! h-4! shrink-0"
                                                            />
                                                            {label}
                                                        </label>
                                                    ))}
                                                </div>
                                                <FieldError message={errors.have_garant?.message} />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        control={control}
                                        name="in_oficiu"
                                        render={({ field }) => (
                                            <div>
                                                <label className="block text-sm mb-3">
                                                    În caz de aprobare, voi veni (împreună cu fidejusorii) în oficiul companiei, pentru a
                                                    semna contractul de credit.
                                                </label>
                                                <div className="flex gap-4">
                                                    {[
                                                        { label: "Da", value: true },
                                                        { label: "Nu", value: false },
                                                    ].map(({ label, value }) => (
                                                        <label
                                                            key={label}
                                                            className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md border transition-colors ${
                                                                field.value === value
                                                                    ? "border-green-500 bg-green-500/10"
                                                                    : "border-white/10"
                                                            }`}
                                                        >
                                                            <input
                                                                type="radio"
                                                                checked={field.value === value}
                                                                onChange={() => field.onChange(value as unknown as true)}
                                                                className="accent-green-500 w-4! h-4! shrink-0"
                                                            />
                                                            {label}
                                                        </label>
                                                    ))}
                                                </div>
                                                <FieldError message={errors.in_oficiu?.message} />
                                            </div>
                                        )}
                                    />
                                    <div>
                                        <ul className="list-disc list-inside space-y-1 text-red-300 text-sm">
                                            <li>
                                                Înțeleg că aceasta este o cerere de credit online preventivă, fără caracter obligatoriu.
                                            </li>
                                            <li>
                                                În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să
                                                argumenteze motivul acelui refuz.
                                            </li>
                                        </ul>
                                        <label className="flex items-center gap-2 mt-4 cursor-pointer">
                                            <input type="checkbox" className="accent-green-500 w-4! h-4! shrink-0" {...register("terms")} />
                                            <span className="text-sm">Accept declarațiile de mai sus.</span>
                                        </label>
                                        <FieldError message={errors.terms?.message} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Nav buttons */}
                <div className="flex justify-between mt-8">
                    {step > 0 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="border border-white/20 hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors"
                        >
                            Înapoi
                        </button>
                    )}
                    {step < STEPS.length - 1 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="ml-auto bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            Continuă
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={loading || isSubmitting}
                            className="ml-auto bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            {loading ? "Se trimite..." : "Trimite cererea"}
                        </button>
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
