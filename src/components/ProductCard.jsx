import { useLang } from '../context/LanguageContext'

export default function ProductCard({ product }) {
  const { t } = useLang()

  return (
    <div className="group hover-sheen glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.img}
          alt={t(product.name)}
          data-replace={product.dataReplace}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        {/* Price badge */}
        <span className="absolute bottom-3 right-3 px-3 py-1.5 bg-accent text-white text-sm font-bold rounded-lg shadow-lg">
          {product.price}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif font-bold text-base text-text mb-2 group-hover:text-primary-dark transition-colors">
          {t(product.name)}
        </h3>
        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {t(product.desc)}
        </p>
      </div>
    </div>
  )
}
