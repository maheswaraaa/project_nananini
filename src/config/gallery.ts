/**
 * Gallery items configuration
 * Easy to add/remove/modify gallery items
 */

export interface GalleryItem {
    id: number;
    label: string;
    color: string;
    aspect: string;
}

export const galleryItems: GalleryItem[] = [
    { id: 1, label: 'Seserahan Set', color: 'from-[#d4c5a9] to-[#e8dcc8]', aspect: 'aspect-[4/5]' },
    { id: 2, label: 'Hantaran Display', color: 'from-[#a8bfa2] to-[#c5d4c0]', aspect: 'aspect-square' },
    { id: 3, label: 'Wedding Hamper', color: 'from-[#c9a84c]/30 to-[#e8dcc8]', aspect: 'aspect-[4/5]' },
    { id: 4, label: 'Gift Arrangement', color: 'from-[#bca88f] to-[#d4c5a9]', aspect: 'aspect-square' },
    { id: 5, label: 'Souvenir Collection', color: 'from-[#8fa89a] to-[#a8bfa2]', aspect: 'aspect-[4/5]' },
    { id: 6, label: 'Bridal Package', color: 'from-[#d4c5a9] to-[#f3ede7]', aspect: 'aspect-square' },
    { id: 7, label: 'Siraman Set', color: 'from-[#a8bfa2] to-[#8fa89a]', aspect: 'aspect-square' },
    { id: 8, label: 'Custom Hamper', color: 'from-[#c9a84c]/20 to-[#d4c5a9]', aspect: 'aspect-[4/5]' },
    { id: 9, label: 'Midodareni Set', color: 'from-[#bca88f] to-[#a8bfa2]', aspect: 'aspect-square' },
    { id: 10, label: 'Gift Box Set', color: 'from-[#8fa89a] to-[#c5d4c0]', aspect: 'aspect-[4/5]' },
    { id: 11, label: 'Floral Arrangement', color: 'from-[#d4c5a9] to-[#bca88f]', aspect: 'aspect-square' },
    { id: 12, label: 'Premium Package', color: 'from-[#a8bfa2] to-[#d4c5a9]', aspect: 'aspect-[4/5]' },
];
