import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/ui/Logo';

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2000); // Increased slightly to enjoy the logo
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-ivory flex items-center justify-center catch-all-pointer-events"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-32 h-32 md:w-48 md:h-48 text-jade-deep relative"
            >
                <Logo className="w-full h-full" />

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '60%', opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="h-[1.5px] bg-sage/60 mx-auto mt-6"
                />
            </motion.div>
        </motion.div>
    );
}
