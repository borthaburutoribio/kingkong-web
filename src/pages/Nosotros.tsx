import { HeartHandshake } from 'lucide-react'
import mecanicoPhoto from '@/assets/nosotros-mecanico.jpg'

export default function Nosotros() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">QUIÉNES SOMOS</div>
            <h2 className="font-display text-3xl sm:text-4xl uppercase">King Kong Autopartes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto [&>*]:min-w-0">
            <img
              src={mecanicoPhoto}
              alt="Mecánico de King Kong Autopartes trabajando en un desarme"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="space-y-4 text-foreground/60 leading-relaxed text-[15px]">
              <p>
                <span className="font-bold text-foreground">KING KONG AUTOPARTES CORONEL SUAREZ SAS</span> es
                el primer centro de reciclado de automotores dados de baja y comercialización de las
                autopartes recuperadas, ubicado en la Ciudad de Coronel Suárez, calle Eucaliptus Nº
                4036, Provincia de Buenos Aires.
              </p>
              <p>
                Nuestra empresa cuenta y cumplimenta con todos los requisitos a nivel Municipal y
                Nacional, extendidos oportunamente por la Municipalidad de la Ciudad de Coronel
                Suárez y por la Dirección Técnico Registral y Registro Único de Desarmaderos y
                Actividades Conexas (R.U.D.A.C.), dependiente del Ministerio de Justicia y Derechos
                Humanos en el orden Nacional.
              </p>
              <p>
                Esto nos habilita a comercializar todas las autopartes enumeradas en la ley 25.761,
                con su correspondiente oblea obligatoria que certifica su autenticidad y datos de su
                procedencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre cálido */}
      <section className="bg-secondary py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <HeartHandshake className="w-9 h-9 kk-pink mx-auto mb-4" />
          <p className="font-display text-xl sm:text-2xl leading-snug">
            Más allá de lo legal, en King Kong trabajamos con la dedicación de siempre.
          </p>
          <p className="mt-3 text-foreground/60 leading-relaxed">
            Te atendemos de frente, te ayudamos a encontrar lo que necesitás y te lo dejamos al
            mejor precio — con la misma confianza con la que atendemos a un vecino de toda la vida.
          </p>
        </div>
      </section>
    </>
  )
}
