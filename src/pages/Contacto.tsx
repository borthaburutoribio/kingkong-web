import { Phone } from 'lucide-react'
import { ContactActions } from '@/components/ContactActions'
import { UbicacionInfo } from '@/components/UbicacionInfo'
import { WSP } from '@/lib/site-data'

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
        <h2 className="font-display text-3xl sm:text-4xl uppercase mb-10">Contacto</h2>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch [&>*]:min-w-0">
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

          {/* Columna 2: info práctica (misma que en Nuestra ubicación) */}
          <UbicacionInfo />
        </div>

        {/* Redes sociales */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/kingkongautopartes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-11 h-11 bg-white border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
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
