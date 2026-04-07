import { WarningCircle } from "@phosphor-icons/react/dist/ssr";

export default function Info({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex gap-2.5 items-center text-blue-400 justify-center ${className ?? ""}`}>
      <WarningCircle className="w-5 h-5 shrink-0" weight="light" />
      <span>{children}</span>
    </div>
  );
}
