export default function RegulamenteList() {
  return (
    <div className="card">
      <h3 className="text-center title mb-8">Regulamente interne</h3>
      <div className="flex flex-col gap-6">
        <a href="/regulament-cadrul-de-administrare.pdf" target="_blank" rel="noopener noreferrer" className="link">
          1. Regulament privind cadrul de administrare
        </a>
        <a href="/regulament-prestarea-serviciilor.pdf" target="_blank" rel="noopener noreferrer" className="link">
          2. Regulament privind prestarea serviciilor în cardul OCN Ideal Credit SRL
        </a>
        <a href="/regulament-solutionarea-pretentiilor.pdf" target="_blank" rel="noopener noreferrer" className="link">
          3. Regulament privind mecanismele de soluționare a pretențiilor clienților în cardul OCN Ideal Credit SRL
        </a>
      </div>
    </div>
  );
}
