import { yearsSinceFoundation } from "@/lib/utils";

const stats = [
    {
        value: `${yearsSinceFoundation}+`,
        label: "ani pe piață",
        sub: "Din 2010",
    },
    {
        value: "300.000",
        label: "lei suma maximă",
        sub: "De la 10.000 MDL",
    },
    {
        value: "1–3h",
        label: "timp de decizie",
        sub: "În programul de lucru",
    },
    {
        value: "0%",
        label: "penalități anticipate",
        sub: "Dobândă fixă pe tot termenul",
    },
];

export default function StatsBar() {
    return (
        <div className="border-y border-white/5 bg-black-600/40">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center px-4 py-6 md:py-8">
                            <span className="text-2xl md:text-3xl font-semibold text-brand-gradient">{stat.value}</span>
                            <span className="mt-1 text-sm text-white font-medium">{stat.label}</span>
                            <span className="mt-0.5 text-xs text-gray-500">{stat.sub}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
