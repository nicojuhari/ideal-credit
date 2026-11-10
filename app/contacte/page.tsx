"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ds/Container";
import Accent from "@/components/ds/Accent";
import PageHero, { cardLabel } from "@/components/ds/PageHero";
import SplitSection, { sectionTitle } from "@/components/ds/SplitSection";
import { ButtonPrimary } from "@/components/ds/Button";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { OFFICES, fullAddress } from "@/lib/constants";

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
    { label: "Chișinău", value: chisinau.mobileDisplay, href: `tel:${chisinau.mobile}` },
    { label: "Căușeni", value: causeni.mobileDisplay, href: `tel:${causeni.mobile}` },
    { label: "Administrator", value: "0790 66 5 66", href: "tel:+37379066566" },
    { label: "WhatsApp, Viber", value: chisinau.mobileDisplay, href: "https://wa.me/+37361252777" },
    { label: "E-mail", value: "info@idealcredit.md", href: "mailto:info@idealcredit.md" },
];

const breadcrumb = [
    { name: "Acasă", url: "https://idealcredit.md/" },
    { name: "Contacte", url: "https://idealcredit.md/contacte" },
];

const fieldLabel = "mb-2.5 block text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";

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
        setErrors({});
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
            <PageHero
                breadcrumb={breadcrumb}
                eyebrow={
                    <>
                        Luni–vineri, <span className="font-dc-mono text-dc-proof">8:30–16:30</span>
                    </>
                }
                title={
                    <>
                        Vorbim <Accent>direct.</Accent>
                    </>
                }
                subtitle="Sună sau scrie pe WhatsApp. Prima discuție durează cam 15 minute. Actele le trimiți de acasă, iar la oficiu vii doar ca să semnezi."
                aside={
                    <aside aria-label="Telefon și e-mail" className="border border-dc-line bg-dc-surface px-6 pb-3 pt-6 sm:px-9 sm:pt-8">
                        <p className={cardLabel}>Ne găsești aici</p>
                        <div className="mt-2">
                            {channels.map((c) => (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    onClick={() => trackEvent("Contact")}
                                    className="flex items-baseline justify-between gap-4 border-b border-dc-line py-3.5 transition-colors last:border-b-0 hover:text-white"
                                >
                                    <span className="text-[15px] text-dc-text-muted">{c.label}</span>
                                    <span className="text-right font-dc-mono text-base text-dc-text">{c.value}</span>
                                </a>
                            ))}
                        </div>
                    </aside>
                }
            />

            <section id="adresa-oficiilor" className="dc-section">
                <Container>
                    <h2 className={sectionTitle}>
                        Două <Accent>oficii.</Accent>
                    </h2>
                    <div className="mt-12 grid gap-px border border-dc-line bg-dc-line md:grid-cols-2 lg:mt-20">
                        {[causeni, chisinau].map((office) => (
                            <div
                                key={office.id}
                                id={office === chisinau ? "chisinau" : "causeni"}
                                className="flex flex-col bg-dc-bg p-6 sm:p-10"
                            >
                                <p className={cardLabel}>{office.title}</p>
                                <h3 className="mt-4 text-[28px] font-semibold tracking-[-.03em] text-dc-text">
                                    {office.city.replace(/^(or\.|mun\.)\s*/, "")}
                                </h3>
                                <p className="mt-3 text-[17px] leading-[1.6] text-dc-text-muted">
                                    {fullAddress(office)}
                                </p>
                                <a
                                    href={`tel:${office.mobile}`}
                                    onClick={() => trackEvent("Contact")}
                                    className="dc-num mt-5 text-2xl tracking-[-.02em] text-dc-text transition-colors hover:text-white"
                                >
                                    {office.mobileDisplay}
                                </a>
                                <iframe
                                    src={office.map}
                                    width="100%"
                                    height="240"
                                    className="mt-8 grayscale-[.6]"
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
            </section>

            <SplitSection
                id="mesaj"
                title={
                    <>
                        Scrie-ne o <Accent>întrebare.</Accent>
                    </>
                }
                description={
                    <>
                        Răspundem în cel mult o zi lucrătoare. Vrei un credit? Completează{" "}
                        <Link href="/cerere-de-credit-online" className="text-dc-text underline underline-offset-4">
                            cererea online
                        </Link>
                        .
                    </>
                }
                aside={
                    <p className="mt-8 border-l-2 border-dc-line pl-5 text-[15px] leading-[1.6] text-dc-text-muted">
                        Folosim datele tale doar ca să-ți răspundem. Nu le dăm altor companii. Detalii în{" "}
                        <Link href="/privacy" className="underline underline-offset-4">
                            politica de confidențialitate
                        </Link>
                        .
                    </p>
                }
            >
                {sent ? (
                    <div className="flex flex-col justify-center border border-dc-line bg-dc-surface p-10 sm:p-16" role="status">
                        <p className="text-2xl font-semibold tracking-[-.02em] text-dc-text">Mulțumim pentru mesaj.</p>
                        <p className="mt-2 text-[17px] text-dc-text-muted">Te contactăm în cel mult o zi lucrătoare.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate className="flex min-w-0 flex-col gap-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="c-nume" className={fieldLabel}>
                                    Nume
                                </label>
                                <input
                                    id="c-nume"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Ion Popescu"
                                    value={formData.nume}
                                    onChange={(e) => setFormData((p) => ({ ...p, nume: e.target.value }))}
                                />
                                {errors.nume && <p className="mt-2 text-xs text-dc-accent">{errors.nume}</p>}
                            </div>
                            <div>
                                <label htmlFor="c-telefon" className={fieldLabel}>
                                    Telefon
                                </label>
                                <input
                                    id="c-telefon"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="060 00 00 00"
                                    className="font-dc-mono"
                                    value={formData.telefon}
                                    onChange={(e) => setFormData((p) => ({ ...p, telefon: e.target.value }))}
                                />
                                {errors.telefon && <p className="mt-2 text-xs text-dc-accent">{errors.telefon}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="c-email" className={fieldLabel}>
                                E-mail
                            </label>
                            <input
                                id="c-email"
                                type="email"
                                autoComplete="email"
                                placeholder="ion@exemplu.md"
                                value={formData.email}
                                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                            />
                            {errors.email && <p className="mt-2 text-xs text-dc-accent">{errors.email}</p>}
                        </div>
                        {errors.general && <p className="text-xs text-dc-accent">{errors.general}</p>}
                        <div>
                            <label htmlFor="c-mesaj" className={fieldLabel}>
                                Mesaj
                            </label>
                            <textarea
                                id="c-mesaj"
                                rows={5}
                                placeholder="Scrie pe scurt ce vrei să afli."
                                className="resize-y"
                                value={formData.mesaj}
                                onChange={(e) => setFormData((p) => ({ ...p, mesaj: e.target.value }))}
                            />
                            {errors.mesaj && <p className="mt-2 text-xs text-dc-accent">{errors.mesaj}</p>}
                        </div>
                        <ButtonPrimary type="submit" disabled={loading} className="self-start disabled:opacity-60">
                            {loading ? "Se trimite..." : "Trimite mesajul"}
                        </ButtonPrimary>
                    </form>
                )}
            </SplitSection>

            <section className="dc-section">
                <Container>
                    <h2 className={sectionTitle}>
                        Bine de <Accent>știut.</Accent>
                    </h2>
                    <div className="mt-12 grid gap-px border border-dc-line bg-dc-line md:grid-cols-3 lg:mt-20">
                        <div className="bg-dc-bg p-6 sm:p-8">
                            <p className={cardLabel}>Program</p>
                            <p className="mt-4 text-[17px] leading-[1.6] text-[#c8c8c8]">
                                Luni–vineri, 8:30–16:30. Sâmbătă și duminică suntem închiși. Cererea online o poți trimite oricând.
                            </p>
                        </div>
                        <div className="bg-dc-bg p-6 sm:p-8">
                            <p className={cardLabel}>Reclamații</p>
                            <p className="mt-4 text-[17px] leading-[1.6] text-[#c8c8c8]">
                                Le depui în scris la oricare oficiu sau la info@idealcredit.md. Răspundem în cel mult 15 zile.
                            </p>
                        </div>
                        <div className="bg-dc-bg p-6 sm:p-8">
                            <p className={cardLabel}>Autoritatea de supraveghere</p>
                            <p className="mt-4 text-[17px] leading-[1.6] text-[#c8c8c8]">
                                Activitatea noastră o supraveghează Banca Națională a Moldovei și Comisia Națională a Pieței Financiare.{" "}
                                <Link href="/autoritatea-de-supraveghere" className="text-dc-accent underline underline-offset-4">
                                    Contactele BNM și CNPF →
                                </Link>
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
