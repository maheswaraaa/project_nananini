import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const }
  }),
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[3/4] md:aspect-[4/5] bg-linen rounded overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 to-linen">
              <img
                src="/images/0.jpg"
                alt="Nananini Wedding craftsmanship"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.querySelector('.placeholder-svg')!.classList.remove('hidden');
                }}
              />
              <div className="placeholder-svg hidden absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 260" className="w-32 h-40 text-sage/60" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="30" y="40" width="140" height="180" rx="4" />
                  <rect x="50" y="60" width="100" height="60" rx="2" />
                  <circle cx="80" cy="85" r="12" />
                  <path d="M50 120 L80 95 L110 115 L130 100 L150 120" />
                  <line x1="50" y1="145" x2="150" y2="145" />
                  <line x1="50" y1="160" x2="130" y2="160" />
                  <line x1="50" y1="175" x2="140" y2="175" />
                  <line x1="50" y1="190" x2="110" y2="190" />
                </svg>
                <p className="absolute bottom-6 text-xs text-soft-gray/60 font-body tracking-wider uppercase">Photo placeholder</p>
              </div>
            </div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br" />
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20%' }}
              custom={0}
              className="font-body text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-jade mb-4"
            >
              {t('about.eyebrow')}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20%' }}
              custom={1}
              className="font-heading text-[28px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-jade-deep whitespace-pre-line"
            >
              {t('about.heading')}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20%' }}
              custom={2}
              className="font-body text-[15px] md:text-base font-light text-charcoal/80 mt-6 leading-relaxed"
            >
              {t('about.p1')}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20%' }}
              custom={3}
              className="font-body text-[15px] md:text-base font-light text-charcoal/80 mt-4 leading-relaxed"
            >
              {t('about.p2')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-20%' }}
              custom={4}
              className="mt-8"
            >
              <div className="w-16 h-[2px] bg-jade" />
            </motion.div>
          </div>
        </div>
      </div>
    </section >
  );
}
