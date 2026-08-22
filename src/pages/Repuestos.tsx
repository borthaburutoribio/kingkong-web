import { Cog, Wrench, Settings2, DoorOpen } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { PhotoMarquee } from '@/components/PhotoMarquee'

import fotoMotorCompletoEnTaller from '@/assets/repuestos/repuesto-motor-completo-en-taller.jpg'
import fotoAlternadorRenaultClio from '@/assets/repuestos/repuesto-alternador-renault-clio.jpg'
import fotoAlternadorChevroletClassic from '@/assets/repuestos/repuesto-alternador-chevrolet-classic.jpg'
import fotoAlternadorEnStock from '@/assets/repuestos/repuesto-alternador-en-stock.jpg'
import fotoDiferencialChevroletCorsa from '@/assets/repuestos/repuesto-diferencial-chevrolet-corsa.jpg'
import fotoAlternadorListoParaLaVenta from '@/assets/repuestos/repuesto-alternador-listo-para-la-venta.jpg'
import fotoEquipoKingKongConAlternador from '@/assets/repuestos/repuesto-equipo-king-kong-con-alternador.jpg'
import fotoBurroDeArranque1 from '@/assets/repuestos/repuesto-burro-de-arranque-1.jpg'
import fotoBurroDeArranque2 from '@/assets/repuestos/repuesto-burro-de-arranque-2.jpg'
import fotoCompresorAcFordFocus from '@/assets/repuestos/repuesto-compresor-ac-ford-focus.jpg'
import fotoCompresorAcEnStock from '@/assets/repuestos/repuesto-compresor-ac-en-stock.jpg'
import fotoBombaDeAgua from '@/assets/repuestos/repuesto-bomba-de-agua.jpg'
import fotoGuardabarrosEnEstanteria from '@/assets/repuestos/repuesto-guardabarros-en-estanteria.jpg'
import fotoMotoresEnEstanteria from '@/assets/repuestos/repuesto-motores-en-estanteria.jpg'
import fotoMotorToyotaEnVehiculo from '@/assets/repuestos/repuesto-motor-toyota-en-vehiculo.jpg'
import fotoMotorDesarmado from '@/assets/repuestos/repuesto-motor-desarmado.jpg'
import fotoMotorEnDeposito1 from '@/assets/repuestos/repuesto-motor-en-deposito-1.jpg'
import fotoMotorConVentilador from '@/assets/repuestos/repuesto-motor-con-ventilador.jpg'
import fotoCompresoresAcEnPallet from '@/assets/repuestos/repuesto-compresores-ac-en-pallet.jpg'
import fotoCompresorRenaultClio from '@/assets/repuestos/repuesto-compresor-renault-clio.jpg'
import fotoModulosElectronicosEnStock from '@/assets/repuestos/repuesto-modulos-electronicos-en-stock.jpg'
import fotoCompresorAcEnTaller from '@/assets/repuestos/repuesto-compresor-ac-en-taller.jpg'
import fotoTableroVolkswagenSpacefox from '@/assets/repuestos/repuesto-tablero-volkswagen-spacefox.jpg'
import fotoCompresorAcDetalle from '@/assets/repuestos/repuesto-compresor-ac-detalle.jpg'
import fotoMotorFiat from '@/assets/repuestos/repuesto-motor-fiat.jpg'
import fotoMotorToyotaCorolla1 from '@/assets/repuestos/repuesto-motor-toyota-corolla-1.jpg'
import fotoGuardabarrosApilados from '@/assets/repuestos/repuesto-guardabarros-apilados.jpg'
import fotoMotorConTurbo from '@/assets/repuestos/repuesto-motor-con-turbo.jpg'
import fotoCapotEnStock from '@/assets/repuestos/repuesto-capot-en-stock.jpg'
import fotoPuertaDeAuto from '@/assets/repuestos/repuesto-puerta-de-auto.jpg'
import fotoBlowerHondaFit from '@/assets/repuestos/repuesto-blower-honda-fit.jpg'
import fotoToyotaCorollaGenerico from '@/assets/repuestos/repuesto-toyota-corolla-generico.jpg'
import fotoSoporteDeMotor from '@/assets/repuestos/repuesto-soporte-de-motor.jpg'
import fotoBombaDeNafta from '@/assets/repuestos/repuesto-bomba-de-nafta.jpg'
import fotoMotorConBurroArranque from '@/assets/repuestos/repuesto-motor-con-burro-arranque.jpg'
import fotoMotorCompletoEnPallet from '@/assets/repuestos/repuesto-motor-completo-en-pallet.jpg'
import fotoComputadorasYModulos from '@/assets/repuestos/repuesto-computadoras-y-modulos.jpg'
import fotoMotorConAlternador1 from '@/assets/repuestos/repuesto-motor-con-alternador-1.jpg'
import fotoMotorTapaValvulas from '@/assets/repuestos/repuesto-motor-tapa-valvulas.jpg'
import fotoMotorToyota2 from '@/assets/repuestos/repuesto-motor-toyota-2.jpg'
import fotoMotorConCajaVelocidades from '@/assets/repuestos/repuesto-motor-con-caja-velocidades.jpg'
import fotoMotorCompletoDetalle1 from '@/assets/repuestos/repuesto-motor-completo-detalle-1.jpg'
import fotoMotorCompletoDetalle2 from '@/assets/repuestos/repuesto-motor-completo-detalle-2.jpg'
import fotoMotorRenaultMegane from '@/assets/repuestos/repuesto-motor-renault-megane.jpg'
import fotoDepositoDeRepuestos from '@/assets/repuestos/repuesto-deposito-de-repuestos.jpg'
import fotoMotorEnDetalle from '@/assets/repuestos/repuesto-motor-en-detalle.jpg'
import fotoMotorRenaultDuster1 from '@/assets/repuestos/repuesto-motor-renault-duster-1.jpg'
import fotoMotorRenaultDuster2 from '@/assets/repuestos/repuesto-motor-renault-duster-2.jpg'
import fotoMotorCompletoGaleria from '@/assets/repuestos/repuesto-motor-completo-galeria.jpg'

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

