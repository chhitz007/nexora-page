'use client';

import React from 'react';
import { Users, Shield, Zap, TrendingUp, ChevronRight, CornerDownRight } from 'lucide-react';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => (
    <a href={href} {...props}>
        {children}
    </a>
);

export default function CommunityPagePolished() {

    const teaserFeatures = [
        {
            icon: Users,
            title: 'Global Networking',
            description: 'Connect with verified leaders in manufacturing and logistics.'
        },
        {
            icon: TrendingUp,
            title: 'Scaling Insights',
            titleSub: 'Future-Proof Your Business',
            description: 'Access market trends, strategic data, and resources for rapid growth.'
        },
        {
            icon: Shield,
            title: 'Secured Partnerships',
            description: 'Find trusted partners and suppliers within our vetted, risk-reduced ecosystem.'
        },
    ];

    // Brand Colors
    const brandPurpleText = 'text-purple-600';
    const brandLightBg = 'bg-purple-50';
    const brandBorder = 'border-purple-200';
    const accentButton = 'bg-purple-600 hover:bg-purple-700 text-white shadow-xl shadow-purple-600/20 transition-all duration-300 transform hover:-translate-y-0.5';

    return (
        // Main container
        <div className="min-h-screen font-sans bg-white text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">

            {/* Header/Hero Section */}
            <header className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white">
                <div className="max-w-7xl mx-auto z-10 relative">

                    {/* Tagline - Updated Typography: Bold & Wide Tracking */}
                    <div className="flex items-center mb-8 justify-center sm:justify-start">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full border ${brandBorder} ${brandLightBg} shadow-sm`}>
                            <Zap className={`w-4 h-4 ${brandPurpleText} mr-2 fill-purple-200`} />
                            <span className={`text-[11px] font-black ${brandPurpleText} uppercase tracking-[0.2em]`}>
                                Launching Soon
                            </span>
                        </span>
                    </div>

                    {/* Main Headline - Updated Typography: Tighter & Heavier */}
                    <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                            The <span className={`${brandPurpleText}`}>Bulk Business Community</span> is Taking Shape
                        </h1>
                        {/* Subtext - Updated Typography: Larger & Relaxed */}
                        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                            We&apos;re building a dedicated space for manufacturers, procurement managers, and logistics partners to share insights and shape the future of B2B supply chains.
                        </p>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-10 pt-8 border-t border-slate-200/60 max-w-7xl mx-auto z-10 relative flex justify-center sm:justify-start">
                        <CustomLink
                            href="/contact"
                            className={`flex items-center px-8 py-4 text-lg font-bold tracking-tight rounded-xl ${accentButton}`}
                        >
                            Get Notified When We Launch
                            <ChevronRight className="w-5 h-5 ml-2" />
                        </CustomLink>
                    </div>
                </div>
            </header>

            {/* FEATURES SECTION */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-200 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header - Tighter Tracking */}
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-12 text-center">
                        A Vetted Ecosystem Built for Growth
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teaserFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index}
                                    className="relative p-8 rounded-2xl bg-white border-t-[6px] border-purple-600 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 group">

                                    <div className="flex items-start mb-4">
                                        <div className={`p-3.5 rounded-xl mr-4 bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300`}>
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div>
                                            {/* Card Title - Tighter */}
                                            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{feature.title}</h3>
                                            {feature.titleSub && <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mt-1">{feature.titleSub}</div>}
                                        </div>
                                    </div>

                                    {/* Card Description - More readable Slate color */}
                                    <p className="text-[15px] text-slate-600 mt-3 leading-7 font-medium">{feature.description}</p>

                                    <div className={`mt-6 pt-5 border-t border-slate-100`}>
                                        <span className={`text-[10px] font-black ${brandPurpleText} flex items-center uppercase tracking-[0.15em]`}>
                                            Vetted Membership <CornerDownRight className="w-3 h-3 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            
        </div>
    );
}