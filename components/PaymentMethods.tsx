import Link from "next/link";

const methods = [
  {
    title: "În numerar",
    description: (
      <>
        În unul din{" "}
        <Link href="/contacte#adresa-oficiilor" className="link">
          oficiile companiei
        </Link>{" "}
        Ideal Credit.
      </>
    ),
  },
  {
    title: "Online Banking",
    description: "Transfer bancar/de pe card pe contul IBAN al Ideal Credit.",
  },
  {
    title: "Bancă",
    description: "La orice filială a băncii VictoriaBank din țară.",
  },
  {
    title: "Poșta",
    description: "La orice oficiu poștal din Republica Moldova.",
  },
];

export default function PaymentMethods() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      {methods.map((item) => (
        <div key={item.title} className="card">
          <h3 className="text-xl">{item.title}</h3>
          <p className="text-gray-400 mt-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
