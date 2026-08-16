import mecanicoPhoto from '@/assets/nosotros-mecanico.jpg'

export default function Nosotros() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-[0.25em] kk-pink mb-3">QUIÉNES SOMOS</div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase">King Kong Autopartes</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          <img
            src={mecanicoPhoto}
            alt="Mecánico de King Kong Autopartes trabajando en un desarme"
            className="aspect-[4/3] w-full object-cover"
          />
          <p className="text-foreground/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
}
