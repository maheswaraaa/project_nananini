import { Instagram, Phone, MapPin } from 'lucide-react';
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
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20 py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-10 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="font-heading text-2xl font-semibold tracking-[0.04em] leading-none">NANANINI</span>
              <br />
              <span className="font-body text-[9px] font-medium tracking-[0.3em] text-white/60 uppercase">WEDDING</span>
            </div>
            <p className="font-body text-sm font-light text-white/70 leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/nananini_wedding/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/6281328038083"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="WhatsApp"
              >
                <Phone className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3">
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {sections.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 text-left w-fit"
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Hours Column */}
          <div className="lg:col-span-5">
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 mb-5">
              Visit Us
            </p>
            <div className="flex gap-3 mb-6">
              <MapPin className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <a
                href="https://maps.google.com/?q=Jl.+Namburan+Lor+54+Kraton+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 leading-relaxed"
              >
                Jl. Namburan Lor 54<br />
                Kraton, Yogyakarta<br />
                Indonesia
              </a>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="font-body text-xs text-white/50 mb-1.5">Hours</p>
              <p className="font-body text-sm text-white/70 mb-1">Mon - Sat: 9AM - 5PM</p>
              <p className="font-body text-xs text-white/50 italic">By appointment only</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/40 text-center md:text-left">
            {t('footer.copyright')}
          </p>
          <p className="font-body text-xs text-white/30">
            Established 1994 · Yogyakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
