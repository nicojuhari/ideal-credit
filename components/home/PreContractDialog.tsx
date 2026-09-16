"use client";

import type { GraficRow } from "ideal-credit";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PreContractContent from "@/components/PreContractContent";

export default function PreContractDialog({
    open,
    onOpenChange,
    sum,
    term,
    dae,
    grafic,
    totalCost,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    sum: number;
    term: number;
    dae: number;
    grafic: GraficRow[];
    totalCost: number;
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden">
                <DialogHeader>
                    <DialogTitle>Informația preContractuală</DialogTitle>
                </DialogHeader>
                <PreContractContent creditSuma={sum} creditTermen={term} dae={dae} graficCalculat={grafic} dobindaTotal={totalCost} />
            </DialogContent>
        </Dialog>
    );
}
