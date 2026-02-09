import { motion } from 'framer-motion';
import { Gift, Heart, Package, Sparkles, MessageCircle, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WA_NUMBER = '6281328038083';

const icons = [Gift, Heart, Package, Sparkles, MessageCircle, Truck];

export default function Services() {
  const { lang, t } = useLanguage();

  const waMsg = lang === 'en'
    ? encodeURIComponent("Hello Nananini Wedding, I'd like to discuss my wedding gift needs.")
    : encodeURIComponent('Halo Nananini Wedding, saya ingin mendiskusikan kebutuhan hadiah pernikahan saya.');

  return (
    <section id="services" className="bg-linen py-20 md:py-28 lg:py-32">
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
            {t('services.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-heading text-[28px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-jade-deep whitespace-pre-line"
          >
            {t('services.heading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-body text-[15px] md:text-base font-light text-soft-gray mt-4 max-w-lg mx-auto"
          >
            {t('services.subtext')}
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((n, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
                className="bg-white p-8 md:p-10 rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.07)] transition-shadow duration-300"
              >
                <Icon className="w-8 h-8 text-jade mb-5" strokeWidth={1.5} />
                <h3 className="font-heading text-xl md:text-[22px] font-medium text-jade-deep mb-3">
                  {t(`services.s${n}_title`)}
                </h3>
                <p className="font-body text-[14px] md:text-[15px] font-light text-soft-gray leading-relaxed">
                  {t(`services.s${n}_desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="text-center mt-14 md:mt-16"
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-jade text-white font-body text-[13px] md:text-sm font-medium uppercase tracking-[0.12em] px-10 py-4 rounded-sm hover:bg-jade-deep active:scale-[0.97] transition-all duration-200"
          >
            {t('services.cta')}
          </a>
          <p className="font-body text-[13px] font-light text-soft-gray mt-5 max-w-md mx-auto leading-relaxed italic">
            {t('services.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
