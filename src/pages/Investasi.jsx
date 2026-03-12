import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { photos, WA_NUM } from '../data/content'

/* ── Metrics ── */
const metrics = [
  { value: '6.016', label: { id: 'Desa Bersaing', en: 'Competing Villages' }, sub: { id: 'Juara II ADWI 2024', en: '#2 ADWI 2024' }, icon: '🏆' },
  { value: '150+', label: { id: 'Armada Jeep Aktif', en: 'Active Jeep Fleet' }, sub: { id: 'Koperasi warga desa', en: 'Village cooperative' }, icon: '🚙' },
  { value: '15+', label: { id: 'Paket Wisata', en: 'Tour Packages' }, sub: { id: 'Dari 1 hari sampai 3 hari', en: 'From 1 to 3 days' }, icon: '🎒' },
  { value: '850m', label: { id: 'Ketinggian Strategis', en: 'Strategic Altitude' }, sub: { id: 'Iklim sejuk sepanjang tahun', en: 'Cool climate year-round' }, icon: '⛰️' },
  { value: '3', label: { id: 'Kelompok Seni Aktif', en: 'Active Art Groups' }, sub: { id: 'Pencak Dor, Bantengan, Karawitan', en: 'Pencak Dor, Bantengan, Karawitan' }, icon: '🎭' },
  { value: '200+', label: { id: 'UMKM & Pengrajin', en: 'MSMEs & Artisans' }, sub: { id: 'Produk lokal berkualitas', en: 'Quality local products' }, icon: '🤝' },
]

/* ── Opportunities ── */
const opportunities = [
  {
    title: { id: 'Homestay & Penginapan', en: 'Homestay & Lodging' },
    current: {
      id: 'Kapasitas homestay terbatas, demand wisatawan terus naik. Di peak season, tamu terpaksa menginap di kecamatan sebelah.',
      en: 'Homestay capacity is limited while tourist demand keeps rising. During peak season, guests are forced to stay in neighboring districts.',
    },
    potential: {
      id: 'Weekend occupancy rate tinggi, terutama paket Bromo. ROI estimasi 2–3 tahun untuk unit 6 kamar.',
      en: 'High weekend occupancy rates, especially for Bromo packages. Estimated ROI of 2–3 years for a 6-room unit.',
    },
    partner: { id: 'Investor homestay, operator hotel butik', en: 'Homestay investors, boutique hotel operators' },
    icon: '🏡',
  },
  {
    title: { id: 'Pengolahan Produk Pertanian', en: 'Agricultural Product Processing' },
    current: {
      id: 'Jeruk, krisan, dan sayuran dataran tinggi dijual mentah ke pasar induk dengan margin tipis.',
      en: 'Oranges, chrysanthemums, and highland vegetables are sold raw to wholesale markets at thin margins.',
    },
    potential: {
      id: 'Nilai tambah 3–5x jika diolah (jus cold-pressed, teh krisan, frozen veg premium). Pasar organik sedang booming.',
      en: 'Value addition of 3–5x if processed (cold-pressed juice, chrysanthemum tea, premium frozen veg). Organic market is booming.',
    },
    partner: { id: 'UMKM pengolahan, investor pabrik mini', en: 'Processing MSMEs, mini-factory investors' },
    icon: '🏭',
  },
  {
    title: { id: 'Wisata Edukasi', en: 'Educational Tourism' },
    current: {
      id: 'Permintaan study tour sekolah dan corporate team building meningkat tajam sejak ADWI 2024.',
      en: 'Demand for school study tours and corporate team building has surged since ADWI 2024.',
    },
    potential: {
      id: 'Paket 1–2 hari, kapasitas 50–200 orang. Market sekolah Surabaya-Malang sangat besar.',
      en: 'Packages of 1–2 days, capacity 50–200 people. The Surabaya-Malang school market is massive.',
    },
    partner: { id: 'Operator wisata edukasi, instansi CSR perusahaan', en: 'Educational tourism operators, corporate CSR departments' },
    icon: '📚',
  },
  {
    title: { id: 'Infrastruktur Wisata', en: 'Tourism Infrastructure' },
    current: {
      id: 'Jalur trekking, spot foto, dan rest area masih terbatas. Wisatawan rata-rata hanya 4 jam di desa.',
      en: 'Trekking trails, photo spots, and rest areas are still limited. Average tourist stays only 4 hours.',
    },
    potential: {
      id: 'Meningkatkan lama tinggal dari 4 jam ke 1–2 hari = revenue naik 3–5x per wisatawan.',
      en: 'Increasing stay duration from 4 hours to 1–2 days = 3–5x revenue increase per tourist.',
    },
    partner: { id: 'Investor infrastruktur, dana CSR, program pemerintah', en: 'Infrastructure investors, CSR funds, government programs' },
    icon: '🌉',
  },
  {
    title: { id: 'Kemitraan Agen Perjalanan', en: 'Travel Agency Partnership' },
    current: {
      id: 'Mayoritas tamu booking langsung via WhatsApp. Belum ada sistem booking digital terintegrasi.',
      en: 'Most guests book directly via WhatsApp. No integrated digital booking system exists yet.',
    },
    potential: {
      id: 'Bundling paket Bromo + Wringinanom untuk market mancanegara. Potensi 40% wisatawan asing.',
      en: 'Bundling Bromo + Wringinanom packages for international markets. Potential 40% foreign tourist share.',
    },
    partner: { id: 'Travel agent, OTA, platform wisata', en: 'Travel agents, OTAs, tourism platforms' },
    icon: '✈️',
  },
]

