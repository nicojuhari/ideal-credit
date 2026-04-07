import { FAQ_ITEMS } from "@/lib/constants";

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FAQ() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      {FAQ_ITEMS.map((item) => (
        <div key={item.question} className="card">
          <div className="text-xl mb-4">{item.question}</div>
          <div className="text-gray-400">{item.answer}</div>
        </div>
      ))}
    </div>
  );
}
