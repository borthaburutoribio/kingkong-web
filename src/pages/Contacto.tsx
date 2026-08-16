import { Phone, MapPin, Clock, Truck, Banknote } from 'lucide-react'
import { ContactActions } from '@/components/ContactActions'
import { WSP, MAPS } from '@/lib/site-data'

function Instagram({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Contacto() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl sm:text-4xl uppercase mb-10">Teléfonos de Contacto</h2>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Columna 1: Llamar o escribir */}
          <div className="bg-white border border-border p-6 flex flex-col">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-4">LLAMANOS O ESCRIBINOS</div>
            <div className="space-y-3">
              {Object.values(WSP).map((c) => (
                <div
                  key={c.nombre}
                  className="flex flex-wrap items-center justify-between gap-3 border border-border px-4 py-3.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-display text-primary-foreground shrink-0">
                      {c.nombre[0]}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{c.nombre}</div>
                      <div className="text-xs text-foreground/50 flex items-center gap-1.5">
                        <Phone className="w-3 h-3" /> {c.tel}
                      </div>
                    </div>
                  </div>
                  <ContactActions contact={c} variant="compact" />
                </div>
              ))}
            </div>
          </div>

          {/* Columna 2: Nuestra ubicación */}
          <div className="bg-white text-foreground p-6 border border-border border-t-8 border-t-primary flex flex-col">
            <div className="font-display text-lg uppercase mb-4">Nuestra ubicación</div>
            <div className="space-y-4 text-[15px] flex-1">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Eucaliptus 4036, Coronel Suárez</div>
                  <div className="text-sm text-foreground/60">Provincia de Buenos Aires (B7540)</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Lunes a viernes, 8 a 16 hs</div>
                  <div className="text-sm text-foreground/60">Horario de corrido</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Envíos a todo el país</div>
                  <div className="text-sm text-foreground/60">¿No sos de Suárez? Te lo despachamos por expreso.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Banknote className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Formas de pago</div>
                  <div className="text-sm text-foreground/60">Efectivo, transferencia y Mercado Pago.</div>
                </div>
              </div>
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground text-white px-5 py-3 font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <MapPin className="w-4 h-4" /> Cómo llegar
            </a>
          </div>

          {/* Columna 3: Mapa */}
          <div className="border border-border min-h-[280px] lg:min-h-0">
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

        {/* Redes sociales */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/kingkongautopartes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" /> @kingkongautopartes
          </a>
          <a
            href="https://www.tiktok.com/@kingkongautopartes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://www.facebook.com/Kingkongautopartes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
