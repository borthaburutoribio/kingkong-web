import { Cog, Wrench, Settings2, DoorOpen } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { PhotoMarquee } from '@/components/PhotoMarquee'
import { REPUESTOS_GALERIA } from '@/lib/repuestos-gallery'

const CATEGORIAS = [
  {
    icon: Cog,
    titulo: 'Motores',
    items: ['Motores completos', 'Motores semiarmados'],
  },
  {
    icon: Wrench,
    titulo: 'Periféricos',
    items: [
      'Bomba de nafta',
      'Radiador de agua',
      'Alternador',
      'Compresor de aire acondicionado',
      'Burro de arranque',
    ],
  },
  {
    icon: Settings2,
    titulo: 'Transmisión',
    items: ['Cajas de velocidad', 'Cajas 4x4'],
  },
  {
    icon: DoorOpen,
    titulo: 'Carrocería',
    items: ['Capot', 'Puertas', 'Portones', 'Baúles', 'Guardabarros'],
  },
]

export default function Repuestos() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">STOCK PERMANENTE</div>
            <h1 className="font-display text-3xl sm:text-4xl uppercase">Repuestos</h1>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Algunas de las autopartes que tenemos disponibles. Si no encontrás lo que buscás,
              consultanos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 [&>*]:min-w-0">
            {CATEGORIAS.map((cat) => (
              <Card key={cat.titulo} className="border-border">
                <CardHeader>
                  <cat.icon className="w-7 h-7 kk-pink mb-2" />
                  <CardTitle className="font-display uppercase text-base">{cat.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm text-foreground/60">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="kk-pink shrink-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galería: cinta continua */}
      <section className="bg-secondary py-20 overflow-hidden">
        <div className="text-center mb-10 px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase">Galería</h2>
          <p className="mt-3 text-foreground/60">Un poco de lo que tenemos.</p>
        </div>
        <PhotoMarquee photos={REPUESTOS_GALERIA} />
      </section>
    </>
  )
}
