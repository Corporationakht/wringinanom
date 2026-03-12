import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { nav, WA_LINK } from '../data/content'

export default function Navbar() {
  const { lang, toggleLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { to: '/', label: nav.home },
    { to: '/destinasi', label: nav.destinasi },
    { to: '/budaya', label: nav.budaya },
    { to: '/umkm', label: nav.umkm },
    { to: '/berita', label: nav.berita },
    { to: '/kontak', label: nav.kontak },
  ]

  const handleHashClick = (e, to) => {
    e.preventDefault()
    setOpen(false)
    const [path, hash] = to.split('#')
    if (location.pathname === path) {
      const el = document.getElementById(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    // If we're not on the right page, or element not found, standard navigation 
    window.location.href = `/${to}`
  }

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-primary-dark/90 backdrop-blur-md border-b border-white/10 shadow-sm'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
            <img src="/logodesa.png" alt="Dewi Anom" className="w-9 h-9 rounded-full object-cover" />
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-white text-base">Dewi Anom</span>
              <span className="block text-[10px] text-white/50 -mt-0.5 leading-tight">Desa Wisata Wringinanom</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              link.hash ? (
                <a
                  key={link.to}
                  href={`/${link.to}`}
                  onClick={(e) => handleHashClick(e, link.to)}
                  className={`nav-link-anim px-3 py-2 text-sm font-medium transition-colors cursor-pointer text-white/80 hover:text-white`}
                >
                  {t(link.label)}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link-anim px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-white active'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {t(link.label)}
                </Link>
              )
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="text-sm">{lang === 'id' ? '🇮🇩' : '🇬🇧'}</span>
              <span>{lang === 'id' ? 'ID' : 'EN'}</span>
            </button>

            {/* WA CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white font-semibold text-xs rounded-lg hover:bg-accent/90 transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              {t(nav.pesanWa)}
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-primary-dark/95 backdrop-blur-md ${open ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'}`}>
        <div className="px-4 py-3 space-y-1">
          {links.map((link) => (
            link.hash ? (
              <a
                key={link.to}
                href={`/${link.to}`}
                onClick={(e) => handleHashClick(e, link.to)}
                className="block w-full text-left px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                {t(link.label)}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {t(link.label)}
              </Link>
            )
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 px-3 py-2.5 text-sm bg-accent/20 text-accent font-semibold rounded-lg text-center"
          >
            {t(nav.pesanWa)}
          </a>
        </div>
      </div>
    </nav>
  )
}
