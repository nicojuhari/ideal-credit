const steps = [
  {
    title: "Solicită un credit",
    text: "Depune cererea online, prin telefon, WhatsApp sau la unul din oficiile noastre.",
  },
  {
    title: "Primești răspunsul",
    text: "Analizăm cererea și îți comunicăm decizia rapid - în general în 1-3 ore.",
  },
  {
    title: "Semnezi contractul",
    text: "Dacă decizia e pozitivă, semnezi contractul în oficiu și primești banii imediat",
  },
];

export default function HowItWorks() {
  return (
    <div>
      <h2 className="card-title text-center">Obține un credit în 3 pași simpli</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {steps.map((item, index) => (
          <div key={index} className="card group">
            <div className="group-hover:scale-105 transition-all duration-300">
              <span className="font-bold text-8xl text-green-400">{index + 1}</span>
              <p className="text-xl mt-2">{item.title}</p>
            </div>
            <p className="mt-4 text-gray-400">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
