import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppUrl } from '@/config/site';

export default function Services() {
  const { t } = useLanguage();

  const waUrl = getWhatsAppUrl(t('wa.services'));
  const services = [1, 2, 3, 4, 5, 6];

  return (
    <section id="services" className="bg-linen py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        {/* Split Layout Container — No scroll, aligned side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 lg:items-center">

          {/* Left Column — Static Header */}
          <div className="lg:col-span-4 lg:pr-12 lg:border-r lg:border-jade/10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.6 }}
              className="font-body text-[11px] md:text-xs font-medium uppercase tracking-[0.25em] text-jade mb-5"
            >
              {t('services.eyebrow')}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-heading text-[26px] md:text-[32px] lg:text-[36px] font-normal leading-[1.2] text-jade-deep whitespace-pre-line"
            >
              {t('services.heading')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-body text-[13px] md:text-[14px] font-light text-soft-gray mt-6 leading-relaxed italic"
            >
              {t('services.note')}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-3 mt-8 font-body text-[13px] md:text-[14px] font-medium tracking-[0.08em] text-jade hover:text-jade-deep transition-colors duration-300"
            >
              <span className="relative">
                {t('services.cta')}
                <span className="absolute left-0 -bottom-0.5 w-full h-px bg-jade/30 group-hover/link:bg-jade-deep/50 transition-colors duration-300" />
              </span>
              <svg
                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </motion.a>
          </div>

          {/* Right Column — 3x2 Grid of Services */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((n, i) => {
                // Calculate row and column for cleaner border logic
                const row = Math.floor(i / 3);
                const col = i % 3;
                const isLastRow = row === 1;
                const isLastCol = col === 2;

                return (
                  <motion.div
                    key={n}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                    className={`
                      group py-5 lg:py-6 lg:px-8
                      ${!isLastRow ? 'lg:border-b lg:border-jade/10' : ''}
                      ${!isLastCol ? 'lg:border-r lg:border-jade/10' : ''}
                      ${i < 5 ? 'border-b border-jade/10 sm:border-b lg:border-b-0' : 'border-b-0'}
                      ${!isLastRow ? 'lg:border-b' : ''}
                    `}
                  >
                    {/* Number */}
                    <span className="block font-heading text-[10px] tracking-[0.2em] text-sage/40 mb-2">
                      {String(n).padStart(2, '0')}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-[15px] md:text-[16px] lg:text-[17px] font-normal text-jade-deep leading-snug group-hover:text-jade transition-colors duration-300 mb-1.5">
                      {t(`services.s${n}_title`)}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-[11px] md:text-[12px] font-light text-soft-gray leading-[1.7]">
                      {t(`services.s${n}_desc`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
