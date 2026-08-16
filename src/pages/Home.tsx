import { Link } from 'react-router-dom'
import { Star, ShieldCheck, FileCheck } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ContactActions } from '@/components/ContactActions'
import heroBg from '@/assets/hero-bg-pasillo.jpg'

const TEASERS = [
  {
    to: '/nosotros',
    title: 'Quiénes somos',
    desc: 'Conocé al equipo detrás del desarmadero oficial de Coronel Suárez.',
  },
  {
    to: '/contacto',
    title: 'Teléfonos de Contacto',
    desc: 'Llamanos o escribinos directo a Mauro, Agustín o Gonzalo.',
  },
  {
    to: '/ubicacion',
    title: 'Nuestra ubicación',
    desc: 'Horarios, envíos, formas de pago y cómo llegar al local.',
  },
  {
    to: '/repuestos',
    title: 'Nuestros Repuestos',
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
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/55 to-foreground/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight kk-pink">
            Repuestos de todas las marcas, al mejor precio, en el desarmadero oficial de
            Coronel Suárez.
          </h1>
          <div className="mt-10 flex justify-center">
            <ContactActions variant="hero" />
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-white/80">
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
    </>
  )
}
