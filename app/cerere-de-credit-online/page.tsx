"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check, Warning } from "@phosphor-icons/react";

const STEPS = [
  { label: "Date despre credit", fields: ["suma", "termen", "scopul_creditului"] },
  { label: "Date personale", fields: ["nume", "prenume", "adresa_domiciliu", "telefon"] },
  { label: "Date financiare", fields: ["venituri", "datorii", "locul_de_munca", "bunuri"] },
  { label: "Declarații", fields: ["terms", "have_garant", "in_oficiu"] },
];

const BUNURI_OPTIONS = [
  "Casă sau Apartament",
  "Terenuri (agricole sau pentru construcție)",
  "Garaj, cameră în cămin, altele ...",
  "Nu am nimic",
];

type FieldError = { name: string; message: string };

interface FormState {
  suma: string;
  termen: string;
  scopul_creditului: string;
  nume: string;
  prenume: string;
  adresa_domiciliu: string;
  telefon: string;
  venituri: string;
  datorii: string;
  locul_de_munca: string;
  bunuri: string[];
  terms: boolean;
  have_garant: boolean | undefined;
  in_oficiu: boolean | undefined;
}

const emptyForm: FormState = {
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
  have_garant: undefined,
  in_oficiu: undefined,
};

function validate(state: FormState): FieldError[] {
  const errors: FieldError[] = [];
  if (!state.suma) errors.push({ name: "suma", message: "Suma este obligatorie" });
  if (state.suma && isNaN(Number(state.suma)))
    errors.push({ name: "suma", message: "Suma trebuie să conțină doar cifre" });
  if (Number(state.suma) < 10000) errors.push({ name: "suma", message: "Suma minimă este 10.000 MDL" });
  if (Number(state.suma) > 300000) errors.push({ name: "suma", message: "Suma maximă este 300.000 MDL" });
  if (!state.termen) errors.push({ name: "termen", message: "Termenul este obligatoriu" });
  if (Number(state.termen) < 6) errors.push({ name: "termen", message: "Termenul minim este 6 luni" });
  if (Number(state.termen) > 60) errors.push({ name: "termen", message: "Termenul maxim este 60 luni" });
  if (!state.scopul_creditului) errors.push({ name: "scopul_creditului", message: "Scopul creditului este obligatoriu" });
  if (!state.nume || state.nume.length < 3) errors.push({ name: "nume", message: "Nume este obligatoriu" });
  if (!state.prenume || state.prenume.length < 3) errors.push({ name: "prenume", message: "Prenume este obligatoriu" });
  if (!state.adresa_domiciliu || state.adresa_domiciliu.length < 3)
    errors.push({ name: "adresa_domiciliu", message: "Adresa de reședință este obligatorie" });
  if (!state.telefon) errors.push({ name: "telefon", message: "Telefon este obligatoriu" });
  if (!/^\d{9}$/.test(state.telefon)) errors.push({ name: "telefon", message: "Telefonul trebuie să conțină 9 cifre" });
  if (state.venituri && isNaN(Number(state.venituri)))
    errors.push({ name: "venituri", message: "Venitul trebuie să conțină doar cifre" });
  if (state.datorii && isNaN(Number(state.datorii)))
    errors.push({ name: "datorii", message: "Datoriile trebuie să conțină doar cifre" });
  if (!state.locul_de_munca || state.locul_de_munca.length < 3)
    errors.push({ name: "locul_de_munca", message: "Locul de muncă trebuie să conțină cel puțin 3 caractere" });
  if (state.bunuri.length === 0) errors.push({ name: "bunuri", message: "Acest câmp este obligatoriu" });
  if (!state.terms) errors.push({ name: "terms", message: "Acceptați condițiile." });
  if (state.have_garant !== true) errors.push({ name: "have_garant", message: "Este necesar cel puțin un fidejusor." });
  if (state.in_oficiu !== true) errors.push({ name: "in_oficiu", message: "Prezența în oficiu este obligatorie." });
  return errors;
}

function FieldErr({ errors, name }: { errors: FieldError[]; name: string }) {
  const err = errors.find((e) => e.name === name);
  if (!err) return null;
  return <p className="text-red-500 text-xs mt-1">{err.message}</p>;
}

