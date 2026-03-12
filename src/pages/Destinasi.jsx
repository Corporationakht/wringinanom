import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { allDestinations, filterCategories } from '../data/destinations'
import { sectionTitles, photos, WA_LINK } from '../data/content'

export default function Destinasi() {
  const { t, lang } = useLang()
  const [activeFilter, setActiveFilter] = useState('semua')

  const [lightboxImg, setLightboxImg] = useState(null)

  const filtered = activeFilter === 'semua'
    ? allDestinations
    : allDestinations.filter(d => d.category === activeFilter)

  return (
    <div>
      {/* Hero — 40vh */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://sidita.disbudpar.jatimprov.go.id/storage/foto-dtw/1ca43_1670826852.jpg"
            alt="Wringinanom Panorama"
            data-replace="Foto asli: panorama Wringinanom dari atas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/40 to-bg" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {lang === 'id' ? 'Jelajahi Wringinanom' : 'Explore Wringinanom'}
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            {lang === 'id'
              ? '6 destinasi unggulan dari alam, agrowisata, hingga budaya — semua dalam radius 5 km dari pusat desa.'
              : '6 top destinations from nature, agrotourism, to culture — all within 5km of the village center.'}
          </p>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="sticky top-16 sm:top-18 z-40 bg-bg/95 backdrop-blur-md border-b border-primary/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {filterCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-muted hover:text-text hover:bg-primary/10 border border-text/10'
                }`}
              >
                {t(cat.label)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <Link
                key={dest.slug}
                to={`/destinasi/${dest.slug}`}
                className={`group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col animate-fade-in`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={dest.img}
                    alt={t(dest.name)}
                    data-replace={dest.dataReplace}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                    {t(dest.tag)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-lg text-text mb-2 group-hover:text-primary-dark transition-colors">
                    {t(dest.name)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4 flex-1">
                    {t(dest.shortDesc)}
                  </p>

                  {/* Meta row */}
                  <div className="flex items-center justify-between pt-3 border-t border-text/5">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {t(dest.duration)}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {t(dest.capacity)}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-accent">{t(dest.price).split('/')[0]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-sm">
                {lang === 'id' ? 'Belum ada destinasi di kategori ini.' : 'No destinations in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Paket Wisata Gallery */}
      <section className="py-12 sm:py-16 bg-primary-dark/5" id="paket-wisata">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3">
              {t(sectionTitles.paket.title)}
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">{t(sectionTitles.paket.sub)}</p>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.paket.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(src)}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <img src={src} alt={`Paket Wisata ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/50 text-white text-[10px] rounded-md backdrop-blur-sm font-semibold">
                  {lang === 'id' ? 'Paket' : 'Package'} {i + 1}
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-12 mb-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              {lang === 'id' ? 'Tanya via WhatsApp' : 'Ask via WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
          <button onClick={() => setLightboxImg(null)} className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer text-xl">✕</button>
          <button
            onClick={(e) => { e.stopPropagation(); const idx = photos.paket.indexOf(lightboxImg); setLightboxImg(photos.paket[idx > 0 ? idx - 1 : photos.paket.length - 1]) }}
            className="absolute left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer text-xl"
          >‹</button>
          <img src={lightboxImg} alt="Paket Wisata" className="max-w-full max-h-[85vh] object-contain rounded-xl" onClick={e => e.stopPropagation()} />
          <button
            onClick={(e) => { e.stopPropagation(); const idx = photos.paket.indexOf(lightboxImg); setLightboxImg(photos.paket[idx < photos.paket.length - 1 ? idx + 1 : 0]) }}
            className="absolute right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer text-xl"
          >›</button>
          <div className="absolute bottom-4 text-white/50 text-xs">{photos.paket.indexOf(lightboxImg) + 1} / {photos.paket.length}</div>
        </div>
      )}
    </div>
  )
}
