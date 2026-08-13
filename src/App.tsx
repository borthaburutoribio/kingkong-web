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
  ChevronRight,
  ChevronLeft,
  BadgeCheck,
  Banknote,
  Car,
  Settings,
  Image as ImageIcon,
} from 'lucide-react'
import logoImg from './assets/logo.jpg'

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
  mauro:   { nombre: 'Mauro',   tel: '+54 9 2926 54-7050', link: 'https://wa.me/5492926547050' },
  agustin: { nombre: 'Agustín', tel: '+54 9 2926 51-8539', link: 'https://wa.me/5492926518539' },
  gonzalo: { nombre: 'Gonzalo', tel: '+54 9 2926 40-1066', link: 'https://wa.me/5492926401066' },
}

const MSG = encodeURIComponent('Hola! Vi la página web de King Kong Autopartes y quería consultar por un repuesto.')
const MAPS = 'https://www.google.com/maps/search/?api=1&query=King+Kong+Autopartes+Eucaliptus+4036+Coronel+Suarez'

const PARTES = [
  'Motores',
  'Cajas de velocidad',
  'Puertas',
  'Computadoras (ECU)',
  'Alternadores',
  'Bombas de nafta',
  'Compresores',
  'Trompas y paragolpes',
  'Ópticas',
  'Trenes y ejes',
  'Asientos e interiores',
  'Electroventiladores',
]

const MARCAS = [
  'Volkswagen','Chevrolet','Ford','Fiat','Renault','Peugeot',
  'Citroën','Toyota','Honda','Nissan','Suzuki','Jeep',
  'Chery','Hyundai','Kia','Mercedes-Benz',
]

const MODELOS: Record<string, string[]> = {
  'Volkswagen':    ['Gol', 'Polo', 'Golf', 'Vento', 'Amarok', 'Suran', 'Passat', 'Fox', 'Saveiro', 'Caddy'],
  'Chevrolet':     ['Onix', 'Cruze', 'Tracker', 'S10', 'Agile', 'Celta', 'Corsa', 'Classic', 'Prisma', 'Montana'],
  'Ford':          ['Fiesta', 'Focus', 'EcoSport', 'Ranger', 'Mondeo', 'Ka', 'Territory', 'Fusion', 'F-100'],
  'Fiat':          ['Palio', 'Uno', 'Cronos', 'Argo', 'Punto', 'Siena', 'Bravo', 'Tipo', 'Toro', 'Fiorino'],
  'Renault':       ['Sandero', 'Logan', 'Duster', 'Kangoo', 'Clio', 'Fluence', 'Megane', 'Symbol', 'Stepway', 'Oroch'],
  'Peugeot':       ['206', '207', '208', '308', '408', '2008', '3008', '5008', 'Partner', '301'],
  'Citroën':       ['C3', 'C4', 'C4 Cactus', 'Berlingo', 'Jumpy', 'Xsara Picasso', 'C-Elysée'],
  'Toyota':        ['Etios', 'Yaris', 'Corolla', 'Hilux', 'SW4', 'RAV4', 'Fortuner', 'Land Cruiser'],
  'Honda':         ['City', 'Civic', 'Fit', 'HR-V', 'CR-V', 'Jazz', 'WR-V'],
  'Nissan':        ['March', 'Versa', 'Sentra', 'Tiida', 'Frontier', 'X-Trail', 'Kicks'],
  'Suzuki':        ['Jimny', 'Swift', 'Vitara', 'Baleno', 'S-Cross', 'Ignis'],
  'Jeep':          ['Renegade', 'Compass', 'Grand Cherokee', 'Cherokee', 'Wrangler'],
  'Chery':         ['Tiggo 2', 'Tiggo 3', 'Tiggo 4', 'Tiggo 5', 'Tiggo 7', 'Arrizo 5', 'Arrizo 6'],
  'Hyundai':       ['HB20', 'i10', 'i20', 'i30', 'Creta', 'Tucson', 'ix35', 'Santa Fe'],
  'Kia':           ['Picanto', 'Rio', 'Cerato', 'Sportage', 'Sorento', 'Soul', 'Seltos'],
  'Mercedes-Benz': ['Clase A', 'Clase C', 'Clase E', 'GLA', 'GLC', 'Sprinter', 'Vito'],
}

