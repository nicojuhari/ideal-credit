import { Check } from "lucide-react";

interface ChecklistCardProps {
    heading: string;
    intro?: string;
    items: string[];
    centered?: boolean;
}

export default function ChecklistCard({ heading, intro, items, centered = false }: ChecklistCardProps) {
    return (
        <section className="container">
            <h2 className="title text-center">{heading}</h2>
            <div className={`card flex flex-col gap-4${centered ? " max-w-2xl mx-auto" : ""}`}>
                {intro && <p className="text-sm">{intro}</p>}
                <ul className="space-y-3">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm">
                            <Check className="w-4 h-4 shrink-0 text-green-400 mt-0.5" strokeWidth={3} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
