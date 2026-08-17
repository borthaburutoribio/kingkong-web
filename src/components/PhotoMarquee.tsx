import { cn } from '@/lib/utils'

interface Foto {
  src: string
  alt: string
}

function MarqueeRow({ photos, reverse }: { photos: Foto[]; reverse?: boolean }) {
  return (
    <div className="kk-marquee-row">
      <div className={cn('kk-marquee-track', reverse && 'kk-marquee-track-reverse')}>
        {[...photos, ...photos].map((foto, i) => (
          <div key={i} className="kk-marquee-tile">
            <img src={foto.src} alt={foto.alt} loading="lazy" />
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
    <div className="kk-marquee-wrap">
      <MarqueeRow photos={row1} />
      <MarqueeRow photos={row2} reverse />
    </div>
  )
}
