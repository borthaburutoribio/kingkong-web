import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { WSP, MSG } from '@/lib/site-data'

type Contact = { nombre: string; telHref: string; link: string; tel: string }

interface ContactActionsProps {
  /** Pass a specific contact to skip the picker (used per-person in Teléfonos de Contacto). */
  contact?: Contact
  variant?: 'header' | 'hero' | 'compact'
  className?: string
}

const sizeByVariant = {
  header: 'sm',
  hero: 'lg',
  compact: 'sm',
} as const

const CONTACTS = Object.values(WSP)

export function ContactActions({ contact, variant = 'header', className = '' }: ContactActionsProps) {
  const showLabel = variant !== 'header'
  const size = sizeByVariant[variant]

  if (contact) {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <Button asChild size={size} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={contact.telHref}>
            <Phone className="w-4 h-4" />
            <span className={showLabel ? '' : 'hidden sm:inline'}>Llamar</span>
          </a>
        </Button>
        <Button
          asChild
          size={size}
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

  // Sin contacto puntual: primer click abre el picker con los 3 números,
  // segundo click elige a quién llamar/escribir.
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={size} className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Phone className="w-4 h-4" />
            <span className={showLabel ? '' : 'hidden sm:inline'}>Llamar</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>¿A quién querés llamar?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {CONTACTS.map((c) => (
            <DropdownMenuItem key={c.nombre} asChild className="cursor-pointer">
              <a href={c.telHref}>
                <Phone className="w-4 h-4 kk-pink" /> {c.nombre} · {c.tel}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size={size}
            variant="outline"
            className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle className="w-4 h-4" />
            <span className={showLabel ? '' : 'hidden sm:inline'}>Escribir</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>¿A quién querés escribirle?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {CONTACTS.map((c) => (
            <DropdownMenuItem key={c.nombre} asChild className="cursor-pointer">
              <a href={`${c.link}?text=${MSG}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> {c.nombre} · {c.tel}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
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
