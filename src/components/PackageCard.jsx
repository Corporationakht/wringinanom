import { useLang } from '../context/LanguageContext'

export default function PackageCard({ pkg }) {
  const { t, lang } = useLang()
  const isHighlight = !!pkg.highlight

  return (
    <div className={`relative bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${isHighlight ? 'ring-2 ring-accent' : ''}`}>
      {/* Highlight badge */}
      {isHighlight && (
        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10">
          {t(pkg.highlight)}
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-5">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark text-xs font-semibold rounded-full mb-3">
            {t(pkg.duration)}
          </span>
          <h3 className="font-serif font-bold text-xl text-text">
            {t(pkg.name)}
          </h3>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-bold text-primary-dark">{pkg.price}</span>
          <span className="text-sm text-muted ml-1">{t(pkg.priceNote)}</span>
        </div>

        {/* Items */}
        <ul className="space-y-3 mb-8">
          {(lang === 'id' ? pkg.items.id : pkg.items.en).map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/6281234567890?text=Halo%20Dewi%20Anom!"
          target="_blank"
          rel="noopener noreferrer"
          className={`block text-center w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
            isHighlight
              ? 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25'
              : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25'
          }`}
        >
          {lang === 'id' ? 'Pesan Sekarang' : 'Book Now'}
        </a>
      </div>
    </div>
  )
}
