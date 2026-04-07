import { CircleAlert } from "lucide-react";

export default function Info({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`flex gap-2.5 items-center text-blue-500 justify-center ${className ?? ""}`}>
            <CircleAlert className="w-5 h-5 shrink-0" />
            <span className="text-sm">{children}</span>
        </div>
    );
}
