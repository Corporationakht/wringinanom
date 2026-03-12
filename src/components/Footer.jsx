import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { footer, nav, social, contactInfo, WA_LINK } from '../data/content'

export default function Footer() {
  const { lang, toggleLang, t } = useLang()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <footer className="bg-primary-dark text-white/90" id="kontak">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isHome ? 'py-12 sm:py-16' : 'py-5 sm:py-6'}`}>
        {isHome ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Col 1: Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logodesa.png" alt="Dewi Anom" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="font-serif font-bold text-lg">Dewi Anom</span>
                <span className="block text-[11px] text-white/50 -mt-0.5">Desa Wisata Wringinanom</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">{t(footer.tagline)}</p>
          </div>

          {/* Col 2: Navigasi */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-4">{t(footer.links)}</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">{lang === 'id' ? 'Beranda' : 'Home'}</Link></li>
              <li><Link to="/destinasi" className="text-sm text-white/60 hover:text-white transition-colors">{t(nav.destinasi)}</Link></li>
              <li><Link to="/budaya" className="text-sm text-white/60 hover:text-white transition-colors">{t(nav.budaya)}</Link></li>
              <li><Link to="/umkm" className="text-sm text-white/60 hover:text-white transition-colors">{t(nav.umkm)}</Link></li>
              <li><Link to="/berita" className="text-sm text-white/60 hover:text-white transition-colors">{t(nav.berita)}</Link></li>
              <li><Link to="/investasi" className="text-sm text-white/60 hover:text-white transition-colors">{lang === 'id' ? 'Investasi' : 'Invest'}</Link></li>
              <li><Link to="/kontak" className="text-sm text-white/60 hover:text-white transition-colors">{t(nav.kontak)}</Link></li>
            </ul>
          </div>

          {/* Col 3: Social + Contact */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-4">{t(footer.socialTitle)}</h4>
            <div className="flex gap-3 mb-5">
              <a href={social.wa} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-wa/20 transition-colors" title="WhatsApp">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </a>
              <a href={social.ig} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-pink-500/20 transition-colors" title="Instagram">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" title="TikTok">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.84 4.84 0 01-3.01-1.09 4.82 4.82 0 01-1.8-2.93V6.69h4.81z"/></svg>
              </a>
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors" title="YouTube">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            <h4 className="font-serif font-semibold text-white mb-3 text-sm">{t(footer.contact)}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 text-wa" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                {contactInfo.wa}
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {t(contactInfo.hours)}
              </li>
            </ul>
          </div>

          {/* Col 4: Alamat + Maps */}
          <div>
            <h4 className="font-serif font-semibold text-white mb-4">{t(footer.map)}</h4>
            <p className="text-xs text-white/50 mb-3 leading-relaxed">{contactInfo.address}</p>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.891!2d112.72!3d-8.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62a3c9e2f8f85%3A0x4027a76e3540310!2sWringinanom%2C%20Poncokusumo%2C%20Malang%20Regency!5e0!3m2!1sid!2sid!4v1710000000000"
                title="Peta Wringinanom"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        ) : null}

        {/* Bottom bar */}
        <div className={`${isHome ? 'mt-10 pt-6 border-t border-white/10' : ''} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <span className="text-sm">🏆</span>
              <span className="text-xs text-white/70 font-medium">#2 ADWI 2024</span>
            </div>
            <span className="text-xs text-white/40">{t(footer.copyright)}</span>
          </div>
          <button onClick={toggleLang} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-sm">{lang === 'id' ? '🇮🇩' : '🇬🇧'}</span>
            <span>{lang === 'id' ? 'ID' : 'EN'}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
