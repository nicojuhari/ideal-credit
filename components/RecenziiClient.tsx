import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

type Review =
  | { name: string; text: string; image?: undefined }
  | { image: string; name?: undefined; text?: undefined };

const reviews: Review[] = [
  {
    name: "Alexandru, Chișinău",
    text: "Mulțumesc! Am primit creditul în 24 de ore, fără bătăi de cap. Echipa a fost foarte profesionistă.",
  },
  {
    name: "Maria, Antreprenoare",
    text: "Sunt recunoscătoare pentru transparență. Fără comisioane ascunse, dobânda a fost negociată și am putut investi în afacere.",
  },
  { image: "/recenzii/ideal-credit-recenzie-1.webp" },
  {
    name: "Elena",
    text: "Sunt foarte mulțumită. Am luat credit de consum cu dobândă bună și am renovat bucătăria cum îmi doream.",
  },
  { image: "/recenzii/ideal-credit-recenzie-2.webp" },
  {
    name: "Victor",
    text: "Mulțumesc Ideal Credit - banca m-a refuzat, dar voi m-ați ajutat în 2 zile să cumpăr mașina dorită.",
  },
  { image: "/recenzii/ideal-credit-recenzie-3.webp" },
  {
    name: "Ion, Proprietar magazin",
    text: "Am modernizat magazinul în 3 luni. Proces simplu, dobândă fixă și consultanță. Sunt recunoscător",
  },
  {
    name: "Ana",
    text: "Am cumpărat utilaje în 2 zile și asta ne-a ajutat să creștem. Mulțumim pentru sprijin!",
  },
];

export default function RecenziiClient() {
  return (
    <div>
      <h2 className="title text-center">Ce spun clienții noștri?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((item, i) => (
          <div key={i} className="card flex flex-col">
            {item.image ? (
              <div className="m-auto">
                <Image
                  src={item.image}
                  alt="Recenzie client despre Ideal Credit"
                  width={300}
                  height={200}
                  className="rounded-lg m-auto mb-4"
                />
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="text-brand-500 text-lg shrink-0" weight="fill" />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6 max-w-sm mx-auto">
                <p className="text-gray-400 line-clamp-3">{item.text}</p>
                <p className="text-xl mt-4">{item.name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
