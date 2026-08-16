import { useRef } from 'react'
import { Cog, Wrench, Settings2, DoorOpen } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

import fotoPuerta from '@/assets/repuestos/repuesto-puerta.jpg'
import fotoCapotBlanco from '@/assets/repuestos/repuesto-capot-blanco.jpg'
import fotoCapotNegro from '@/assets/repuestos/repuesto-capot-negro.jpg'
import fotoMotorCaja from '@/assets/repuestos/repuesto-motor-caja.jpg'
import fotoMotor from '@/assets/repuestos/repuesto-motor.jpg'
import fotoCajaVelocidades from '@/assets/repuestos/repuesto-caja-velocidades.jpg'
import fotoCompresorAc from '@/assets/repuestos/repuesto-compresor-ac.jpg'
import fotoBombaNafta from '@/assets/repuestos/repuesto-bomba-nafta.jpg'
import fotoBurroArranque from '@/assets/repuestos/repuesto-burro-arranque.jpg'
import fotoCarroceria from '@/assets/repuestos/repuesto-carroceria.jpg'
import fotoOperacion from '@/assets/repuestos/repuesto-operacion.jpg'
import fotoLocal from '@/assets/repuestos/repuesto-local.jpg'
import fotoEcu from '@/assets/repuestos/repuesto-ecu.jpg'
import fotoEstanteria2 from '@/assets/repuestos/repuesto-estanteria2.jpg'
import fotoTablero from '@/assets/repuestos/repuesto-tablero.jpg'
import fotoBlowerCaptiva from '@/assets/repuestos/repuesto-blower-captiva.jpg'
import fotoBlowerFit from '@/assets/repuestos/repuesto-blower-fit.jpg'
import fotoModuloRav4 from '@/assets/repuestos/repuesto-modulo-rav4.jpg'
import fotoRadiadores from '@/assets/repuestos/repuesto-radiadores.jpg'
import fotoMotor2 from '@/assets/repuestos/repuesto-motor2.jpg'
import fotoMotor3 from '@/assets/repuestos/repuesto-motor3.jpg'
import fotoEquipo from '@/assets/repuestos/repuesto-equipo.jpg'
import fotoRecepcion1 from '@/assets/repuestos/repuesto-recepcion1.jpg'
import fotoDeposito from '@/assets/repuestos/repuesto-deposito.jpg'
import fotoMotor4 from '@/assets/repuestos/repuesto-motor4.jpg'
import fotoCompresores2 from '@/assets/repuestos/repuesto-compresores2.jpg'
import fotoRecepcion2 from '@/assets/repuestos/repuesto-recepcion2.jpg'
import fotoMotorDuster from '@/assets/repuestos/repuesto-motor-duster.jpg'
import fotoGuardabarros from '@/assets/repuestos/repuesto-guardabarros.jpg'

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

const GALERIA = [
  { src: fotoLocal, alt: 'Local de King Kong Autopartes en Coronel Suárez' },
  { src: fotoMotor, alt: 'Motor completo en stock' },
  { src: fotoPuerta, alt: 'Puerta de auto disponible' },
  { src: fotoCapotBlanco, alt: 'Capot en buen estado' },
  { src: fotoCompresorAc, alt: 'Compresor de aire acondicionado' },
  { src: fotoCajaVelocidades, alt: 'Caja de velocidades' },
  { src: fotoBombaNafta, alt: 'Bomba de nafta' },
  { src: fotoBurroArranque, alt: 'Burro de arranque' },
  { src: fotoCapotNegro, alt: 'Capot color oscuro en stock' },
  { src: fotoCarroceria, alt: 'Puertas y guardabarros de distintos modelos' },
  { src: fotoMotorCaja, alt: 'Motor con caja de velocidades' },
  { src: fotoOperacion, alt: 'Trabajando en el desarme de un vehículo' },
  { src: fotoEcu, alt: 'Computadoras y módulos electrónicos' },
  { src: fotoEstanteria2, alt: 'Estantería con repuestos variados' },
  { src: fotoTablero, alt: 'Tablero de instrumentos' },
  { src: fotoBlowerCaptiva, alt: 'Motor de aire para Chevrolet Captiva' },
  { src: fotoBlowerFit, alt: 'Motor de aire para Honda Fit' },
  { src: fotoModuloRav4, alt: 'Módulo electrónico para Toyota RAV4' },
  { src: fotoRadiadores, alt: 'Radiadores en stock' },
  { src: fotoMotor2, alt: 'Motor con caja acoplada' },
  { src: fotoMotor3, alt: 'Motor con alternador' },
  { src: fotoEquipo, alt: 'El equipo de King Kong Autopartes' },
  { src: fotoRecepcion1, alt: 'Recepción de vehículos' },
  { src: fotoDeposito, alt: 'Nuestro depósito de repuestos' },
  { src: fotoMotor4, alt: 'Motor en detalle' },
  { src: fotoCompresores2, alt: 'Compresores de aire acondicionado en stock' },
  { src: fotoRecepcion2, alt: 'Recepción de vehículos' },
  { src: fotoMotorDuster, alt: 'Motor para Renault Duster' },
  { src: fotoGuardabarros, alt: 'Guardabarros en stock' },
]

export default function Repuestos() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }))

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
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl uppercase">Galería</h2>
            <p className="mt-3 text-foreground/60">Un poco de lo que tenemos.</p>
          </div>
          <Carousel
            className="w-full max-w-2xl mx-auto"
            opts={{ loop: true }}
            plugins={[autoplay.current]}
          >
            <CarouselContent>
              {GALERIA.map((foto, i) => (
                <CarouselItem key={i}>
                  <div className="aspect-[4/3] overflow-hidden border border-border">
                    <img
                      src={foto.src}
                      alt={foto.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-3 text-center text-sm text-foreground/60">{foto.alt}</p>
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
