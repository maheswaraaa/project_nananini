import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '@/context/LanguageContext';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Partners from '@/components/sections/Partners';
import Contact from '@/components/sections/Contact';
import WhatsAppFAB from '@/components/ui/WhatsAppFAB';

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
