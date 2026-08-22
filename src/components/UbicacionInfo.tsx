import { MapPin, Clock, Truck, Banknote } from 'lucide-react'
import { MAPS } from '@/lib/site-data'

export function UbicacionInfo({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <div className="bg-white text-foreground p-6 border border-border border-t-8 border-t-primary flex flex-col h-full">
      {showTitle && <div className="font-display text-lg uppercase mb-4">Más información</div>}
      <ul className="space-y-4 text-[15px] flex-1">
        <li className="flex gap-3">
          <MapPin className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Eucaliptus 4036, Coronel Suárez</div>
            <div className="text-sm text-foreground/60">Provincia de Buenos Aires (B7540)</div>
          </div>
        </li>
        <li className="flex gap-3">
          <Clock className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Lunes a viernes, 8 a 16 hs</div>
            <div className="text-sm text-foreground/60">Horario de corrido</div>
          </div>
        </li>
        <li className="flex gap-3">
          <Truck className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Envíos a todo el país</div>
            <div className="text-sm text-foreground/60">¿No sos de Suárez? Te lo despachamos por expreso.</div>
          </div>
        </li>
        <li className="flex gap-3">
          <Banknote className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
          <div>
            <div className="font-bold">Formas de pago</div>
            <ul className="text-sm text-foreground/60 list-disc list-inside">
              <li>Efectivo</li>
              <li>Transferencia</li>
              <li>Mercado Pago</li>
            </ul>
          </div>
        </li>
      </ul>
      <a
        href={MAPS}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-2 bg-foreground text-white px-5 py-3 font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <MapPin className="w-4 h-4" /> Cómo llegar
      </a>
    </div>
  )
}
