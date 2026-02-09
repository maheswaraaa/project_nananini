import { Instagram, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const sections = ['home', 'about', 'services', 'gallery', 'contact'];

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-jade-deep text-white">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-start">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-2xl font-semibold tracking-[0.04em] leading-none">NANANINI</span>
              <br />
              <span className="font-body text-[9px] font-medium tracking-[0.3em] text-white/60 uppercase">WEDDING</span>
            </div>
            <p className="font-body text-sm font-light text-white/60 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="font-body text-sm text-white/60 hover:text-white transition-colors duration-200 text-left w-fit"
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              Social
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nananini_wedding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/6281328038083"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 mt-14 pt-8">
          <p className="font-body text-xs text-white/40 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
