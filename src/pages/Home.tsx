import { Link } from 'react-router-dom'
import { Star, ShieldCheck, FileCheck } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ContactActions } from '@/components/ContactActions'
import heroPhoto from '@/assets/hero-estanteria.jpg'

const TEASERS = [
  {
    to: '/nosotros',
    title: 'Quiénes somos',
    desc: 'Conocé al equipo detrás del desarmadero oficial de Coronel Suárez.',
  },
  {
    to: '/contacto',
    title: 'Teléfonos de Contacto',
    desc: 'Llamanos o escribinos, y encontrá cómo llegar hasta el local.',
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
      <section className="bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-16 sm:pt-24 sm:pb-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <ContactActions variant="hero" />
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-bold">4,7</span>
                <span className="text-foreground/50">en Google</span>
              </div>
              <div className="text-foreground/50">
                <span className="font-bold text-foreground">+7.000</span> clientes nos siguen en redes
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroPhoto}
              alt="Estantería de repuestos en King Kong Autopartes"
              className="w-full max-w-sm aspect-[4/5] object-cover"
            />
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
          <div className="grid md:grid-cols-3 gap-6">
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
