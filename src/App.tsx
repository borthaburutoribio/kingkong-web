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
  BadgeCheck,
} from 'lucide-react'

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

const PARTES = [
  'MOTORES',
  'CAJAS DE VELOCIDAD',
  'PUERTAS',
  'COMPUTADORAS (ECU)',
  'ALTERNADORES',
  'BOMBAS DE NAFTA',
  'COMPRESORES',
  'TROMPAS Y PARAGOLPES',
  'ÓPTICAS',
  'TRENES Y EJES',
  'ASIENTOS E INTERIORES',
  'ELECTROVENTILADORES',
]

const MARCAS = [
  'Volkswagen',
  'Chevrolet',
  'Ford',
  'Fiat',
  'Renault',
  'Peugeot',
  'Citroën',
  'Toyota',
  'Honda',
  'Nissan',
  'Suzuki',
  'Jeep',
  'Chery',
  'Hyundai',
  'Kia',
  'Mercedes-Benz',
]

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

function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-10 h-10 rounded-full bg-[#ef78ba] flex items-center justify-center shrink-0 border-2 border-white/20">
        <span className="font-display text-white text-sm leading-none">KK</span>
      </div>
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
            <a href="#marcas" className="hover:text-[#ef78ba]">Marcas</a>
            <a href="#repuestos" className="hover:text-[#ef78ba]">Repuestos</a>
            <a href="#confianza" className="hover:text-[#ef78ba]">Confían en nosotros</a>
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
      <section className="kk-dark text-white">
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
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              Stock real que se renueva todas las semanas, todas las marcas y modelos. Consultás
              por WhatsApp, te mandamos fotos y precio de la pieza en el momento, y te la enviamos
              a cualquier punto del país. Atendemos particulares, talleres y aseguradoras.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WspButton link={WSP.agustin.link}>Consultar disponibilidad</WspButton>
              <a
                href="#repuestos"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold border border-white/30 hover:border-[#ef78ba] hover:text-[#ef78ba] transition-colors"
              >
                Ver qué tenemos <ChevronRight className="w-4 h-4" />
              </a>
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
        <div className="border-t border-white/10 overflow-hidden py-4">
          <div className="kk-marquee flex whitespace-nowrap w-max">
            {[...PARTES, ...PARTES].map((p, i) => (
              <span key={i} className="font-display text-sm tracking-widest mx-6 text-white/50">
                {p} <span className="kk-pink mx-2">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section id="marcas" className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">TODAS LAS MARCAS, TODOS LOS MODELOS</div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase">¿De qué auto es tu repuesto?</h2>
          <p className="mt-4 text-black/60">
            Nafteros, gasoleros y diésel. Autos, camionetas y utilitarios de todos los años.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {MARCAS.map((m) => (
            <a
              key={m}
              href={`${WSP.agustin.link}?text=${encodeURIComponent(`Hola! Estoy buscando un repuesto para un ${m}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-black/10 px-5 py-4 text-center hover:border-[#ef78ba] hover:bg-[#faf3f8] transition-colors"
            >
              <span className="font-display text-sm sm:text-base tracking-wide group-hover:text-[#ef78ba] transition-colors">
                {m.toUpperCase()}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-black/50">
          ¿Tu marca no está en la lista? Preguntá igual — ingresan vehículos todas las semanas.
        </p>
      </section>

      {/* Franja legal compacta */}
      <section id="legal" className="kk-bg-pink">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-[#111114]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-display text-base uppercase">Desarmadero oficial, sin vueltas</div>
              <div className="text-sm opacity-80">
                Inscriptos en DNRPA (registro N° 3566). Piezas identificadas y con comprobante.
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

      {/* Repuestos */}
      <section id="repuestos" className="kk-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">STOCK PERMANENTE</div>
              <h2 className="font-display text-3xl sm:text-4xl uppercase">¿Qué estás buscando?</h2>
              <p className="mt-3 text-white/70 max-w-xl">
                Ingresan vehículos todas las semanas: nafteros, gasoleros y diésel, todas las marcas
                y modelos. Si no lo ves acá, igual preguntá — el stock cambia todos los días.
              </p>
            </div>
            <WspButton link={WSP.mauro.link}>Preguntar por una pieza</WspButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {PARTES.map((p) => (
              <a
                key={p}
                href={`${WSP.agustin.link}?text=${encodeURIComponent(`Hola! Quería consultar si tienen ${p.toLowerCase()} disponibles.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/15 p-5 hover:border-[#ef78ba] hover:bg-white/5 transition-colors"
              >
                <div className="font-display text-sm sm:text-base leading-snug">{p}</div>
                <div className="mt-3 text-xs kk-pink font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  CONSULTAR <ChevronRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/50">
            ¿No ves lo que buscás? El stock cambia todos los días — escribinos y lo revisamos en el momento.
          </p>
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
