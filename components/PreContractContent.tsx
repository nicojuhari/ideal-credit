import type { GraficRow } from "ideal-credit";
import GraficTable from "./GraficTable";
import Info from "./ui/Info";

function SectionMarker({ children }: { children: React.ReactNode }) {
    return (
        <p className="mb-5 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.1em] text-dc-text-muted">
            <span className="block h-[9px] w-[9px] shrink-0 bg-dc-proof" aria-hidden />
            {children}
        </p>
    );
}

function SectionHeader({ n, title }: { n: number; title: string }) {
    return (
        <div className="bg-dc-accent px-5 py-3 text-[13px] font-semibold uppercase tracking-[.03em] text-dc-on-accent">
            {n}. {title}
        </div>
    );
}

function Row({ label, hint, value }: { label: React.ReactNode; hint?: React.ReactNode; value: React.ReactNode }) {
    return (
        <div className="grid gap-2 border-b border-dc-line px-5 py-4 last:border-b-0 sm:grid-cols-[minmax(0,.85fr)_minmax(0,1.4fr)] sm:gap-6">
            <div className="text-[13px] leading-[1.55] text-dc-text-muted">
                {label}
                {hint && <span className="mt-1.5 block text-xs italic text-dc-text-muted/70">{hint}</span>}
            </div>
            <div className="text-[13px] leading-[1.6] text-dc-text">{value}</div>
        </div>
    );
}

function NoteRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-b border-dc-line px-5 py-4 text-xs leading-[1.6] text-dc-text-muted last:border-b-0">{children}</div>
    );
}

export default function PreContractContent({
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
        <div className="flex flex-col gap-10">
            <div>
                <SectionMarker>Graficul de Rambursare conform preContractului de mai jos</SectionMarker>
                <GraficTable grafic={graficCalculat} dobindaTotal={dobindaTotal} credit={creditSuma} />
            </div>

            <div>
                <SectionMarker>Informații standard privind creditul pentru consumatori</SectionMarker>
                <div className="border border-dc-line">
                    <SectionHeader n={1} title="Denumirea și datele de contact al Organizației" />
                    <Row label="Creditor" value={'Organizația de Creditare Nebancară "Ideal Credit" SRL'} />
                    <Row
                        label="Adresa"
                        value={
                            <>
                                m.Chișinău, str. Ginta Latină, nr. 18, of. 5 (sucursala nr.1)
                                <br />
                                <br />
                                sau
                                <br />
                                <br />
                                or.Căușeni, str. Mihai Eminescu nr. 17, of. 47 (sediul principal)
                            </>
                        }
                    />
                    <Row label="Nr. Telefon" value="068270101, 061252777" />
                    <Row label="Adresa de Email" value="info@idealcredit.md" />
                    <Row label="Pagina web" value="www.idealcredit.md" />

                    <SectionHeader n={2} title="Descrierea principalelor caracteristici ale produsului de creditare" />
                    <Row label="Tipul de credit" value="Credit nebancar" />
                    <Row
                        label="Valoarea totală a creditului"
                        hint="Înseamnă plafonul sau sumele totale puse la dispoziţie în temeiul contractului de credit"
                        value={`${creditSuma} MDL`}
                    />
                    <Row
                        label="Condiţiile care reglementează tragerea creditului"
                        hint="Înseamnă modul şi momentul de obţinere a banilor"
                        value="Mijloacele bănești se vor elibera exclusiv din casieria Organizației"
                    />
                    <Row label="Durata Contractului de credit" value={`${creditTermen} luni`} />
                    <Row
                        label="Ratele şi ordinea în care acestea vor fi achitate"
                        value={
                            <>
                                Conform graficului anexat la prezenta informație, acceptat și semnat de către client
                                <br />
                                <i>* Găsiți graficul mai sus!</i>
                            </>
                        }
                    />

                    <SectionHeader n={3} title="Costurile creditului" />
                    <Row label="Dobînda lunară" value="4% lunar" />
                    <Row label="Rata dobînzii aferente creditului" value="48% (dobîndă fixă)" />
                    <Row label="Dobînda anuală efectivă (DAE)" value={`${dae} %`} />
                    <Row
                        label={
                            <>
                                <i>Dacă este cazul:</i>
                                <br />
                                Pentru obţinerea creditului, este obligatoriu să se încheie:
                            </>
                        }
                        value="La primul credit, fidejusiunea (contract de garant personal) este obligatorie. Gajul imobiliar poate fi solicitat suplimentar pentru sume mari sau venituri nestabile. Clienții recurenți cu istoricul de plăți fără restanțe pot beneficia de condiții preferențiale, inclusiv fără fidejusiune."
                    />

                    <SectionHeader n={4} title="Costuri aferente" />
                    <Row label="Comision pentru eliberarea creditului" value="0.00 % din suma eliberată" />
                    <Row
                        label="Comision pentru prelungirea Contractului"
                        value="Comisionul pentru prelungirea termenului Contractului este egal cu dobînda necesar a fi achitată pentru rata care a fost amînată. (La solicitarea clientului)"
                    />
                    <Row
                        label="Costuri în caz de întîrziere la plată"
                        value="Se va calcula o penalitate în mărime de 0.04% maxim, pentru fiecare zi de întîrziere din valoarea totală a creditului"
                    />
                    <NoteRow>
                        În conformitate cu prevederile art. 15, alin. 7), lit. a) din Legea nr. 202 din 12.07.2013 privind contractele de
                        credit pentru consumatori, orice alte plăți aferente creditului acordat (comisioane, taxe, penalități, dobînzii de
                        întîrziere și orice alt tip de plată), cu excepția dobînzii, se vor încasa conform regulii ca acestea să nu
                        depășească cumulativ 0,04% din valoarea totală a creditului pe o zi de credit înmulțit la numărul de zile pentru
                        care este contractat creditul.
                    </NoteRow>

                    <SectionHeader n={5} title="Alte aspecte juridice importante" />
                    <Row
                        label="Dreptul de revocare"
                        value="Clientul are dreptul la revocarea Contractului timp de 14 zile de la data semnării lui cu, condiția că, creditul nu a fost eliberat din casierie. Organizația are dreptul la revocarea Contractului dacă clientul încalcă condițiile acestuia."
                    />
                    <Row
                        label="Rambursare anticipată"
                        value="Clientul are dreptul să ramburseze anticipat creditul. Pentru aceasta, Organizația nu percepe careva taxe neprecăzute în Contract."
                    />
                    <Row
                        label="Consultarea unei baze de date"
                        value="În cazul în care cererea de solicitare a creditului va fi respinsă, iar temei pentru respingere a constituit informația vizualizată într-o bază de date, Organizația va informa clientul referitor la baza de date accesată"
                    />
                    <Row
                        label="Dreptul la un proiect de Contract de credit"
                        value="Clientul are dreptul, la cerere, să obţină gratuit un exemplar al proiectului de Contract de credit."
                    />
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <p className="text-[13px] leading-[1.6] text-dc-text-muted">
                    Îmi exprim acordul ca, Contractul de credit să fie încheiat în mai puțin de 15 zile calendaristice de la data
                    semnării prezentei informații preContractuale.
                </p>
                <p className="text-right text-[13px] text-dc-text-muted">Semnătura: ________________</p>
                <Info>Consumatorul este responsabil pentru rambursarea creditului.</Info>
            </div>
        </div>
    );
}
