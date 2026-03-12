import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { allDestinations } from '../data/destinations'
import { WA_NUM } from '../data/content'

export default function DestinationDetail() {
  const { slug } = useParams()
  const { t, lang } = useLang()
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const dest = allDestinations.find(d => d.slug === slug)

  if (!dest) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl font-bold text-text mb-4">
            {lang === 'id' ? 'Destinasi tidak ditemukan' : 'Destination not found'}
          </h1>
          <Link to="/destinasi" className="text-primary font-semibold hover:underline">
            ← {lang === 'id' ? 'Kembali ke Destinasi' : 'Back to Destinations'}
          </Link>
        </div>
      </div>
    )
  }

  const longDesc = lang === 'id' ? dest.longDesc.id : dest.longDesc.en
  const includes = lang === 'id' ? dest.includes.id : dest.includes.en
  const bring = lang === 'id' ? dest.bring.id : dest.bring.en
  const suitableFor = lang === 'id' ? dest.suitableFor.id : dest.suitableFor.en

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-text transition-colors">{lang === 'id' ? 'Beranda' : 'Home'}</Link>
          <span>/</span>
          <Link to="/destinasi" className="hover:text-text transition-colors">{lang === 'id' ? 'Destinasi' : 'Destinations'}</Link>
          <span>/</span>
          <span className="text-text font-medium">{t(dest.name)}</span>
        </nav>
      </div>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* Main image */}
          <div
            className="lg:col-span-3 relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer"
            onClick={() => setLightbox(true)}
          >
            <img
              src={dest.gallery[activeImg].src}
              alt={t(dest.name)}
              data-replace={dest.gallery[activeImg].dataReplace}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/50 text-white text-xs rounded-lg backdrop-blur-sm">
              📷 {activeImg + 1}/{dest.gallery.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-2 grid grid-cols-4 lg:grid-cols-1 gap-3">
            {dest.gallery.slice(0, 4).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`relative overflow-hidden rounded-xl aspect-[4/3] lg:aspect-[16/7] cursor-pointer transition-all ${activeImg === i ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'
                  }`}
              >
                <img
                  src={img.src}
                  alt={`${t(dest.name)} ${i + 1}`}
                  data-replace={img.dataReplace}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile swipe dots */}
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {dest.gallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${activeImg === i ? 'bg-accent w-6' : 'bg-muted/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImg(prev => prev > 0 ? prev - 1 : dest.gallery.length - 1) }}
            className="absolute left-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            ‹
          </button>
          <img
            src={dest.gallery[activeImg].src}
            alt={t(dest.name)}
            data-replace={dest.gallery[activeImg].dataReplace}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImg(prev => prev < dest.gallery.length - 1 ? prev + 1 : 0) }}
            className="absolute right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            ›
          </button>
        </div>
      )}

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Main content — 2/3 */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark text-xs font-semibold rounded-full mb-3">
                {t(dest.tag)}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4">
                {t(dest.name)}
              </h1>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {t(dest.duration)}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {t(dest.capacity)}
                </span>
                <span className="flex items-center gap-1.5 font-bold text-accent">
                  {t(dest.price)}
                </span>
              </div>
            </div>

            {/* Long description */}
            <div className="space-y-5 mb-10">
              {longDesc.map((para, i) => (
                <p key={i} className="text-muted text-sm sm:text-base leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Suitable for */}
            <div className="mb-10">
              <h3 className="font-serif font-bold text-base text-text mb-3">
                {lang === 'id' ? 'Cocok untuk:' : 'Suitable for:'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {suitableFor.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-primary/10 text-primary-dark text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h3 className="font-serif font-bold text-lg text-text mb-6">
                {lang === 'id' ? 'Review Pengunjung' : 'Visitor Reviews'}
              </h3>
              <div className="space-y-6">
                {dest.reviews.map((review, i) => (
                  <div key={i} className="bg-surface rounded-xl p-5 sm:p-6">
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: review.stars }).map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-muted leading-relaxed italic mb-3">
                      "{t(review.text)}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary-dark font-bold text-xs">
                        {review.name.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-text">{review.name}</span>
                        <span className="text-xs text-muted ml-2">{t(review.location)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — 1/3 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Info Box */}
              <div className="bg-surface rounded-2xl p-6 shadow-sm border border-text/5">
                <h3 className="font-serif font-bold text-lg text-text mb-5">
                  {lang === 'id' ? 'Informasi' : 'Information'}
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-text/5">
                    <span className="text-muted">{lang === 'id' ? 'Durasi' : 'Duration'}</span>
                    <span className="font-semibold text-text">{t(dest.duration)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-text/5">
                    <span className="text-muted">{lang === 'id' ? 'Kapasitas' : 'Capacity'}</span>
                    <span className="font-semibold text-text">{t(dest.capacity)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-text/5">
                    <span className="text-muted">{lang === 'id' ? 'Tingkat Kesulitan' : 'Difficulty'}</span>
                    <span className="font-semibold text-text">{t(dest.difficulty)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-text/5">
                    <span className="text-muted">{lang === 'id' ? 'Harga' : 'Price'}</span>
                    <span className="font-bold text-accent">{t(dest.price)}</span>
                  </div>
                </div>

                {/* Includes */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                    {lang === 'id' ? 'Yang Termasuk' : 'What\'s Included'}
                  </h4>
                  <ul className="space-y-2">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bring */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                    {lang === 'id' ? 'Yang Perlu Dibawa' : 'What to Bring'}
                  </h4>
                  <ul className="space-y-2">
                    {bring.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-xs mt-1">🎒</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent(`Halo, saya mau pesan ${dest.name.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25 text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                  {lang === 'id' ? 'Pesan via WhatsApp' : 'Book via WhatsApp'}
                </a>
                <button className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-primary text-primary-dark font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  {lang === 'id' ? 'Tambah ke Itinerary' : 'Add to Itinerary'}
                </button>
              </div>

              {/* Back */}
              <Link
                to="/destinasi"
                className="flex items-center gap-1 text-sm text-muted hover:text-text transition-colors"
              >
                ← {lang === 'id' ? 'Semua Destinasi' : 'All Destinations'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
