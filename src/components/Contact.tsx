import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WA_NUMBER = '6281328038083';

export default function Contact() {
  const { lang, t } = useLanguage();

  const waMsg = lang === 'en'
    ? encodeURIComponent("Hello Nananini Wedding, I'm interested in your wedding gift services. Could we arrange a consultation?")
    : encodeURIComponent('Halo Nananini Wedding, saya tertarik dengan layanan hadiah pernikahan Anda. Bisakah kita mengatur konsultasi?');

  const contactItems = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Jl. Namburan Lor 54\nKec. Kraton, Kel. Panembahan\nYogyakarta, Indonesia',
      href: 'https://maps.google.com/?q=Jl.+Namburan+Lor+54+Yogyakarta',
    },
    {
      icon: Phone,
      label: t('contact.whatsapp'),
      value: '+62 813-2803-8083',
      href: `https://wa.me/${WA_NUMBER}?text=${waMsg}`,
    },
    {
      icon: Instagram,
      label: t('contact.instagram'),
      value: '@nananini_wedding',
      href: 'https://www.instagram.com/nananini_wedding/',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: t('contact.hoursValue'),
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className="font-body text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-jade mb-4"
          >
            {t('contact.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-heading text-[28px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-jade-deep"
          >
            {t('contact.heading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-body text-[15px] md:text-base font-light text-soft-gray mt-4 max-w-lg mx-auto"
          >
            {t('contact.subtext')}
          </motion.p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-10 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:col-span-3 space-y-8"
          >
            {contactItems.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-jade/10 flex items-center justify-center mt-0.5">
                  <item.icon className="w-[18px] h-[18px] text-jade" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-soft-gray mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[15px] text-charcoal hover:text-jade transition-colors duration-200 whitespace-pre-line leading-relaxed"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-[15px] text-charcoal whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-jade text-white font-body text-[13px] md:text-sm font-medium uppercase tracking-[0.12em] px-10 py-4 rounded-sm hover:bg-jade-deep active:scale-[0.97] transition-all duration-200"
              >
                {t('contact.cta')}
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="md:col-span-2"
          >
            <div className="w-full aspect-square md:aspect-[3/4] bg-linen rounded-sm overflow-hidden relative">
              {/* Static map placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-sage/10 to-linen p-6">
                <svg viewBox="0 0 80 80" className="w-16 h-16 text-sage/50 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="40" cy="32" r="10" />
                  <path d="M40 42 C40 42 56 28 56 20 C56 11.2 48.8 4 40 4 C31.2 4 24 11.2 24 20 C24 28 40 42 40 42Z" />
                  <rect x="8" y="52" width="64" height="24" rx="2" />
                  <line x1="8" y1="60" x2="72" y2="60" />
                  <line x1="8" y1="68" x2="72" y2="68" />
                  <line x1="28" y1="52" x2="28" y2="76" />
                  <line x1="52" y1="52" x2="52" y2="76" />
                </svg>
                <p className="text-xs font-body text-soft-gray/60 text-center leading-relaxed">
                  Jl. Namburan Lor 54<br />
                  Kraton, Yogyakarta
                </p>
                <a
                  href="https://maps.google.com/?q=Jl.+Namburan+Lor+54+Yogyakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[11px] font-body font-medium text-jade hover:text-jade-deep uppercase tracking-wider transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
