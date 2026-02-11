'use client';

import React from 'react';
import { Zap, ChevronRight } from 'lucide-react';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => (
    <a href={href} {...props}>
        {children}
    </a>
);

export default function App() {

    // Brand Colors
    const brandBlueText = 'text-blue-600';
    const brandLightBg = 'bg-blue-50';
    const brandBorder = 'border-blue-200';
    const accentButton = 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5';

    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">

            {/* Header/Hero Section */}
            <header className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
                <div className="max-w-7xl mx-auto z-10 relative">

                    {/* Tagline */}
                    <div className="flex items-center mb-8 justify-center sm:justify-start">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full border ${brandBorder} ${brandLightBg} shadow-sm`}>
                            <Zap className={`w-4 h-4 ${brandBlueText} mr-2 fill-blue-200`} />
                            <span className={`text-[11px] font-black ${brandBlueText} uppercase tracking-[0.2em]`}>
                                Launching Soon
                            </span>
                        </span>
                    </div>

                    {/* Main Headline */}
                    <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                            The <span className={`${brandBlueText}`}>SkyeVerse Community</span> is Coming Together
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            We’re creating a shared space for manufacturers, operators, logistics partners, and
                            consumers to connect. A place to exchange real experiences, practical insights, and ideas
                            that improve how supply chains actually work.
                            This community is about learning from each other and shaping what comes next together.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-10 pt-8 border-t border-slate-200/60 max-w-7xl mx-auto z-10 relative flex justify-center sm:justify-start">
                        <CustomLink
                            href="/contact"
                            className={`flex items-center px-8 py-4 text-lg font-bold tracking-tight rounded-xl ${accentButton}`}
                        >
                            Get notified when the community opens.
                            <ChevronRight className="w-5 h-5 ml-2 transition-transform hover:translate-x-1" />
                        </CustomLink>
                    </div>
                </div>
            </header>

        </div>
    );
}
