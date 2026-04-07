"use client";

import Link from "next/link";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";
import Logo from "@/components/icons/Logo";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const oficii = [
  {
    id: 1,
    title: "Sediul principal",
    address: "or. Căușeni, str. Mihai Eminescu",
    addressNumbers: "nr. 17,  of. 47",
    mobile: ["+37379066566", "079 06 65 66"],
  },
  {
    id: 2,
    title: "Sucursala Nr. 1",
    address: "m. Chișinău, str. Miron Costin",
    addressNumbers: "nr. 25,  of. 115",
    mobile: ["+37378805060", "078 80 50 60"],
  },
];

const glossary = [
  { name: "Credit", desc: "Operațiune prin care o persoană fizică sau juridică primește o sumă de bani cu obligația de rambursare, de obicei cu dobândă, într-un termen stabilit." },
  { name: "Dobândă", desc: "Costul utilizării banilor împrumutați, exprimat procentual din suma principală." },
  { name: "DAE (Dobânda Anuală Efectivă)", desc: "Indicator care reflectă costul total al creditului pentru consumator: dobânda anuală plus toate comisioanele și taxele aferente." },
  { name: "Contract de Credit", desc: "Acord legal între creditor și debitor prin care se stabilesc suma împrumutată, dobânda, comisioanele, graficul de rambursare și alte condiții." },
  { name: "Creditor", desc: "Entitate (instituție financiară sau persoană) care acordă împrumuturi în scop comercial sau profesional." },
  { name: "Debitor", desc: "Persoană fizică sau juridică care are obligația de a rambursa creditul și costurile asociate." },
  { name: "Consumator", desc: "Persoană fizică care utilizează produse sau servicii pentru necesități personale, nelegate de activitatea profesională." },
  { name: "Bonitatea", desc: "Capacitatea consumatorului de a rambursa creditul la scadență, incluzând dobânda și costurile totale." },
  { name: "Valoarea Totală a Creditului", desc: "Suma efectiv pusă la dispoziție de creditor conform contractului." },
  { name: "Costul Total al Creditului", desc: "Suma pe care debitorul o plătește în total: principal + dobândă + comisioane + taxe." },
  { name: "Garanție (gaj, ipotecă)", desc: "Bunuri sau drepturi puse în securitate de către debitor pentru garantarea rambursării creditului." },
  { name: "Penalitate", desc: "Sumă suplimentară datorată pentru întârzierea plății ratelor sau nerespectarea clauzelor contractuale." },
  { name: "Perioadă de grație", desc: "Interval în care nu se achită una sau mai multe rate de credit și/sau dobândă. Se reflectă în graficul de rambursare al contractului de credit." },
  { name: "Cesiune", desc: "Transferul drepturilor și obligațiilor rezultate din contractul de credit către o terță parte (cesionar)." },
  { name: "BIC (Biroul Istoriilor de Credit)", desc: "Instituție care colectează și stochează date despre istoricul de credit al persoanelor fizice sau juridice." },
];

export default function Footer() {
  const { trackEvent } = useFacebookPixel();

  return (
    <footer className="bg-black-600 border-t relative py-10">
      {/* Top row: branding + social */}
      <div className="container flex flex-col md:flex-row justify-between md:items-center gap-8 pb-8 border-b">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8" />
            <span className="text-xl">Ideal Credit</span>
          </div>
          <p className="text-gray-400">
            Credite nebancare în Moldova
            <br />
            pentru afaceri și persoane fizice.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="https://www.instagram.com/idealcredit.md/"
            target="_blank"
            rel="noopener noreferrer"
            title="Pagina Ideal Credit pe Instagram"
            className="hover:text-brand-500 transition-colors"
          >
            <InstagramLogo size={32} />
          </a>
          <a
            href="https://www.facebook.com/idealcredit.md"
            target="_blank"
            rel="noopener noreferrer"
            title="Pagina Ideal Credit pe Facebook"
            className="hover:text-brand-500 transition-colors"
          >
            <FacebookLogo size={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/idealcredit/"
            target="_blank"
            rel="noopener noreferrer"
            title="Pagina Ideal Credit pe Linkedin"
            className="hover:text-brand-500 transition-colors"
          >
            <LinkedinLogo size={32} />
          </a>
        </div>
      </div>

      {/* Offices + links */}
      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 border-b">
        {oficii.map((oficiu) => (
          <div key={oficiu.id} className="space-y-4">
            <p className="text-xl font-bold">{oficiu.title}</p>
            <p className="text-gray-300">
              {oficiu.address},<br />
              {oficiu.addressNumbers}
            </p>
            <p className="text-gray-300">Luni - Vineri: 08:30 - 16:30</p>
            <a
              href={`tel:${oficiu.mobile[0]}`}
              onClick={() => trackEvent("Contact")}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-brand-500 text-brand-500 hover:bg-brand-500/10 transition-colors duration-300 font-medium"
            >
              <Phone size={16} />
              {oficiu.mobile[1]}
            </a>
          </div>
        ))}

        <div className="flex flex-col gap-y-4">
          <p className="text-xl font-bold">Linkuri</p>
          <Link href="/terms" title="Termeni și Condiții" className="inline-flex hover:text-white/70 transition-colors">Termeni</Link>
          <Link href="/cookies" title="Politica de Cookies" className="inline-flex hover:text-white/70 transition-colors">Cookies</Link>
          <Link href="/privacy" title="Politica de Confidențialitate" className="inline-flex hover:text-white/70 transition-colors">Confidențialitate</Link>
          <Link href="/autoritatea-de-supraveghere" rel="nofollow" title="Autoritatea de Supraveghere" className="link inline-flex">Autoritatea de Supraveghere</Link>
        </div>
      </div>

      {/* Legal excerpt */}
      <div className="container mt-12">
        <p className="mb-6 text-xl text-center">Extras din lege</p>
        <p className="mb-4 pl-6">
          În Legea nr. 202/2013 privind contractele de credit pentru consumatori, au fost impuse limite cu privire la:
        </p>
        <ul className="list-outside list-disc ml-6 space-y-1.5 text-gray-400">
          <li>Rata maximală a dobânzii anuale specificate în contractul de credit să nu fie mai mare de 50%.</li>
          <li>Toate celelalte plăți aferente (comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip de plată), cu excepția dobânzii, să nu depășească 0,04% /zi din valoarea totală a creditului pentru termenul de utilizare efectivă a creditului.</li>
          <li>Costului total al creditului (care include dobânzi, comisioane, taxe, penalități, dobânzi de întârziere și orice alt tip de plată) să nu fie mai mare decât valoarea debursată conform contractului (cu excepția contractelor ipotecare).</li>
        </ul>
      </div>

      {/* Glossary */}
      <div className="container mt-12">
        <p className="mb-6 text-xl text-center">Dicționar financiar</p>
        <ul className="list-outside list-disc ml-6 space-y-2.5 text-gray-400">
          {glossary.map((item) => (
            <li key={item.name}>
              <span className="font-bold">{item.name} — </span>
              {item.desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="container mt-10 px-6 text-center pt-8 gap-1 flex-wrap border-t">
        &copy; {new Date().getFullYear()} Organizația de Creditare Nebancară{" "}
        <strong>Ideal Credit</strong> SRL
      </div>
    </footer>
  );
}
