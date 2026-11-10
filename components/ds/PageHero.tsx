import Container from "./Container";
import Breadcrumb from "./Breadcrumb";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  breadcrumb?: { name: string; url: string }[];
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Buttons under the subtitle. */
  actions?: React.ReactNode;
  /** Right column (a card), desktop only side by side. */
  aside?: React.ReactNode;
  /** Content under the two columns, e.g. a proof strip. */
  children?: React.ReactNode;
  className?: string;
};

// Same hero as the home and credit pages, for the other pages of the site.
export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  subtitle,
  actions,
  aside,
  children,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("pb-24 pt-8 sm:pt-10 lg:pb-36", className)}>
      <Container>
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        <div
          className={cn(
            "grid items-center gap-12 lg:gap-24",
            breadcrumb ? "mt-12 lg:mt-20" : "mt-6",
            aside && "lg:grid-cols-[minmax(0,1fr)_400px]",
          )}
        >
          <div>
            {eyebrow && (
              <p className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted">
                <span
                  className="block h-2 w-2 shrink-0 bg-dc-proof"
                  aria-hidden
                />
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-[17ch] text-[clamp(40px,5.4vw,80px)] font-semibold leading-[1.02] tracking-[-.04em] text-dc-text">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-7 max-w-[42ch] text-lg leading-[1.55] text-[#c8c8c8] md:text-xl">
                {subtitle}
              </p>
            )}
            {actions && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {actions}
              </div>
            )}
          </div>
          {aside}
        </div>
        {children}
      </Container>
    </section>
  );
}

/** Small uppercase label used inside cards. */
export const cardLabel =
  "text-xs font-medium uppercase tracking-[.12em] text-dc-text-muted";