const RESEÑAS = [
  { nombre: 'Alejandro Besano', texto: 'Variedad de autopartes y en buen estado. Excelente atención y precios. Lo más importante, todo de origen legal.' },
  { nombre: 'Ezequiel Olmedo',  texto: 'Excelente atención y súper rápida la atención de los chicos que trabajan ahí.' },
  { nombre: 'Rodrigo Osorio',   texto: '¡Tienen de todo, excelentes precios!' },
  { nombre: 'Lucio Schwerdt',   texto: 'Muchos repuestos de todo tipo de vehículos, ¡recomendable!' },
  { nombre: 'Hernán Grandjean', texto: 'Gracias a los chicos de King Kong Autopartes. Excelente atención.' },
  { nombre: 'Rafa Prieto',      texto: 'Tienen muchos repuestos y a un muy buen precio 👍' },
]

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

// ─── SearchWizard ─────────────────────────────────────────────────────────────

type WizardMode = 'by-brand' | 'by-part'
type WizardStep = 0 | 1 | 2 | 3

function buildWspLink(marca: string | null, modelo: string | null, pieza: string | null): string {
  let msg = 'Hola! Estoy buscando'
  if (pieza) msg += ` ${pieza.toLowerCase()}`
  if (marca && modelo) msg += ` para un ${marca} ${modelo}`
  else if (marca) msg += ` para un ${marca}`
  msg += '. ¿Tienen disponible?'
  return `${WSP.agustin.link}?text=${encodeURIComponent(msg)}`
}

