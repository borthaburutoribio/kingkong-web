import { Cog, Wrench, Settings2, DoorOpen, ImageIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

const CATEGORIAS = [
  {
    icon: Cog,
    titulo: 'Motores',
    items: ['Motores completos o semiarmados'],
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
            <h2 className="font-display text-3xl sm:text-4xl uppercase">Nuestros Repuestos</h2>
            <p className="mt-4 text-foreground/60 leading-relaxed">
              Algunas de las autopartes que tenemos disponibles. Si no encontrás lo que buscás,
              consultanos — seguro lo tenemos.
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

      {/* Carrusel de fotos */}
      <section className="bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">GALERÍA</div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">Nuestro Stock</h2>
          </div>
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((n) => (
                <CarouselItem key={n}>
                  <div className="aspect-[4/3] border border-dashed border-primary/40 bg-white flex flex-col items-center justify-center gap-2 text-center px-6">
                    <ImageIcon className="w-8 h-8 kk-pink opacity-50" />
                    <span className="text-sm font-semibold text-foreground/40">
                      Foto próximamente
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex border-border" />
            <CarouselNext className="hidden sm:flex border-border" />
          </Carousel>
        </div>
      </section>
    </>
  )
}
