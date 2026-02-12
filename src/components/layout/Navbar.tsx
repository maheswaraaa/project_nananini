import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Logo from '@/components/ui/Logo';

const sections = ['home', 'about', 'services', 'gallery', 'contact'];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
          }`}
      >
        <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="block h-14 w-auto md:h-20 group -ml-2">
            <Logo className="h-full w-auto transition-transform duration-300 group-hover:scale-105" />
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`font-body text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-200 ${activeSection === id ? 'text-jade-deep' : 'text-soft-gray hover:text-charcoal'
                  }`}
              >
                {t(`nav.${id}`)}
              </button>
            ))}
            {/* Language selector hidden */}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] w-7 h-7 justify-center items-center relative z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-charcoal transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-sm flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {sections.map((id, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(id)}
                  className={`font-heading text-3xl font-normal tracking-wide transition-colors ${activeSection === id ? 'text-jade-deep' : 'text-charcoal'
                    }`}
                >
                  {t(`nav.${id}`)}
                </motion.button>
              ))}
              {/* Mobile Language selector hidden */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
