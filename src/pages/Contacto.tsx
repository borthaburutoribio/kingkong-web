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

function TikTok({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82c-.9-.8-1.44-1.94-1.44-3.2h-3.1v12.78a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.67-3.01 3.38-2.48V9.66c-3.45-.46-6.48 2.22-6.48 5.64a5.7 5.7 0 0 0 5.7 5.7c3.14 0 5.7-2.55 5.7-5.7V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3c-1.24 0-2.39-.4-3.25-1.48z" />
    </svg>
  )
}

function Facebook({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.06 5.66 21.2 10.44 22v-7.03H7.9v-2.91h2.55V9.85c0-2.52 1.49-3.92 3.77-3.92 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.2 22 17.06 22 12.06z" />
    </svg>
  )
}

export default function Contacto() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-display text-3xl sm:text-4xl uppercase mb-10">Contacto</h1>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch [&>*]:min-w-0">
          {/* Columna 1: Llamar o escribir */}
          <div className="bg-white border border-border p-6 flex flex-col">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-4">LLAMANOS O ESCRIBINOS</div>
            <ul className="space-y-3">
              {Object.values(WSP).map((c) => (
                <li
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
                </li>
              ))}
            </ul>
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
            className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@kingkongautopartes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <TikTok className="w-4 h-4" /> TikTok
          </a>
          <a
            href="https://www.facebook.com/Kingkongautopartes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <Facebook className="w-4 h-4" /> Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
