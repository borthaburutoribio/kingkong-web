import {
  Phone,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  FileCheck,
  Star,
  MessageCircle,
  BadgeCheck,
  Banknote,
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
            <a href="#contacto"  className="hover:text-[#ef78ba] transition-colors">Contacto</a>
            <a href="#opiniones" className="hover:text-[#ef78ba] transition-colors">Opiniones</a>
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
        <div className="max-w-3xl mx-auto px-4 pt-16 pb-14 sm:pt-24 sm:pb-20">
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
                href={`${WSP.agustin.link}?text=${MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-base tracking-wide bg-[#ef78ba] text-[#111114] hover:-translate-y-0.5 hover:shadow-lg transition-all"
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

      {/* Contacto */}
      <section id="contacto" className="bg-[#faf3f8] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl uppercase mb-10">Contacto</h2>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* Columna 1: WhatsApp */}
            <div className="bg-white border border-black/10 p-6 flex flex-col">
              <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-4">HABLANOS POR WHATSAPP</div>
              <div className="space-y-3">
                {Object.values(WSP).map((c) => (
                  <a
                    key={c.nombre}
                    href={`${c.link}?text=${MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-black/10 px-4 py-3.5 hover:border-[#ef78ba] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full kk-bg-pink flex items-center justify-center font-display text-[#111114] shrink-0">
                        {c.nombre[0]}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{c.nombre}</div>
                        <div className="text-xs text-black/50 flex items-center gap-1.5">
                          <Phone className="w-3 h-3" /> {c.tel}
                        </div>
                      </div>
                    </div>
                    <MessageCircle className="w-4 h-4 kk-pink opacity-60 group-hover:opacity-100 shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2: Dónde estamos */}
            <div className="bg-white text-[#111114] p-6 border border-black/10 border-t-8 border-t-[#ef78ba] flex flex-col">
              <div className="font-display text-lg uppercase mb-4">Dónde estamos</div>
              <div className="space-y-4 text-[15px] flex-1">
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
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[#111114] text-white px-5 py-3 font-bold text-sm hover:bg-[#ef78ba] hover:text-[#111114] transition-colors"
              >
                <MapPin className="w-4 h-4" /> Cómo llegar
              </a>
            </div>

            {/* Columna 3: Mapa */}
            <div className="border border-black/10 min-h-[280px] lg:min-h-0">
              <iframe
                title="Mapa - King Kong Autopartes, Eucaliptus 4036, Coronel Suárez"
                src="https://maps.google.com/maps?q=King%20Kong%20Autopartes%20Eucaliptus%204036%20Coronel%20Su%C3%A1rez&z=15&output=embed"
                className="w-full h-full block"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Redes sociales */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.instagram.com/kingkongautopartes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-black/15 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
            >
              <Instagram className="w-4 h-4" /> @kingkongautopartes
            </a>
            <a
              href="https://www.tiktok.com/@kingkongautopartes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-black/15 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.facebook.com/Kingkongautopartes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-black/15 px-4 py-2.5 text-sm font-semibold hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones" className="bg-white py-20">
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
              <div key={r.nombre} className="bg-[#faf3f8] border border-black/10 p-6">
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
