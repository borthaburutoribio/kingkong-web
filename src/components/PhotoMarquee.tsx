import { cn } from '@/lib/utils'
import logoImg from '@/assets/logo.jpg'

interface Foto {
  src: string
  alt: string
}

function MarqueeRow({ photos, direction }: { photos: Foto[]; direction: 'left' | 'right' }) {
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          'flex w-max gap-4 motion-reduce:animate-none hover:[animation-play-state:paused]',
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        )}
      >
        {[...photos, ...photos].map((foto, i) => (
          <div
            key={i}
            className="relative shrink-0 w-52 sm:w-64 aspect-[4/3] overflow-hidden border border-border"
          >
            <img
              src={foto.src}
              alt={foto.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <img
              src={logoImg}
              alt=""
              aria-hidden="true"
              className="absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-white/90 shadow-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PhotoMarquee({ photos }: { photos: Foto[] }) {
  const mid = Math.ceil(photos.length / 2)
  const row1 = photos.slice(0, mid)
  const row2 = photos.slice(mid)
  return (
    <div className="space-y-4 sm:space-y-5">
      <MarqueeRow photos={row1} direction="left" />
      <MarqueeRow photos={row2} direction="right" />
    </div>
  )
}
