"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { createGrafic, calcDAE, type GraficRow } from "ideal-credit";
import { motion } from "framer-motion";
import GraficTable from "./GraficTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

export default function CalculatorCredit() {
  const [creditSuma, setCreditSuma] = useState(10000);
  const [creditTermen, setCreditTermen] = useState(12);
  const [showModal, setShowModal] = useState(false);
  const pixelFired = useRef(false);
  const { trackEvent } = useFacebookPixel();

  const firePixelOnce = useCallback(() => {
    if (!pixelFired.current) {
      pixelFired.current = true;
      trackEvent("CustomizeProduct");
    }
  }, [trackEvent]);

  const graficCalculat = useMemo(() => {
    return createGrafic({ sum: creditSuma, period: creditTermen, interest: 4 });
  }, [creditSuma, creditTermen]);

  const dae = useMemo(() => {
    if (!graficCalculat?.length) return 0;
    return calcDAE(graficCalculat, creditSuma);
  }, [graficCalculat, creditSuma]);

  const dobindaTotal = useMemo(() => {
    if (!graficCalculat?.length) return 0;
    return graficCalculat.reduce(
      (acc: number, rata: GraficRow) => rata.dobinda_rata + acc,
      0
    );
  }, [graficCalculat]);

  const primaRata = graficCalculat?.[0]
    ? graficCalculat[0].credit_rata + graficCalculat[0].dobinda_rata
    : 0;

  const handleSumaChange = (val: number) => {
    const clamped = Math.min(300000, Math.max(10000, val));
    setCreditSuma(clamped);
    firePixelOnce();
  };

  const handleTermenChange = (val: number) => {
    const clamped = Math.min(60, Math.max(6, val));
    setCreditTermen(clamped);
    firePixelOnce();
  };

  return (
    <div className="relative">
      <div className="card">
        <h2 className="text-center card-title">Calculator de credit</h2>
        <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2">
          {/* Sliders */}
          <div className="space-y-4 md:space-y-8">
            <div>
              <div className="flex gap-4 justify-between items-center mb-1">
                <label htmlFor="credit-amount-input">Suma (MDL)</label>
                <input
                  id="credit-amount-input"
                  type="number"
                  value={creditSuma}
                  onChange={(e) => {
                    const v = Math.round(Number(e.target.value));
                    if (!isNaN(v)) handleSumaChange(v);
                  }}
                  className="input-calculator"
                />
              </div>
              <input
                type="range"
                value={creditSuma}
                min={10000}
                max={300000}
                step={500}
                onChange={(e) => handleSumaChange(Number(e.target.value))}
                className="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 p-0!"
              />
            </div>
            <div>
              <div className="flex gap-4 justify-between items-center mb-1">
                <label htmlFor="credit-period-input">Termen (luni)</label>
                <input
                  id="credit-period-input"
                  type="number"
                  value={creditTermen}
                  onChange={(e) => {
                    const v = Math.round(Number(e.target.value));
                    if (!isNaN(v)) handleTermenChange(v);
                  }}
                  className="input-calculator"
                />
              </div>
              <input
                type="range"
                value={creditTermen}
                min={6}
                max={60}
                step={1}
                onChange={(e) => handleTermenChange(Number(e.target.value))}
                className="mb-4 w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer border-0 p-0!"
              />
            </div>
          </div>

          {/* Result circle */}
          <div className="space-y-1">
            <motion.div
              key={primaRata}
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="mx-auto w-40 h-40 grid place-content-center gap-2 border-6 border-black-300 bg-black-300/50 rounded-full text-center"
            >
              <div className="text-sm">Prima rată</div>
              <div className="text-brand-500 text-3xl font-semibold">
                {primaRata.toLocaleString()}
              </div>
              <div className="text-sm">MDL</div>
            </motion.div>
            <div className="mt-4 flex justify-center">
              <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger
                  onClick={() => firePixelOnce()}
                  className="text-sm border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-colors px-4 py-1.5 rounded-md"
                >
                  Vezi preContractul
                </DialogTrigger>
                <DialogContent className="w-full sm:max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
                  <DialogHeader>
                    <DialogTitle>Informația preContractuală</DialogTitle>
                  </DialogHeader>
                  <PreContractContent
                    creditSuma={creditSuma}
                    creditTermen={creditTermen}
                    dae={dae}
                    graficCalculat={graficCalculat}
                    dobindaTotal={dobindaTotal}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mt-8 text-gray-400">
          <div className="flex gap-6 justify-between">
            <div>Dobânda anuală</div>
            <div>48 %</div>
          </div>
          <div className="flex gap-6 justify-between">
            <div>DAE <span>(Dobânda anuală efectivă)</span></div>
            <div>{dae} %</div>
          </div>
          <div className="flex gap-6 justify-between">
            <div>Costul total al creditului</div>
            <div>{dobindaTotal.toLocaleString()} MDL</div>
          </div>
          <div className="flex gap-6 justify-between">
            <div>Penalitate pe zi</div>
            <div>0.04 %</div>
          </div>
        </div>

        <div className="flex gap-2.5 items-center text-blue-400 justify-center mt-8">
          <span>Consumatorul este responsabil pentru rambursarea creditului.</span>
        </div>
      </div>
    </div>
  );
}

