import { useLang } from '../context/LanguageContext'

export default function TestimonialCard({ testimonial }) {
  const { t } = useLang()

  return (
    <div className="hover-sheen glass-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col">
      {/* Stars */}
      {testimonial.stars && (
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote mark */}
      <div className="absolute top-4 right-6 text-6xl font-serif text-primary/10 leading-none select-none">"</div>

      {/* Text */}
      <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 relative z-10 italic flex-1">
        "{t(testimonial.text)}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-serif ${testimonial.avatarColor || 'bg-primary/80'}`}>
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-sm text-text">{testimonial.name}</p>
          <p className="text-xs text-muted">{t(testimonial.location)}</p>
        </div>
      </div>
    </div>
  )
}
