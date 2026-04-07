"use client";

import { useState } from "react";
import { Phone, Mail, Check } from "lucide-react";
import ListaOficiilor from "@/components/ListaOficiilor";
import CallToAction from "@/components/CallToAction";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const WEB3FORMS_KEY = "c8f3c3c1-46ab-46bf-a139-4c4bb6265d95";

interface FormData {
  nume: string;
  email: string;
  telefon: string;
  mesaj: string;
}

interface FormErrors {
  nume?: string;
  email?: string;
  telefon?: string;
  mesaj?: string;
  general?: string;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^\d{9}$/.test(phone.replace(/\s/g, ""));
}

export default function ContactePage() {
  const { trackEvent } = useFacebookPixel();
  const [formData, setFormData] = useState<FormData>({
    nume: "",
    email: "",
    telefon: "",
    mesaj: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.nume || data.nume.length < 3)
      errs.nume = "Numele trebuie să conțină cel puțin 3 caractere";
    if (data.email && !validateEmail(data.email))
      errs.email = "Email-ul este invalid";
    if (data.telefon && !validatePhone(data.telefon))
      errs.telefon = "Telefonul trebuie să conțină 9 cifre";
    if (!data.email && !data.telefon)
      errs.general = "Este necesar să introduceți email-ul sau telefonul";
    if (!data.mesaj) errs.mesaj = "Mesajul este obligatoriu";
    if (data.mesaj && data.mesaj.length < 10)
      errs.mesaj = "Mesajul trebuie să conțină cel puțin 10 caractere";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: WEB3FORMS_KEY,
          subject: `${formData.nume} a trimis un mesaj ...`,
          from_name: "Ideal Credit Website Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        trackEvent("SubmitApplication");
        setFormData({ nume: "", email: "", telefon: "", mesaj: "" });
        setTimeout(() => setSent(false), 4000);
      }
    } catch {
      setErrors({ general: "A apărut o eroare. Încercați din nou." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4 md:my-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Contact info */}
        <div className="card text-xl space-y-8 text-center">
          <h1 className="card-title text-center">Contacte</h1>
          <div className="flex gap-2 items-center">
            <Phone className="w-6 h-6 shrink-0 text-brand-500" />
            <a href="tel:+37378805060" onClick={() => trackEvent("Contact")}>
              <span className="opacity-50">(+373)</span> 78 80 50 60
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="w-6 h-6 shrink-0 text-brand-500" />
            <a href="tel:+37379066566" onClick={() => trackEvent("Contact")}>
              <span className="opacity-50">(+373)</span> 790 66 5 66
            </a>
          </div>
          <div className="flex gap-2.5 items-center">
            <Mail className="w-6 h-6 shrink-0 text-brand-500" />
            <a href="mailto:info@idealcredit.md" onClick={() => trackEvent("Contact")}>
              info@idealcredit.md
            </a>
          </div>
        </div>

        {/* Contact form */}
        <div className="card relative overflow-hidden">
          <h2 className="card-title text-center">Scrie-ne direct</h2>
          {sent ? (
            <div className="grid place-content-center my-16 text-center">
              <Check className="text-brand-500 h-16 w-16 mx-auto" />
              <div className="text-2xl mt-4">
                Mulțumim pentru mesaj.
                <br />
                Vă contactăm în curând!
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div>
                <label className="block text-sm mb-1">Nume</label>
                <input
                  type="text"
                  value={formData.nume}
                  onChange={(e) => setFormData((p) => ({ ...p, nume: e.target.value }))}
                  className="w-full rounded-md border bg-black-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
                {errors.nume && <p className="text-red-500 text-xs mt-1">{errors.nume}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="w-full rounded-md border bg-black-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1">Mobil</label>
                  <input
                    type="tel"
                    value={formData.telefon}
                    onChange={(e) => setFormData((p) => ({ ...p, telefon: e.target.value }))}
                    className="w-full rounded-md border bg-black-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500"
                  />
                  {errors.telefon && <p className="text-red-500 text-xs mt-1">{errors.telefon}</p>}
                </div>
              </div>
              {errors.general && <p className="text-red-500 text-xs">{errors.general}</p>}
              <div>
                <label className="block text-sm mb-1">Mesaj</label>
                <textarea
                  rows={4}
                  value={formData.mesaj}
                  onChange={(e) => setFormData((p) => ({ ...p, mesaj: e.target.value }))}
                  className="w-full rounded-md border bg-black-500 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 resize-none"
                />
                {errors.mesaj && <p className="text-red-500 text-xs mt-1">{errors.mesaj}</p>}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-500 disabled:opacity-60 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {loading ? "Se trimite..." : "Trimite"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Office locations */}
      <div className="mt-4 md:mt-6">
        <div id="adresa-oficiilor" className="-translate-y-14" />
        <div className="card">
          <h2 className="card-title text-center">Adresa oficiilor</h2>
          <ListaOficiilor />
        </div>
      </div>

      <CallToAction className="py-10" />
    </div>
  );
}
