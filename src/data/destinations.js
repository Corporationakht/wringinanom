// Full destination data for /destinasi index and detail pages
import { photos } from './content'

export const filterCategories = [
  { id: 'semua', label: { id: 'Semua', en: 'All' } },
  { id: 'alam', label: { id: 'Alam & Petualangan', en: 'Nature & Adventure' } },
  { id: 'agro', label: { id: 'Agrowisata', en: 'Agrotourism' } },
  { id: 'budaya', label: { id: 'Budaya', en: 'Culture' } },
  { id: 'kuliner', label: { id: 'Kuliner', en: 'Culinary' } },
]

export const allDestinations = [
  {
    slug: 'river-tubing-banyumaro',
    name: { id: 'River Tubing Banyumaro', en: 'Banyumaro River Tubing' },
    category: 'alam',
    tag: { id: 'Alam & Petualangan', en: 'Nature & Adventure' },
    duration: { id: '2–3 jam', en: '2–3 hours' },
    capacity: { id: '5–30 orang', en: '5–30 people' },
    price: { id: 'Mulai Rp 75.000/orang', en: 'From Rp 75,000/person' },
    shortDesc: {
      id: 'Meluncur di arus Sungai Amprong yang langsung turun dari lereng Semeru. Airnya dingin, arusnya pas — cukup seru untuk dewasa, cukup aman untuk anak 8 tahun ke atas.',
      en: 'Ride the Amprong River current that flows straight down from the Semeru slopes. The water is cold, the rapids just right — thrilling enough for adults, safe enough for kids eight and up.',
    },
    img: photos.dest.tubing,
    dataReplace: 'Foto asli: wisatawan tubing di Sungai Amprong, air jernih, dikelilingi tebing hijau',
    gallery: [
      { src: photos.dest.tubing },
      { src: 'https://jadesta.kemenpar.go.id/imgpost/94691.jpg' },
    ],
    longDesc: {
      id: [
        'Sungai Amprong bukan sungai biasa — airnya turun langsung dari lereng Semeru, melewati bebatuan vulkanik yang membentuk jeram-jeram alami sepanjang 2 kilometer. Suhu air rata-rata 18°C, cukup dingin untuk bikin kamu teriak saat pertama kali nyebur. Tapi setelah 5 menit, dinginnya justru jadi candu.',
        'Jalur tubing dirancang oleh pemuda desa yang hafal setiap batu dan belokan. Ada 7 jeram yang diberi nama lokal — mulai dari "Jeram Kaget" yang tiba-tiba datang di belokan pertama, sampai "Jeram Terakhir" yang cukup tenang untuk selfie. Sepanjang jalur, tebing setinggi 3-5 meter dipenuhi pakis dan akar pohon yang menjuntai ke air.',
        'Kegiatan ini cocok untuk semua umur di atas 8 tahun. Setiap peserta dilengkapi helm, pelampung, dan ban dalam yang tebal. Pemandu berdiri di setiap jeram untuk memastikan keamanan. Setelah selesai, kamu bisa mampir ke warung warga yang jual wedang jahe panas dan gorengan — kombinasi sempurna setelah basah dan kedinginan.',
      ],
      en: [
        'The Amprong River isn\'t just any river — its water descends directly from the slopes of Mount Semeru, cutting through volcanic rocks that form natural rapids along a 2-kilometre stretch. The average water temperature sits at 18°C, cold enough to make you scream when you first get in. But after five minutes, the chill becomes addictive.',
        'The tubing route was designed by village youth who know every rock and turn by heart. There are seven rapids, each with local names — from "Jeram Kaget" (Surprise Rapid) that hits you at the first bend, to "Jeram Terakhir" (Final Rapid) which is calm enough for a selfie. Along the route, 3-to-5-metre cliffs are covered in ferns and tree roots that dangle into the water.',
        'This activity suits all ages above eight. Every participant gets a helmet, life jacket, and thick inner tube. Guides stand at each rapid to ensure safety. After you\'re done, stop by a village warung for hot ginger wedang and fried snacks — the perfect combo after getting soaked and cold.',
      ],
    },
    difficulty: { id: 'Mudah–Menengah', en: 'Easy–Moderate' },
    includes: {
      id: ['Ban tubing', 'Helm & pelampung', 'Pemandu lokal', 'Asuransi kegiatan'],
      en: ['Tubing tube', 'Helmet & life jacket', 'Local guide', 'Activity insurance'],
    },
    bring: {
      id: ['Pakaian ganti', 'Sandal strap', 'Handuk', 'Waterproof phone case'],
      en: ['Change of clothes', 'Strap sandals', 'Towel', 'Waterproof phone case'],
    },
    suitableFor: {
      id: ['Keluarga', 'Rombongan', 'Pelajar'],
      en: ['Families', 'Groups', 'Students'],
    },
    reviews: [
      { name: 'Andi S.', location: { id: 'Jakarta', en: 'Jakarta' }, stars: 5, text: { id: 'Jeram ke-3 yang namanya "Jeram Kaget" itu beneran bikin kaget — tiba-tiba belok kanan dan airnya lumayan deras. Tapi pemandunya sigap banget. Pasti balik lagi!', en: 'The third rapid called "Surprise Rapid" really lives up to its name — a sudden right turn with strong current. But the guides were incredibly responsive. Definitely coming back!' } },
      { name: 'Lisa W.', location: { id: 'Bandung', en: 'Bandung' }, stars: 5, text: { id: 'Bawa anak umur 10 tahun dan dia ketagihan. Minta tubing lagi padahal sudah mau sore. Airnya jernih banget, bisa lihat ikan kecil di bagian yang tenang.', en: 'Brought my 10-year-old and she got hooked. Kept asking for another round even though it was getting late. The water is crystal clear — you can see small fish in the calm sections.' } },
      { name: 'Marco R.', location: { id: 'Italia', en: 'Italy' }, stars: 4, text: { id: 'Very unique experience. The river is beautiful and the local guides make it safe. Only wish the route was a bit longer — it ended too fast!', en: 'Very unique experience. The river is beautiful and the local guides make it safe. Only wish the route was a bit longer — it ended too fast!' } },
    ],
  },
  {
    slug: 'jeep-tour-bromo',
    name: { id: 'Jeep Tour Bromo', en: 'Bromo Jeep Tour' },
    category: 'alam',
    tag: { id: 'Petualangan', en: 'Adventure' },
    duration: { id: '4–6 jam', en: '4–6 hours' },
    capacity: { id: '4 orang/jeep', en: '4 people/jeep' },
    price: { id: 'Mulai Rp 300.000/jeep', en: 'From Rp 300,000/jeep' },
    shortDesc: {
      id: '150+ armada jeep siap dini hari. Jalur offroad dari Wringinanom menembus kabut pagi sebelum matahari menyentuh kawah Bromo.',
      en: '150+ jeeps ready before dawn. The offroad route from Wringinanom cuts through morning mist before the sun touches the Bromo crater.',
    },
    img: 'https://kolomdesa.com/wp-content/uploads/2024/05/Sumber-Foto-indonesia_travel.jpg',
    dataReplace: 'Foto asli: konvoi jeep di jalur berbatu menuju Bromo saat subuh, kabut tebal',
    gallery: [
      { src: 'https://kolomdesa.com/wp-content/uploads/2024/05/Sumber-Foto-indonesia_travel.jpg' },
    ],
    longDesc: {
      id: [
        'Berbeda dari jeep tour yang berangkat dari Cemoro Lawang atau Tumpang, rute dari Wringinanom membawa kamu melewati jalan desa yang sepi dan kebun jeruk sebelum masuk ke jalur offroad. Di jam 3 pagi, udara masih 12°C dan kabut setebal selimut menyelimuti jalan. Lampu jeep memotong kegelapan, dan satu per satu rumah warga yang menyalakan lampu dapur jadi pemandangan pertamamu.',
        'Armada 150+ jeep dikelola oleh koperasi warga desa. Setiap pengemudi adalah warga lokal yang sudah hapal jalur ini sejak mereka bisa memegang setir. Rute standar mencakup Penanjakan 1 untuk sunrise, lautan pasir Bromo, dan berhenti di kawah. Tapi kalau kamu minta, ada rute alternatif yang melewati savana Teletubbies dan bukit telecom yang sepi turis.',
        'Jeep berangkat jam 2:30–3:00 pagi dan kembali sekitar jam 8:00 pagi. Harga per jeep (bukan per orang), jadi makin ramai makin murah. Setelah tour, pengemudi biasanya mampir di warung desa untuk sarapan — nasi pecel dengan sambal khas Poncokusumo yang nggak bisa kamu temukan di tempat lain.',
      ],
      en: [
        'Unlike jeep tours departing from Cemoro Lawang or Tumpang, the Wringinanom route takes you through quiet village roads and citrus groves before hitting the offroad trail. At 3am, the air sits at 12°C and fog as thick as a blanket covers the road. The jeep headlights cut through the darkness, and one by one, villagers\' kitchen lights become your first scenery.',
        'The 150+ jeep fleet is managed by a village cooperative. Every driver is a local who\'s known this route since they could grip a steering wheel. The standard route covers Penanjakan 1 for sunrise, the Bromo sea of sand, and a crater stop. But ask nicely, and there are alternative routes through the Teletubbies savanna and the quiet telecom hill.',
        'Jeeps depart at 2:30–3:00am and return around 8:00am. The price is per jeep (not per person), so the more you bring, the cheaper it gets. After the tour, drivers usually stop at a village warung for breakfast — nasi pecel with Poncokusumo-style sambal you won\'t find anywhere else.',
      ],
    },
    difficulty: { id: 'Mudah (naik jeep)', en: 'Easy (riding in jeep)' },
    includes: {
      id: ['Jeep + pengemudi', 'BBM', 'Tiket masuk kawasan Bromo', 'Air mineral'],
      en: ['Jeep + driver', 'Fuel', 'Bromo area entry ticket', 'Mineral water'],
    },
    bring: {
      id: ['Jaket tebal', 'Masker (untuk pasir)', 'Kamera', 'Uang cash untuk parkir'],
      en: ['Thick jacket', 'Mask (for sand)', 'Camera', 'Cash for parking'],
    },
    suitableFor: {
      id: ['Keluarga', 'Pasangan', 'Rombongan'],
      en: ['Families', 'Couples', 'Groups'],
    },
    reviews: [
      { name: 'Dian P.', location: { id: 'Yogyakarta', en: 'Yogyakarta' }, stars: 5, text: { id: 'Sunrise dari Penanjakan 1 itu... nggak bisa dideskripsikan. Dan driver kami, Mas Heru, ternyata bisa jadi guide dadakan yang cerita sejarah Bromo sambil nyetir.', en: 'The sunrise from Penanjakan 1 is... beyond words. And our driver Mas Heru turned out to be an impromptu guide, narrating Bromo\'s history while driving.' } },
      { name: 'Tom H.', location: { id: 'Australia', en: 'Australia' }, stars: 5, text: { id: 'Starting from Wringinanom is the way to go — you avoid the tourist traffic and the route through the village is beautiful even in the dark.', en: 'Starting from Wringinanom is the way to go — you avoid the tourist traffic and the route through the village is beautiful even in the dark.' } },
      { name: 'Novi A.', location: { id: 'Surabaya', en: 'Surabaya' }, stars: 4, text: { id: 'Udara 3°C di Penanjakan itu nggak main-main. Bawa jaket paling tebal yang kamu punya. Tapi pemandangannya worth it banget.', en: 'The 3°C air at Penanjakan is no joke. Bring the thickest jacket you own. But the view is absolutely worth it.' } },
    ],
  },
  {
    slug: 'agrowisata-petik-jeruk',
    name: { id: 'Agrowisata Petik Jeruk', en: 'Orange Picking Agrotourism' },
    category: 'agro',
    tag: { id: 'Agrowisata', en: 'Agrotourism' },
    duration: { id: '2 jam', en: '2 hours' },
    capacity: { id: 'Maks 50 orang', en: 'Max 50 people' },
    price: { id: 'Mulai Rp 50.000/orang', en: 'From Rp 50,000/person' },
    shortDesc: {
      id: 'Masuk kebun, petik langsung dari pohon, bawa pulang hasil petikanmu. Panduan akan cerita cara merawat jeruk dataran tinggi yang rasanya berbeda dengan jeruk pasar.',
      en: 'Enter the grove, pick straight from the tree, take your harvest home. Guides will explain how highland citrus is grown — and why it tastes nothing like supermarket oranges.',
    },
    img: photos.dest.agro,
    dataReplace: 'Foto asli: pengunjung memetik jeruk segar di kebun lereng gunung, latar hijau',
    gallery: [
      { src: photos.dest.agro },
      { src: 'https://jadesta.kemenpar.go.id/imgpost/129354.jpg' },
    ],
    longDesc: {
      id: [
        'Kebun jeruk di Wringinanom bukan kebun biasa — terletak di ketinggian 800–900 mdpl, suhu malam yang dingin (14-16°C) membuat buah jeruk di sini lebih lambat matang tapi lebih manis. Petani bilang rahasianya ada di "stress dingin" — pohon yang sedikit kedinginan menghasilkan gula lebih banyak di buahnya.',
        'Tur dimulai dengan jalan kaki 10 menit melewati jalan setapak di antara pohon-pohon jeruk yang rapi berjajar. Panduan — biasanya Pak Slamet atau Bu Yanti yang sudah 20 tahun bertani jeruk — akan cerita tentang varietas yang ditanam, cara okulasi, dan kenapa jeruk Poncokusumo pernah jadi komoditas ekspor ke Singapura.',
        'Setiap peserta boleh memetik dan membawa pulang 1 kg jeruk. Ada juga kesempatan mencicipi jus jeruk segar yang diperas langsung di kebun — tanpa gula, tanpa air, murni jeruk. Rasanya beda banget dari jus kemasan, ada sedikit rasa asam segar yang bikin ketagihan.',
      ],
      en: [
        'The citrus groves of Wringinanom aren\'t ordinary — sitting at 800–900m altitude, the cold night temperatures (14-16°C) cause the fruit here to ripen more slowly but sweeter. Farmers say the secret is "cold stress" — trees that are slightly chilled produce more sugar in their fruit.',
        'The tour begins with a 10-minute walk along a path between neatly arranged citrus trees. Your guide — usually Pak Slamet or Bu Yanti, both 20-year citrus farming veterans — will explain the varieties grown here, grafting techniques, and why Poncokusumo oranges were once an export commodity to Singapore.',
        'Each participant can pick and take home 1kg of oranges. There\'s also a chance to taste fresh orange juice pressed right in the grove — no sugar, no water, pure citrus. It tastes completely different from packaged juice, with a fresh tartness that becomes addictive.',
      ],
    },
    difficulty: { id: 'Mudah', en: 'Easy' },
    includes: {
      id: ['Panduan kebun', '1 kg jeruk untuk dibawa pulang', 'Jus jeruk segar', 'Edukasi pertanian'],
      en: ['Garden guide', '1kg oranges to take home', 'Fresh orange juice', 'Agricultural education'],
    },
    bring: {
      id: ['Topi/payung', 'Sepatu tertutup', 'Tas untuk jeruk', 'Sunscreen'],
      en: ['Hat/umbrella', 'Closed shoes', 'Bag for oranges', 'Sunscreen'],
    },
    suitableFor: {
      id: ['Keluarga', 'Pelajar', 'Rombongan'],
      en: ['Families', 'Students', 'Groups'],
    },
    reviews: [
      { name: 'Sinta R.', location: { id: 'Malang', en: 'Malang' }, stars: 5, text: { id: 'Bu Yanti yang jadi panduan kebun itu seru banget ceritanya. Ternyata jeruk Poncokusumo pernah diekspor ke Singapura! Dan rasa jeruknya... beda jauh sama yang di pasar.', en: 'Bu Yanti who guided us is an amazing storyteller. Turns out Poncokusumo oranges were once exported to Singapore! And the taste... miles apart from market oranges.' } },
      { name: 'Rio K.', location: { id: 'Jakarta', en: 'Jakarta' }, stars: 5, text: { id: 'Jus jeruk yang diperas langsung di kebun itu fenomenal. Nggak perlu gula, nggak perlu air. Anak-anak langsung minta tambah.', en: 'The orange juice pressed right in the grove is phenomenal. No sugar needed, no water. The kids immediately asked for more.' } },
      { name: 'Yuko T.', location: { id: 'Jepang', en: 'Japan' }, stars: 5, text: { id: 'Beautiful orchard with mountain view. The farmer\'s knowledge about cold-stress agriculture was fascinating. Highly recommend for families.', en: 'Beautiful orchard with mountain view. The farmer\'s knowledge about cold-stress agriculture was fascinating. Highly recommend for families.' } },
    ],
  },
  {
    slug: 'camping-stargazing-semeru',
    name: { id: 'Camping & Stargazing Semeru View', en: 'Camping & Stargazing with Semeru View' },
    category: 'alam',
    tag: { id: 'Alam & Petualangan', en: 'Nature & Adventure' },
    duration: { id: '1–2 malam', en: '1–2 nights' },
    capacity: { id: '100 tenda', en: '100 tents' },
    price: { id: 'Mulai Rp 85.000/malam', en: 'From Rp 85,000/night' },
    shortDesc: {
      id: 'Pada malam yang cerah, siluet Semeru terlihat dari area camping. Api unggun, kopi Tengger panas, dan langit yang tidak pernah sebersih ini di kota.',
      en: 'On a clear night, Semeru\'s silhouette rises from the campsite. Campfire, hot Tengger coffee, and a sky you\'ve never seen this clean in the city.',
    },
    img: 'https://jatim.jadesta.com/imgpost/150073.jpg',
    dataReplace: 'Foto asli: tenda camping dengan siluet Semeru di latar, malam berbintang',
    gallery: [
      { src: 'https://jatim.jadesta.com/imgpost/150073.jpg' },
    ],
    longDesc: {
      id: [
        'Area camping Wringinanom terletak di lahan rumput seluas 2 hektar di ketinggian 950 mdpl. Dari sini, Gunung Semeru — puncak tertinggi di Jawa — terlihat jelas di arah tenggara. Pada malam tanpa awan, biasanya antara April–Oktober, gugusan bintang terlihat tanpa bantuan teleskop. Milky Way yang selama ini cuma kamu lihat di foto Instagram, di sini terlihat nyata di atas kepala.',
        'Fasilitas camping sederhana tapi lengkap: toilet bersih, sumber air dari mata air pegunungan, dan warung yang buka sampai jam 9 malam menjual mie instan, gorengan, dan kopi Tengger buatan Bu Marni. Bagi yang tidak bawa tenda, ada penyewaan tenda dome untuk 2-4 orang dengan harga terjangkau. Sleeping bag juga tersedia — dan kamu akan butuhnya, karena suhu malam bisa turun ke 10°C.',
        'Momen terbaik ada dua: pertama, saat matahari terbenam di balik perbukitan barat dan langit berubah jingga kemerahan. Kedua, pukul 3 pagi — kalau kamu cukup berani keluar dari sleeping bag — saat Semeru kadang mengeluarkan kilatan merah dari puncaknya. Itu bukan kembang api; itu lava.',
      ],
      en: [
        'The Wringinanom campsite sits on a 2-hectare grass field at 950m altitude. From here, Mount Semeru — Java\'s highest peak — stands clear to the southeast. On cloudless nights, typically between April and October, star clusters are visible without a telescope. The Milky Way you\'ve only ever seen on Instagram is real and right above your head.',
        'Camping facilities are simple but complete: clean toilets, spring water from the mountains, and a warung open until 9pm selling instant noodles, fried snacks, and Tengger coffee made by Bu Marni. For those without a tent, dome tent rental for 2-4 people is affordable. Sleeping bags are also available — and you\'ll need one, because night temperatures can drop to 10°C.',
        'There are two best moments: first, when the sun sets behind the western hills and the sky turns orange-red. Second, at 3am — if you\'re brave enough to leave your sleeping bag — when Semeru sometimes throws red flashes from its summit. That\'s not fireworks; that\'s lava.',
      ],
    },
    difficulty: { id: 'Mudah', en: 'Easy' },
    includes: {
      id: ['Akses area camping', 'Toilet & air bersih', 'Area api unggun', 'Spot foto'],
      en: ['Campsite access', 'Toilets & clean water', 'Campfire area', 'Photo spots'],
    },
    bring: {
      id: ['Tenda (atau sewa di lokasi)', 'Sleeping bag', 'Pakaian hangat', 'Senter/headlamp', 'Makanan/snack'],
      en: ['Tent (or rent on-site)', 'Sleeping bag', 'Warm clothing', 'Flashlight/headlamp', 'Food/snacks'],
    },
    suitableFor: {
      id: ['Pasangan', 'Rombongan', 'Pelajar'],
      en: ['Couples', 'Groups', 'Students'],
    },
    reviews: [
      { name: 'Fajar A.', location: { id: 'Jakarta', en: 'Jakarta' }, stars: 5, text: { id: 'Jam 3 pagi lihat kilatan merah di puncak Semeru. Bukan editan, bukan tipu-tipu. Itu beneran lava. Pengalaman yang nggak bisa dibeli di mall.', en: 'Saw red flashes at Semeru\'s summit at 3am. Not edited, not a trick. That was actual lava. An experience money can\'t buy at a mall.' } },
      { name: 'Emily C.', location: { id: 'Singapura', en: 'Singapore' }, stars: 5, text: { id: 'The Milky Way was visible with naked eyes. Bu Marni\'s hot coffee at the warung made the cold night bearable. Pure magic.', en: 'The Milky Way was visible with naked eyes. Bu Marni\'s hot coffee at the warung made the cold night bearable. Pure magic.' } },
      { name: 'Bima W.', location: { id: 'Surabaya', en: 'Surabaya' }, stars: 4, text: { id: 'Bawa jaket yang beneran tebal. Suhu 10°C itu nggak main-main. Tapi sunrisenya... worth every shiver.', en: 'Bring a seriously thick jacket. 10°C is no joke. But the sunrise... worth every shiver.' } },
    ],
  },
  {
    slug: 'edukasi-bunga-krisan',
    name: { id: 'Edukasi Bunga Krisan', en: 'Chrysanthemum Education Tour' },
    category: 'agro',
    tag: { id: 'Agrowisata', en: 'Agrotourism' },
    duration: { id: '2 jam', en: '2 hours' },
    capacity: { id: 'Maks 40 orang', en: 'Max 40 people' },
    price: { id: 'Rp 45.000/orang', en: 'Rp 45,000/person' },
    shortDesc: {
      id: 'Wringinanom adalah salah satu produsen bunga krisan ekspor Jawa Timur. Pelajari siklus tanam, teknik panen, dan bawa pulang satu pot bibit.',
      en: 'Wringinanom is one of East Java\'s chrysanthemum export producers. Learn the planting cycle, harvesting techniques, and take home a seedling pot.',
    },
    img: 'https://jatim.jadesta.com/imgpost/150085.jpg',
    dataReplace: 'Foto asli: kebun bunga krisan putih dalam greenhouse, cahaya siang',
    gallery: [
      { src: 'https://jatim.jadesta.com/imgpost/150085.jpg' },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdesXtp-3N-epsuWi0NMmd6u00kECZii9JNA&s' },
    ],
    longDesc: {
      id: [
        'Kebun bunga krisan di Wringinanom bukan sekadar kebun — ini salah satu sentra produksi krisan terbesar di Jawa Timur dengan 6 greenhouse yang masing-masing berisi 5.000–8.000 tanaman. Bunga dari sini dikirim ke pasar bunga Bratang Surabaya, hotel-hotel di Bali, bahkan pernah ekspor ke Singapura dan Jepang.',
        'Tur edukasi dipandu oleh petani yang sudah belasan tahun menekuni budidaya krisan. Kamu akan belajar kenapa krisan butuh pencahayaan buatan di malam hari (trick untuk mengatur waktu mekar), bagaimana cara okulasi untuk menghasilkan warna baru, dan rahasia agar bunga bertahan 2 minggu di vas — spoiler: potong batangnya miring dan ganti air setiap hari.',
        'Di akhir tur, setiap peserta mendapat satu pot bibit krisan untuk dibawa pulang. Ini bukan bibit asal-asalan — boleh pilih warna: putih, kuning, pink, atau ungu. Petani juga akan kasih tips merawat krisan di rumah, termasuk komposisi tanah dan jadwal penyiraman yang tepat.',
      ],
      en: [
        'The chrysanthemum farm in Wringinanom isn\'t just a garden — it\'s one of East Java\'s largest chrysanthemum production centers with 6 greenhouses, each holding 5,000–8,000 plants. Flowers from here are shipped to the Bratang flower market in Surabaya, hotels in Bali, and have even been exported to Singapore and Japan.',
        'The educational tour is led by farmers with over a decade of chrysanthemum cultivation experience. You\'ll learn why chrysanthemums need artificial lighting at night (a trick to control blooming time), how grafting creates new colors, and the secret to making flowers last 2 weeks in a vase — spoiler: cut the stems at an angle and change the water daily.',
        'At the end of the tour, each participant gets a chrysanthemum seedling pot to take home. These aren\'t random seedlings — you can choose your color: white, yellow, pink, or purple. The farmer will also share tips for growing chrysanthemums at home, including soil composition and the right watering schedule.',
      ],
    },
    difficulty: { id: 'Mudah', en: 'Easy' },
    includes: {
      id: ['Tur greenhouse', 'Panduan petani lokal', '1 pot bibit krisan', 'Edukasi perawatan'],
      en: ['Greenhouse tour', 'Local farmer guide', '1 chrysanthemum seedling pot', 'Care education'],
    },
    bring: {
      id: ['Topi', 'Kamera', 'Tas untuk pot bibit'],
      en: ['Hat', 'Camera', 'Bag for the seedling pot'],
    },
    suitableFor: {
      id: ['Keluarga', 'Pelajar', 'Pasangan'],
      en: ['Families', 'Students', 'Couples'],
    },
    reviews: [
      { name: 'Mega S.', location: { id: 'Malang', en: 'Malang' }, stars: 5, text: { id: 'Ternyata bunga krisan butuh lampu di malam hari untuk atur waktu mekar! Ilmu yang gak pernah kepikiran. Bibit yang saya bawa pulang sudah mekar sekarang.', en: 'Turns out chrysanthemums need lights at night to control blooming time! Knowledge I never would have thought of. The seedling I brought home has already bloomed.' } },
      { name: 'Ayu P.', location: { id: 'Bali', en: 'Bali' }, stars: 5, text: { id: 'Sebagai pengusaha wedding, ternyata bunga krisan untuk dekorasi hotel di Bali datang dari sini! Langsung connect sama petani untuk supply.', en: 'As a wedding entrepreneur, I learned that hotel decoration chrysanthemums in Bali come from here! Immediately connected with the farmer for supply.' } },
      { name: 'Kevin L.', location: { id: 'Kanada', en: 'Canada' }, stars: 4, text: { id: 'Fascinating to learn about commercial flower farming. The scale of operation in these greenhouses is impressive. Great for anyone interested in agriculture.', en: 'Fascinating to learn about commercial flower farming. The scale of operation in these greenhouses is impressive. Great for anyone interested in agriculture.' } },
    ],
  }
]
