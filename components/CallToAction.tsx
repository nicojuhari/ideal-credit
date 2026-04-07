import ButtonsCTA from "@/components/ui/ButtonsCTA";

export default function CallToAction({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-6 lg:space-y-8 ${className ?? ""}`}>
      <p className="text-2xl md:text-3xl text-center">
        {children ?? "Solicită un credit!"}
      </p>
      <ButtonsCTA />
    </div>
  );
}
