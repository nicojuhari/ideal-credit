import { yearsSinceFoundation } from "@/lib/utils";

const stats = [
 {
 value:`${yearsSinceFoundation}+`,
 label:"ani pe piață",
 sub:"Activi din 2010 în Moldova",
 },
 {
 value:"1–3h",
 label:"timp de decizie",
 sub:"Răspuns rapid în ziua depunerii",
 },
 {
 value:"0%",
 label:"penalități anticipate",
 sub:"Rambursezi anticipat fără costuri",
 },
 {
 value:"Fixă",
 label:"dobândă pe tot termenul",
 sub:"Fără comisioane ascunse",
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
 <span className="mt-0.5 text-xs">{stat.sub}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
}
