import type { Metadata } from 'next';
import CalculatorCredit from '@/components/CalculatorCredit';
import HowItWorks from '@/components/HowItWorks';
import ShortAboutUs from '@/components/ShortAboutUs';
import Info from '@/components/ui/Info';
import RecenziiButton from '@/components/ui/RecenziiButton';
import MainCTA from '@/components/ui/MainCTA';
import { Check } from 'lucide-react';
import { personalLoanSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Credit pentru reparație - casă sau apartament | Ideal Credit',
  description: 'Credit pentru reparația casei sau apartament. Obține banii rapid și renovează-ți locuința acum. Dobândă fixă și sume flexibile. Aplică online!',
  alternates: { canonical: 'https://idealcredit.md/credite/credit-pentru-reparatie' },
};

export default function CreditReparatiePage() {
  return (
    <>
      <div className="relative pt-10 md:pt-12">
        <div className="bg-squares -mt-[1px]" />
        <div className="container">
          <RecenziiButton className="mb-16" />
          <h1 className="font-semibold text-center text-5xl md:text-8xl" dangerouslySetInnerHTML={{ __html: 'Credit pentru reparație' }} />
          <p className="text-center mt-6 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">Obține un credit pentru reparația casei sau apartamentului tău. Renovează-ți locuința acum și trăiește din plin.</p>
          <MainCTA className="mt-16" />
          <div className="cs-blur cs-blur--center z-[-1]" />
          <CalculatorCredit />
        </div>
      </div>
      <section className="container">
        <h2 className="title text-center">Condițiile de creditare</h2>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {["Vârsta între 23 și 55 de ani", "Venit confirmat și stabil", "Bun imobil în proprietate", "Responsabilitate financiară"].map((item) => (
            <li key={item} className="flex text-xl items-center gap-2 card">
              <Check className="w-5 h-5 flex-shrink-0 text-green-400" strokeWidth={3} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Info className="mt-6">În funcție de evaluarea riscului de credit, se va solicita garanții adiționale: fidejusiune sau gaj imobil.</Info>
      </section>
      <section className="container"><HowItWorks /></section>
      <section>
        <div className="container text-lg space-y-4">
          <h2 className="card-title text-center">Ce este creditul pentru reparație?</h2>
          <p>Credit destinat lucrărilor de reparație și renovare pentru casă sau apartament. Îţi oferă rapid bani pentru materiale de construcție sau plata meșterilor.</p>
          <h3 className="text-2xl pt-4">Când poți folosi banii</h3>
          <ul className="list-outside list-disc ml-6 text-gray-400">
            <li>Reparații instalații (apă, gaz, electrice)</li>
            <li>Finisaje - zugrăveli, parchet, gresie, faianță</li>
            <li>Schimbare ferestre și uși</li>
            <li>Mobilare sau dotări pentru spațiul renovat</li>
          </ul>
          <h3 className="text-2xl pt-4">Ce primești concret</h3>
          <ul className="list-outside list-disc ml-6 text-gray-400">
            <li>Aprobarea rapidă - decizie în câteva ore</li>
            <li>Sume flexibile - alegi cât îţi trebuie pentru proiect</li>
            <li>Dobândă fixă și clară</li>
          </ul>
        </div>
      </section>
      <ShortAboutUs />
    </>
  );
}
