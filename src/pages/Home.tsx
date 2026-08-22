import { Link } from 'react-router-dom'
import { Star, ShieldCheck, FileCheck, Share2 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ContactActions } from '@/components/ContactActions'
import heroBg from '@/assets/hero-bg-pasillo.jpg'

const FAQS = [
  {
    q: '¿Hacen envíos a todo el país?',
    a: 'Sí, enviamos repuestos a todo el país. Consultanos por WhatsApp el costo y tiempo de envío según tu ubicación.',
  },
  {
    q: '¿Los repuestos tienen comprobante?',
    a: 'Sí, todas las piezas se entregan identificadas y con su comprobante correspondiente, como corresponde a un desarmadero oficial inscripto.',
  },
  {
    q: '¿Cuál es el horario de atención?',
    a: 'Atendemos de lunes a viernes de 8:00 a 16:00 en Eucaliptus 4036, Coronel Suárez.',
  },
  {
    q: '¿Son un desarmadero habilitado?',
    a: 'Sí, estamos inscriptos en el DNRPA (registro N° 3932) y adheridos a CARVA. Podés verificarlo vos mismo en Argentina.gob.ar.',
  },
  {
    q: '¿Cómo consulto por un repuesto puntual?',
    a: 'Por WhatsApp o llamando directamente a Mauro, Agustín o Gonzalo — los tres contactos están en la sección Contacto.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const TEASERS = [
  {
    to: '/nosotros',
    title: 'Quiénes somos',
    desc: 'Conocé al equipo detrás del desarmadero oficial de Coronel Suárez.',
  },
  {
    to: '/contacto',
    title: 'Contacto',
    desc: 'Llamanos o escribinos directo a Mauro, Agustín o Gonzalo.',
  },
  {
    to: '/ubicacion',
    title: 'Nuestra ubicación',
    desc: 'Horarios, envíos, formas de pago y cómo llegar al local.',
  },
  {
    to: '/repuestos',
    title: 'Repuestos',
    desc: 'Motores, periféricos, cajas y carrocería — lo que tenemos en stock.',
  },
  {
    to: '/referencias',
    title: 'Nuestras Referencias',
    desc: 'Lo que dicen nuestros clientes en Google, con 4,7 de calificación.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_35%] blur-lg scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(87,25,59,0.48), rgba(87,25,59,0.32), rgba(87,25,59,0.52))',
            }}
          />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center">
          <h1 className="font-display kk-pink [text-shadow:0_2px_12px_rgba(87,25,59,0.65)]">
            <span className="block whitespace-nowrap text-lg sm:text-3xl lg:text-4xl leading-tight">
              Repuestos de todas las marcas
            </span>
            <span className="block whitespace-nowrap text-4xl sm:text-6xl lg:text-7xl leading-none mt-2 sm:mt-3">
              al mejor precio
            </span>
            <span className="block whitespace-nowrap mt-4 text-[11px] sm:text-sm lg:text-base tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] uppercase font-semibold text-white/90">
              Desarmadero oficial de Coronel Suárez
            </span>
          </h1>
          <div className="mt-10 flex justify-center">
            <ContactActions variant="hero" />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/90 [text-shadow:0_1px_6px_rgba(87,25,59,0.6)]">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="font-bold text-white">4,7</span>
              <span>en Google</span>
            </div>
            <div>
              <span className="font-bold text-white">+7.000</span> clientes nos siguen en redes
            </div>
          </div>
        </div>
      </section>

      {/* Franja legal compacta */}
      <section className="kk-bg-pink">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 text-foreground">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 shrink-0" />
            <div>
              <div className="font-display text-base uppercase">Desarmadero oficial</div>
              <div className="text-sm opacity-80">
                Inscriptos en DNRPA (registro N° 3932) y adheridos a CARVA. Piezas identificadas y con comprobante.
              </div>
            </div>
          </div>
          <a
            href="https://www.dnrpa.gov.ar/desarmadero/consulta_inscriptos_web.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-white px-5 py-3 font-bold text-sm hover:opacity-85 transition-opacity"
          >
            <FileCheck className="w-4 h-4" /> Verificalo en Argentina.gob.ar
          </a>
        </div>
      </section>

      {/* Accesos directos */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 [&>*]:min-w-0">
            {TEASERS.map((t) => (
              <Link key={t.to} to={t.to}>
                <Card className="h-full border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="font-display uppercase text-lg">{t.title}</CardTitle>
                    <CardDescription>{t.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pt-4 pb-16" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl uppercase text-center mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-white border border-border px-5 py-4">
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-sm sm:text-base list-none">
                  {f.q}
                  <span className="kk-pink shrink-0 transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-foreground/60 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
      </section>

      {/* Compartir */}
      <div className="max-w-6xl mx-auto px-4 pb-14 flex justify-center">
        <ShareButton />
      </div>
    </>
  )
}

function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: 'King Kong Autopartes — Repuestos en Coronel Suárez',
      text: 'Repuestos y autopartes de todas las marcas en Coronel Suárez.',
      url: 'https://kingkongautopartes.com/',
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // usuario canceló el share, no hacer nada
      }
    } else {
      await navigator.clipboard.writeText(shareData.url)
      window.alert('Link copiado: ' + shareData.url)
    }
  }
  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
    >
      <Share2 className="w-4 h-4" /> Compartir
    </button>
  )
}
