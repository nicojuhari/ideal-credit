"use client";

import { useState } from "react";
import { Phone, Mail, Check } from "lucide-react";
import Container from "@/components/ds/Container";
import Card from "@/components/ds/Card";
import Accent from "@/components/ds/Accent";
import { ButtonPrimary } from "@/components/ds/Button";
import ClosingCta from "@/components/home/ClosingCta";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { OFFICES } from "@/lib/constants";

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

const inputClasses =
    "w-full rounded-dc-control border border-dc-line bg-transparent px-3.5 py-2.5 text-sm text-dc-text placeholder:text-dc-text-dim focus:outline-none focus:border-dc-line-hover transition-colors";

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
        if (!data.nume || data.nume.length < 3) errs.nume = "Numele trebuie să conțină cel puțin 3 caractere";
        if (data.email && !validateEmail(data.email)) errs.email = "Email-ul este invalid";
        if (data.telefon && !validatePhone(data.telefon)) errs.telefon = "Telefonul trebuie să conțină 9 cifre";
        if (!data.email && !data.telefon) errs.general = "Este necesar să introduceți email-ul sau telefonul";
        if (!data.mesaj) errs.mesaj = "Mesajul este obligatoriu";
        if (data.mesaj && data.mesaj.length < 10) errs.mesaj = "Mesajul trebuie să conțină cel puțin 10 caractere";
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
        <div className="dc bg-dc-bg">
            <div className="relative isolate dc-section dc-section--hero">
                <div className="dc-bg-squares" aria-hidden />
                <Container>
                    <div className="mx-auto flex max-w-[640px] flex-col items-center gap-5 text-center">
                        <h1 className="text-[44px] md:text-[64px] font-bold leading-[1.05] tracking-[-.03em] text-dc-text">
                            <Accent>Contacte</Accent>
                        </h1>
                        <p className="text-[19px] leading-relaxed text-dc-text-muted">
                            Scrie-ne, sună-ne sau treci pe la unul din oficii. Îți răspundem rapid.
                        </p>
                    </div>
                </Container>
            </div>

            <div className="dc-section">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Card className="justify-center gap-6">
                            <h2 className="text-[19px] font-bold text-dc-text">Scrie-ne sau sună-ne</h2>
                            <div className="flex flex-col gap-4">
                                <a
                                    href="tel:+37361252777"
                                    onClick={() => trackEvent("Contact")}
                                    className="flex items-center gap-3 text-dc-text hover:text-white"
                                >
                                    <Phone size={18} className="shrink-0 text-dc-accent" />
                                    <span>
                                        <span className="text-dc-text-dim">(+373)</span> 612 52 777
                                    </span>
                                </a>
                                <a
                                    href="tel:+37379066566"
                                    onClick={() => trackEvent("Contact")}
                                    className="flex items-center gap-3 text-dc-text hover:text-white"
                                >
                                    <Phone size={18} className="shrink-0 text-dc-accent" />
                                    <span>
                                        <span className="text-dc-text-dim">(+373)</span> 790 66 5 66
                                    </span>
                                </a>
                                <a
                                    href="mailto:info@idealcredit.md"
                                    onClick={() => trackEvent("Contact")}
                                    className="flex items-center gap-3 text-dc-text hover:text-white"
                                >
                                    <Mail size={18} className="shrink-0 text-dc-accent" />
                                    info@idealcredit.md
                                </a>
                            </div>
                        </Card>

                        <Card className="relative overflow-hidden gap-5">
                            <h2 className="text-[19px] font-bold text-dc-text">Scrie-ne direct</h2>
                            {sent ? (
                                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                                    <Check size={40} className="text-dc-accent" />
                                    <p className="text-lg text-dc-text">
                                        Mulțumim pentru mesaj.
                                        <br />
                                        Vă contactăm în curând!
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label className="mb-1.5 block text-sm text-dc-text-muted">Nume</label>
                                        <input
                                            type="text"
                                            value={formData.nume}
                                            onChange={(e) => setFormData((p) => ({ ...p, nume: e.target.value }))}
                                            className={inputClasses}
                                        />
                                        {errors.nume && <p className="mt-1 text-xs text-red-400">{errors.nume}</p>}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="mb-1.5 block text-sm text-dc-text-muted">Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                                                className={inputClasses}
                                            />
                                            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label className="mb-1.5 block text-sm text-dc-text-muted">Mobil</label>
                                            <input
                                                type="tel"
                                                value={formData.telefon}
                                                onChange={(e) => setFormData((p) => ({ ...p, telefon: e.target.value }))}
                                                className={inputClasses}
                                            />
                                            {errors.telefon && <p className="mt-1 text-xs text-red-400">{errors.telefon}</p>}
                                        </div>
                                    </div>
                                    {errors.general && <p className="text-xs text-red-400">{errors.general}</p>}
                                    <div>
                                        <label className="mb-1.5 block text-sm text-dc-text-muted">Mesaj</label>
                                        <textarea
                                            rows={4}
                                            value={formData.mesaj}
                                            onChange={(e) => setFormData((p) => ({ ...p, mesaj: e.target.value }))}
                                            className={`${inputClasses} resize-none`}
                                        />
                                        {errors.mesaj && <p className="mt-1 text-xs text-red-400">{errors.mesaj}</p>}
                                    </div>
                                    <ButtonPrimary type="submit" disabled={loading} className="self-end disabled:opacity-60">
                                        {loading ? "Se trimite..." : "Trimite"}
                                    </ButtonPrimary>
                                </form>
                            )}
                        </Card>
                    </div>
                </Container>
            </div>

            <div className="dc-section">
                <div id="adresa-oficiilor" className="-translate-y-24" />
                <Container>
                    <h2 className="mb-10 text-[28px] md:text-[40px] font-bold leading-[1.1] tracking-[-.025em] text-dc-text">
                        Adresa <Accent>oficiilor</Accent>
                    </h2>
                    <div className="grid gap-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
                        {OFFICES.map((office) => (
                            <div key={office.id} className="rounded-dc-card border border-dc-line bg-dc-surface p-6">
                                <div className="flex items-baseline gap-2.5">
                                    <span className="text-[17px] font-bold text-dc-text">{office.title}</span>
                                </div>
                                <p className="mt-2 text-sm text-dc-text-muted">{office.city}</p>
                                <p className="text-sm text-dc-text-muted">
                                    {office.street} {office.addressNumbers}
                                </p>
                                <p className="mt-1 text-xs text-dc-text-dim">Luni – Vineri · 08:30 – 16:30</p>
                                {office.note && <p className="mt-2 text-xs italic text-dc-text-dim">{office.note}</p>}
                                <iframe
                                    src={office.map}
                                    width="100%"
                                    height="260"
                                    className="mt-4 rounded-dc-control"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Harta ${office.title}`}
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <ClosingCta />
        </div>
    );
}