/* ── Contacts ── */
const contacts = [
  {
    name: 'H. Suyanto',
    title: { id: 'Kepala Desa Wringinanom', en: 'Head of Wringinanom Village' },
    avatar: 'HS',
    color: 'bg-primary',
    wa: '+6281234567890',
    email: 'kepdes@wringinanom.desa.id',
    hours: { id: 'Senin – Jumat, 09.00–15.00 WIB', en: 'Mon – Fri, 09:00–15:00 WIB' },
  },
  {
    name: 'Eko Prasetyo, S.E.',
    title: { id: 'Direktur BUMDes Dewi Anom', en: 'Director of BUMDes Dewi Anom' },
    avatar: 'EP',
    color: 'bg-accent',
    wa: '+6281234567891',
    email: 'bumdes@dewianom.id',
    hours: { id: 'Senin – Sabtu, 08.00–16.00 WIB', en: 'Mon – Sat, 08:00–16:00 WIB' },
  },
]

const interestOptions = [
  { value: 'homestay', label: { id: 'Homestay & Penginapan', en: 'Homestay & Lodging' } },
  { value: 'pertanian', label: { id: 'Pengolahan Produk Pertanian', en: 'Agricultural Processing' } },
  { value: 'edukasi', label: { id: 'Wisata Edukasi', en: 'Educational Tourism' } },
  { value: 'infra', label: { id: 'Infrastruktur Wisata', en: 'Tourism Infrastructure' } },
  { value: 'agen', label: { id: 'Kemitraan Agen Perjalanan', en: 'Travel Agency Partnership' } },
]

