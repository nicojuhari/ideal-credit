import { OFFICES } from "@/lib/constants";

export default function ListaOficiilor() {
  return (
    <div className="grid grid-cols-1 gap-10">
      {OFFICES.map((item) => (
        <div key={item.id}>
          <p className="text-xl mb-4">{item.title}</p>
          <p>{item.city}</p>
          <p>
            {item.street} {item.addressNumbers}
          </p>
          <p>Luni - Vineri: 08:30 - 16:30</p>
          {item.note && <p className="text-sm italic mt-2">{item.note}</p>}
          <iframe
            src={item.map}
            width="100%"
            height="450"
            className="mt-4"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Harta ${item.title}`}
          />
        </div>
      ))}
    </div>
  );
}
