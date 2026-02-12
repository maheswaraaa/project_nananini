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
            viewBox="0 0 240 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('w-full h-full', className)}
            {...props}
        >
            <g className="font-heading" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {/* N - Stylized Serif */}
                <path
                    d="M60 40 V120 H50 V40 H40 V30 H80 L110 120 V30 H120 V120 H100 L70 30 H60 V40 Z"
                    fill={color}
                    opacity="0" // Using text instead for font consistency if available, but path gives exact shape.
                // Actually, I'll stick to text but position carefully.
                />
                <text
                    x="85"
                    y="110"
                    fontSize="100"
                    fill={color}
                    textAnchor="middle"
                    className="select-none font-bold tracking-tight"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                    N
                </text>

                {/* W - Interlocking */}
                <text
                    x="155"
                    y="110"
                    fontSize="100"
                    fill={color}
                    textAnchor="middle"
                    className="select-none font-bold tracking-tight"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                    W
                </text>

                {/* Detailed Floral Overlay */}
                <g stroke={color} strokeWidth="0.8" fill="none">
                    {/* Center Star Lily (Low Center) */}
                    <g transform="translate(120, 95) scale(0.4)">
                        {/* 5 Petals */}
                        <path d="M0 0 Q 10 -20 0 -40 Q -10 -20 0 0" strokeWidth="1.2" fill="none" />
                        <path d="M0 0 Q 30 -10 50 10 Q 30 15 0 0" strokeWidth="1.2" fill="none" />
                        <path d="M0 0 Q 20 30 10 50 Q -10 30 0 0" strokeWidth="1.2" fill="none" />
                        <path d="M0 0 Q -20 30 -30 10 Q -10 10 0 0" strokeWidth="1.2" fill="none" />
                        <path d="M0 0 Q -30 -10 -40 -30 Q -10 -20 0 0" strokeWidth="1.2" fill="none" />
                        {/* Stamens */}
                        <path d="M0 0 L 0 -25" strokeWidth="0.5" />
                        <circle cx="0" cy="-28" r="3" fill={color} stroke="none" />
                        <path d="M0 0 L 20 10" strokeWidth="0.5" />
                        <circle cx="23" cy="12" r="3" fill={color} stroke="none" />
                        <path d="M0 0 L -15 20" strokeWidth="0.5" />
                        <circle cx="-17" cy="23" r="3" fill={color} stroke="none" />
                    </g>

                    {/* Upper Trumpet Flower (Between N & W) */}
                    <g transform="translate(135, 60) rotate(15) scale(0.3)">
                        <path d="M0 0 Q 10 -30 30 -40 Q 50 -30 40 0 Q 20 10 0 0 Z" strokeWidth="1.2" fill="none" />
                        <path d="M20 -20 Q 25 -40 20 -50" strokeWidth="0.5" />
                        <circle cx="20" cy="-53" r="4" fill={color} stroke="none" />
                    </g>

                    {/* Vines connecting them */}
                    <path d="M110 110 Q 120 95 130 80" strokeWidth="1" />
                    <path d="M120 95 Q 100 100 90 90" strokeWidth="1" />
                    <path d="M130 80 Q 140 60 135 50" strokeWidth="1" />

                    {/* Leaves */}
                    <path d="M100 92 Q 90 80 100 70 Q 110 80 100 92 Z" fill={color} stroke="none" opacity="0.6" />
                    <path d="M130 75 Q 145 70 150 80 Q 140 90 130 75 Z" fill={color} stroke="none" opacity="0.6" />
                </g>

                {/* Text Below */}
                <text
                    x="120"
                    y="135"
                    fontSize="11"
                    fill={color}
                    textAnchor="middle"
                    letterSpacing="0.3em"
                    className="uppercase select-none font-medium"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                    SESERAHAN
                </text>

                <text
                    x="120"
                    y="148"
                    fontSize="6"
                    fill={color}
                    textAnchor="middle"
                    letterSpacing="0.15em"
                    className="uppercase select-none opacity-80"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    NANANINI WEDDING
                </text>
            </g>
        </svg>
    );
}
