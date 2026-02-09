import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Lang = 'en' | 'id';

interface Translations {
  [key: string]: string | Translations;
}

const en: Translations = {
  nav: { home: 'Home', about: 'About', services: 'Services', gallery: 'Gallery', contact: 'Contact' },
  hero: {
    eyebrow: 'ESTABLISHED 1994 · YOGYAKARTA',
    heading: 'Crafting Timeless Gifts\nfor Your Sacred Day',
    subtext: 'Quietly present in Yogyakarta\'s most cherished celebrations for over three decades.',
    cta: 'Start a Conversation',
  },
  about: {
    eyebrow: 'OUR STORY',
    heading: 'Three Decades of\nCraftsmanship & Tradition',
    p1: 'Since 1994, Nananini Wedding has been the trusted partner for families seeking beautifully curated wedding gifts rooted in Indonesian tradition. Based in the cultural heart of Yogyakarta, steps from the Kraton Royal Palace, we bring an intimate understanding of ceremonial customs to every piece we create.',
    p2: 'From hantaran and seserahan to custom souvenir sets, each arrangement is personally consulted and handcrafted to reflect the significance of your celebration.',
  },
  services: {
    eyebrow: 'WHAT WE OFFER',
    heading: 'Services Crafted\nwith Purpose',
    subtext: 'Every detail is thoughtfully curated to honor your celebration.',
    cta: 'Discuss Your Needs',
    note: 'Every project begins with a personal consultation. No fixed price list — because your celebration is unique.',
    s1_title: 'Seserahan & Hantaran',
    s1_desc: 'Beautifully arranged gift sets honoring the sacred tradition of the bride and groom exchange.',
    s2_title: 'Wedding Souvenirs',
    s2_desc: 'Custom-designed keepsakes for your guests — crafted to leave a lasting impression.',
    s3_title: 'Hampers & Gift Boxes',
    s3_desc: 'Curated hamper collections for pre-wedding events, families, and special occasions.',
    s4_title: 'Ceremonial Sets',
    s4_desc: 'Complete arrangements for siraman, midodareni, sangjit, and other traditional ceremonies.',
    s5_title: 'Custom Consultation',
    s5_desc: 'Personal guidance on gift selection, cultural etiquette, and presentation tailored to your wedding customs.',
    s6_title: 'Delivery & Setup',
    s6_desc: 'Professional delivery and arrangement at your venue, ensuring every detail is flawless on arrival.',
  },
  gallery: {
    eyebrow: 'OUR WORK',
    heading: 'A Collection of Moments\nWe\'ve Been Part Of',
    subtext: 'Every arrangement tells a story of love, tradition, and meticulous attention to detail.',
    instagram: 'Explore more of our work on Instagram →',
  },
  partners: {
    eyebrow: 'TRUSTED BY',
    heading: 'Partnered with the Finest',
  },
  contact: {
    eyebrow: 'GET IN TOUCH',
    heading: 'Let\'s Create Something Beautiful',
    subtext: 'Visit our studio or reach out to begin your consultation.',
    visitLabel: 'Visit',
    connectLabel: 'Connect',
    hoursLabel: 'Hours',
    cta: 'Start a conversation',
  },
  footer: {
    tagline: 'Crafting Timeless Gifts Since 1994',
    copyright: '© 2025 Nananini Wedding. All rights reserved.',
  },
  wa: {
    general: 'Hello Nananini Wedding, I\'m interested in your wedding gift services. Could we arrange a consultation?',
    services: 'Hello Nananini Wedding, I\'d like to discuss my wedding gift needs.',
  },
};

