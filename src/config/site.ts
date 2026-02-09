/**
 * Centralized site configuration
 * All business data, contact info, and dynamic helpers in one place
 */

export const SITE_CONFIG = {
    name: 'Nananini Wedding',
    foundingYear: 1994,

    // Contact
    phone: '6281328038083',
    phoneDisplay: '+62 813-2803-8083',

    // Social Media
    instagram: '@nananini_wedding',
    instagramUrl: 'https://www.instagram.com/nananini_wedding/',

    // Address
    address: {
        street: 'Jl. Namburan Lor 54',
        district: 'Kec. Kraton, Kel. Panembahan',
        city: 'Yogyakarta, Indonesia',
        googleMapsUrl: 'https://maps.google.com/?q=Jl.+Namburan+Lor+54+Yogyakarta',
        full: 'Jl. Namburan Lor 54\nKec. Kraton, Kel. Panembahan\nYogyakarta, Indonesia',
        short: 'Jl. Namburan Lor 54\nKraton, Yogyakarta'
    },

    // Business Hours
    hours: {
        en: 'Monday — Saturday, 09:00 — 17:00 WIB',
        id: 'Senin — Sabtu, 09.00 — 17.00 WIB'
    }
} as const;

/**
 * Dynamic year calculations
 */
export const getYearsInBusiness = (): number => {
    return new Date().getFullYear() - SITE_CONFIG.foundingYear;
};

export const getCurrentYear = (): number => {
    return new Date().getFullYear();
};

/**
 * Generate WhatsApp URL with message
 */
export const getWhatsAppUrl = (message: string): string => {
    return `https://wa.me/${SITE_CONFIG.phone}?text=${encodeURIComponent(message)}`;
};
