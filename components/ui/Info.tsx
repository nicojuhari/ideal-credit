import { Lightbulb } from "lucide-react";

export default function Info({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`flex gap-2.5 items-center text-blue-300 justify-center ${className ?? ""}`}>
            <Lightbulb className="w-5 h-5 shrink-0" />
            <span className="text-sm">{children}</span>
        </div>
    );
}