function PreContractContent({
  creditSuma,
  creditTermen,
  dae,
  graficCalculat,
  dobindaTotal,
}: {
  creditSuma: number;
  creditTermen: number;
  dae: number;
  graficCalculat: GraficRow[];
  dobindaTotal: number;
}) {
  return (
    <div>
      <p className="text-center my-6 text-lg font-medium">
        Graficul de Rambursare conform preContractului de mai jos
      </p>
      <GraficTable
        grafic={graficCalculat}
        dobindaTotal={dobindaTotal}
        credit={creditSuma}
      />
      <p className="text-center my-6 text-lg font-medium">
        Informaţii standard privind creditul pentru consumatori
      </p>
      <div className="w-full">
      <table className="table-fixed w-full border-collapse pre-contract-table border" id="preContractTable">
        <tbody>
          <tr>
            <td colSpan={2} className="table-subheader">
              1. Denumirea și datele de contact al Organizației
            </td>
          </tr>
          <tr>
            <td>Creditor</td>
            <td>Organizația de Creditare Nebancară &quot;Ideal Credit&quot; SRL</td>
          </tr>
          <tr>
            <td>Adresa</td>
            <td>
              m.Chișinău, str.Miron Costin, nr.25, of.115 (sucursala nr.1)
              <br /><br />sau<br /><br />
              or.Căușeni, str.Mihai Eminescu nr.17, of.47 (sediul principal)
            </td>
          </tr>
          <tr>
            <td>Nr. Telefon</td>
            <td>079066566, 078805060</td>
          </tr>
          <tr>
            <td>Adresa de Email</td>
            <td>info@idealcredit.md</td>
          </tr>
          <tr>
            <td>Pagina web</td>
            <td>www.idealcredit.md</td>
          </tr>
          <tr>
            <td colSpan={2} className="table-subheader">
              2. Descrierea principalelor caracteristici ale produsului de creditare
            </td>
          </tr>
          <tr>
            <td>Tipul de credit</td>
            <td>Credit nebancar</td>
          </tr>
          <tr>
            <td>
              Valoarea totală a creditului
              <br />
              <i className="text-sm">
                Înseamnă plafonul sau sumele totale puse la dispoziţie în temeiul contractului de credit
              </i>
            </td>
            <td>{creditSuma} MDL</td>
          </tr>
          <tr>
            <td>
              Condiţiile care reglementează tragerea creditului
              <br />
              <i className="text-sm">Înseamnă modul şi momentul de obţinere a banilor</i>
            </td>
            <td>Mijloacele bănești se vor elibera exclusiv din casieria Organizației</td>
          </tr>
          <tr>
            <td>Durata Contractului de credit</td>
            <td>{creditTermen} luni</td>
          </tr>
          <tr>
            <td>Ratele şi ordinea în care acestea vor fi achitate</td>
            <td>
              Conform graficului anexat la prezenta informație, acceptat și semnat de către client
              <br />
              <i>* Găsiți graficul mai sus!</i>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="table-subheader">3. Costurile creditului</td>
          </tr>
          <tr>
            <td>Dobînda lunară</td>
            <td>4% lunar</td>
          </tr>
          <tr>
            <td>Rata dobînzii aferente creditului</td>
            <td>48% (dobîndă fixă)</td>
          </tr>
          <tr>
            <td>Dobînda anuală efectivă (DAE)</td>
            <td>{dae} %</td>
          </tr>
          <tr>
            <td>
              <i className="text-sm">Dacă este cazul:</i>
              <br />
              Pentru obţinerea creditului, este obligatoriu să se încheie:
            </td>
            <td>
              În funcție de evaluarea riscului de credit, pot fi încheiate contracte de fidejusiune (garant) sau gaj (imobil)
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="table-subheader">4. Costuri aferente</td>
          </tr>
          <tr>
            <td>Comision pentru eliberarea creditului</td>
            <td>0.00 % din suma eliberată</td>
          </tr>
          <tr>
            <td>Comision pentru prelungirea Contractului</td>
            <td>
              Comisionul pentru prelungirea termenului Contractului este egal cu dobînda necesar a fi achitată pentru rata care a fost amînată. (La solicitarea clientului)
            </td>
          </tr>
          <tr>
            <td>Costuri în caz de întîrziere la plată</td>
            <td>
              Se va calcula o penalitate în mărime de 0.04% maxim, pentru fiecare zi de întîrziere din valoarea totală a creditului
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              În conformitate cu prevederile art. 15, alin. 7), lit. a) din Legea nr. 202 din 12.07.2013 privind contractele de credit pentru consumatori, orice alte plăți aferente creditului acordat (comisioane, taxe, penalități, dobînzii de întîrziere și orice alt tip de plată), cu excepția dobînzii, se vor încasa conform regulii ca acestea să nu depășească cumulativ 0,04% din valoarea totală a creditului pe o zi de credit înmulțit la numărul de zile pentru care este contractat creditul.
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="table-subheader">5. Alte aspecte juridice importante</td>
          </tr>
          <tr>
            <td>Dreptul de revocare</td>
            <td>
              Clientul are dreptul la revocarea Contractului timp de 14 zile de la data semnării lui cu, condiția că, creditul nu a fost eliberat din casierie. Organizația are dreptul la revocarea Contractului dacă clientul încalcă condițiile acestuia.
            </td>
          </tr>
          <tr>
            <td>Rambursare anticipată</td>
            <td>
              Clientul are dreptul să ramburseze anticipat creditul. Pentru aceasta, Organizația nu percepe careva taxe neprecăzute în Contract.
            </td>
          </tr>
          <tr>
            <td>Consultarea unei baze de date</td>
            <td>
              În cazul în care cererea de solicitare a creditului va fi respinsă, iar temei pentru respingere a constituit informația vizualizată într-o bază de date, Organizația va informa clientul referitor la baza de date accesată
            </td>
          </tr>
          <tr>
            <td>Dreptul la un proiect de Contract de credit</td>
            <td>
              Clientul are dreptul, la cerere, să obţină gratuit un exemplar al proiectului de Contract de credit.
            </td>
          </tr>
        </tbody>
      </table>

      </div>
      <div className="my-6">
        Îmi exprim acordul ca, Contractul de credit să fie încheiat în mai puțin de 15 zile calendaristice de la data semnării prezentei informații preContractuale.
      </div>
      <div className="text-right mt-12">Semnătura: ________________</div>
    </div>
  );
}