export default function CerereOnlinePage() {
  const { trackEvent } = useFacebookPixel();
  const [form, setForm] = useState<FormState>({ ...emptyForm });
  const [step, setStep] = useState(0);
  const [stepErrors, setStepErrors] = useState<FieldError[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    trackEvent("ViewContent");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progress = (step / STEPS.length) * 100;

  const getStepErrors = () => {
    const fields = STEPS[step]?.fields ?? [];
    return validate(form).filter((e) => fields.includes(e.name));
  };

  const nextStep = () => {
    const errs = getStepErrors();
    if (errs.length > 0) { setStepErrors(errs); return; }
    setStepErrors([]);
    setStep((s) => s + 1);
  };

  const prevStep = () => {
    setStepErrors([]);
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setShowError(false);
    try {
      const res = await fetch("/api/cerere-online", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          subject: `${form.suma} MDL, ${form.termen} luni, ${form.nume}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        trackEvent("Lead");
        setShowSuccess(true);
        setForm({ ...emptyForm });
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

  const inputCls = "w-full rounded-md border bg-black-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500";

  return (
    <div className="container relative my-4 md:my-6">
      <h1 className="card-title text-center pt-4 mb-4">Cerere de credit online</h1>
      <div className="max-w-md mx-auto card">
        {/* Progress */}
        <div className="p-4 border rounded bg-black-300/40 border-white/5 mb-6">
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div
              className="bg-brand-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-1.5 text-xs text-center text-brand-500">
            4 etape, completezi cererea în 2 minute
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25 }}
          >
            {/* Step 1 */}
            {step === 0 && (
              <div>
                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">1. Date despre credit</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-1">Suma (lei) <span className="text-xs text-gray-400">Minim 10000 lei</span></label>
                    <input type="number" step="100" min="10000" max="300000" value={form.suma}
                      onChange={(e) => setForm((p) => ({ ...p, suma: e.target.value }))} className={inputCls} />
                    <FieldErr errors={stepErrors} name="suma" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Termen (luni) <span className="text-xs text-gray-400">Minim 6 luni, maxim 60 luni</span></label>
                    <input type="number" step="1" min="6" max="60" value={form.termen}
                      onChange={(e) => setForm((p) => ({ ...p, termen: e.target.value }))} className={inputCls} />
                    <FieldErr errors={stepErrors} name="termen" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Scopul creditului</label>
                    <select value={form.scopul_creditului}
                      onChange={(e) => setForm((p) => ({ ...p, scopul_creditului: e.target.value }))}
                      className={inputCls}>
                      <option value="">Selectează scopul creditului</option>
                      {["Pentru nevoi personale", "Pentru afaceri", "Refinanțare", "Procurare bun imobil", "Altele"].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <FieldErr errors={stepErrors} name="scopul_creditului" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div>
                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">2. Date personale</h2>
                <div className="space-y-6">
                  {[
                    { key: "nume", label: "Nume", type: "text" },
                    { key: "prenume", label: "Prenume", type: "text" },
                    { key: "adresa_domiciliu", label: "Adresa de reședință", type: "text", placeholder: "Oraș/Sat, strada, număr/apartament." },
                    { key: "telefon", label: "Telefon mobil", type: "tel", hint: "doar din 9 cifre", maxLength: 9 },
                  ].map(({ key, label, type, placeholder, hint, maxLength }) => (
                    <div key={key}>
                      <label className="block text-sm mb-1">{label} {hint && <span className="text-xs text-gray-400">({hint})</span>}</label>
                      <input type={type} placeholder={placeholder} maxLength={maxLength}
                        value={(form as unknown as Record<string, string>)[key]}
                        onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                        className={inputCls} />
                      <FieldErr errors={stepErrors} name={key} />
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
                    <label className="block text-sm mb-1">Venit lunar, oficial sau confirmat (lei)</label>
                    <p className="text-xs text-gray-400 mb-1">Salariu, transferuri regulate, salariu de peste hotare, ...</p>
                    <input type="number" min="0" value={form.venituri}
                      onChange={(e) => setForm((p) => ({ ...p, venituri: e.target.value }))} className={inputCls} />
                    <FieldErr errors={stepErrors} name="venituri" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Achitări lunare pentru alte credite</label>
                    <p className="text-xs text-gray-400 mb-1">Dacă nu ai, pune 0</p>
                    <input type="number" min="0" value={form.datorii}
                      onChange={(e) => setForm((p) => ({ ...p, datorii: e.target.value }))} className={inputCls} />
                    <FieldErr errors={stepErrors} name="datorii" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Locul de muncă</label>
                    <p className="text-xs text-gray-400 mb-1">Compania și funcția</p>
                    <input type="text" value={form.locul_de_munca}
                      onChange={(e) => setForm((p) => ({ ...p, locul_de_munca: e.target.value }))} className={inputCls} />
                    <FieldErr errors={stepErrors} name="locul_de_munca" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Aveți careva bunuri imobile în proprietate?</label>
                    <div className="mt-2 space-y-2">
                      {BUNURI_OPTIONS.map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={form.bunuri.includes(opt)}
                            onChange={(e) => {
                              setForm((p) => ({
                                ...p,
                                bunuri: e.target.checked ? [...p.bunuri, opt] : p.bunuri.filter((b) => b !== opt),
                              }));
                            }} className="accent-green-500" />
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                    <FieldErr errors={stepErrors} name="bunuri" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 3 && (
              <div>
                <h2 className="mb-6 text-green-400 text-center font-bold text-xl">4. Declarații</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-3">
                      Sunt gata să ofer unul sau mai mulți fidejusori (garant/поручитель).
                    </label>
                    <div className="flex gap-4">
                      {[{ label: "Da", value: true }, { label: "Nu", value: false }].map(({ label, value }) => (
                        <label key={label} className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md border transition-colors ${form.have_garant === value ? "border-green-500 bg-green-500/10" : "border-white/10"}`}>
                          <input type="radio" name="have_garant" checked={form.have_garant === value}
                            onChange={() => setForm((p) => ({ ...p, have_garant: value }))} className="accent-green-500" />
                          {label}
                        </label>
                      ))}
                    </div>
                    <FieldErr errors={stepErrors} name="have_garant" />
                  </div>
                  <div>
                    <label className="block text-sm mb-3">
                      În caz de aprobare, voi veni (împreună cu fidejusorii) în oficiul companiei, pentru a semna contractul de credit.
                    </label>
                    <div className="flex gap-4">
                      {[{ label: "Da", value: true }, { label: "Nu", value: false }].map(({ label, value }) => (
                        <label key={label} className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-md border transition-colors ${form.in_oficiu === value ? "border-green-500 bg-green-500/10" : "border-white/10"}`}>
                          <input type="radio" name="in_oficiu" checked={form.in_oficiu === value}
                            onChange={() => setForm((p) => ({ ...p, in_oficiu: value }))} className="accent-green-500" />
                          {label}
                        </label>
                      ))}
                    </div>
                    <FieldErr errors={stepErrors} name="in_oficiu" />
                  </div>
                  <div>
                    <ul className="list-disc list-inside space-y-1 text-blue-400 text-sm">
                      <li>Înțeleg că aceasta este o cerere de credit online preventivă, fără caracter obligatoriu.</li>
                      <li>În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să argumenteze motivul acelui refuz.</li>
                    </ul>
                    <label className="flex items-center gap-2 mt-4 cursor-pointer">
                      <input type="checkbox" checked={form.terms}
                        onChange={(e) => setForm((p) => ({ ...p, terms: e.target.checked }))} className="accent-green-500" />
                      <span className="text-sm">Accept declarațiile de mai sus.</span>
                    </label>
                    <FieldErr errors={stepErrors} name="terms" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nav buttons */}
        <div className="flex justify-between mt-8">
          {step > 0 && (
            <button onClick={prevStep} className="border border-white/20 hover:bg-white/5 px-4 py-2 rounded-md text-sm transition-colors">
              Înapoi
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button onClick={nextStep} className="ml-auto bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors">
              Continuă
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading || validate(form).length > 0}
              className="ml-auto bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {loading ? "Se trimite..." : "Trimite cererea"}
            </button>
          )}
        </div>
      </div>

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
