"use client";

import { useState } from "react";
import Container from "@/components/ds/Container";
import Section from "@/components/ds/Section";
import Accent from "@/components/ds/Accent";
import Figure from "@/components/ds/Figure";
import Stack from "@/components/ds/Stack";
import Note from "@/components/ds/Note";
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

const chisinau = OFFICES.find((o) => o.city.includes("Chișinău"))!;
const causeni = OFFICES.find((o) => o.city.includes("Căușeni"))!;

const channels = [
    { label: "Telefon Chișinău", value: chisinau.mobileDisplay, href: `tel:${chisinau.mobile}` },
    { label: "Telefon Căușeni", value: causeni.mobileDisplay, href: `tel:${causeni.mobile}` },
    { label: "Administrator", value: "0790 66 5 66", href: "tel:+37379066566" },
    { label: "WhatsApp / Viber", value: chisinau.mobileDisplay, href: "https://wa.me/+37361252777" },
    { label: "E-mail", value: "info @ idealcredit.md", href: "mailto:info@idealcredit.md" },
];

export default function ContactePage() {
    const { trackEvent } = useFacebookPixel();
    const [formData, setFormData] = useState<FormData>({ nume: "", email: "", telefon: "", mesaj: "" });
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
            <div className="dc-section dc-section--hero">
                <Container>
                    <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                        <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                        Contacte · Luni-Vineri <span className="font-dc-mono text-dc-proof">08:30-16:30</span>
                    </p>
                    <h1 className="mt-7 max-w-[1000px] text-[clamp(52px,9vw,124px)] font-semibold leading-[.92] tracking-[-.048em] text-dc-text">
                        Vorbim <Accent>direct.</Accent>
                    </h1>
                    <p className="mt-7 max-w-[620px] text-[19px] leading-[1.55] text-dc-text-muted">
                        Un telefon de cinci minute înlocuiește un formular de o oră. Sună, scrie pe WhatsApp sau lasă un mesaj - răspundem
                        în aceeași zi lucrătoare. La birou vii doar cu programare, după prima discuție.
                    </p>
                </Container>
            </div>

            <div className="pb-24">
                <Container>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        {OFFICES.map((office, i) => (
                            <div key={office.id} className="dc-cell flex flex-col gap-6 p-10">
                                <p className="text-xs uppercase tracking-[.1em] text-dc-text-muted">
                                    <span className="font-dc-mono">{String(i + 1).padStart(2, "0")}</span> · {office.title}
                                </p>
                                <h2 className="text-[28px] tracking-[-.03em] text-dc-text">{office.city.replace(/^(or\.|m\.)\s*/, "")}</h2>
                                <p className="text-[17px] leading-[1.6] text-dc-text-muted">
                                    {office.street}
                                    <br />
                                    {office.addressNumbers}
                                </p>
                                <a
                                    href={`tel:${office.mobile}`}
                                    onClick={() => trackEvent("Contact")}
                                    className="dc-num text-[19px] tracking-[-.02em] text-dc-text transition-colors duration-[120ms] hover:text-white"
                                >
                                    {office.mobileDisplay}
                                </a>
                                <iframe
                                    src={office.map}
                                    width="100%"
                                    height="220"
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

            <div className="dc-section">
                <Container>
                    <div className="grid items-start gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        <div>
                            <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                                Canale
                            </p>
                            <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                                Alege cum ne <Accent>scrii</Accent>
                            </h2>
                            <p className="mt-4 text-[17px] leading-[1.6] text-dc-text-muted">
                                Documentele se verifică la distanță. Trimite extrasele pe canalul care îți convine - nu e nevoie să vii la
                                oficiu pentru analiză.
                            </p>
                        </div>
                        <Stack>
                            {channels.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    onClick={() => trackEvent("Contact")}
                                    className="flex flex-wrap items-baseline justify-between gap-4 px-6 py-5 transition-colors duration-[120ms] hover:bg-[#1a1a1a]"
                                >
                                    <span className="shrink-0 text-xs uppercase tracking-[.1em] text-dc-text-muted">{c.label}</span>
                                    <Figure size="md">{c.value}</Figure>
                                </a>
                            ))}
                        </Stack>
                    </div>
                </Container>
            </div>

            <div className="dc-section">
                <Container>
                    <div className="grid items-start gap-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                        <div>
                            <p className="flex items-start gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
                                <span className="mt-[3px] block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
                                Formular
                            </p>
                            <h2 className="mt-5 text-[clamp(34px,4vw,50px)] font-semibold leading-none tracking-[-.035em] text-dc-text">
                                Scrie-ne o <Accent>întrebare</Accent>
                            </h2>
                            <p className="mt-4 text-[17px] leading-[1.6] text-dc-text-muted">
                                Pentru o cerere de credit completă, folosește formularul de cerere online. Aici răspundem la întrebări.
                            </p>
                            <Note className="mt-7 max-w-[340px]">
                                Datele tale sunt prelucrate conform politicii de confidențialitate. Nu le transmitem terților.
                            </Note>
                        </div>

                        {sent ? (
                            <div className="dc-cell flex flex-col items-center justify-center gap-3 p-16 text-center">
                                <p className="text-[19px] text-dc-text">
                                    Mulțumim pentru mesaj.
                                    <br />
                                    Vă contactăm în curând!
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex min-w-0 flex-col gap-6">
                                <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
                                    <div>
                                        <label className="mb-2.5 block text-xs uppercase tracking-[.1em] text-dc-text-muted">Nume</label>
                                        <input
                                            type="text"
                                            placeholder="Ion Popescu"
                                            value={formData.nume}
                                            onChange={(e) => setFormData((p) => ({ ...p, nume: e.target.value }))}
                                        />
                                        {errors.nume && <p className="mt-2 text-xs text-dc-accent">{errors.nume}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-2.5 block text-xs uppercase tracking-[.1em] text-dc-text-muted">Telefon</label>
                                        <input
                                            type="tel"
                                            placeholder="060 00 00 00"
                                            className="font-dc-mono"
                                            value={formData.telefon}
                                            onChange={(e) => setFormData((p) => ({ ...p, telefon: e.target.value }))}
                                        />
                                        {errors.telefon && <p className="mt-2 text-xs text-dc-accent">{errors.telefon}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="mb-2.5 block text-xs uppercase tracking-[.1em] text-dc-text-muted">Email</label>
                                    <input
                                        type="email"
                                        placeholder="ion@exemplu.md"
                                        value={formData.email}
                                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                                    />
                                    {errors.email && <p className="mt-2 text-xs text-dc-accent">{errors.email}</p>}
                                </div>
                                {errors.general && <p className="text-xs text-dc-accent">{errors.general}</p>}
                                <div>
                                    <label className="mb-2.5 block text-xs uppercase tracking-[.1em] text-dc-text-muted">Mesaj</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Descrie pe scurt situația ta."
                                        className="resize-y"
                                        value={formData.mesaj}
                                        onChange={(e) => setFormData((p) => ({ ...p, mesaj: e.target.value }))}
                                    />
                                    {errors.mesaj && <p className="mt-2 text-xs text-dc-accent">{errors.mesaj}</p>}
                                </div>
                                <div className="flex flex-wrap items-center gap-5">
                                    <ButtonPrimary type="submit" disabled={loading} className="disabled:opacity-60">
                                        {loading ? "Se trimite..." : "Trimite mesajul"}
                                    </ButtonPrimary>
                                    <span className="font-dc-mono text-xs text-dc-text-muted">RĂSPUNS ÎN 1 ZI LUCRĂTOARE</span>
                                </div>
                            </form>
                        )}
                    </div>
                </Container>
            </div>

            <Section
                marker="Program"
                title={
                    <>
                        Ore de <Accent>lucru</Accent>
                    </>
                }
            >
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    <div className="dc-cell p-8">
                        <span className="font-dc-mono text-xs text-dc-text-muted">01</span>
                        <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">Program de lucru</h3>
                        <p className="mt-2.5 text-[17px] leading-[1.6] text-dc-text-muted">
                            Luni-Vineri, 08:30-16:30. Sâmbătă și duminică - închis. Cererile online se depun oricând.
                        </p>
                    </div>
                    <div className="dc-cell p-8">
                        <span className="font-dc-mono text-xs text-dc-text-muted">02</span>
                        <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">Reclamații</h3>
                        <p className="mt-2.5 text-[17px] leading-[1.6] text-dc-text-muted">
                            Pretențiile se depun în scris la oricare oficiu sau la info@idealcredit.md. Termen de răspuns: 15 zile.
                        </p>
                    </div>
                    <div className="dc-cell p-8">
                        <span className="font-dc-mono text-xs text-dc-text-muted">03</span>
                        <h3 className="mt-6 text-xl tracking-[-.025em] text-dc-text">Autoritatea de supraveghere</h3>
                        <p className="mt-2.5 text-[17px] leading-[1.6] text-dc-text-muted">
                            Comisia Națională a Pieței Financiare supraveghează activitatea OCN „Ideal Credit” SRL.
                        </p>
                    </div>
                </div>
            </Section>

            <ClosingCta />
        </div>
    );
}
