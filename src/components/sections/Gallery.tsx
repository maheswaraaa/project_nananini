import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { galleryItems } from '@/config/gallery';
import { SITE_CONFIG } from '@/config/site';

function PlaceholderImage({ item, onClick, index }: { item: typeof galleryItems[0]; onClick: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
      className={`${item.aspect} relative rounded-sm overflow-hidden cursor-pointer group`}
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-500 group-hover:scale-105`}>
        <img
          src={item.image}
          alt={item.label}
          loading="lazy"
          className="w-full h-full object-cover transition-opacity duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.querySelector('.placeholder-svg')!.classList.remove('hidden');
          }}
        />
        {/* Decorative elements inside placeholder - fallback */}
        <div className="placeholder-svg hidden absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <svg viewBox="0 0 48 48" className="w-10 h-10 mx-auto text-white/40 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="6" y="10" width="36" height="28" rx="2" />
              <circle cx="18" cy="22" r="4" />
              <path d="M6 34 L16 26 L24 32 L34 22 L42 30" />
            </svg>
            <span className="text-[11px] font-body font-medium text-white/50 uppercase tracking-wider">{item.label}</span>
          </div>
        </div>
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-jade-deep/0 group-hover:bg-jade-deep/30 transition-colors duration-300 flex items-end p-4">
        <span className="text-white text-sm font-body font-light opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {item.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : null)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <section id="gallery" className="bg-white py-20 md:py-28 lg:py-32">
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
            {t('gallery.eyebrow')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-heading text-[28px] md:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-jade-deep whitespace-pre-line"
          >
            {t('gallery.heading')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-body text-[15px] md:text-base font-light text-soft-gray mt-4 max-w-lg mx-auto"
          >
            {t('gallery.subtext')}
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryItems.map((item, i) => (
            <PlaceholderImage key={item.id} item={item} onClick={() => openLightbox(i)} index={i} />
          ))}
        </div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-jade hover:text-jade-deep hover:underline underline-offset-4 transition-colors duration-200"
          >
            {t('gallery.instagram')}
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white z-10 p-2"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/50 hover:text-white p-2 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/50 hover:text-white p-2 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-[85vw] h-[70vh] md:w-[60vw] md:h-[75vh] max-w-3xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-full rounded bg-gradient-to-br ${galleryItems[lightboxIndex].color} flex items-center justify-center relative overflow-hidden`}>
                <img
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].label}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.querySelector('.lightbox-fallback')!.classList.remove('hidden');
                  }}
                />
                <div className="lightbox-fallback hidden text-center">
                  <svg viewBox="0 0 64 64" className="w-16 h-16 mx-auto text-white/30 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="12" width="52" height="40" rx="3" />
                    <circle cx="22" cy="28" r="6" />
                    <path d="M6 44 L20 34 L32 42 L46 28 L58 38" />
                  </svg>
                  <p className="text-white/50 text-sm font-body">{galleryItems[lightboxIndex].label}</p>
                  <p className="text-white/30 text-xs font-body mt-1">{lightboxIndex + 1} / {galleryItems.length}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
