import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";

export default function RecenziiButton({ className }: { className?: string }) {
  return (
    <a
      href="#recenzii"
      title="Sute de clienți mulțumiți"
      className={`flex items-center justify-center gap-2.5 bg-black-500 border rounded-full px-6 h-10 w-fit mx-auto ${className ?? ""}`}
    >
      <ThumbsUp className="text-green-400 text-lg shrink-0" weight="light" />
      <p className="text-sm">Sute de clienți mulțumiți</p>
    </a>
  );
}
