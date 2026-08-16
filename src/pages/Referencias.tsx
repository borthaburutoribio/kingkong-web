import { Star } from 'lucide-react'
import { MAPS, RESEÑAS } from '@/lib/site-data'

export default function Referencias() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">CLIENTES REALES</div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">Nuestras Referencias</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-display text-lg">4,7</span>{' '}
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-foreground/60">
                reseñas en Google
              </a>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 [&>*]:min-w-0">
          {RESEÑAS.map((r) => (
            <div key={r.nombre} className="bg-secondary border border-border p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-foreground/80">"{r.texto}"</p>
              <div className="mt-4 text-sm font-bold">{r.nombre}</div>
              <div className="text-xs text-foreground/50">Reseña de Google</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