export default function Investasi() {
  const { t, lang } = useLang()
  const [form, setForm] = useState({ nama: '', instansi: '', minat: '', pesan: '' })

  const handleSubmit = () => {
    const interest = interestOptions.find(o => o.value === form.minat)
    const msg = `Halo, saya tertarik berdiskusi tentang peluang kemitraan di Desa Wisata Wringinanom.\n\nNama: ${form.nama}\nInstansi: ${form.instansi}\nJenis Minat: ${interest ? interest.label.id : '-'}\nPesan: ${form.pesan}`
    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={photos.dest.jeep}
            alt="Aerial village view"
            data-replace="Foto asli: pemandangan udara Desa Wringinanom dari drone, sawah dan kebun hijau"
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          {/* Kemenparekraf badge placeholder */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-[10px] font-bold text-white">K</div>
            <span className="text-xs text-white/70 font-medium">Kemenparekraf · ADWI 2024</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {lang === 'id'
              ? 'Wringinanom: Desa Wisata\ndengan Rekam Jejak Terbukti'
              : 'Wringinanom: A Tourism Village\nwith a Proven Track Record'}
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto whitespace-pre-line">
            {lang === 'id'
              ? 'Juara II dari 6.016 desa wisata se-Indonesia · ADWI 2024'
              : 'Runner-up among 6,016 tourism villages across Indonesia · ADWI 2024'}
          </p>
        </div>
      </section>

      {/* ═══ ANGKA BICARA ═══ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Angka Bicara' : 'The Numbers Speak'}
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="bg-surface rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all text-center group hover:-translate-y-1 duration-300">
                <span className="text-2xl mb-3 block">{m.icon}</span>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-primary-dark mb-1">{m.value}</div>
                <div className="text-sm font-semibold text-text mb-1">{t(m.label)}</div>
                <div className="text-xs text-muted">{t(m.sub)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PELUANG KEMITRAAN ═══ */}
      <section className="py-16 sm:py-24 bg-primary-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
              {lang === 'id' ? 'Peluang Terbuka' : 'Open Opportunities'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Peluang Kemitraan' : 'Partnership Opportunities'}
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              {lang === 'id'
                ? '5 sektor strategis yang siap menerima mitra dan investor.'
                : '5 strategic sectors ready for partners and investors.'}
            </p>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="space-y-6">
            {opportunities.map((opp, i) => (
              <div key={i} className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{opp.icon}</span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-text">{t(opp.title)}</h3>
                  </div>

                  {/* 3-column layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Current */}
                    <div className="bg-bg rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-muted/40 rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-wider text-muted">{lang === 'id' ? 'Saat Ini' : 'Current'}</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">{t(opp.current)}</p>
                    </div>

                    {/* Potential */}
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">{lang === 'id' ? 'Potensi' : 'Potential'}</span>
                      </div>
                      <p className="text-sm text-text leading-relaxed font-medium">{t(opp.potential)}</p>
                    </div>

                    {/* Partner */}
                    <div className="bg-accent/5 rounded-xl p-4 border border-accent/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">{lang === 'id' ? 'Mitra Ideal' : 'Ideal Partners'}</span>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">{t(opp.partner)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KONTAK RESMI ═══ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Kontak Resmi' : 'Official Contacts'}
            </h2>
            <p className="text-muted text-sm">
              {lang === 'id'
                ? 'Diskusikan langsung dengan pengambil keputusan di desa.'
                : 'Discuss directly with the village\'s decision makers.'}
            </p>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((c, i) => (
              <div key={i} className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-full ${c.color} flex items-center justify-center text-white font-serif font-bold text-lg`}>
                    {c.avatar}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-text">{c.name}</h3>
                    <p className="text-xs text-muted">{t(c.title)}</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <a href={`https://wa.me/${c.wa.replace('+', '')}`} className="flex items-center gap-2 text-muted hover:text-text transition-colors">
                    <svg className="w-4 h-4 text-wa shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                    {c.wa}
                  </a>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-muted hover:text-text transition-colors">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {c.email}
                  </a>
                  <div className="flex items-center gap-2 text-muted">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t(c.hours)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FORM PENGAJUAN ═══ */}
      <section className="py-16 sm:py-24 bg-primary-dark/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Ajukan Kemitraan' : 'Submit a Partnership Inquiry'}
            </h2>
            <p className="text-muted text-sm max-w-lg mx-auto">
              {lang === 'id'
                ? 'Isi formulir di bawah, dan pesan Anda akan langsung terkirim ke tim mitra Dewi Anom via WhatsApp.'
                : 'Fill the form below, and your message will be sent directly to the Dewi Anom partnership team via WhatsApp.'}
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Nama' : 'Name'} *</label>
                <input
                  type="text"
                  value={form.nama}
                  onChange={e => setForm({ ...form, nama: e.target.value })}
                  placeholder={lang === 'id' ? 'Nama lengkap' : 'Full name'}
                  className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted/50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Instansi / Perusahaan' : 'Organization'} *</label>
                <input
                  type="text"
                  value={form.instansi}
                  onChange={e => setForm({ ...form, instansi: e.target.value })}
                  placeholder={lang === 'id' ? 'PT/CV/Yayasan/Individu' : 'Company/Foundation/Individual'}
                  className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-muted/50"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Jenis Minat' : 'Area of Interest'} *</label>
              <select
                value={form.minat}
                onChange={e => setForm({ ...form, minat: e.target.value })}
                className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-muted appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B5744' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat', backgroundSize: '20px' }}
              >
                <option value="">{lang === 'id' ? '— Pilih jenis kemitraan —' : '— Select partnership type —'}</option>
                {interestOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{t(opt.label)}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-text mb-1.5">{lang === 'id' ? 'Pesan' : 'Message'}</label>
              <textarea
                value={form.pesan}
                onChange={e => setForm({ ...form, pesan: e.target.value })}
                rows={4}
                placeholder={lang === 'id' ? 'Jelaskan rencana atau ide kemitraan Anda...' : 'Describe your partnership plan or ideas...'}
                className="w-full px-4 py-2.5 bg-bg border border-text/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none placeholder:text-muted/50"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!form.nama || !form.instansi || !form.minat}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all text-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              {lang === 'id' ? 'Kirim via WhatsApp' : 'Send via WhatsApp'}
            </button>

            <p className="text-[11px] text-muted/60 mt-3">
              {lang === 'id'
                ? '* Formulir ini mengarahkan ke WhatsApp. Data tidak disimpan di server.'
                : '* This form redirects to WhatsApp. No data is stored on our server.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
