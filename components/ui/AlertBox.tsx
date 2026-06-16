interface AlertBoxProps {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    heading: string;
    children: React.ReactNode;
    color?: "amber" | "brand" | "green";
}

const colorMap = {
    amber: { bg: "bg-amber-500/10", text: "text-amber-400" },
    brand: { bg: "bg-brand-500/10", text: "text-brand-500" },
    green: { bg: "bg-green-500/10", text: "text-green-400" },
};

export default function AlertBox({ icon: Icon, heading, children, color = "amber" }: AlertBoxProps) {
    const { bg, text } = colorMap[color];

    return (
        <section className="container">
            <div className="max-w-2xl mx-auto rounded-2xl border border-white/8 bg-black-600/60 p-6 md:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg} ${text}`}>
                        <Icon size={20} />
                    </span>
                    <h2 className="text-lg font-semibold text-white">{heading}</h2>
                </div>
                <div className="flex flex-col gap-3 text-sm leading-relaxed">{children}</div>
            </div>
        </section>
    );
}
