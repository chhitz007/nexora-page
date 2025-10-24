// components/home/HeroSection.tsx

import React from 'react';
import { heroData } from '../data/homeData';

const HeroSection: React.FC = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white pt-20 pb-40 lg:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">

                    {/* Left Side - Text Content */}
                    <div className="lg:col-span-6">
                        {/* Tagline */}
                        <span className="inline-block text-base font-bold text-purple-600 uppercase tracking-wider mb-4 px-4 py-2 bg-purple-100 rounded-full border border-purple-200">
                            {heroData.tagline}
                        </span>

                        {/* Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-snug mt-6">
                            The Future Begins with <span className="text-purple-600">{heroData.highlightWord}</span>.
                        </h1>
                    </div>

                    {/* Right Side - Visual / Graphic */}
                    <div className="mt-16 lg:mt-0 lg:col-span-6">
                        <div className="relative w-full h-96 bg-gradient-to-br from-purple-200 to-white rounded-2xl flex items-center justify-center shadow-xl border border-purple-300">
                            <svg
                                className="w-40 h-40 text-purple-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
