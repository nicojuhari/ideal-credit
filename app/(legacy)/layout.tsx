import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";

/**
 * Legacy chrome (pre-v4 design). Every route that has not yet been rebuilt on the
 * v4 design system lives in this group. Move a route to `app/(v4)/` when it is
 * rebuilt — see design-system/README.md.
 */
export default function LegacyLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="flex-auto">{children}</main>
            <Footer />
        </>
    );
}
