/**
 * Gallery items configuration
 * Easy to add/remove/modify gallery items
 */

export interface GalleryItem {
    id: number;
    label: string;
    image: string;
    aspect: string;
    color: string; // Gradient fallback color
}

export const galleryItems: GalleryItem[] = [
    { id: 1, label: '', image: '/images/gallery/1.jpg', aspect: 'aspect-[4/5]', color: 'from-[#d4c5a9] to-[#e8dcc8]' },
    { id: 2, label: '', image: '/images/gallery/2.jpg', aspect: 'aspect-square', color: 'from-[#a8bfa2] to-[#c5d4c0]' },
    { id: 3, label: '', image: '/images/gallery/3.jpg', aspect: 'aspect-[4/5]', color: 'from-[#c9a84c]/30 to-[#e8dcc8]' },
    { id: 4, label: '', image: '/images/gallery/4.jpg', aspect: 'aspect-square', color: 'from-[#bca88f] to-[#d4c5a9]' },
    { id: 5, label: '', image: '/images/gallery/5.jpg', aspect: 'aspect-[4/5]', color: 'from-[#8fa89a] to-[#a8bfa2]' },
    { id: 6, label: '', image: '/images/gallery/6.jpg', aspect: 'aspect-square', color: 'from-[#d4c5a9] to-[#f3ede7]' },
    { id: 7, label: '', image: '/images/gallery/7.jpg', aspect: 'aspect-square', color: 'from-[#a8bfa2] to-[#8fa89a]' },
    { id: 8, label: '', image: '/images/gallery/8.jpg', aspect: 'aspect-[4/5]', color: 'from-[#c9a84c]/20 to-[#d4c5a9]' },
    { id: 9, label: '', image: '/images/gallery/9.jpg', aspect: 'aspect-square', color: 'from-[#bca88f] to-[#a8bfa2]' },
    { id: 10, label: '', image: '/images/gallery/10.jpg', aspect: 'aspect-[4/5]', color: 'from-[#8fa89a] to-[#c5d4c0]' },
    { id: 11, label: '', image: '/images/gallery/11.jpg', aspect: 'aspect-square', color: 'from-[#d4c5a9] to-[#bca88f]' },
    { id: 12, label: '', image: '/images/gallery/12.jpg', aspect: 'aspect-[4/5]', color: 'from-[#a8bfa2] to-[#d4c5a9]' },
];
