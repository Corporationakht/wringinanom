import { useLang } from '../context/LanguageContext'
import { WA_NUM, WA_LINK } from '../data/content'

/* ── Product Data — 5 produk dengan foto asli Jadesta ── */
const umkmProducts = [
  {
    id: 'sandal-eceng',
    name: { id: 'Sandal Eceng Gondok', en: 'Water Hyacinth Sandals' },
    price: 'Rp 45.000 – Rp 75.000',
    maker: { id: 'Kelompok Pengrajin Ibu-Ibu PKK Wringinanom', en: 'PKK Women Artisan Group, Wringinanom' },
    story: {
      id: 'Eceng gondok yang biasa jadi gulma di danau, di tangan ibu-ibu Wringinanom jadi sandal yang sudah sampai ke Bali dan Jakarta.',
      en: 'Water hyacinth — usually a lake weed — becomes sandals in the hands of Wringinanom women, now sold as far as Bali and Jakarta.',
    },
    meta: { id: 'Ukuran: 36–42 | Tersedia: ✓', en: 'Size: 36–42 | Available: ✓' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/94712.jpg',
    available: true,
  },
  {
    id: 'kerajinan-rajut',
    name: { id: 'Kerajinan Rajut', en: 'Knitted Crafts' },
    price: 'Rp 25.000 – Rp 120.000',
    maker: { id: 'Kelompok Pengrajin Wringinanom', en: 'Wringinanom Artisan Group' },
    story: {
      id: 'Tas, dompet, dan aksesoris rajut buatan tangan warga desa. Setiap produk dikerjakan dengan teliti selama berhari-hari, menghasilkan karya unik yang tidak ada duanya.',
      en: 'Handmade bags, wallets, and knitted accessories by village artisans. Each product is carefully crafted over days, resulting in one-of-a-kind pieces.',
    },
    meta: { id: 'Varian beragam | Tersedia: ✓', en: 'Various items | Available: ✓' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/94716.jpg',
    available: true,
  },
  {
    id: 'keripik-selada',
    name: { id: 'Keripik & Puding Selada Air', en: 'Watercress Chips & Pudding' },
    price: 'Rp 15.000 – Rp 30.000',
    maker: { id: 'Kelompok Usaha Bersama Wringinanom', en: 'Wringinanom Joint Business Group' },
    story: {
      id: 'Selada air yang tumbuh subur di parit-parit Poncokusumo diolah jadi keripik renyah dan puding segar. Inovasi kuliner khas yang tidak ada di tempat lain.',
      en: 'Watercress thriving in Poncokusumo canals is transformed into crispy chips and fresh pudding. A unique culinary innovation found nowhere else.',
    },
    meta: { id: 'Oleh-oleh populer | Tersedia: ✓', en: 'Popular souvenir | Available: ✓' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/136450.jpg',
    available: true,
  },
  {
    id: 'kuliner-khas',
    name: { id: 'Kuliner Khas Dewi Anom', en: 'Dewi Anom Signature Cuisine' },
    price: 'Rp 10.000 – Rp 35.000',
    maker: { id: 'Warung Kuliner Dewi Anom', en: 'Dewi Anom Food Stalls' },
    story: {
      id: 'Sego Empok, Sedaer, dan aneka kuliner dataran tinggi yang resepnya turun-temurun. Makanan pokok nenek moyang Tengger yang kini bisa dinikmati semua orang.',
      en: 'Sego Empok, Sedaer, and highland cuisine with recipes passed down for generations. Tengger ancestral staple food now available for everyone to enjoy.',
    },
    meta: { id: 'Tersedia setiap hari | Dine-in & Take-away', en: 'Available daily | Dine-in & Take-away' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/137852.jpg',
    available: true,
  },
  {
    id: 'es-pencil',
    name: { id: 'Es Pencil Dewi Anom', en: 'Dewi Anom Ice Popsicle' },
    price: 'Rp 5.000 – Rp 10.000',
    maker: { id: 'UMKM Dewi Anom', en: 'Dewi Anom UMKM' },
    story: {
      id: 'Es pencil khas Dewi Anom dengan varian rasa lokal — jeruk Poncokusumo, selada air, dan krisan. Segar banget di siang yang panas setelah keliling desa.',
      en: 'Dewi Anom signature ice popsicles with local flavors — Poncokusumo orange, watercress, and chrysanthemum. Perfect refreshment after a village tour in the heat.',
    },
    meta: { id: 'Tersedia: ✓ | Rasa lokal unik', en: 'Available: ✓ | Unique local flavors' },
    img: 'https://jadesta.kemenpar.go.id/imgpost/94717.jpg',
    available: true,
  },
]

export default function UMKM() {
  const { t, lang } = useLang()

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative h-[45vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://jadesta.kemenpar.go.id/imgpost/94712.jpg"
            alt="Sandal Eceng Gondok"
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-accent text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 font-medium">
            UMKM Wringinanom
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 whitespace-pre-line">
            {lang === 'id' ? 'Buatan Tangan\nWarga Wringinanom' : 'Handcrafted\nby Our Village'}
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            {lang === 'id'
              ? 'Setiap produk punya cerita. Setiap pembelian langsung mendukung keluarga di desa ini.'
              : 'Every product has a story. Every purchase directly supports a family in this village.'}
          </p>
        </div>
      </section>

      {/* ═══ PRODUCT GRID ═══ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Produk Unggulan' : 'Featured Products'}
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {umkmProducts.map(product => (
              <div key={product.id} className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={product.img}
                    alt={t(product.name)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-lg text-text mb-1 group-hover:text-primary-dark transition-colors">
                    {t(product.name)}
                  </h3>
                  <p className="text-accent font-bold text-sm mb-3">
                    {typeof product.price === 'object' ? t(product.price) : product.price}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-3 flex-1">
                    {t(product.story)}
                  </p>
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted">
                    <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t(product.maker)}
                  </div>
                  <p className="text-[11px] text-muted/70 mb-4">{t(product.meta)}</p>
                  <a
                    href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent(`Halo, saya mau pesan ${typeof product.name === 'object' ? product.name.id : product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-2.5 bg-primary/10 text-primary-dark text-sm font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
                  >
                    {lang === 'id' ? 'Pesan Sekarang' : 'Order Now'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROSES MENGANYAM ═══ */}
      <section className="py-16 sm:py-24 bg-primary-dark/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
              <img
                src="https://jadesta.kemenpar.go.id/imgpost/95697.jpg"
                alt={lang === 'id' ? 'Proses menganyam sandal eceng gondok' : 'Water hyacinth sandal weaving process'}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
                {lang === 'id' ? 'Di Balik Layar' : 'Behind the Scenes'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-4">
                {lang === 'id' ? 'Dari Tangan ke Tangan' : 'From Our Hands to Yours'}
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-4">
                {lang === 'id'
                  ? 'Ibu-ibu pengrajin menganyam sandal dari serat eceng gondok yang sudah dikeringkan. Setiap pasang dikerjakan selama 2–3 hari — hasilnya unik, tidak ada yang sama persis.'
                  : 'Women artisans weave sandals from dried water hyacinth fibers. Each pair takes 2–3 days to complete — the result is unique, no two pairs are exactly alike.'}
              </p>
              <p className="text-muted text-sm leading-relaxed">
                {lang === 'id'
                  ? 'Eceng gondok yang biasanya menjadi gulma di danau, di tangan terampil ibu-ibu Wringinanom berubah menjadi produk bernilai tinggi yang sudah dikirim ke Bali, Jakarta, dan kota-kota lain di Indonesia.'
                  : 'Water hyacinth that usually clogs lakes transforms into high-value products in the skilled hands of Wringinanom women, shipped to Bali, Jakarta, and cities across Indonesia.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CARA PESAN ═══ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mb-3">
              {lang === 'id' ? 'Cara Pesan' : 'How to Order'}
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center border-2 border-transparent hover:border-wa/20">
              <div className="w-14 h-14 bg-wa/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-wa" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </div>
              <h3 className="font-serif font-bold text-base text-text mb-2">WhatsApp {lang === 'id' ? 'Langsung' : 'Direct'}</h3>
              <p className="text-xs text-muted mb-5">
                {lang === 'id'
                  ? 'Chat langsung, pilih produk, transfer, kirim. Paling gampang!'
                  : 'Chat directly, pick products, transfer, ship. The easiest way!'}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-wa text-white text-sm font-semibold rounded-xl hover:bg-wa/90 transition-all"
              >
                {lang === 'id' ? 'Buka WhatsApp' : 'Open WhatsApp'}
              </a>
            </div>

            {/* Ambil Langsung */}
            <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all text-center border-2 border-transparent hover:border-accent/20">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-base text-text mb-2">{lang === 'id' ? 'Ambil Langsung di Desa' : 'Pick Up at Village'}</h3>
              <p className="text-xs text-muted mb-3">
                {lang === 'id'
                  ? 'Datang ke Galeri UMKM di pusat desa. Bisa lihat proses pembuatan sekalian!'
                  : 'Visit the UMKM Gallery in the village center. See how they\'re made while you\'re at it!'}
              </p>
              <div className="bg-bg rounded-lg p-3 mb-4">
                <p className="text-xs text-text font-medium">Galeri UMKM Dewi Anom</p>
                <p className="text-[11px] text-muted">Jl. Raya Kunci Wringinanom No.12, Poncokusumo</p>
                <p className="text-[11px] text-muted">{lang === 'id' ? 'Buka: 08.00–17.00 WIB, Senin–Minggu' : 'Open: 08:00–17:00, Mon–Sun'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT BANNER ═══ */}
      <section className="py-12 sm:py-16 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🤝</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
            {lang === 'id'
              ? 'Beli produk desa = mendukung langsung 200+ keluarga di Wringinanom'
              : 'Buy village products = directly support 200+ families in Wringinanom'}
          </h2>
          <p className="text-white/50 text-sm max-w-lg mx-auto">
            {lang === 'id'
              ? '100% hasil penjualan langsung ke tangan pembuat. Tidak ada perantara, tidak ada potongan platform.'
              : '100% of sales go directly to the makers. No middlemen, no platform fees.'}
          </p>
          <div className="flex justify-center gap-8 mt-8">
            {[
              { val: '200+', label: lang === 'id' ? 'Keluarga Terbantu' : 'Families Supported' },
              { val: '5', label: lang === 'id' ? 'Jenis Produk' : 'Product Types' },
              { val: '15+', label: lang === 'id' ? 'Pengrajin Aktif' : 'Active Artisans' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">{s.val}</div>
                <div className="text-[11px] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
