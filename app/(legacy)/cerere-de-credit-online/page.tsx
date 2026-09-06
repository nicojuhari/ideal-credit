"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, TriangleAlert as Warning, CircleX } from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import {
  cerereSchema,
  type CerereFormValues,
  STEPS,
  TERMEN_OPTIONS,
  SCOP_OPTIONS,
  MOLDOVA_MOBILE_REGEX,
} from "./schema";
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

/** Shared surface so inputs + choice buttons match */
const controlSurface =
  "bg-input/30 border-input text-white hover:bg-input/40";

function YesNoChoice({
  value,
  onChange,
  dangerNo = false,
}: {
  value: boolean | undefined;
  onChange: (v: boolean) => void;
  /** When true, selected "Nu" is red (gate screens) */
  dangerNo?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: "Da", v: true },
        { label: "Nu", v: false },
      ].map((opt) => {
        const selected = value === opt.v;
        const isDanger = dangerNo && selected && !opt.v;
        const isOk = selected && opt.v;
        return (
          <Button
            key={opt.label}
            type="button"
            variant="outline"
            size="lg"
            onClick={() => onChange(opt.v)}
            className={cn(
              "h-12 text-base font-medium",
              controlSurface,
              isOk && "border-green-500 bg-green-500/15 text-white hover:bg-green-500/20",
              isDanger && "border-red-500 bg-red-500/15 text-red-400 hover:bg-red-500/20",
              selected && !isDanger && !isOk && "border-brand-500 bg-brand-500/15 hover:bg-brand-500/20",
            )}
          >
            {opt.label}
          </Button>
        );
      })}
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
    <div className={cn("grid gap-2.5", columns === 3 ? "grid-cols-3" : "grid-cols-1")}>
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <Button
            key={opt}
            type="button"
            variant="outline"
            onClick={() => onChange(opt)}
            className={cn(
              "h-auto min-h-11 whitespace-normal px-3 py-2.5 text-sm font-medium",
              columns === 3 ? "justify-center" : "justify-start text-left",
              controlSurface,
              selected && "border-brand-500 bg-brand-500/20 text-white hover:bg-brand-500/25",
            )}
          >
            {opt}
          </Button>
        );
      })}
    </div>
  );
}

const labelClass = "text-xs font-medium tracking-wide text-gray-400";
const titleClass = "text-green-400 text-center font-semibold text-lg";

