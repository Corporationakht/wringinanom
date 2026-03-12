import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { WA_NUM } from '../data/content'

/* ── Tradition Data — 4 tradisi dengan foto asli Jadesta ── */
const traditions = [
  {
    id: 'wayang-karawitan',
    name: { id: 'Wayang Kulit & Karawitan', en: 'Shadow Puppetry & Karawitan' },
    desc: {
      id: 'Pertunjukan wayang kulit semalam suntuk yang masih dinantikan warga, diiringi alunan gamelan Karawitan. Dalang lokal Wringinanom masih aktif dan bisa disewa untuk hajatan. Kelompok Karawitan berlatih setiap Kamis malam di balai desa — siapapun boleh datang duduk dan mendengarkan.',
      en: 'An all-night shadow puppet performance still eagerly awaited by villagers, accompanied by Karawitan gamelan ensemble. Local puppeteers are still active and available for hire. The Karawitan group rehearses every Thursday night at the village hall — anyone is welcome to sit and listen.',
    },
    when: { id: 'Kamis malam rutin, acara hajatan, dapat disewa', en: 'Every Thursday night, village celebrations, available for hire' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/137889.jpg',
  },
  {
    id: 'beskalan',
    name: { id: 'Tari Beskalan Putri', en: 'Beskalan Putri Dance' },
    desc: {
      id: 'Tarian penyambutan tamu yang anggun dan penuh makna. Gerakan lembut para penari menggambarkan keanggunan perempuan Jawa sekaligus kekuatan batin yang tersembunyi. Kostum berwarna cerah dengan selendang emas menjadi pemandangan yang memukau di setiap pertunjukan.',
      en: 'An elegant and meaningful welcoming dance. The gentle movements of the dancers portray the grace of Javanese women along with their hidden inner strength. Brightly colored costumes with golden sashes create a stunning spectacle at every performance.',
    },
    when: { id: 'Penyambutan tamu resmi, festival budaya', en: 'Official guest welcoming, cultural festivals' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/137892.jpg',
  },
  {
    id: 'bantengan',
    name: { id: 'Kesenian Bantengan', en: 'Bantengan Art' },
    desc: {
      id: 'Tarian dengan properti kepala banteng yang dikenakan penari. Dalam keadaan trance, penari konon bisa merasakan kekuatan banteng. Menakutkan sekaligus memukau. Asap kemenyan mengepul tebal, gamelan bermain makin cepat, dan penari bergerak di luar kendali — tapi tidak pernah menyakiti siapapun.',
      en: 'A dance using a bull head prop worn by the performer. In a trance state, the dancer channels the strength of the bull. Terrifying and mesmerising. Thick incense smoke rises, the gamelan tempo escalates, and the dancer moves beyond control — yet never harms anyone.',
    },
    when: { id: 'Acara bersih desa, festival budaya', en: 'Village cleansing ceremonies, cultural festivals' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/137894.jpg',
  },
  {
    id: 'jaran-pegon',
    name: { id: 'Tari Jaran Pegon', en: 'Jaran Pegon Dance' },
    desc: {
      id: 'Tarian kuda kepang khas lereng Bromo yang menggabungkan unsur kepahlawanan dan mistis. Penari menunggang kuda anyaman bambu sambil menampilkan gerakan akrobatik. Diiringi musik gamelan yang menghentak, pertunjukan ini selalu menjadi puncak acara di setiap festival desa.',
      en: 'A signature bamboo horse dance of the Bromo slopes combining heroism and mysticism. Dancers ride woven bamboo horses while performing acrobatic movements. Accompanied by pounding gamelan music, this performance is always the highlight at every village festival.',
    },
    when: { id: 'Festival desa, hari besar nasional', en: 'Village festivals, national holidays' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/137896.jpg',
  },
]

/* ── Calendar Events ── */
const calendarEvents = [
  { day: 6, title: { id: 'Festival Bantengan', en: 'Bantengan Festival' }, type: 'festival', time: '19:00' },
  { day: 13, title: { id: 'Karawitan Kamis Malam', en: 'Thursday Night Karawitan' }, type: 'rutin', time: '19:30' },
  { day: 20, title: { id: 'Karawitan Kamis Malam', en: 'Thursday Night Karawitan' }, type: 'rutin', time: '19:30' },
  { day: 22, title: { id: 'Pertunjukan Beskalan Putri', en: 'Beskalan Putri Performance' }, type: 'adat', time: '18:00' },
  { day: 27, title: { id: 'Karawitan Kamis Malam', en: 'Thursday Night Karawitan' }, type: 'rutin', time: '19:30' },
  { day: 29, title: { id: 'Bantengan Bersih Desa', en: 'Village Cleansing Bantengan' }, type: 'adat', time: '18:00' },
]

const calendarFilters = [
  { id: 'all', label: { id: 'Semua', en: 'All' } },
  { id: 'festival', label: { id: 'Festival', en: 'Festival' } },
  { id: 'rutin', label: { id: 'Pertunjukan Rutin', en: 'Regular Shows' } },
  { id: 'adat', label: { id: 'Upacara & Pertunjukan', en: 'Ceremonies & Shows' } },
]

/* ── Page Component ── */
export default function Budaya() {
  const { t, lang } = useLang()
  const [calFilter, setCalFilter] = useState('all')

  // Research form
  const [form, setForm] = useState({ nama: '', institusi: '', topik: '', pesan: '' })

  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfWeek = new Date(year, month, 1).getDay()
  const monthName = now.toLocaleString(lang === 'id' ? 'id-ID' : 'en-US', { month: 'long', year: 'numeric' })

  const filteredEvents = calFilter === 'all'
    ? calendarEvents
    : calendarEvents.filter(e => e.type === calFilter)

  const handleSubmitResearch = () => {
    const msg = `Halo Dewi Anom, saya ingin meneliti tentang budaya Wringinanom.\n\nNama: ${form.nama}\nInstitusi: ${form.institusi}\nTopik: ${form.topik}\nPesan: ${form.pesan}`
    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[50vh] min-h-[340px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://jadesta.kemenpar.go.id/imgpost/137894.jpg"
            alt="Kesenian Bantengan"
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-accent text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 font-medium">
            {lang === 'id' ? 'Budaya & Tradisi' : 'Culture & Tradition'}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            {lang === 'id' ? 'Warisan yang Masih Hidup' : 'A Living Heritage'}
          </h1>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            {lang === 'id'
              ? 'Wayang, Beskalan, Bantengan, Jaran Pegon — bukan artefak museum, tapi tradisi yang masih bernapas di Wringinanom.'
              : 'Shadow puppetry, Beskalan, Bantengan, Jaran Pegon — not museum artefacts, but traditions that still breathe in Wringinanom.'}
          </p>
        </div>
      </section>

      {/* ═══ 4 TRADISI UTAMA ═══ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3">
              {lang === 'id' ? '4 Tradisi Utama' : '4 Core Traditions'}
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {traditions.map((trad, i) => (
              <div
                key={trad.id}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={trad.img}
                    alt={t(trad.name)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-accent/90 text-white font-serif font-bold rounded-full flex items-center justify-center text-lg backdrop-blur-sm">
                    {i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-text mb-4">
                    {t(trad.name)}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
                    {t(trad.desc)}
                  </p>
                  <div className="flex items-start gap-2 text-sm">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <span className="font-semibold text-text text-xs uppercase tracking-wider">{lang === 'id' ? 'Kapan:' : 'When:'}</span>
                      <p className="text-muted mt-0.5">{t(trad.when)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KALENDER AGENDA ═══ */}
      <section className="py-16 sm:py-24 bg-primary-dark/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Kalender Agenda Budaya' : 'Cultural Events Calendar'}
            </h2>
            <p className="text-muted text-sm">{monthName}</p>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          {/* Calendar Filters */}
          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            {calendarFilters.map(f => (
              <button
                key={f.id}
                onClick={() => setCalFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  calFilter === f.id
                    ? 'bg-primary text-white'
                    : 'bg-surface text-muted hover:text-text hover:bg-primary/10 border border-text/10'
                }`}
              >
                {t(f.label)}
              </button>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="bg-surface rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-7 bg-primary-dark/5">
              {(lang === 'id' ? ['Min','Sen','Sel','Rab','Kam','Jum','Sab'] : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']).map(d => (
                <div key={d} className="py-3 text-center text-xs font-bold text-muted uppercase tracking-wider">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="p-2 sm:p-3 min-h-[70px] sm:min-h-[90px] border-t border-text/5" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const isToday = day === now.getDate()
                const dayEvents = filteredEvents.filter(e => e.day === day)
                return (
                  <div key={day} className={`p-1.5 sm:p-2 min-h-[70px] sm:min-h-[90px] border-t border-text/5 transition-colors ${isToday ? 'bg-primary/5' : ''}`}>
                    <span className={`inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full ${isToday ? 'bg-primary text-white' : 'text-muted'}`}>{day}</span>
                    {dayEvents.map((ev, j) => (
                      <div key={j} className={`mt-1 px-1.5 py-0.5 rounded text-[10px] sm:text-xs truncate cursor-pointer transition-colors ${ev.type === 'festival' ? 'bg-accent/15 text-accent font-semibold hover:bg-accent/25' : ev.type === 'adat' ? 'bg-primary/15 text-primary-dark font-semibold hover:bg-primary/25' : 'bg-muted/10 text-muted font-medium hover:bg-muted/20'}`} title={`${t(ev.title)} — ${ev.time}`}>{t(ev.title)}</div>
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Event list */}
          <div className="mt-8 space-y-3">
            {filteredEvents.map((ev, i) => (
              <div key={i} className="flex items-center justify-between bg-surface rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-text">{ev.day}</div>
                    <div className="text-[10px] text-muted uppercase">{now.toLocaleString(lang === 'id' ? 'id-ID' : 'en-US', { month: 'short' })}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-text">{t(ev.title)}</h4>
                    <p className="text-xs text-muted">{ev.time} WIB</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent(`Halo, saya ingin datang ke ${ev.title.id} tanggal ${ev.day}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1.5 bg-primary/10 text-primary-dark text-xs font-semibold rounded-lg hover:bg-primary hover:text-white transition-all"
                >
                  {lang === 'id' ? 'Rencanakan Kunjungan' : 'Plan Your Visit'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HUBUNGI NARASUMBER ═══ */}
      <section className="py-16 sm:py-24" style={{ backgroundColor: '#F0EDE6' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              {lang === 'id' ? 'Riset & Akademik' : 'Research & Academic'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Hubungi Narasumber Budaya' : 'Contact Cultural Resource Person'}
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-xs text-muted mb-6">
              {lang === 'id'
                ? 'Untuk akademisi, peneliti, dan jurnalis — isi formulir di bawah dan pesan akan dikirim ke tim budaya Dewi Anom via WhatsApp.'
                : 'For academics, researchers, and journalists — fill the form below and your message will be sent to the Dewi Anom culture team via WhatsApp.'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Nama' : 'Name'}</label>
                <input type="text" value={form.nama} onChange={e => setForm({ ...form, nama: e.target.value })} placeholder={lang === 'id' ? 'Nama lengkap' : 'Full name'} className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted/50" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Institusi' : 'Institution'}</label>
                <input type="text" value={form.institusi} onChange={e => setForm({ ...form, institusi: e.target.value })} placeholder={lang === 'id' ? 'Universitas/Lembaga' : 'University/Organization'} className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted/50" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Topik Penelitian' : 'Research Topic'}</label>
              <input type="text" value={form.topik} onChange={e => setForm({ ...form, topik: e.target.value })} placeholder={lang === 'id' ? 'Judul atau topik penelitian Anda' : 'Your research title or topic'} className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted/50" />
            </div>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Pesan' : 'Message'}</label>
              <textarea value={form.pesan} onChange={e => setForm({ ...form, pesan: e.target.value })} rows={3} placeholder={lang === 'id' ? 'Jelaskan kebutuhan riset Anda...' : 'Describe your research needs...'} className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none placeholder:text-muted/50" />
            </div>
            <button onClick={handleSubmitResearch} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all text-sm cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              {lang === 'id' ? 'Kirim via WhatsApp' : 'Send via WhatsApp'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
