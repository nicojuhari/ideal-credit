import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politica de Cookies - OCN Ideal Credit SRL",
    description: "Politica de Cookies - OCN Ideal Credit SRL",
};

export default function CookiesPage() {
    return (
        <div className="container sm-container my-6">
            <div className="card space-y-4 text-lg">
                <h1 className="card-title text-center">
                    Politica de Cookies
                    <br />
                    OCN Ideal Credit SRL
                </h1>

                <p>
                    Această Politică de Cookies explică modul în care OCN Ideal Credit SRL (&quot;noi&quot;, &quot;nouă&quot; sau
                    &quot;compania noastră&quot;) utilizează cookies și tehnologii similare pe site-ul nostru web.
                </p>

                <h2 className="text-xl mt-8 mb-2">Ce sunt cookie-urile?</h2>
                <p>
                    Cookie-urile sunt fișiere text mici care sunt plasate pe dispozitivul dvs. atunci când vizitați un site web. Acestea
                    sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, precum și
                    pentru a furniza informații proprietarilor site-ului.
                </p>

                <h2 className="text-xl mt-8 mb-2">Ce tipuri de cookies folosim?</h2>
                <p>Utilizăm următoarele tipuri de cookies:</p>
                <ul className="list-inside list-decimal space-y-2.5 mt-2">
                    <li>
                        <strong>Cookies strict necesare:</strong> Esențiale pentru funcționarea site-ului nostru web.
                    </li>
                    <li>
                        <strong>Cookies de performanță:</strong> Ne permit să numărăm vizitele și sursele de trafic.
                    </li>
                    <li>
                        <strong>Cookies funcționale:</strong> Permit site-ului să ofere funcționalități îmbunătățite.
                    </li>
                    <li>
                        <strong>Cookies de targetare:</strong> Pot fi setate de partenerii noștri de publicitate.
                    </li>
                </ul>

                <h2 className="text-xl mt-8 mb-2">Cookies de terță parte</h2>
                <p>Utilizăm servicii de la terțe părți care pot seta cookies:</p>
                <ul className="list-inside list-decimal space-y-2.5 mt-2">
                    <li>
                        <strong>Google Analytics:</strong> Analizăm modul în care vizitatorii folosesc site-ul nostru.
                    </li>
                    <li>
                        <strong>Meta (Facebook):</strong> Utilizăm pixeli Meta pentru a măsura eficacitatea reclamelor.
                    </li>
                    <li>
                        <strong>Meta Ads și Google Ads:</strong> Pot utiliza cookies pentru reclame relevante.
                    </li>
                    <li>
                        <strong>Cloudflare:</strong> Îmbunătățim performanța și securitatea site-ului nostru.
                    </li>
                </ul>

                <h2 className="text-xl mt-8 mb-2">Cum puteți controla cookies?</h2>
                <p>
                    Puteți controla și/sau șterge cookies după cum doriți. Puteți șterge toate cookies care sunt deja pe computerul dvs. și
                    puteți seta majoritatea browserelor să le blocheze.
                </p>

                <h2 className="text-xl mt-8 mb-2">Contact</h2>
                <div className="mt-2">
                    OCN Ideal Credit SRL,
                    <br />
                    or.Căușeni, str.Mihai Eminescu, nr.17, of.47
                    <br />
                    email: info@idealcredit.md
                    <br />
                    tel: 079066566, 078805060
                </div>

                <p className="mt-8 text-gray-500">Această Politică de Cookies a fost actualizată ultima dată la 26.09.2024.</p>
            </div>
        </div>
    );
}
