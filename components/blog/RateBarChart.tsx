"use client";

import { Bar, BarChart, CartesianGrid, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Caption from "./Caption";

type RateDatum = {
    label: string;
    value: number;
    /** "subject" = the market the article is about, "note" = a secondary outlier worth calling out */
    tone?: "subject" | "note";
};

const TONE_COLOR: Record<string, string> = {
    subject: "var(--color-dc-accent)",
    note: "var(--color-dc-proof)",
};

export default function RateBarChart({
    data,
    unit = "%",
    caption,
}: {
    data: RateDatum[];
    unit?: string;
    caption?: string;
}) {
    return (
        <figure className="not-prose my-8 border border-dc-line bg-dc-surface p-4 md:p-6">
            <div style={{ height: data.length * 44 + 24 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 4, right: 28, bottom: 4, left: 0 }} barCategoryGap={10}>
                        <CartesianGrid horizontal={false} stroke="var(--color-dc-line)" />
                        <XAxis
                            type="number"
                            tick={{ fill: "var(--color-dc-text-muted)", fontSize: 11, fontFamily: "var(--font-dc-mono)" }}
                            axisLine={{ stroke: "var(--color-dc-line)" }}
                            tickLine={false}
                            unit={unit}
                        />
                        <YAxis
                            type="category"
                            dataKey="label"
                            width={88}
                            tick={{ fill: "var(--color-dc-text-muted)", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            cursor={{ fill: "var(--color-dc-line)", opacity: 0.4 }}
                            contentStyle={{
                                background: "var(--color-dc-bg)",
                                border: "1px solid var(--color-dc-line)",
                                borderRadius: 0,
                                fontSize: 11,
                                fontFamily: "var(--font-dc-mono)",
                                color: "var(--color-dc-text)",
                            }}
                            formatter={(value) => [`${value}${unit}`, ""]}
                            labelFormatter={() => ""}
                        />
                        <Bar dataKey="value" radius={0} maxBarSize={20}>
                            {data.map((entry) => (
                                <Cell key={entry.label} fill={entry.tone ? TONE_COLOR[entry.tone] : "var(--color-dc-line-hover)"} />
                            ))}
                            <LabelList
                                dataKey="value"
                                position="right"
                                formatter={(value) => `${value}${unit}`}
                                fill="var(--color-dc-text)"
                                fontFamily="var(--font-dc-mono)"
                                fontSize={11}
                            />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {caption && (
                <Caption as="figcaption" className="mt-4">
                    {caption}
                </Caption>
            )}
        </figure>
    );
}
