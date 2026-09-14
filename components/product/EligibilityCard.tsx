import { Check } from "lucide-react";
import Card from "@/components/ds/Card";

export default function EligibilityCard({ items, intro }: { items: string[]; intro?: string }) {
    return (
        <Card className="mx-auto max-w-2xl gap-4">
            {intro && <p className="text-sm text-dc-text-muted">{intro}</p>}
            <ul className="flex flex-col gap-3">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-dc-text-muted">
                        <Check size={18} className="mt-0.5 shrink-0 text-dc-accent" strokeWidth={2.5} />
                        {item}
                    </li>
                ))}
            </ul>
        </Card>
    );
}