const id: Translations = {
  nav: { home: 'Beranda', about: 'Tentang', services: 'Layanan', gallery: 'Galeri', contact: 'Kontak' },
  hero: {
    eyebrow: 'BERDIRI SEJAK 1994 · YOGYAKARTA',
    heading: 'Merangkai Persembahan Abadi\nuntuk Hari Istimewa Anda',
    subtext: 'Dengan rendah hati hadir dalam momen-momen berharga di Yogyakarta selama lebih dari tiga dekade.',
    cta: 'Mulai Percakapan',
  },
  about: {
    eyebrow: 'TENTANG KAMI',
    heading: 'Tiga Dekade\nKeahlian & Tradisi',
    p1: 'Sejak 1994, Nananini Wedding telah menjadi mitra terpercaya bagi keluarga yang menginginkan rangkaian hadiah pernikahan yang indah dan berakar pada tradisi Indonesia. Berlokasi di jantung budaya Yogyakarta, dekat dengan Kraton Kesultanan, kami menghadirkan pemahaman mendalam tentang adat istiadat dalam setiap karya kami.',
    p2: 'Dari hantaran, seserahan, hingga set suvenir kustom, setiap rangkaian dikonsultasikan secara personal dan dibuat dengan tangan untuk mencerminkan makna perayaan Anda.',
  },
  services: {
    eyebrow: 'LAYANAN KAMI',
    heading: 'Layanan yang Dirangkai\ndengan Makna',
    subtext: 'Setiap detail dikurasi dengan penuh perhatian untuk menghormati perayaan Anda.',
    cta: 'Diskusikan Kebutuhan Anda',
    note: 'Setiap proyek dimulai dengan konsultasi personal. Tanpa daftar harga tetap — karena perayaan Anda unik.',
    s1_title: 'Seserahan & Hantaran',
    s1_desc: 'Rangkaian hadiah yang ditata indah untuk menghormati tradisi suci tukar-menukar antara mempelai.',
    s2_title: 'Suvenir Pernikahan',
    s2_desc: 'Cinderamata yang dirancang khusus untuk tamu Anda — dibuat untuk meninggalkan kesan mendalam.',
    s3_title: 'Hampers & Kotak Hadiah',
    s3_desc: 'Koleksi hampers pilihan untuk acara pra-pernikahan, keluarga, dan momen spesial.',
    s4_title: 'Set Upacara Adat',
    s4_desc: 'Perlengkapan lengkap untuk siraman, midodareni, sangjit, dan upacara tradisional lainnya.',
    s5_title: 'Konsultasi Kustom',
    s5_desc: 'Panduan personal dalam pemilihan hadiah, etika budaya, dan presentasi sesuai adat pernikahan Anda.',
    s6_title: 'Pengiriman & Penataan',
    s6_desc: 'Pengiriman profesional dan penataan di venue Anda, memastikan setiap detail sempurna saat tiba.',
  },
  gallery: {
    eyebrow: 'KARYA KAMI',
    heading: 'Koleksi Momen yang\nTelah Kami Rangkai',
    subtext: 'Setiap rangkaian bercerita tentang cinta, tradisi, dan perhatian pada setiap detail.',
    instagram: 'Lihat lebih banyak karya kami di Instagram →',
  },
  partners: {
    eyebrow: 'DIPERCAYA OLEH',
    heading: 'Bermitra dengan yang Terbaik',
  },
  contact: {
    eyebrow: 'HUBUNGI KAMI',
    heading: 'Mari Ciptakan Sesuatu yang Indah',
    subtext: 'Kunjungi studio kami atau hubungi kami untuk memulai konsultasi.',
    visitLabel: 'Kunjungi',
    connectLabel: 'Hubungi',
    hoursLabel: 'Jam Buka',
    cta: 'Mulai percakapan',
  },
  footer: {
    tagline: 'Merangkai Persembahan Abadi Sejak 1994',
    copyright: '© 2025 Nananini Wedding. Hak cipta dilindungi.',
  },
  wa: {
    general: 'Halo Nananini Wedding, saya tertarik dengan layanan hadiah pernikahan Anda. Bisakah kita mengatur konsultasi?',
    services: 'Halo Nananini Wedding, saya ingin mendiskusikan kebutuhan hadiah pernikahan saya.',
  },
};

const translations = { en, id };

function getNestedValue(obj: Translations, path: string): string {
  const keys = path.split('.');
  let current: Translations | string = obj;
  for (const key of keys) {
    if (typeof current === 'string') return path;
    current = current[key];
    if (current === undefined) return path;
  }
  return typeof current === 'string' ? current : path;
}

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('nananini-lang');
      if (stored === 'en' || stored === 'id') return stored;
    }
    return 'id';
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('nananini-lang', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return getNestedValue(translations[lang], key);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
