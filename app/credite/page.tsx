import type { Metadata } from "next";
import ServiciiList from "@/components/ServiciiList";
import ShortAboutUs from "@/components/ShortAboutUs";

export const metadata: Metadata = {
  title: "Credite pentru persoane fizice și juridice | Ideal Credit",
  description:
    "Credite pentru persoane fizice și juridice în Moldova. Soluții financiare urgente pentru nevoi personale sau investiții în afaceri - simplu și sigur!",
  alternates: { canonical: "https://idealcredit.md/credite" },
};

export default function CreditePage() {
  return (
    <>
      <section className="container">
        <h1 className="font-semibold text-center text-6xl md:text-8xl">Credite</h1>
        <h2 className="text-center mt-4 px-4 md:px-0 text-gray-400 md:text-xl md:max-w-xl mx-auto text-lg font-light">
          Finanțare simplă pentru persoane fizice și juridice.
        </h2>
      </section>
      <ServiciiList />
      <ShortAboutUs />
    </>
  );
}
