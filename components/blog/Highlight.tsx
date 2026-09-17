// A single pulled-out statement - the article's main twist, conclusion, or
// a side note - placed right after the header to hook the reader before
// "Cifrele". Deliberately spare: an accent hairline and larger serif italic
// text, no label/eyebrow (see brand/blog-editorial-strategy.md, "No repeated
// branding chrome").

export default function Highlight({ children }: { children: React.ReactNode }) {
    return (
        <div className="not-prose my-10 border-l-2 border-dc-accent pl-6 md:pl-8">
            <p className="font-dc-serif text-[20px] italic leading-[1.35] text-dc-text md:text-[22px]">{children}</p>
        </div>
    );
}
