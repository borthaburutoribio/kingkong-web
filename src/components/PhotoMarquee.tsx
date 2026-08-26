import { cn } from '@/lib/utils'

interface Foto {
  src: string
  alt: string
}

function MarqueeRow({
  photos,
  reverse,
  size = 'lg',
}: {
  photos: Foto[]
  reverse?: boolean
  size?: 'lg' | 'sm'
}) {
  return (
    <div className="kk-marquee-row">
      <div
        className={cn(
          'kk-marquee-track',
          size === 'sm' && 'kk-marquee-track-sm',
          reverse && 'kk-marquee-track-reverse'
        )}
      >
        {[...photos, ...photos].map((foto, i) => (
          <div key={i} className={cn('kk-marquee-tile', size === 'sm' && 'kk-marquee-tile-sm')}>
            <img src={foto.src} alt={foto.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PhotoMarquee({
  photos,
  rows = 2,
  size = 'lg',
}: {
  photos: Foto[]
  rows?: 1 | 2
  size?: 'lg' | 'sm'
}) {
  if (rows === 1) {
    return (
      <div className="kk-marquee-wrap">
        <MarqueeRow photos={photos} size={size} />
      </div>
    )
  }
  const mid = Math.ceil(photos.length / 2)
  const row1 = photos.slice(0, mid)
  const row2 = photos.slice(mid)
  return (
    <div className="kk-marquee-wrap">
      <MarqueeRow photos={row1} size={size} />
      <MarqueeRow photos={row2} reverse size={size} />
    </div>
  )
}
