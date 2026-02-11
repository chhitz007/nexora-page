'use client';
// ⬆️ Required in Next.js App Router to allow client-side features like onClick, animations, hooks

import React from 'react';
import { ChevronRight } from 'lucide-react';
// ⬆️ Arrow icon used in "Read More" CTA

import { Pillar } from '@/components/types';
// ⬆️ Type definition for a single pillar item (TypeScript safety)

import { pillarsData } from '@/components/data/homeData';
// ⬆️ All TEXT + CONTENT comes from here (titles, slogans, descriptions, status)

/* =========================================================
   HELPER FUNCTIONS
   These convert text colors into matching backgrounds
   ========================================================= */

// Converts text color → border accent color (top animated line)
const getBorderBgClass = (colorClass: string): string => {
    switch (colorClass) {
        case 'text-teal-700':
            return 'bg-teal-700';
        case 'text-yellow-700':
            return 'bg-yellow-700';
        case 'text-indigo-700': // Used by SkyeCentral
            return 'bg-indigo-700';
        case 'text-pink-700':
            return 'bg-pink-700';
        case 'text-emerald-700':
            return 'bg-emerald-700';
        case 'text-amber-700':
            return 'bg-amber-700';
        default:
            return 'bg-purple-700';
    }
};

// Controls STATUS BADGE colors (Join Waitlist / Coming Soon)
const getStatusClasses = (colorClass: string) => {
    switch (colorClass) {
        case 'text-teal-700':
            return 'bg-teal-100 text-teal-700';
        case 'text-yellow-700':
            return 'bg-yellow-100 text-yellow-700';
        case 'text-indigo-700':
            return 'bg-indigo-100 text-indigo-700';
        case 'text-pink-700':
            return 'bg-pink-100 text-pink-700';
        case 'text-emerald-700':
            return 'bg-emerald-100 text-emerald-700';
        case 'text-amber-700':
            return 'bg-amber-100 text-amber-700';
        default:
            return 'bg-purple-100 text-purple-700';
    }
};

// Creates subtle hover background tint using accent color
// Example: text-indigo-700 → bg-indigo-50
const getBgColor = (colorClass: string, intensity: number) => {
    return colorClass.replace('text-', `bg-`).replace('700', `${intensity}`);
};

// Props: function to open modal when a pillar card is clicked
interface CorePillarsSectionProps {
    openPillarModal: (pillar: Pillar) => void;
}

export default function CorePillarsSection({ openPillarModal }: CorePillarsSectionProps) {
    return (
        <>
            {/* =========================================================
                CUSTOM CSS (for shimmer + animated top border)
               ========================================================= */}
            <style jsx>{`
                @keyframes shimmer-slide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                /* Triggers shimmer animation on hover */
                .group:hover .group-hover\\:animate-\\[shimmer-slide_1\\.5s_ease-in-out\\] {
                    animation: shimmer-slide 1.5s ease-in-out;
                }

                /* Base top border (invisible by default) */
                .pillar-border-base {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                }

                /* Colored border that expands on hover */
                .pillar-border-accent {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 0;
                    transition: width 0.3s ease-out;
                }

                .group:hover .pillar-border-accent {
                    width: 100%;
                }
            `}</style>

            {/* =========================================================
                SECTION WRAPPER
               ========================================================= */}
            <section className="py-6 md:py-8 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ================= HEADER TEXT ================= */}
                    <div className="text-center max-w-4xl mx-auto mb-12">

                        {/* 🔴 THIS CONTROLS "THE CORE FOUR" */}
                        {/* text-xl → SIZE */}
                        {/* uppercase → CAPITAL LETTERS */}
                        {/* tracking-wider → LETTER SPACING */}
                        <span className="inline-block text-xl font-semibold text-gray-200 uppercase tracking-wider mb-2">
                            {pillarsData.header.tagline}
                        </span>

                        {/* Main title: Intelligence. Execution. Scale. */}
                        {/* Responsive font sizes handled here */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                            {pillarsData.header.title.split('.').map((part, index) => (
                                <React.Fragment key={index}>
                                    {part.trim()}
                                    {/* Blue dot styling between words */}
                                    {index < pillarsData.header.title.split('.').length - 1 && (
                                        <span className="text-blue-400">.</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </h2>

                        {/* Subtitle / description */}
                        <p className="mt-4 text-xl text-gray-300">
                            {pillarsData.header.subtitle}
                        </p>
                    </div>

                    {/* ================= PILLARS GRID ================= */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">

                        {/* Looping through all 4 pillars from data file */}
                        {pillarsData.items.map((pillar) => (
                            <div
                                key={pillar.name}
                                className="group relative p-6 md:p-8 rounded-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl cursor-pointer overflow-hidden"
                                onClick={() => openPillarModal(pillar)} // ⬅️ Opens modal
                            >
                                {/* Top animated accent border */}
                                <div className="pillar-border-base">
                                    <div className={`pillar-border-accent ${getBorderBgClass(pillar.accentColor)}`} />
                                </div>

                                {/* Shimmer overlay */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer-slide_1.5s_ease-in-out]" />
                                </div>

                                {/* Hover background tint */}
                                <div
                                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${getBgColor(pillar.accentColor, 50)}`}
                                />

                                {/* ================= CONTENT ================= */}
                                <div className="relative z-10">

                                    {/* Icon */}
                                    <div className="mb-3 pt-1">
                                        <pillar.icon className={`w-7 h-7 ${pillar.accentColor}`} />
                                    </div>

                                    {/* Pillar Name */}
                                    <h3 className={`text-3xl font-extrabold ${pillar.accentColor} mb-1`}>
                                        {pillar.name}
                                    </h3>

                                    {/* Short slogan */}
                                    <p className="text-sm font-medium text-gray-700 mb-3">
                                        {pillar.slogan}
                                    </p>

                                    {/* Description (clamped to 3 lines) */}
                                    <p className="text-base text-gray-700 line-clamp-3">
                                        {pillar.description}
                                    </p>

                                    {/* Footer */}
                                    <div className="mt-4 flex justify-between items-center pt-2 border-t border-gray-100">

                                        {/* Read more CTA */}
                                        <div className={`flex items-center text-xs font-semibold ${pillar.accentColor} group-hover:underline`}>
                                            Read More
                                            <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </div>

                                        {/* Status badge */}
                                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${pillar.status === 'waitlist'
                                                ? getStatusClasses(pillar.accentColor)
                                                : 'bg-gray-200 text-gray-700'
                                            }`}>
                                            {pillar.status === 'waitlist' ? 'Join Waitlist' : 'Coming Soon'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
