import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { WSP, MSG } from '@/lib/site-data'

type Contact = { nombre: string; telHref: string; link: string }

interface ContactActionsProps {
  contact?: Contact
  variant?: 'header' | 'hero' | 'compact'
  className?: string
}

const sizeByVariant = {
  header: 'sm',
  hero: 'lg',
  compact: 'sm',
} as const

export function ContactActions({
  contact = WSP.agustin,
  variant = 'header',
  className = '',
}: ContactActionsProps) {
  const showLabel = variant !== 'header'

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button asChild size={sizeByVariant[variant]} className="bg-primary text-primary-foreground hover:bg-primary/90">
        <a href={contact.telHref}>
          <Phone className="w-4 h-4" />
          <span className={showLabel ? '' : 'hidden sm:inline'}>Llamar</span>
        </a>
      </Button>
      <Button
        asChild
        size={sizeByVariant[variant]}
        variant="outline"
        className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
      >
        <a href={`${contact.link}?text=${MSG}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-4 h-4" />
          <span className={showLabel ? '' : 'hidden sm:inline'}>Escribir</span>
        </a>
      </Button>
    </div>
  )
}

export function FloatingContactButtons() {
  const contact = WSP.agustin
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`${contact.link}?text=${MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={contact.telHref}
        aria-label="Llamar"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  )
}