function PhoneDigits({
  value,
  onChange,
  showError,
}: {
  value: string;
  onChange: (v: string) => void;
  showError?: boolean;
}) {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  const isComplete = MOLDOVA_MOBILE_REGEX.test(digits);

  return (
    <div className="space-y-2.5">
      <Input
        id="telefon"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        maxLength={9}
        placeholder="06xxxxxxx"
        aria-invalid={showError || undefined}
        value={digits}
        onChange={(e) => onChange(e.target.value.replace(/\D/g, "").slice(0, 9))}
        className={cn("h-11 font-mono tracking-wider", controlSurface)}
      />
      <div className="flex gap-1.5 justify-between px-0.5" aria-hidden>
        {Array.from({ length: 9 }).map((_, i) => {
          const filled = i < digits.length;
          return (
            <span
              key={i}
              className={cn(
                "h-0.5 flex-1 rounded-full transition-colors",
                filled && isComplete && "bg-green-500",
                filled && !isComplete && "bg-brand-500",
                !filled && (showError ? "bg-red-400/60" : "bg-white/30"),
              )}
            />
          );
        })}
      </div>
      <FieldDescription className="text-xs text-gray-500">
        9 cifre — începe cu <strong className="text-gray-400">06</strong> sau{" "}
        <strong className="text-gray-400">07</strong>
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

  // Prefill from the v4 calculator CTAs: /cerere-de-credit-online?amount=100000&term=12
  // Amount is clamped to the form's own limits; term snaps to the nearest offered option.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amount = Number(params.get("amount"));
    const term = Number(params.get("term"));
    if (Number.isFinite(amount) && amount > 0) {
      const clamped = Math.min(300000, Math.max(10000, Math.round(amount)));
      setValue("suma", String(clamped));
    }
    if (Number.isFinite(term) && term > 0) {
      const nearest = TERMEN_OPTIONS.reduce((best, opt) =>
        Math.abs(Number(opt) - term) < Math.abs(Number(best) - term) ? opt : best,
      );
      setValue("termen", nearest);
    }
  }, [setValue]);

  // Clear field errors when entering a step (don't carry over)
  useEffect(() => {
    clearErrors();
  }, [step, clearErrors]);

  const progress = ((step + 1) / STEPS.length) * 100;
  const current = STEPS[step];
  const gateAnswer =
    step === 0 ? watch("have_garant") : step === 1 ? watch("in_oficiu") : undefined;
  const gateBlocked = (step === 0 || step === 1) && gateAnswer === false;

  const markAttempted = () =>
    setAttemptedSteps((prev) => ({ ...prev, [step]: true }));

  const showErr = (name: keyof CerereFormValues) =>
    stepAttempted && errors[name] ? true : undefined;

  const errMsg = (name: keyof CerereFormValues) =>
    stepAttempted ? errors[name]?.message : undefined;

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
        bunuri: values.are_bunuri
          ? ["Casă / apartament / teren / garaj"]
          : ["Nu am nimic"],
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

  if (disqualify) {
    return (
      <div className="container relative my-4 md:my-6">
        <h1 className="card-title text-center pt-4 mb-4">Cerere de credit online</h1>
        <div className="max-w-md mx-auto card text-center space-y-4 py-8">
          <CircleX className="mx-auto h-14 w-14 text-red-400" />
          <h2 className="text-lg font-semibold text-white">Nu putem continua</h2>
          {disqualify === "garant" ? (
            <p className="text-sm text-gray-300 leading-relaxed">
              Fără cel puțin un <strong className="text-white">fidejusor (garant)</strong>{" "}
              nu putem procesa cererea online.
            </p>
          ) : (
            <p className="text-sm text-gray-300 leading-relaxed">
              Contractul se semnează <strong className="text-white">doar în oficiu</strong>.
              Dacă nu poți veni, nu putem continua online.
            </p>
          )}
          <div className="flex flex-col gap-3 pt-1">
            <Button
              type="button"
              size="lg"
              variant="outline"
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
            </Button>
            <a href="tel:+37361252777" className="text-sm text-brand-500 hover:underline">
              Sau sună-ne: 0612 52 777
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container relative my-4 md:my-6">
      <h1 className="card-title text-center pt-4 mb-3">Cerere de credit online</h1>
      <form
        onSubmit={handleSubmit(onSubmit, () => markAttempted())}
        onKeyDown={(e) => {
          // Avoid accidental full-form submit via Enter on earlier steps
          if (e.key === "Enter" && current.kind !== "submit") {
            e.preventDefault();
            void nextStep();
          }
        }}
        className="max-w-md mx-auto card"
        noValidate
      >
        <div className="mb-6">
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="bg-brand-500 h-1.5 rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
          <p className="mt-2 text-xs text-center text-brand-500">
            Pasul {step + 1} din {STEPS.length} — {current.label}
          </p>
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
              <div className="flex min-h-[280px] flex-col justify-center py-8">
                <FieldSet className="gap-0">
                  <FieldLegend className="mb-5 text-center font-semibold text-xl text-white leading-snug px-1">
                    Poți oferi un fidejusor (garant / поручитель)?{" "}
                    <div className="text-red-400 mt-2 font-normal text-sm">Este o condiție obligatorie.</div>
                  </FieldLegend>
                  <Controller
                    control={control}
                    name="have_garant"
                    render={({ field }) => (
                      <Field className="gap-3 data-invalid:text-inherit! mt-6">
                        <YesNoChoice
                          value={field.value}
                          onChange={field.onChange}
                          dangerNo
                        />
                        {errMsg("have_garant") && (
                          <FieldError>{errMsg("have_garant")}</FieldError>
                        )}
                      </Field>
                    )}
                  />
                </FieldSet>
              </div>
            )}

            {/* Gate: oficiu */}
            {step === 1 && (
              <div className="flex min-h-[280px] flex-col justify-center py-8">
                <FieldSet className="gap-0">
                  <FieldLegend className="mb-5 text-center font-semibold text-xl text-white leading-snug px-1">
                    Poți veni în oficiu pentru semnarea contractului?{" "}
                    <div className="text-red-400 mt-2 font-normal text-sm">Nu semnăm online.</div>
                  </FieldLegend>
                  <Controller
                    control={control}
                    name="in_oficiu"
                    render={({ field }) => (
                      <Field className="gap-3 data-invalid:text-inherit! mt-6">
                        <YesNoChoice
                          value={field.value}
                          onChange={field.onChange}
                          dangerNo
                        />
                        {errMsg("in_oficiu") && (
                          <FieldError>{errMsg("in_oficiu")}</FieldError>
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
                <FieldLegend className={cn(titleClass, "mb-5")}>
                  Date despre credit
                </FieldLegend>
                <FieldGroup className="gap-7">
                  <Field data-invalid={showErr("suma")} className="gap-2">
                    <FieldLabel htmlFor="suma" className={labelClass}>
                      Suma (lei)
                    </FieldLabel>
                    <Input
                      id="suma"
                      type="number"
                      step="100"
                      min={10000}
                      max={300000}
                      aria-invalid={showErr("suma")}
                      className={cn("h-11 text-base", controlSurface)}
                      {...register("suma")}
                    />
                    <FieldDescription className="text-xs text-gray-500">
                      10.000 – 300.000 lei
                    </FieldDescription>
                    {errMsg("suma") && <FieldError>{errMsg("suma")}</FieldError>}
                  </Field>

                  <Field className="gap-2.5 data-invalid:text-inherit!">
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
                    {errMsg("termen") && <FieldError>{errMsg("termen")}</FieldError>}
                  </Field>

                  <Field className="gap-2.5 data-invalid:text-inherit!">
                    <FieldLabel className={labelClass}>Scopul creditului</FieldLabel>
                    <Controller
                      control={control}
                      name="scopul_creditului"
                      render={({ field }) => (
                        <OptionGrid
                          options={SCOP_OPTIONS}
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errMsg("scopul_creditului") && (
                      <FieldError>{errMsg("scopul_creditului")}</FieldError>
                    )}
                  </Field>
                </FieldGroup>
              </FieldSet>
            )}

            {/* Personal */}
            {step === 3 && (
              <FieldSet className="gap-2">
                <FieldLegend className={cn(titleClass, "mb-5")}>
                  Date personale
                </FieldLegend>
                <FieldGroup className="gap-7">
                  <Field data-invalid={showErr("nume")} className="gap-2">
                    <FieldLabel htmlFor="nume" className={labelClass}>
                      Nume
                    </FieldLabel>
                    <Input
                      id="nume"
                      aria-invalid={showErr("nume")}
                      className={cn("h-11", controlSurface)}
                      {...register("nume")}
                    />
                    {errMsg("nume") && <FieldError>{errMsg("nume")}</FieldError>}
                  </Field>
                  <Field data-invalid={showErr("prenume")} className="gap-2">
                    <FieldLabel htmlFor="prenume" className={labelClass}>
                      Prenume
                    </FieldLabel>
                    <Input
                      id="prenume"
                      aria-invalid={showErr("prenume")}
                      className={cn("h-11", controlSurface)}
                      {...register("prenume")}
                    />
                    {errMsg("prenume") && <FieldError>{errMsg("prenume")}</FieldError>}
                  </Field>
                  <Field data-invalid={showErr("adresa_domiciliu")} className="gap-2">
                    <FieldLabel htmlFor="adresa_domiciliu" className={labelClass}>
                      Adresa de reședință
                    </FieldLabel>
                    <Input
                      id="adresa_domiciliu"
                      placeholder="Oraș/Sat, strada, nr."
                      aria-invalid={showErr("adresa_domiciliu")}
                      className={cn("h-11", controlSurface)}
                      {...register("adresa_domiciliu")}
                    />
                    {errMsg("adresa_domiciliu") && (
                      <FieldError>{errMsg("adresa_domiciliu")}</FieldError>
                    )}
                  </Field>
                  <Field className="gap-2 data-invalid:text-inherit!">
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
                    {errMsg("telefon") && <FieldError>{errMsg("telefon")}</FieldError>}
                  </Field>
                </FieldGroup>
              </FieldSet>
            )}

            {/* Venit & credite */}
            {step === 4 && (
              <FieldSet className="gap-2">
                <FieldLegend className={cn(titleClass, "mb-5")}>
                  Venit & credite
                </FieldLegend>
                <FieldGroup className="gap-7">
                  <Field data-invalid={showErr("venituri")} className="gap-2">
                    <FieldLabel htmlFor="venituri" className={labelClass}>
                      Venit lunar (lei)
                    </FieldLabel>
                    <Input
                      id="venituri"
                      type="number"
                      min={0}
                      aria-invalid={showErr("venituri")}
                      className={cn("h-11", controlSurface)}
                      {...register("venituri")}
                    />
                    <FieldDescription className="text-xs text-gray-500">
                      Oficial sau confirmat
                    </FieldDescription>
                    {errMsg("venituri") && <FieldError>{errMsg("venituri")}</FieldError>}
                  </Field>

                  <Field className="gap-2.5 data-invalid:text-inherit!">
                    <FieldLabel className={labelClass}>Ai alte credite acum?</FieldLabel>
                    <Controller
                      control={control}
                      name="are_alte_credite"
                      render={({ field }) => (
                        <YesNoChoice value={field.value} onChange={field.onChange} />
                      )}
                    />
                    <FieldDescription className="text-xs text-gray-500">
                      Bănci, OCN, leasing — orice credit activ
                    </FieldDescription>
                    {errMsg("are_alte_credite") && (
                      <FieldError>{errMsg("are_alte_credite")}</FieldError>
                    )}
                  </Field>

                  <Field data-invalid={showErr("locul_de_munca")} className="gap-2">
                    <FieldLabel htmlFor="locul_de_munca" className={labelClass}>
                      Locul de muncă
                    </FieldLabel>
                    <Input
                      id="locul_de_munca"
                      aria-invalid={showErr("locul_de_munca")}
                      className={cn("h-11", controlSurface)}
                      {...register("locul_de_munca")}
                    />
                    <FieldDescription className="text-xs text-gray-500">
                      Compania și funcția
                    </FieldDescription>
                    {errMsg("locul_de_munca") && (
                      <FieldError>{errMsg("locul_de_munca")}</FieldError>
                    )}
                  </Field>
                </FieldGroup>
              </FieldSet>
            )}

            {/* Bunuri + submit */}
            {step === 5 && (
              <FieldSet className="gap-2">
                <FieldLegend className={cn(titleClass, "mb-6")}>
                  Bunuri imobile
                </FieldLegend>
                <FieldGroup className="gap-7">
                  <Field className="gap-3 data-invalid:text-inherit!">
                    <FieldLabel className={labelClass}>
                      Ai bun imobil pe numele tău?
                    </FieldLabel>
                    <Controller
                      control={control}
                      name="are_bunuri"
                      render={({ field }) => (
                        <YesNoChoice value={field.value} onChange={field.onChange} />
                      )}
                    />
                    <FieldDescription className="text-xs text-gray-500">
                      Casă, apartament, teren, garaj, cameră în cămin
                    </FieldDescription>
                    {errMsg("are_bunuri") && (
                      <FieldError>{errMsg("are_bunuri")}</FieldError>
                    )}
                  </Field>
                </FieldGroup>

                <p className="mt-8 text-[11px] leading-relaxed text-gray-500">
                  Trimițând cererea, confirmi că: (1) este o cerere preventivă, fără
                  caracter obligatoriu; (2) Ideal Credit SRL nu este obligată să
                  motiveze un eventual refuz; (3) vei oferi fidejusor și vei veni
                  în oficiu pentru semnare.
                </p>
              </FieldSet>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8 gap-3">
          {step > 0 && (
            <Button type="button" variant="outline" size="lg" onClick={prevStep}>
              Înapoi
            </Button>
          )}
          {current.kind !== "submit" ? (
            <Button
              type="button"
              size="lg"
              onClick={nextStep}
              disabled={gateBlocked}
              className="ml-auto bg-green-600 text-white hover:bg-green-500 disabled:opacity-40"
            >
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

      {showSuccess && (
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cerere trimisă cu succes!</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-center py-4">
              <Check className="text-green-500 h-20 w-20 mx-auto" />
              <p className="text-lg">
                Revenim cu un apel în cel mult 3 ore (Luni - Vineri).
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {showError && (
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
      )}
    </div>
  );
}
