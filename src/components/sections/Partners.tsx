import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { partners } from '@/config/partners';

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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 place-items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              className="w-full flex items-center justify-center p-4"
            >
              <div className="w-full h-24 md:h-32 flex items-center justify-center relative">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className={`max-h-full max-w-full object-contain ${partner.className || ''}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
