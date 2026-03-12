import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext'
import {
  hero, stats, routeCards, sectionTitles, homeDestinations,
  homeTestimonials, photos, social, WA_LINK,
} from '../data/content'
import TestimonialCard from '../components/TestimonialCard'

function SectionHeader({ title, sub, id }) {
  const { t } = useLang()
  const revealRef = useScrollReveal()
  return (
    <div ref={revealRef} className="text-center mb-10 sm:mb-14 animate-on-scroll" id={id}>
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-premium mb-3">
        {t(title)}
      </h2>
      {sub && (
        <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">{t(sub)}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
    </div>
  )
}

function AnimatedSection({ children, className = "" }) {
  const revealRef = useScrollReveal()
  return (
    <div ref={revealRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const { t, lang } = useLang()

  return (
    <div>
      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={photos.dest.jeep}
            alt="Jeep Tour Bromo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 whitespace-pre-line">
            {t(hero.headline)}
          </h1>
          <p className="font-sans text-white/70 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t(hero.sub)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="#tentang-kami"
              className="hover-sheen inline-flex items-center justify-center px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/30 text-sm sm:text-base"
            >
              {t(hero.cta)}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-sheen inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm sm:text-base backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              {t(hero.ctaWa)}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══ SECTION 2 — STATS STRIP ═══ */}
      <section className="bg-text py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-bg font-serif">{stat.value}</div>
                <div className="text-xs sm:text-sm text-bg/60 mt-1">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — PILIH JALUR ═══ */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle background flair */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title={sectionTitles.routes.title} />
          <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {routeCards.map((card, i) => (
              <Link key={i} to={card.to} className="group glass-card rounded-2xl p-5 sm:p-6 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="text-3xl mb-3 relative z-10">{card.icon}</span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-text mb-2 group-hover:text-primary-dark transition-colors relative z-10">{t(card.title)}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed flex-1 relative z-10">{t(card.desc)}</p>
                <div className="mt-4 text-accent font-semibold text-sm relative z-10">→</div>
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SECTION 4 — DESTINASI ═══ */}
      <section className="py-16 sm:py-24 bg-primary-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={sectionTitles.destinations.title} sub={sectionTitles.destinations.sub} />
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeDestinations.map((d) => (
              <Link key={d.id} to={d.link} className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={d.img} alt={t(d.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">{t(d.tag)}</span>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-lg text-text mb-2 group-hover:text-primary-dark transition-colors">{t(d.name)}</h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 flex-1">{t(d.desc)}</p>
                  <div className="mt-3 text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    {lang === 'id' ? 'Detail →' : 'Details →'}
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SECTION 5 — ABOUT + VIDEO ═══ */}
      <section id="tentang-kami" className="py-16 sm:py-24 scroll-mt-20">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 glass-card text-accent border-accent/20 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider backdrop-blur-md">
                {lang === 'id' ? 'Tentang Kami' : 'About Us'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gradient-premium mb-6 leading-tight">
                {t(sectionTitles.about.title)}
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                {lang === 'id'
                  ? 'Desa Wisata Wringinanom (Dewi Anom) terletak di Kecamatan Poncokusumo, Kabupaten Malang, Jawa Timur — tepat di kaki Gunung Bromo pada ketinggian 850 mdpl. Juara II ADWI 2024 dari 6.016 desa wisata se-Indonesia.'
                  : 'Wringinanom Tourism Village (Dewi Anom) is located in Poncokusumo District, Malang Regency, East Java — at the foot of Mount Bromo at 850m altitude. Runner-up of ADWI 2024 among 6,016 tourism villages across Indonesia.'}
              </p>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {lang === 'id'
                  ? 'Dengan 150+ armada jeep, 6 destinasi wisata, dan warisan budaya yang masih hidup — Wringinanom menawarkan petualangan asli yang tidak bisa ditemukan di tempat lain.'
                  : 'With 150+ jeep fleet, 6 tourism destinations, and living cultural heritage — Wringinanom offers authentic adventures you won\'t find anywhere else.'}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <iframe
                src={`${social.youtubeEmbed}?rel=0`}
                title="Video Profil Dewi Anom"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  )
}
