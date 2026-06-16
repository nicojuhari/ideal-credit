import { Lightbulb } from "lucide-react";

export default function Info({ children, className }: { children: React.ReactNode; className?: string }) {
 return (
 <div
 className={`flex gap-2.5 p-2 px-3 rounded-lg text-blue-400 items-center border border-blue-400/50 justify-center ${className ??""}`}
 >
 <Lightbulb className="w-6 h-6 shrink-0" />
 <span className="text-sm">{children}</span>
 </div>
 );
}
