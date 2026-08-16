import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ContactActions, FloatingContactButtons } from '@/components/ContactActions'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import logoImg from '@/assets/logo.jpg'

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Quiénes somos' },
  { to: '/contacto', label: 'Teléfonos de Contacto' },
  { to: '/ubicacion', label: 'Nuestra ubicación' },
  { to: '/referencias', label: 'Nuestras Referencias' },
]

export function Logo({ className = '', size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  const imgSize = size === 'lg' ? 'w-16 h-16' : 'w-11 h-11'
  const nameSize = size === 'lg' ? 'text-2xl' : 'text-lg'
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <img
        src={logoImg}
        alt="King Kong Autopartes - Desarmadero Oficial Coronel Suárez"
        className={cn(imgSize, 'rounded-full shrink-0 object-cover')}
      />
      <div className="leading-none">
        <div className={cn('font-display tracking-tight kk-pink', nameSize)}>
          King Kong Autopartes
        </div>
        <div className="text-[10px] tracking-[0.25em] font-semibold opacity-70 mt-1">
          DESARMADERO OFICIAL · CORONEL SUÁREZ
        </div>
      </div>
    </div>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="shrink-0">
            <Logo size="lg" />
          </Link>
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold shrink-0">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn('whitespace-nowrap hover:text-primary transition-colors', isActive && 'kk-pink')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <ContactActions variant="header" />
            <Button
              variant="outline"
              size="icon"
              className="xl:hidden border-border"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="w-4/5">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-6 text-lg font-semibold">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn('hover:text-primary transition-colors', isActive && 'kk-pink')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8">
            <ContactActions variant="hero" />
          </div>
        </SheetContent>
      </Sheet>

      <Outlet />

      {/* Footer */}
      <footer className="bg-white border-t border-border text-foreground/60 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-foreground">
            <Logo />
          </div>
          <div className="text-xs leading-relaxed max-w-md">
            King Kong Autopartes Coronel Suárez SAS · Desarmadero oficial inscripto en DNRPA
            (registro N° 3932) · Autopartes con oblea RUDAC y factura.
          </div>
        </div>
      </footer>

      <FloatingContactButtons />
    </div>
  )
}