function SearchWizard() {
  const [mode, setMode] = useState<WizardMode>('by-brand')
  const [step, setStep] = useState<WizardStep>(0)
  const [marca, setMarca] = useState<string | null>(null)
  const [modelo, setModelo] = useState<string | null>(null)
  const [pieza, setPieza] = useState<string | null>(null)

  function reset() {
    setStep(0)
    setMarca(null)
    setModelo(null)
    setPieza(null)
  }

  function switchMode(m: WizardMode) {
    setMode(m)
    reset()
  }

  // ── Mode: by-brand ──────────────────────────────────────────────────────────
  function pickMarca(m: string) {
    setMarca(m)
    setStep(1)
  }

  function pickModelo(m: string) {
    setModelo(m)
    setStep(2)
  }

  function pickPieza(p: string) {
    setPieza(p)
    // redirect immediately
    window.open(buildWspLink(marca, modelo, p), '_blank', 'noopener,noreferrer')
  }

  // ── Mode: by-part ───────────────────────────────────────────────────────────
  function pickPiezaFirst(p: string) {
    setPieza(p)
    setStep(1)
  }

  function pickMarcaSecond(m: string) {
    setMarca(m)
    setStep(2)
  }

  function pickModeloFinal(m: string) {
    window.open(buildWspLink(marca, m, pieza), '_blank', 'noopener,noreferrer')
  }

  // ── "Otro" fallbacks ─────────────────────────────────────────────────────────
  function handleOtro() {
    const otroMsg =
      pieza
        ? `Hola! Estoy buscando ${pieza.toLowerCase()} para un auto que no está en la lista. ¿Me podés ayudar?`
        : marca
        ? `Hola! Tengo un ${marca} y necesito un repuesto pero no encuentro el modelo. ¿Me podés ayudar?`
        : 'Hola! Necesito un repuesto pero no encuentro mi auto en la lista. ¿Me podés ayudar?'
    window.open(`${WSP.agustin.link}?text=${encodeURIComponent(otroMsg)}`, '_blank', 'noopener,noreferrer')
  }

  const gridBtn = 'group border border-black/15 p-3 sm:p-4 text-center hover:border-[#ef78ba] hover:bg-[#fef6fb] transition-all cursor-pointer select-none'

  function Breadcrumb() {
    const parts: string[] = []
    if (mode === 'by-brand') {
      if (marca) parts.push(marca)
      if (modelo) parts.push(modelo)
    } else {
      if (pieza) parts.push(pieza)
      if (marca) parts.push(marca)
    }
    if (!parts.length) return null
    return (
      <div className="flex items-center gap-2 text-sm text-black/50 mb-5 flex-wrap">
        <button onClick={reset} className="hover:text-[#ef78ba] transition-colors font-semibold">
          Inicio
        </button>
        {parts.map((p, i) => (
          <span key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3" />
            <span className={i === parts.length - 1 ? 'text-[#111114] font-bold' : ''}>{p}</span>
          </span>
        ))}
      </div>
    )
  }

  // ── Step titles ──────────────────────────────────────────────────────────────
  function getStepTitle(): string {
    if (mode === 'by-brand') {
      if (step === 0) return '¿De qué marca es tu auto?'
      if (step === 1) return `¿Cuál es el modelo del ${marca}?`
      if (step === 2) return `¿Qué pieza necesitás para el ${marca} ${modelo}?`
    } else {
      if (step === 0) return '¿Qué pieza estás buscando?'
      if (step === 1) return `¿De qué marca es el auto con ${pieza?.toLowerCase()}?`
      if (step === 2) return `¿Cuál es el modelo del ${marca}?`
    }
    return ''
  }

  return (
    <section className="bg-white border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">BUSCADOR INTERACTIVO</div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase">
            Encontrá tu repuesto en <span className="kk-pink">3 pasos</span>
          </h2>
          <p className="mt-3 text-black/55 max-w-lg mx-auto">
            Seleccioná y te llevamos directo al WhatsApp con la consulta lista.
          </p>
        </div>

        {/* Mode tabs */}
        <div className="flex border border-black/15 p-1 max-w-md mx-auto mb-8">
          <button
            onClick={() => switchMode('by-brand')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-all ${
              mode === 'by-brand' ? 'bg-[#111114] text-white' : 'text-black/50 hover:text-black'
            }`}
          >
            <Car className="w-4 h-4" /> Por marca de auto
          </button>
          <button
            onClick={() => switchMode('by-part')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold transition-all ${
              mode === 'by-part' ? 'bg-[#111114] text-white' : 'text-black/50 hover:text-black'
            }`}
          >
            <Settings className="w-4 h-4" /> Por pieza
          </button>
        </div>

        {/* Wizard body */}
        <div className="border border-black/10 p-6 sm:p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {[0, 1, 2].map((s) => (
              <span
                key={s}
                className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold transition-all ${
                  s < step ? 'bg-[#ef78ba] text-[#111114]' : s === step ? 'bg-[#111114] text-white' : 'bg-black/10 text-black/40'
                }`}
              >
                {s < step ? '✓' : s + 1}
              </span>
            ))}
            <span className="ml-2 text-xs text-black/40 font-semibold tracking-wide">PASO {step + 1} DE {mode === 'by-brand' ? 3 : 3}</span>
            {step > 0 && (
              <button
                onClick={() => {
                  if (step === 1) reset()
                  else if (step === 2 && mode === 'by-brand') { setStep(1); setModelo(null) }
                  else if (step === 2 && mode === 'by-part') { setStep(1); setMarca(null) }
                }}
                className="ml-auto flex items-center gap-1 text-xs text-black/50 hover:text-[#ef78ba] font-semibold transition-colors"
              >
                <ChevronLeft className="w-3 h-3" /> Volver
              </button>
            )}
          </div>

          <Breadcrumb />

          {/* Step title */}
          <h3 className="font-display text-xl sm:text-2xl uppercase mb-6">{getStepTitle()}</h3>

          {/* ── BY BRAND ── */}
          {mode === 'by-brand' && step === 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MARCAS.map((m) => (
                <button key={m} className={gridBtn} onClick={() => pickMarca(m)}>
                  <span className="font-display text-sm tracking-wide group-hover:text-[#ef78ba] transition-colors block">
                    {m}
                  </span>
                </button>
              ))}
              <button
                onClick={handleOtro}
                className="col-span-2 sm:col-span-4 border border-dashed border-black/20 p-3 text-sm text-black/50 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-all font-semibold"
              >
                No encuentro mi marca → Escribir por WhatsApp
              </button>
            </div>
          )}

          {mode === 'by-brand' && step === 1 && marca && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(MODELOS[marca] ?? []).map((m) => (
                <button key={m} className={gridBtn} onClick={() => pickModelo(m)}>
                  <span className="font-display text-sm tracking-wide group-hover:text-[#ef78ba] transition-colors block">
                    {m}
                  </span>
                </button>
              ))}
              <button
                onClick={handleOtro}
                className="col-span-2 sm:col-span-4 border border-dashed border-black/20 p-3 text-sm text-black/50 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-all font-semibold"
              >
                No encuentro mi modelo → Escribir por WhatsApp
              </button>
            </div>
          )}

          {mode === 'by-brand' && step === 2 && marca && modelo && (
            <>
              <p className="text-sm text-black/50 mb-5">
                Tocá la pieza y te abrimos WhatsApp con la consulta lista para {marca} {modelo}.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {PARTES.map((p) => (
                  <button
                    key={p}
                    className="group border border-black/15 p-4 text-left hover:border-[#ef78ba] hover:bg-[#fef6fb] transition-all"
                    onClick={() => pickPieza(p)}
                  >
                    <span className="font-display text-sm leading-snug block group-hover:text-[#ef78ba] transition-colors">{p}</span>
                    <span className="mt-2 text-xs kk-pink font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      IR A WS <ChevronRight className="w-3 h-3" />
                    </span>
                  </button>
                ))}
                <button
                  onClick={handleOtro}
                  className="col-span-2 sm:col-span-3 lg:col-span-4 border border-dashed border-black/20 p-3 text-sm text-black/50 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-all font-semibold"
                >
                  No encuentro la pieza → Escribir por WhatsApp
                </button>
              </div>
            </>
          )}

          {/* ── BY PART ── */}
          {mode === 'by-part' && step === 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {PARTES.map((p) => (
                <button key={p} className={gridBtn} onClick={() => pickPiezaFirst(p)}>
                  <span className="font-display text-sm leading-snug block group-hover:text-[#ef78ba] transition-colors">{p}</span>
                </button>
              ))}
              <button
                onClick={handleOtro}
                className="col-span-2 sm:col-span-3 lg:col-span-4 border border-dashed border-black/20 p-3 text-sm text-black/50 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-all font-semibold"
              >
                Busco algo que no está en la lista → Escribir por WhatsApp
              </button>
            </div>
          )}

          {mode === 'by-part' && step === 1 && pieza && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MARCAS.map((m) => (
                <button key={m} className={gridBtn} onClick={() => pickMarcaSecond(m)}>
                  <span className="font-display text-sm tracking-wide group-hover:text-[#ef78ba] transition-colors block">
                    {m}
                  </span>
                </button>
              ))}
              <button
                onClick={handleOtro}
                className="col-span-2 sm:col-span-4 border border-dashed border-black/20 p-3 text-sm text-black/50 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-all font-semibold"
              >
                No encuentro mi marca → Escribir por WhatsApp
              </button>
            </div>
          )}

          {mode === 'by-part' && step === 2 && pieza && marca && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(MODELOS[marca] ?? []).map((m) => (
                <button key={m} className={gridBtn} onClick={() => pickModeloFinal(m)}>
                  <span className="font-display text-sm tracking-wide group-hover:text-[#ef78ba] transition-colors block">{m}</span>
                  <span className="mt-2 text-xs kk-pink font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                    IR A WS <ChevronRight className="w-3 h-3" />
                  </span>
                </button>
              ))}
              <button
                onClick={handleOtro}
                className="col-span-2 sm:col-span-4 border border-dashed border-black/20 p-3 text-sm text-black/50 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-all font-semibold"
              >
                No encuentro mi modelo → Escribir por WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111114]">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a href="#nosotros"  className="hover:text-[#ef78ba] transition-colors">Quiénes somos</a>
            <a href="#buscar"    className="hover:text-[#ef78ba] transition-colors">Buscar repuesto</a>
            <a href="#opiniones" className="hover:text-[#ef78ba] transition-colors">Opiniones</a>
            <a href="#contacto"  className="hover:text-[#ef78ba] transition-colors">Contacto</a>
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
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-14 sm:pt-24 sm:pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#ef78ba] text-[#ef78ba] px-3 py-1.5 text-xs font-bold tracking-[0.2em] mb-6">
              <BadgeCheck className="w-4 h-4" />
              PRIMER DESARMADERO OFICIAL DE CORONEL SUÁREZ
            </div>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.02] uppercase">
              El repuesto que buscás,{' '}
              <span className="kk-pink">hoy</span> y al{' '}
              <span className="kk-underline">mejor precio</span>.
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#buscar"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-base tracking-wide bg-[#ef78ba] text-[#111114] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <Search className="w-4 h-4" /> Buscar mi repuesto
              </a>
              <a
                href={`${WSP.agustin.link}?text=${MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold border border-black/20 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp directo
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ef78ba] text-[#ef78ba]" />)}
                </div>
                <span className="font-bold">4,7</span>
                <span className="text-black/50">en Google</span>
              </div>
              <div className="text-black/50">
                <span className="font-bold text-[#111114]">+7.000</span> clientes nos siguen en redes
              </div>
              <div className="flex items-center gap-1.5 text-black/50">
                <Clock className="w-4 h-4 kk-pink" /> Lunes a viernes · 8 a 16 hs
              </div>
            </div>
          </div>

          {/* Tarjeta de confianza */}
          <div className="bg-white text-[#111114] p-7 border border-black/10 border-t-8 border-t-[#ef78ba] shadow-sm">
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
      </section>

      {/* Franja legal compacta */}
      <section className="kk-bg-pink">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-[#111114]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-display text-base uppercase">Desarmadero oficial, sin vueltas</div>
              <div className="text-sm opacity-80">
                Inscriptos en DNRPA (registro N° 3932) y adheridos a CARVA. Piezas identificadas y con comprobante.
              </div>
            </div>
          </div>
          <a
            href="https://www.dnrpa.gov.ar/desarmadero/consulta_inscriptos_web.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111114] text-white px-5 py-3 font-bold text-sm hover:opacity-85 transition-opacity"
          >
            <FileCheck className="w-4 h-4" /> Verificalo en Argentina.gob.ar
          </a>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="nosotros" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">QUIÉNES SOMOS</div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">King Kong Autopartes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="aspect-[4/3] border border-dashed border-black/20 bg-[#faf3f8] flex flex-col items-center justify-center gap-2 text-center px-6">
              <ImageIcon className="w-8 h-8 text-black/30" />
              <span className="text-sm font-semibold text-black/40">Foto del equipo</span>
            </div>
            <p className="text-black/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* ── Buscador interactivo ── */}
      <div id="buscar">
        <SearchWizard />
      </div>

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
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#ef78ba] text-[#ef78ba]" />)}
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
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ef78ba] text-[#ef78ba]" />)}
                </div>
                <p className="text-[15px] leading-relaxed text-black/80">"{r.texto}"</p>
                <div className="mt-4 text-sm font-bold">{r.nombre}</div>
                <div className="text-xs text-black/50">Reseña de Google</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">HABLÁ CON UNA PERSONA, NO CON UN BOT</div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase mb-6">Contactanos directo</h2>
              <p className="text-black/60 mb-8 max-w-md">
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
                    className="flex items-center justify-between bg-[#faf3f8] border border-black/10 px-5 py-4 hover:border-[#ef78ba] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full kk-bg-pink flex items-center justify-center font-display text-[#111114]">
                        {c.nombre[0]}
                      </div>
                      <div>
                        <div className="font-bold">{c.nombre}</div>
                        <div className="text-sm text-black/50 flex items-center gap-1.5">
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
              <div className="bg-[#faf3f8] text-[#111114] p-7 border border-black/10 border-t-8 border-t-[#ef78ba]">
                <div className="font-display text-xl uppercase mb-5">Dónde estamos</div>
                <div className="space-y-4 text-[15px]">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 kk-pink shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Eucaliptus 4036, Coronel Suárez</div>
                      <div className="text-sm text-black/60">Provincia de Buenos Aires (B7540)</div>
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
                      <div className="text-sm text-black/60">Efectivo, transferencia y Mercado Pago.</div>
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
              <div className="mt-5 border border-black/10">
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
                  className="inline-flex items-center gap-2 bg-[#faf3f8] border border-black/15 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
                >
                  <Instagram className="w-4 h-4" /> @kingkongautopartes
                </a>
                <a
                  href="https://www.tiktok.com/@kingkongautopartes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#faf3f8] border border-black/15 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
                >
                  TikTok
                </a>
                <a
                  href="https://www.facebook.com/Kingkongautopartes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#faf3f8] border border-black/15 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-black/10 text-black/50 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[#111114]">
            <Logo />
          </div>
          <div className="text-xs leading-relaxed max-w-md">
            King Kong Autopartes Coronel Suárez SAS · Desarmadero oficial inscripto en DNRPA
            (registro N° 3932) · Autopartes con oblea RUDAC y factura.
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
