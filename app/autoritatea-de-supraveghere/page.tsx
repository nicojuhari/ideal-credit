import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL",
  description:
    "Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este Comisia Națională a Pieței Financiare.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://idealcredit.md/autoritatea-de-supraveghere" },
};

export default function AutoritateaPage() {
  return (
    <div className="container sm-container relative my-4 md:my-6">
      <div className="card">
        <div className="text-2xl text-center leading-relaxed mb-10">
          Autoritatea de supraveghere a O.C.N. Ideal Credit SRL este{" "}
          <strong className="text-brand-500">
            Comisia Națională a Pieței Financiare.
          </strong>
        </div>

        <div className="text-lg text-center my-6">Contactele instituției</div>
        <div className="flex flex-col gap-4">
          <div>
            Adresa de contact:{" "}
            <span className="font-bold">
              mun. Chișinău, bd. Ștefan cel Mare și Sfânt, nr. 77.
            </span>
          </div>
          <div>
            Pagina web:{" "}
            <a
              className="font-bold link"
              href="https://www.cnpf.md"
              target="_blank"
              rel="nofollow noreferrer"
            >
              www.cnpf.md
            </a>
          </div>
          <div>
            E-mail: <span className="font-bold">office@cnpf.md</span>
          </div>
        </div>

        <div className="text-lg text-center my-6">Reclamațiile pot fi depuse</div>
        <ul className="list-disc flex flex-col gap-4 my-6 list-inside">
          <li>
            prin e-mail (cu respectarea reglementărilor cu privire la forma
            electronică - cu aplicarea semnăturii electronice);
          </li>
          <li>prin intermediul oficiilor poștale;</li>
          <li>
            la sediul CNPF, în cutia poștală amplasată la intrare în sediul
            instituției;
          </li>
        </ul>

        <div className="my-12">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            Telefonul consumatorului*{" "}
            <a
              className="text-brand-500 font-bold text-3xl"
              href="tel:+37322859595"
            >
              (+373 22) 85 95 95
            </a>
          </div>
          <div className="italic text-sm text-gray-500">
            * Tariful către acest număr de apel va fi considerat apel cu tarif
            normal conform rețelei și tipului de abonament al inițiatorului.
          </div>
        </div>
      </div>
    </div>
  );
}
