import { useState } from 'react'
import {
  Phone,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  FileCheck,
  Star,
  MessageCircle,
  CheckCircle2,
  Search,
  PackageCheck,
  Wrench,
  ChevronRight,
  ChevronLeft,
  BadgeCheck,
  Banknote,
  Car,
  HelpCircle,
} from 'lucide-react'
import logoImg from './assets/logo.jpg'
import fotoPredio from './assets/fotos/predio.jpg'
import fotoMotores from './assets/fotos/motores.jpg'
import fotoCajas from './assets/fotos/cajas.jpg'
import fotoDesarme from './assets/fotos/desarme.jpg'

function Instagram({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const WSP = {
  mauro: { nombre: 'Mauro', tel: '+54 9 2926 54-7050', link: 'https://wa.me/5492926547050' },
  agustin: { nombre: 'Agustín', tel: '+54 9 2926 51-8539', link: 'https://wa.me/5492926518539' },
  gonzalo: { nombre: 'Gonzalo', tel: '+54 9 2926 40-1066', link: 'https://wa.me/5492926401066' },
}

const MSG = encodeURIComponent('Hola! Vi la página web de King Kong Autopartes y quería consultar por un repuesto.')

const MAPS = 'https://www.google.com/maps/search/?api=1&query=King+Kong+Autopartes+Eucaliptus+4036+Coronel+Suarez'

const PIEZAS: { label: string; msg: string }[] = [
  { label: 'MOTORES', msg: 'un motor' },
  { label: 'CAJAS DE VELOCIDAD', msg: 'una caja de velocidad' },
  { label: 'PUERTAS', msg: 'una puerta' },
  { label: 'COMPUTADORAS (ECU)', msg: 'una computadora (ECU)' },
  { label: 'ALTERNADORES', msg: 'un alternador' },
  { label: 'BOMBAS DE NAFTA', msg: 'una bomba de nafta' },
  { label: 'COMPRESORES', msg: 'un compresor' },
  { label: 'TROMPAS Y PARAGOLPES', msg: 'una trompa o paragolpes' },
  { label: 'ÓPTICAS', msg: 'una óptica' },
  { label: 'TRENES Y EJES', msg: 'un tren o eje' },
  { label: 'ASIENTOS E INTERIORES', msg: 'asientos o piezas de interior' },
  { label: 'ELECTROVENTILADORES', msg: 'un electroventilador' },
]

const MODELOS: Record<string, string[]> = {
  Volkswagen: ['Gol', 'Gol Trend', 'Polo', 'Vento', 'Bora', 'Suran', 'Fox', 'Voyage', 'Up!', 'Amarok'],
  Chevrolet: ['Corsa', 'Classic', 'Aveo', 'Onix', 'Prisma', 'Cruze', 'Agile', 'Spin', 'Tracker', 'S10'],
  Ford: ['Fiesta', 'Focus', 'Ka', 'EcoSport', 'Ranger', 'Falcon', 'Mondeo', 'F-100'],
  Fiat: ['Palio', 'Siena', 'Uno', 'Punto', 'Cronos', 'Strada', 'Toro', 'Qubo', 'Fiorino', 'Duna'],
  Renault: ['Clio', 'Sandero', 'Logan', 'Mégane', 'Kangoo', 'Duster', 'Twingo', 'Fluence', 'R19'],
  Peugeot: ['206', '207', '208', '306', '307', '308', '405', '408', 'Partner'],
  Citroën: ['C3', 'C4', 'C4 Lounge', 'Berlingo', 'Xsara'],
  Toyota: ['Hilux', 'Corolla', 'Etios', 'Yaris', 'SW4'],
  Honda: ['Civic', 'Fit', 'City', 'CR-V', 'HR-V'],
  Nissan: ['March', 'Versa', 'Sentra', 'Frontier', 'Kicks'],
  Suzuki: ['Fun', 'Swift', 'Vitara', 'Grand Vitara'],
  Jeep: ['Renegade', 'Compass', 'Grand Cherokee'],
  Chery: ['QQ', 'Tiggo', 'Fulwin'],
  Hyundai: ['i10', 'Accent', 'Tucson', 'Santa Fe', 'H1'],
  Kia: ['Picanto', 'Rio', 'Cerato', 'Sportage'],
  'Mercedes-Benz': ['Sprinter', 'Vito', 'Clase A', 'Clase C'],
}

const MARCAS = Object.keys(MODELOS)

const ASEGURADORAS = [
  'Sancor Seguros',
  'Federación Patronal',
  'La Segunda',
  'Seguros Rivadavia',
  'San Cristóbal',
  'Mercantil Andina',
  'Provincia Seguros',
  'La Caja',
  'Allianz',
  'Zurich',
  'Orbis Seguros',
  'Berkley',
]

const RESEÑAS = [
  {
    nombre: 'Alejandro Besano',
    texto:
      'Variedad de autopartes y en buen estado. Excelente atención y precios. Lo más importante, todo de origen legal.',
  },
  {
    nombre: 'Ezequiel Olmedo',
    texto: 'Excelente atención y súper rápida la atención de los chicos que trabajan ahí.',
  },
  {
    nombre: 'Rodrigo Osorio',
    texto: '¡Tienen de todo, excelentes precios!',
  },
  {
    nombre: 'Lucio Schwerdt',
    texto: 'Muchos repuestos de todo tipo de vehículos, ¡recomendable!',
  },
  {
    nombre: 'Hernán Grandjean',
    texto: 'Gracias a los chicos de King Kong Autopartes. Excelente atención.',
  },
  {
    nombre: 'Rafa Prieto',
    texto: 'Tienen muchos repuestos y a un muy buen precio 👍',
  },
]

function abrirWhatsApp(texto: string) {
  window.open(`${WSP.agustin.link}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer')
}

function WspButton({ link, children }: { link: string; children: React.ReactNode }) {
  return (
    <a
      href={`${link}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-base tracking-wide transition-transform hover:-translate-y-0.5 bg-[#ef78ba] text-[#111114]"
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  )
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logoImg}
        alt="King Kong Autopartes - Desarmadero Oficial Coronel Suárez"
        className="w-11 h-11 rounded-full shrink-0 object-cover"
      />
      <div className="leading-none">
        <div className="font-display text-lg tracking-tight">
          King Kong <span className="kk-pink">Autopartes</span>
        </div>
        <div className="text-[10px] tracking-[0.25em] font-semibold opacity-70 mt-0.5">
          DESARMADERO OFICIAL · CORONEL SUÁREZ
        </div>
      </div>
    </div>
  )
}

/* ============ Buscador interactivo ============ */

type GridItem = { key: string; label: string; sub?: string; otro?: boolean }

function GridSelect({
  items,
  onPick,
  dark,
  final,
}: {
  items: GridItem[]
  onPick: (key: string) => void
  dark?: boolean
  final?: boolean
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {items.map((it) => (
        <button
          key={it.key}
          onClick={() => onPick(it.key)}
          className={`group text-left p-5 border transition-colors cursor-pointer ${
            dark
              ? 'border-white/15 hover:border-[#ef78ba] hover:bg-white/5'
              : 'border-black/10 hover:border-[#ef78ba] hover:bg-[#faf3f8]'
          } ${it.otro ? (dark ? 'border-dashed border-white/30' : 'border-dashed border-black/25') : ''}`}
        >
          <div className="font-display text-sm sm:text-base leading-snug flex items-center gap-2">
            {it.otro && <HelpCircle className="w-4 h-4 kk-pink shrink-0" />}
            {it.label}
          </div>
          {it.sub && <div className={`mt-1 text-xs ${dark ? 'text-white/50' : 'text-black/50'}`}>{it.sub}</div>}
          <div className="mt-3 text-xs kk-pink font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            {final ? (
              <>
                <MessageCircle className="w-3.5 h-3.5" /> IR AL WHATSAPP
              </>
            ) : (
              <>
                ELEGIR <ChevronRight className="w-3 h-3" />
              </>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}

function Migas({
  pasos,
  onVolver,
  dark,
}: {
  pasos: string[]
  onVolver: () => void
  dark?: boolean
}) {
  if (pasos.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <button
        onClick={onVolver}
        className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-2 border transition-colors cursor-pointer ${
          dark ? 'border-white/25 hover:border-[#ef78ba] hover:text-[#ef78ba]' : 'border-black/20 hover:border-[#ef78ba] hover:text-[#ef78ba]'
        }`}
      >
        <ChevronLeft className="w-3.5 h-3.5" /> VOLVER
      </button>
      {pasos.map((p) => (
        <span key={p} className="kk-bg-pink text-[#111114] text-xs font-bold px-3 py-2">
          {p}
        </span>
      ))}
    </div>
  )
}

/** Camino 1: marca → modelo → pieza → WhatsApp */
function BuscadorPorMarca() {
  const [marca, setMarca] = useState<string | null>(null)
  const [modelo, setModelo] = useState<string | null>(null)

  const volver = () => {
    if (modelo) setModelo(null)
    else setMarca(null)
  }

  const elegirPieza = (key: string) => {
    const pieza = PIEZAS.find((p) => p.label === key)
    const piezaTxt = pieza ? pieza.msg : 'un repuesto (te cuento bien por acá)'
    const autoTxt =
      marca === 'OTRA'
        ? 'mi auto (te paso marca y modelo por acá)'
        : `un ${marca}${modelo && modelo !== 'OTRO' ? ` ${modelo}` : ' (te paso el modelo por acá)'}`
    abrirWhatsApp(`Hola! Busco ${piezaTxt} para ${autoTxt}.`)
  }

  if (!marca) {
    return (
      <GridSelect
        items={[...MARCAS.map((m) => ({ key: m, label: m.toUpperCase() })), { key: 'OTRA', label: 'OTRA MARCA', otro: true }]}
        onPick={(k) => {
          if (k === 'OTRA') {
            setMarca('OTRA')
            setModelo('OTRO')
          } else {
            setMarca(k)
          }
        }}
      />
    )
  }

  if (!modelo) {
    return (
      <div>
        <Migas pasos={[marca.toUpperCase()]} onVolver={volver} />
        <div className="font-display text-lg uppercase mb-4">¿Qué modelo?</div>
        <GridSelect
          items={[
            ...(MODELOS[marca] || []).map((m) => ({ key: m, label: m.toUpperCase() })),
            { key: 'OTRO', label: 'OTRO MODELO', otro: true },
          ]}
          onPick={setModelo}
        />
      </div>
    )
  }

  return (
    <div>
      <Migas
        pasos={[marca === 'OTRA' ? 'OTRA MARCA' : marca.toUpperCase(), ...(marca !== 'OTRA' ? [modelo === 'OTRO' ? 'OTRO MODELO' : modelo.toUpperCase()] : [])]}
        onVolver={volver}
      />
      <div className="font-display text-lg uppercase mb-4">¿Qué pieza buscás?</div>
      <GridSelect
        items={[...PIEZAS.map((p) => ({ key: p.label, label: p.label })), { key: 'OTRA_PIEZA', label: 'OTRA PIEZA', otro: true }]}
        onPick={elegirPieza}
        final
      />
    </div>
  )
}

/** Camino 2: pieza → auto → WhatsApp */
function BuscadorPorPieza() {
  const [pieza, setPieza] = useState<string | null>(null)

  const elegirAuto = (key: string) => {
    const p = PIEZAS.find((x) => x.label === pieza)
    const piezaTxt = p ? p.msg : 'un repuesto (te cuento bien por acá)'
    const autoTxt = key === 'OTRA' ? 'mi auto (te paso marca y modelo por acá)' : `un ${key} (te paso el modelo por acá)`
    abrirWhatsApp(`Hola! Busco ${piezaTxt} para ${autoTxt}.`)
  }

  if (!pieza) {
    return (
      <GridSelect
        items={[...PIEZAS.map((p) => ({ key: p.label, label: p.label })), { key: 'OTRA_PIEZA', label: 'OTRA PIEZA', otro: true }]}
        onPick={setPieza}
        dark
      />
    )
  }

  return (
    <div>
      <Migas pasos={[pieza === 'OTRA_PIEZA' ? 'OTRA PIEZA' : pieza]} onVolver={() => setPieza(null)} dark />
      <div className="font-display text-lg uppercase mb-4 text-white">¿Para qué auto?</div>
      <GridSelect
        items={[...MARCAS.map((m) => ({ key: m, label: m.toUpperCase() })), { key: 'OTRA', label: 'OTRA MARCA', otro: true }]}
        onPick={elegirAuto}
        dark
        final
      />
    </div>
  )
}

/* ============ Página ============ */

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111114]">
      {/* Barra superior */}
      <div className="kk-bg-pink text-[#111114] text-xs sm:text-sm font-semibold">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Lunes a viernes · 8 a 16 hs de corrido
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" /> Envíos a todo el país
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Desarmadero legal · RUDAC
          </span>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a href="#buscador" className="hover:text-[#ef78ba]">Buscá tu repuesto</a>
            <a href="#repuestos" className="hover:text-[#ef78ba]">Piezas</a>
            <a href="#como" className="hover:text-[#ef78ba]">Cómo comprar</a>
            <a href="#opiniones" className="hover:text-[#ef78ba]">Opiniones</a>
            <a href="#contacto" className="hover:text-[#ef78ba]">Contacto</a>
          </nav>
          <a
            href={`${WSP.agustin.link}?text=${MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111114] text-white px-4 py-2.5 text-sm font-bold hover:bg-[#ef78ba] hover:text-[#111114] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Consultar por</span> WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative kk-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${fotoPredio})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111114]/60 via-transparent to-[#111114]" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-14 sm:pt-24 sm:pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ef78ba] text-[#ef78ba] px-3 py-1.5 text-xs font-bold tracking-[0.2em] mb-6 bg-[#111114]/60">
              <BadgeCheck className="w-4 h-4" />
              PRIMER DESARMADERO OFICIAL DE CORONEL SUÁREZ
            </div>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.02] uppercase">
              El repuesto que buscás,{' '}
              <span className="kk-pink">hoy</span> y al{' '}
              <span className="kk-underline">mejor precio</span>.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              Stock real que se renueva todas las semanas, todas las marcas y modelos. Consultás
              por WhatsApp, te mandamos fotos y precio de la pieza en el momento, y te la enviamos
              a cualquier punto del país. Atendemos particulares, talleres y aseguradoras.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#buscador"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-base tracking-wide transition-transform hover:-translate-y-0.5 bg-[#ef78ba] text-[#111114]"
              >
                <Search className="w-5 h-5" /> Buscar mi repuesto
              </a>
              <WspButton link={WSP.agustin.link}>Consultar directo</WspButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ef78ba] text-[#ef78ba]" />
                  ))}
                </div>
                <span className="font-bold">4,7</span>
                <span className="text-white/60">en Google</span>
              </div>
              <div className="text-white/60">
                <span className="font-bold text-white">+5.000</span> clientes nos siguen en redes
              </div>
            </div>
          </div>

          {/* Tarjeta de confianza */}
          <div className="bg-white text-[#111114] p-7 border-t-8 border-[#ef78ba] shadow-2xl">
            <div className="font-display text-xl uppercase mb-5">Comprá tranquilo</div>
            <ul className="space-y-4 text-[15px]">
              {[
                ['Ves la pieza antes de pagar', 'Te mandamos fotos y video de la pieza real por WhatsApp.'],
                ['Piezas revisadas y probadas', 'Desarmamos con cuidado y probamos cada pieza antes de venderla.'],
                ['Envíos a todo el país', 'Despachamos por el expreso que te quede mejor.'],
                ['Origen garantizado', 'Desarmadero oficial: cada pieza con su identificación y comprobante.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ef78ba] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">{t}</div>
                    <div className="text-sm text-black/60">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-white/10 overflow-hidden py-4">
          <div className="kk-marquee flex whitespace-nowrap w-max">
            {[...PIEZAS, ...PIEZAS].map((p, i) => (
              <span key={i} className="font-display text-sm tracking-widest mx-6 text-white/50">
                {p.label} <span className="kk-pink mx-2">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Buscador por marca */}
      <section id="buscador" className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">BUSCADOR DE REPUESTOS</div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase flex items-center gap-3">
              <Car className="w-8 h-8 kk-pink" /> Empezá por tu auto
            </h2>
            <p className="mt-3 text-black/60 max-w-xl">
              Elegí marca y modelo, después la pieza — y el mensaje de WhatsApp sale armado.
            </p>
          </div>
        </div>
        <BuscadorPorMarca />
      </section>

      {/* Galería / así trabajamos */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { img: fotoMotores, t: 'MOTORES EN STOCK', d: 'Nafteros, gasoleros y diésel' },
            { img: fotoCajas, t: 'CAJAS DE VELOCIDAD', d: 'Probadas antes de la venta' },
            { img: fotoDesarme, t: 'DESARME PROLIJO', d: 'Cada pieza se recupera con cuidado' },
          ].map(({ img, t, d }) => (
            <div key={t} className="relative group overflow-hidden">
              <img src={img} alt={t} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111114]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <div className="font-display text-base">{t}</div>
                <div className="text-xs text-white/70">{d}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-black/40">Imágenes ilustrativas.</p>
      </section>

      {/* Buscador por pieza */}
      <section id="repuestos" className="kk-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">¿PREFERÍS EMPEZAR POR LA PIEZA?</div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase">¿Qué estás buscando?</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Elegí la pieza, después el auto — dos clicks y el mensaje sale armado. El stock
                cambia todos los días: si no lo ves acá, preguntá igual.
              </p>
            </div>
            <WspButton link={WSP.mauro.link}>Preguntar directo</WspButton>
          </div>
          <BuscadorPorPieza />
        </div>
      </section>

      {/* Franja legal compacta */}
      <section id="legal" className="kk-bg-pink">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-[#111114]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-display text-base uppercase">Desarmadero oficial, sin vueltas</div>
              <div className="text-sm opacity-80">
                Inscriptos en DNRPA (registro N° 3566) y adheridos a CARVA. Piezas identificadas y con comprobante.
              </div>
            </div>
          </div>
          <a
            href="https://www.dnrpa.gov.ar/consulta_inscriptos_web/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111114] text-white px-5 py-3 font-bold text-sm hover:opacity-85 transition-opacity"
          >
            <FileCheck className="w-4 h-4" /> Verificalo en Argentina.gob.ar
          </a>
        </div>
      </section>

      {/* Cómo comprar */}
      <section id="como" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">ASÍ DE SIMPLE</div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase">
            Consultás → buscamos → te resolvemos
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { Icon: MessageCircle, t: 'Escribinos', d: 'Mandanos por WhatsApp qué pieza necesitás, marca, modelo y año del vehículo.' },
            { Icon: Search, t: 'La buscamos', d: 'Revisamos el stock en el momento y te mandamos fotos y precio de la pieza real.' },
            { Icon: PackageCheck, t: 'La preparamos', d: 'Desmontamos, probamos y embalamos tu repuesto listo para viajar.' },
            { Icon: Truck, t: 'Te llega', d: 'Retirás en Eucaliptus 4036 o te lo enviamos por expreso a todo el país.' },
          ].map(({ Icon, t, d }, i) => (
            <div key={t} className="relative border border-black/10 p-6 pt-8">
              <div className="absolute -top-4 left-6 kk-bg-pink w-8 h-8 flex items-center justify-center font-display text-sm">
                {i + 1}
              </div>
              <Icon className="w-7 h-7 kk-pink mb-4" />
              <div className="font-display text-base uppercase mb-2">{t}</div>
              <div className="text-sm text-black/60 leading-relaxed">{d}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <WspButton link={WSP.agustin.link}>Empezar mi consulta</WspButton>
        </div>
      </section>

      {/* Quiénes confían */}
      <section id="confianza" className="kk-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">NO SOMOS NUEVOS EN ESTO</div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">Quiénes ya confían en nosotros</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { Icon: Wrench, t: 'Talleres mecánicos', d: 'De Coronel Suárez y toda la zona nos compran repuestos todos los días para sus clientes.' },
              { Icon: ShieldCheck, t: 'Aseguradoras', d: 'Trabajamos con compañías de seguros en la compra de vehículos dados de baja y la provisión de repuestos.' },
              { Icon: CheckCircle2, t: 'Particulares de todo el país', d: 'Miles de clientes que consultaron por WhatsApp y recibieron su repuesto en la puerta de su casa.' },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="border border-white/15 p-7 text-center">
                <Icon className="w-8 h-8 kk-pink mx-auto mb-4" />
                <div className="font-display text-lg uppercase mb-2">{t}</div>
                <div className="text-sm text-white/60 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-xs font-bold tracking-[0.25em] text-white/50 mb-6">
            COMPAÑÍAS DE SEGUROS CON LAS QUE OPERAMOS
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {ASEGURADORAS.map((a) => (
              <span key={a} className="font-display text-sm sm:text-base text-white/40 hover:text-white/80 transition-colors tracking-wide">
                {a.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones" className="bg-[#faf3f8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">CLIENTES REALES</div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase">Lo que dicen de nosotros</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ef78ba] text-[#ef78ba]" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-display text-lg">4,7</span>{' '}
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-black/60">
                  reseñas en Google
                </a>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {RESEÑAS.map((r) => (
              <div key={r.nombre} className="bg-white border border-black/10 p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ef78ba] text-[#ef78ba]" />
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed text-black/80">“{r.texto}”</p>
                <div className="mt-4 text-sm font-bold">{r.nombre}</div>
                <div className="text-xs text-black/50">Reseña de Google</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto / equipo */}
      <section id="contacto" className="kk-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">HABLÁ CON UNA PERSONA, NO CON UN BOT</div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6">Contactanos directo</h2>
              <p className="text-white/70 mb-8 max-w-md">
                Atendemos nosotros mismos. Escribile a cualquiera del equipo y te respondemos en
                horario de atención.
              </p>
              <div className="space-y-3">
                {Object.values(WSP).map((c) => (
                  <a
                    key={c.nombre}
                    href={`${c.link}?text=${MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-white/15 px-5 py-4 hover:border-[#ef78ba] hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full kk-bg-pink flex items-center justify-center font-display text-[#111114]">
                        {c.nombre[0]}
                      </div>
                      <div>
                        <div className="font-bold">{c.nombre}</div>
                        <div className="text-sm text-white/60 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" /> {c.tel}
                        </div>
                      </div>
                    </div>
                    <MessageCircle className="w-5 h-5 kk-pink opacity-60 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white text-[#111114] p-7 border-t-8 border-[#ef78ba]">
                <div className="font-display text-xl uppercase mb-5">Dónde estamos</div>
                <div className="space-y-4 text-[15px]">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Eucaliptus 4036, Coronel Suárez</div>
                      <div className="text-sm text-black/60">Provincia de Buenos Aires (B7540)</div>
                      <div className="text-sm text-black/60">Entrada accesible para personas con movilidad reducida.</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Lunes a viernes, 8 a 16 hs</div>
                      <div className="text-sm text-black/60">Horario de corrido</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Truck className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Envíos a todo el país</div>
                      <div className="text-sm text-black/60">¿No sos de Suárez? Te lo despachamos por expreso.</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Banknote className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Formas de pago</div>
                      <div className="text-sm text-black/60">Efectivo, transferencia y Mercado Pago. Consultá por otras opciones.</div>
                    </div>
                  </div>
                </div>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-[#111114] text-white px-5 py-3 font-bold text-sm hover:bg-[#ef78ba] hover:text-[#111114] transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Cómo llegar (Google Maps)
                </a>
              </div>
              <div className="mt-5 border-4 border-white/10">
                <iframe
                  title="Mapa - King Kong Autopartes, Eucaliptus 4036, Coronel Suárez"
                  src="https://maps.google.com/maps?q=King%20Kong%20Autopartes%20Eucaliptus%204036%20Coronel%20Su%C3%A1rez&z=15&output=embed"
                  className="w-full h-64 block"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/kingkongautopartes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @kingkongautopartes
                </a>
                <a
                  href="https://www.tiktok.com/@kingkongautopartes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="https://www.facebook.com/Kingkongautopartes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0b0d] text-white/60 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-white">
            <Logo />
          </div>
          <div className="text-xs leading-relaxed max-w-md">
            King Kong Autopartes Coronel Suárez SAS · Desarmadero oficial inscripto en DNRPA
            (registro N° 3566) · Autopartes con oblea RUDAC y factura.
          </div>
        </div>
      </footer>

      {/* Botón flotante WhatsApp */}
      <a
        href={`${WSP.agustin.link}?text=${MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  )
}
