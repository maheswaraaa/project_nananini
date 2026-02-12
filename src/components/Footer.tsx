import { Instagram, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-jade-deep text-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <span className="font-heading text-xl tracking-[0.06em]">NANANINI</span>
            <span className="hidden md:block w-px h-4 bg-white/15" />
            <span className="hidden md:inline font-body text-[10px] tracking-[0.2em] text-white/40 uppercase">
              Est. 1994
            </span>
          </div>

          {/* Center: Tagline */}
          <p className="font-heading text-[11px] tracking-[0.15em] text-white/40 order-last md:order-none">
            Crafting timeless elegance since 1994
          </p>

          {/* Right: Social + Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/nananini_wedding/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/6281328038083"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
            <span className="hidden md:block w-px h-4 bg-white/15" />
            <p className="hidden md:block font-body text-[11px] text-white/30">
              {t('footer.copyright')}
            </p>
          </div>
        </div>

        {/* Mobile-only copyright */}
        <p className="md:hidden font-body text-[11px] text-white/30 text-center mt-6">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}