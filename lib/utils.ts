import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

// Romanian date format: 15.09.2026
export function formatDateRo(date: Date | string | number): string {
 return new Date(date).toLocaleDateString("ro-RO");
}

//years one market from 15.04.2010
export const yearsSinceFoundation = (() => {
 const founded = new Date("2010-04-15");
 const today = new Date();
 let years = today.getFullYear() - founded.getFullYear();

 // Adjust if anniversary hasn't occurred yet this year
 if (today.getMonth() < founded.getMonth() || (today.getMonth() === founded.getMonth() && today.getDate() < founded.getDate())) {
 years--;
 }

 return years;
})();
