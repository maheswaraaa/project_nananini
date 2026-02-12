import { SVGProps } from 'react';
import { cn } from '@/utils/cn';

interface LogoProps extends SVGProps<SVGSVGElement> {
    variant?: 'light' | 'dark' | 'gold';
    className?: string;
}

export default function Logo({ variant = 'dark', className, ...props }: LogoProps) {
    const colors = {
        light: '#FAF8F5',   // ivory
        dark: '#3D5A44',    // jade-deep
        gold: '#C9A84C',    // gold
    };

    const color = colors[variant];

    return (
        <svg
            viewBox="0 0 200 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('w-full h-full', className)}
            {...props}
        >
            {/* Monogram Section */}
            <g className="font-heading" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {/* N */}
                <text
                    x="65"
                    y="100"
                    fontSize="100"
                    fill={color}
                    textAnchor="middle"
                    className="select-none"
                >
                    N
                </text>
                {/* W - Overlapped */}
                <text
                    x="135"
                    y="100"
                    fontSize="100"
                    fill={color}
                    textAnchor="middle"
                    className="select-none"
                >
                    W
                </text>

                {/* Floral Element (Stylized Lily/Flower in center) */}
                <path
                    d="M100 95 C100 95 90 80 80 75 C70 70 80 60 90 65 C95 67 100 80 100 80 C100 80 105 67 110 65 C120 60 130 70 120 75 C110 80 100 95 100 95 Z"
                    fill={color}
                    stroke={color}
                    strokeWidth="0.5"
                    opacity="0.8"
                />
                <path
                    d="M100 95 Q 90 110 85 105 Q 80 100 90 90"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M100 95 Q 110 110 115 105 Q 120 100 110 90"
                    stroke={color}
                    strokeWidth="1"
                    fill="none"
                />

                {/* Text Below */}
                <text
                    x="100"
                    y="135"
                    fontSize="14"
                    fill={color}
                    textAnchor="middle"
                    letterSpacing="0.3em"
                    className="uppercase select-none font-medium"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    SESERAHAN
                </text>

                <text
                    x="100"
                    y="155"
                    fontSize="8"
                    fill={color}
                    textAnchor="middle"
                    letterSpacing="0.2em"
                    className="uppercase select-none opacity-80"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    NANANINI WEDDING
                </text>
            </g>
        </svg>
    );
}
