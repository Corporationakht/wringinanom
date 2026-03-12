import { useLang } from '../context/LanguageContext'

export default function DestinationCard({ destination, index }) {
  const { t } = useLang()

  return (
    <div
      className="group hover-sheen glass-card rounded-2xl overflow-hidden transition-all duration-500 flex flex-col snap-start shrink-0 w-[280px] sm:w-auto"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={destination.img}
          alt={t(destination.name)}
          data-replace={destination.dataReplace}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
          {t(destination.tag)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-lg text-text mb-2 group-hover:text-primary-dark transition-colors">
          {t(destination.name)}
        </h3>
        {destination.desc && (
          <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-3">
            {t(destination.desc)}
          </p>
        )}
        {destination.price && (
          <div className="mt-auto pt-3 border-t border-text/5 flex items-center justify-between">
            <span className="text-sm font-bold text-primary-dark">{t(destination.price)}</span>
            <span className="text-xs text-accent font-semibold group-hover:translate-x-1 transition-transform">→</span>
          </div>
        )}
      </div>
    </div>
  )
}
