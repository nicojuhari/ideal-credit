const offices = [
  {
    id: 1,
    title: "Sucursala Nr. 1",
    address: "m. Chișinău",
    addressNumbers: "str. Miron Costin 25, of.115, MD-2068",
    mobile: "+37378805060",
    mobileDisplay: "078 80 50 60",
    note: "(este nevoie de programare prealabilă)",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.5126752925935!2d28.866588177004928!3d47.049792671144246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfa93379893%3A0x6b21737dc3080047!2sIdeal%20Credit%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2sat!4v1708098130151!5m2!1sen!2sat",
  },
  {
    id: 2,
    title: "Sediul principal",
    address: "or. Căușeni",
    addressNumbers: "str. Mihai Eminescu 17, of.47, MD-4304",
    mobile: "+37379066566",
    mobileDisplay: "0790 66 5 66",
    note: null,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1070.8698170211678!2d29.40806812052061!3d46.641495352200025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9ace138f629b3%3A0xac0504d023064a9d!2sIdeal%20Credit%20C%C4%83u%C8%99eni!5e0!3m2!1sen!2sat!4v1708097806741!5m2!1sen!2sat",
  },
];

export default function ListaOficiilor() {
  return (
    <div className="grid grid-cols-1 gap-10">
      {offices.map((item) => (
        <div key={item.id}>
          <p className="text-xl mb-4">{item.title}</p>
          <p>{item.address}</p>
          <p>{item.addressNumbers}</p>
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
