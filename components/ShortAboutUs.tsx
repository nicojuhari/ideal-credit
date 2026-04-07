import { Check } from "lucide-react";

const list = [
  "Pe piața nebancară din Moldova din 2010.",
  "Condiții clare și costuri transparente.",
  "Mii de credite acordate cu success.",
  "Credite rapide și avantajoase.",
  "Sute de clienți mulțumiți!",
];

export default function ShortAboutUs() {
  const experience = new Date().getFullYear() - 2010;

  return (
    <section className="container">
      <h2 className="title text-center">De ce să alegi Ideal Credit?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="text-center mx-auto bg-black-500 border-6 border-black-400 rounded-full max-w-[280px] aspect-square flex flex-col justify-center">
            <div className="text-brand-500 text-[140px] font-bold leading-none -mt-6">
              {experience}
            </div>
            <p className="text-xl">ani de experiență</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <ul className="space-y-6">
            {list.map((item) => (
              <li key={item} className="flex gap-2.5 items-center">
                <Check className="w-5 h-5 shrink-0 text-green-500" strokeWidth={3} />
                <span className="text-xl text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
