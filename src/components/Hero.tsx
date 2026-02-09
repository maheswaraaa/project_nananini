import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WA_NUMBER = '6281328038083';

export default function Hero() {
  const { lang, t } = useLanguage();

  const waMsg = lang === 'en'
    ? encodeURIComponent("Hello Nananini Wedding, I'm interested in your wedding gift services. Could we arrange a consultation?")
    : encodeURIComponent('Halo Nananini Wedding, saya tertarik dengan layanan hadiah pernikahan Anda. Bisakah kita mengatur konsultasi?');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-ivory to-linen overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #5B7F63 1px, transparent 1px), radial-gradient(circle at 75% 75%, #5B7F63 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-soft-gray mb-6"
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-[36px] md:text-[56px] lg:text-[64px] font-normal leading-[1.1] text-jade-deep whitespace-pre-line"
        >
          {t('hero.heading')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[15px] md:text-[17px] font-light text-soft-gray mt-6 max-w-[520px] mx-auto leading-relaxed"
        >
          {t('hero.subtext')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-jade text-white font-body text-[13px] md:text-sm font-medium uppercase tracking-[0.12em] px-10 py-4 rounded-sm hover:bg-jade-deep active:scale-[0.97] transition-all duration-200"
          >
            {t('hero.cta')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-sage" />
        </motion.div>
      </motion.div>
    </section>
  );
}
