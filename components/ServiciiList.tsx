import Link from "next/link";

const groups = [
  { name: "business", title: "Afaceri" },
  { name: "personal", title: "Personale" },
  { name: "professional", title: "Profesii" },
  { name: "scop", title: "Scopuri speciale" },
];

const services = [
  { title: "Credit pentru nevoi personale", link: "/credit-pentru-nevoi-personale", group: "personal" },
  { title: "Credit pînă la salariu", link: "/credit-pina-la-salariu", group: "personal" },
  { title: "Credit pentru afaceri mici", link: "/credit-pentru-afaceri-mici", group: "business" },
  { title: "Credit pentru agricultură", link: "/credit-pentru-agricultura", group: "business" },
  { title: "Credit pentru militari", link: "/credit-pentru-militari", group: "professional" },
  { title: "Credit pentru medici", link: "/credit-pentru-medici", group: "professional" },
  { title: "Credit pentru polițiști", link: "/credit-pentru-politisti", group: "professional" },
  { title: "Credit pentru reparație", link: "/credit-pentru-reparatie", group: "scop" },
  { title: "Credit pentru automobil", link: "/credit-pentru-automobil", group: "scop" },
];

export default function ServiciiList() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 lg:gap-8">
        {groups.map((group) => (
          <div key={group.name} className="card">
            <h3 className="text-2xl md:text-3xl mb-8">{group.title}</h3>
            <ul className="space-y-6">
              {services
                .filter((s) => s.group === group.name)
                .map((item) => (
                  <li key={item.link}>
                    <Link
                      href={`/credite${item.link}`}
                      title={item.title}
                      className="link text-lg md:text-xl"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
