import { UbicacionInfo } from '@/components/UbicacionInfo'

export default function Ubicacion() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-display text-3xl sm:text-4xl uppercase mb-10">Nuestra ubicación</h1>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">
          <div className="min-w-0">
            <UbicacionInfo showTitle={false} />
          </div>
          <div className="border border-border min-h-[420px] min-w-0">
            <iframe
              title="Mapa - King Kong Autopartes, Eucaliptus 4036, Coronel Suárez"
              src="https://maps.google.com/maps?q=King%20Kong%20Autopartes%20Eucaliptus%204036%20Coronel%20Su%C3%A1rez&z=15&output=embed"
              className="w-full h-full block"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
