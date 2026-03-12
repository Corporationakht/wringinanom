import { useLang } from '../context/LanguageContext'
import { contactInfo, social, WA_LINK } from '../data/content'

export default function Kontak() {
  const { lang } = useLang()

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-3">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {lang === 'id' 
                ? 'Punya pertanyaan tentang destinasi atau paket wisata? Jangan ragu untuk menghubungi kami.'
                : 'Have questions about destinations or tour packages? Feel free to reach out to us.'}
            </p>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Contact Info & Map */}
            <div>
              <div className="bg-surface rounded-2xl p-6 sm:p-8 shadow-sm border border-text/5 mb-8">
                <h3 className="font-serif font-bold text-xl text-text mb-6">
                  {lang === 'id' ? 'Informasi Kontak' : 'Contact Information'}
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm mb-1">WhatsApp</p>
                      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors text-sm">
                        {contactInfo.wa}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm mb-1">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-muted hover:text-primary transition-colors text-sm">
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm mb-1">{lang === 'id' ? 'Jam Operasional' : 'Operating Hours'}</p>
                      <p className="text-muted text-sm">{lang === 'id' ? contactInfo.hours.id : contactInfo.hours.en}</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 cursor-pointer">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-text text-sm mb-1">{lang === 'id' ? 'Alamat' : 'Address'}</p>
                      <p className="text-muted text-sm leading-relaxed">{contactInfo.address}</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.891!2d112.72!3d-8.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62a3c9e2f8f85%3A0x4027a76e3540310!2sWringinanom%2C%20Poncokusumo%2C%20Malang%20Regency!5e0!3m2!1sid!2sid!4v1710000000000"
                  title="Peta Wringinanom"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Basic Info and Form */}
            <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-center border border-primary/10">
              <h3 className="font-serif font-bold text-2xl text-primary-dark mb-4">
                {lang === 'id' ? 'Mari Berkunjung!' : 'Let\'s Visit!'}
              </h3>
              <p className="text-text leading-relaxed mb-8">
                {lang === 'id' 
                  ? 'Kami siap menyambut Anda di Desa Wisata Wringinanom. Untuk respons yang paling cepat dan pemesanan tiket wisata, silakan hubungi kami melalui WhatsApp. Kami akan dengan senang hati membantu merencanakan kunjungan Anda.'
                  : 'We are ready to welcome you at Wringinanom Tourism Village. For the fastest response and tour bookings, please contact us via WhatsApp. We will be happy to help plan your visit.'}
              </p>
              
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-wa text-white font-bold rounded-xl hover:bg-wa/90 transition-all text-lg shadow-lg hover:shadow-wa/30 w-full mb-6"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                {lang === 'id' ? 'Chat via WhatsApp' : 'Chat via WhatsApp'}
              </a>

              <div className="flex items-center justify-center gap-4 mt-auto">
                <p className="text-sm font-semibold text-text">{lang === 'id' ? 'Ikuti Kami:' : 'Follow Us:'}</p>
                <a href={social.ig} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white shadow-sm transition-all" title="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white shadow-sm transition-all" title="TikTok">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.84 4.84 0 01-3.01-1.09 4.82 4.82 0 01-1.8-2.93V6.69h4.81z"/></svg>
                </a>
                <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white shadow-sm transition-all" title="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
