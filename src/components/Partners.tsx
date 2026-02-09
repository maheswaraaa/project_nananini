import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const partners = [
  { name: 'Kraton Ngayogyakarta', subtitle: 'Hadiningrat' },
  { name: 'Partner', subtitle: 'Wedding EO' },
  { name: 'Partner', subtitle: 'Venue & Catering' },
  { name: 'Partner', subtitle: 'Floral Design' },
  { name: 'Partner', subtitle: 'Photography' },
  { name: 'Partner', subtitle: 'Event Planner' },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section className="bg-linen py-20 md:py-28 lg:py-32" id="partners">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.6 }}
            className="font-body text-[11px] md:text-xs font-medium uppercase tracking-[0.2em] text-jade mb-4"
          >
            {t('partners.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-heading text-[28px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-jade-deep"
          >
            {t('partners.heading')}
          </motion.h2>
        </div>

        {/* Partner Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="bg-white/60 hover:bg-white border border-sage/20 rounded-sm p-6 md:p-8 flex items-center justify-center h-28 md:h-32 transition-all duration-300 grayscale hover:grayscale-0 group cursor-default"
            >
              <div className="text-center">
                {i === 0 ? (
                  /* Kraton special placeholder */
                  <div>
                    <svg viewBox="0 0 40 40" className="w-8 h-8 mx-auto mb-2 text-jade/40 group-hover:text-jade transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 4 L4 16 L4 36 L36 36 L36 16 Z" />
                      <rect x="16" y="24" width="8" height="12" />
                      <rect x="8" y="20" width="6" height="8" />
                      <rect x="26" y="20" width="6" height="8" />
                      <path d="M12 4 L20 0 L28 4" />
                    </svg>
                    <p className="text-[10px] font-body font-medium text-jade-deep/60 group-hover:text-jade-deep uppercase tracking-wider leading-tight transition-colors duration-300">
                      {partner.name}
                    </p>
                    <p className="text-[9px] font-body text-soft-gray/60 group-hover:text-soft-gray uppercase tracking-wider transition-colors duration-300">
                      {partner.subtitle}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="w-10 h-10 mx-auto mb-2 rounded border border-dashed border-sage/40 flex items-center justify-center">
                      <span className="text-[10px] font-body text-sage/60">Logo</span>
                    </div>
                    <p className="text-[10px] font-body font-medium text-soft-gray/60 uppercase tracking-wider leading-tight">
                      {partner.subtitle}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
