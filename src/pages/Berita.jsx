import { useLang } from '../context/LanguageContext'
import { sectionTitles, newsItems } from '../data/content'

function SectionHeader({ title, sub }) {
  const { t } = useLang()
  return (
    <div className="text-center mb-10 sm:mb-14">
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3">
        {t(title)}
      </h2>
      {sub && (
        <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">{t(sub)}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
    </div>
  )
}

export default function Berita() {
  const { t, lang } = useLang()

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-12 sm:py-16 bg-primary-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={sectionTitles.berita.title} sub={sectionTitles.berita.sub} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news, i) => (
              <a href={news.link} target="_blank" rel="noopener noreferrer" key={i} className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 block h-full flex flex-col p-5 sm:p-6 border border-primary-dark/10">
                {news.date && (
                  <div className="text-primary-dark text-xs sm:text-sm font-semibold mb-2 tracking-wide">
                    {news.date}
                  </div>
                )}
                <h3 className="font-serif font-bold text-sm sm:text-lg text-text leading-snug mb-3 group-hover:text-primary-dark transition-colors">
                  {news.title}
                </h3>
                {news.desc && (
                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-4 mb-5 flex-1">
                    {news.desc}
                  </p>
                )}
                <span className="text-accent text-sm font-semibold mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  {lang === 'id' ? 'Baca Selengkapnya' : 'Read More'} 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
