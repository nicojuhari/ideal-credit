import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autoritatea de supraveghere | Ideal Credit",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://idealcredit.md/autoritatea-de-supraveghere" },
};

export default function AutoritateaPage() {
  return <div className="container py-20">Autoritatea de supraveghere — Phase 3</div>;
}
