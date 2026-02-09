import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-ivory flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <span className="font-heading text-4xl md:text-5xl font-semibold tracking-[0.04em] text-jade-deep leading-none">
          NANANINI
        </span>
        <br />
        <span className="font-body text-[10px] md:text-xs font-medium tracking-[0.35em] text-jade uppercase">
          WEDDING
        </span>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="h-[1.5px] bg-sage mx-auto mt-4"
        />
      </motion.div>
    </motion.div>
  );
}

export function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {/* Skip to content */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-jade focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm"
        >
          Skip to content
        </a>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Partners />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </LanguageProvider>
  );
}
