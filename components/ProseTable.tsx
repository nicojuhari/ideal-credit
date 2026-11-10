import * as React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

// Maps raw markdown-table elements (what MDX compiles `| a | b |` into) onto
// the shadcn table primitives, restyled to the "dc" hairline/mono system used
// across the rest of the site (see GraficTable.tsx for the reference look).

// The MDX compiler's GFM table output leaves whitespace-only text nodes
// between elements (e.g. a "\n" directly inside <table>, before <thead>).
// Those are invalid as direct children of table/thead/tbody/tr in HTML -
// browsers silently drop them on the server-rendered markup but React's
// hydration doesn't, causing a hydration mismatch. Strip them before render.
function withoutWhitespaceNodes(children: React.ReactNode): React.ReactNode {
    return React.Children.toArray(children).filter((child) => !(typeof child === "string" && child.trim() === ""));
}

export function ProseTable({ className, children, ...props }: React.ComponentProps<"table">) {
    return (
        <div className="not-prose my-8 border border-dc-line">
            <Table className={cn("text-[13px]", className)} {...props}>
                {withoutWhitespaceNodes(children)}
            </Table>
        </div>
    );
}

export function ProseThead({ className, children, ...props }: React.ComponentProps<"thead">) {
    return (
        <TableHeader className={cn("[&_tr]:border-dc-line", className)} {...props}>
            {withoutWhitespaceNodes(children)}
        </TableHeader>
    );
}

export function ProseTbody({ className, children, ...props }: React.ComponentProps<"tbody">) {
    return (
        <TableBody className={cn("divide-y divide-dc-line font-dc-mono text-dc-text-muted", className)} {...props}>
            {withoutWhitespaceNodes(children)}
        </TableBody>
    );
}

export function ProseTr({ className, children, ...props }: React.ComponentProps<"tr">) {
    return (
        <TableRow className={cn("border-dc-line hover:bg-dc-surface", className)} {...props}>
            {withoutWhitespaceNodes(children)}
        </TableRow>
    );
}

export function ProseTh({ className, ...props }: React.ComponentProps<"th">) {
    return (
        <TableHead
            className={cn(
                "h-auto whitespace-nowrap px-4 py-3 text-left font-dc-sans font-normal uppercase tracking-[.08em] text-dc-text-muted",
                className,
            )}
            {...props}
        />
    );
}

export function ProseTd({ className, ...props }: React.ComponentProps<"td">) {
    return <TableCell className={cn("whitespace-normal px-4 py-2.5 text-dc-text-muted", className)} {...props} />;
}
