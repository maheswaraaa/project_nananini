/**
 * Partners configuration
 * Easy to add/remove/modify partner information
 */

export interface Partner {
    name: string;
    subtitle: string;
    image: string;
    className?: string; // For specific image styling adjustements
}

export const partners: Partner[] = [
    {
        name: 'Kraton Ngayogyakarta',
        subtitle: 'Hadiningrat',
        image: '/images/partners/kraton.png',
        className: 'h-full w-auto object-contain p-1'
    },
    {
        name: 'Pura Pakualaman',
        subtitle: 'Hadiningrat',
        image: '/images/partners/pakualaman.png',
        className: 'h-full w-auto object-contain p-1'
    },
    {
        name: 'Allana',
        subtitle: 'Wedding Organizer',
        image: '/images/partners/allana.png',
        className: 'h-[70%] w-auto object-contain'
    },
    {
        name: 'Nusantara',
        subtitle: 'Catering',
        image: '/images/partners/nusantara.png',
        className: 'h-[80%] w-auto object-contain'
    },
];