const GALERIA = [
  { src: fotoMotorCompletoEnTaller, alt: 'Motor completo en el taller' },
  { src: fotoAlternadorRenaultClio, alt: 'Alternador para Renault Clio' },
  { src: fotoAlternadorChevroletClassic, alt: 'Alternador para Chevrolet Classic 1.6' },
  { src: fotoAlternadorEnStock, alt: 'Alternador en stock' },
  { src: fotoDiferencialChevroletCorsa, alt: 'Diferencial para Chevrolet Corsa 1.6' },
  { src: fotoAlternadorListoParaLaVenta, alt: 'Alternador listo para la venta' },
  { src: fotoEquipoKingKongConAlternador, alt: 'El equipo de King Kong Autopartes con un alternador en stock' },
  { src: fotoBurroDeArranque1, alt: 'Motor de arranque (burro de arranque)' },
  { src: fotoBurroDeArranque2, alt: 'Motor de arranque en stock' },
  { src: fotoCompresorAcFordFocus, alt: 'Compresor de aire acondicionado para Ford Focus' },
  { src: fotoCompresorAcEnStock, alt: 'Compresor de aire acondicionado en stock' },
  { src: fotoBombaDeAgua, alt: 'Bomba de agua en stock' },
  { src: fotoGuardabarrosEnEstanteria, alt: 'Guardabarros en estantería' },
  { src: fotoMotoresEnEstanteria, alt: 'Motores en estantería' },
  { src: fotoMotorToyotaEnVehiculo, alt: 'Motor de Toyota en el vehículo' },
  { src: fotoMotorDesarmado, alt: 'Motor desarmado' },
  { src: fotoMotorEnDeposito1, alt: 'Motor en nuestro depósito' },
  { src: fotoMotorConVentilador, alt: 'Motor con ventilador de refrigeración' },
  { src: fotoCompresoresAcEnPallet, alt: 'Compresores de aire acondicionado en stock' },
  { src: fotoCompresorRenaultClio, alt: 'Compresor para Renault Clio 1.6' },
  { src: fotoModulosElectronicosEnStock, alt: 'Módulos electrónicos en stock' },
  { src: fotoCompresorAcEnTaller, alt: 'Compresor de aire acondicionado en el taller' },
  { src: fotoTableroVolkswagenSpacefox, alt: 'Tablero de instrumentos para Volkswagen SpaceFox' },
  { src: fotoCompresorAcDetalle, alt: 'Compresor de aire acondicionado en detalle' },
  { src: fotoMotorFiat, alt: 'Motor para Fiat' },
  { src: fotoMotorToyotaCorolla1, alt: 'Motor de Toyota Corolla' },
  { src: fotoGuardabarrosApilados, alt: 'Guardabarros apilados en estantería' },
  { src: fotoMotorConTurbo, alt: 'Motor con turbo' },
  { src: fotoCapotEnStock, alt: 'Capot en stock' },
  { src: fotoPuertaDeAuto, alt: 'Puerta de auto en stock' },
  { src: fotoBlowerHondaFit, alt: 'Motor de aire para Honda Fit' },
  { src: fotoToyotaCorollaGenerico, alt: 'Repuesto para Toyota Corolla' },
  { src: fotoSoporteDeMotor, alt: 'Soporte de motor en stock' },
  { src: fotoBombaDeNafta, alt: 'Bomba de nafta en stock' },
  { src: fotoMotorConBurroArranque, alt: 'Motor con burro de arranque' },
  { src: fotoMotorCompletoEnPallet, alt: 'Motor completo en pallet' },
  { src: fotoComputadorasYModulos, alt: 'Computadoras y módulos electrónicos' },
  { src: fotoMotorConAlternador1, alt: 'Motor con alternador' },
  { src: fotoMotorTapaValvulas, alt: 'Motor con tapa de válvulas' },
  { src: fotoMotorToyota2, alt: 'Motor Toyota en stock' },
  { src: fotoMotorConCajaVelocidades, alt: 'Motor con caja de velocidades' },
  { src: fotoMotorCompletoDetalle1, alt: 'Motor completo en detalle' },
  { src: fotoMotorCompletoDetalle2, alt: 'Motor completo en detalle' },
  { src: fotoMotorRenaultMegane, alt: 'Motor para Renault Megane' },
  { src: fotoDepositoDeRepuestos, alt: 'Nuestro depósito de repuestos' },
  { src: fotoMotorEnDetalle, alt: 'Motor en detalle' },
  { src: fotoMotorRenaultDuster1, alt: 'Motor para Renault Duster' },
  { src: fotoMotorRenaultDuster2, alt: 'Motor para Renault Duster' },
  { src: fotoMotorCompletoGaleria, alt: 'Motor completo en stock' },
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
        <PhotoMarquee photos={GALERIA} />
      </section>
    </>
  )
}
