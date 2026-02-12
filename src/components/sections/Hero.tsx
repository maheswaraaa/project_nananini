import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/site';

export default function Hero() {
  const { t } = useLanguage();

  const waUrl = getWhatsAppUrl(t('wa.general'));

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
          className="font-body text-[15px] md:text-[17px] font-light text-soft-gray mt-6 max-w-[480px] mx-auto leading-relaxed"
        >
          {t('hero.subtext')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-[13px] font-medium uppercase tracking-[0.14em] text-jade hover:text-jade-deep transition-colors duration-300"
          >
            <span className="relative">
              {t('hero.cta')}
              <span className="absolute left-0 -bottom-[3px] w-full h-px bg-jade/30 group-hover:bg-jade-deep/50 transition-colors duration-300" />
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
