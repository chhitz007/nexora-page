'use client';

import React from 'react';
// Keep the necessary icons
import { Users, Shield, Zap, TrendingUp, ChevronRight, CornerDownRight } from 'lucide-react';

// Custom Link component (essential for framework compatibility)
interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => (
    <a href={href} {...props}>
        {children}
    </a>
);

export default function CommunityPageCondensed() {

    // Array of features (Data remains the same)
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

    // Refined Color Variables (No changes needed here)
    const accentColor = 'text-purple-400';
    const accentButton = 'bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-600/30 transition-all duration-300 transform hover:scale-[1.015]';


    return (
        // Main container: Full-bleed, dark background
        <div className="min-h-screen font-sans bg-gray-950 text-gray-100 antialiased">

            {/* Header/Hero Section: REDUCED VERTICAL PADDING */}
            {/* Changed pt-24 pb-32 to pt-16 pb-24 */}
            <header className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Subtle Background Glow/Noise Effect (Modern Touch) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br from-gray-950 via-purple-900/10 to-gray-950 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto z-10 relative">

                    {/* Tagline / Teaser - REDUCED MARGIN BOTTOM */}
                    {/* Changed mb-6 to mb-4 */}
                    <div className="flex items-center mb-4 justify-center sm:justify-start">
                        <Zap className={`w-6 h-6 ${accentColor} animate-pulse mr-2`} />
                        <span className="inline-block text-sm font-semibold text-white bg-purple-900/70 border border-purple-500 uppercase tracking-widest px-4 py-1 rounded-full shadow-md shadow-purple-900">
                            LAUNCHING SOON
                        </span>
                    </div>

                    {/* Main Headline & Subtext (Left-aligned for a modern feel) */}
                    <div className="text-center sm:text-left max-w-4xl mx-auto sm:mx-0">
                        {/* Reduced h1 mb-6 to mb-4 */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                            The <span className={`${accentColor} drop-shadow-[0_0_6px_rgba(192,132,252,0.4)]`}>Bulk Business Community</span> is Taking Shape
                        </h1>
                        {/* Reduced p mt-6 to mt-4 */}
                        <p className="mt-4 text-xl text-gray-400 leading-relaxed max-w-2xl">
                            {/* 🔥 FIX: Replaced ' with &apos; to resolve react/no-unescaped-entities error */}
                            We&apos;re building a dedicated space for manufacturers, procurement managers, and logistics partners to share insights, find opportunities, and shape the future of B2B supply chains.
                        </p>
                    </div>
                </div>

                {/* Call to Action - REDUCED MARGIN TOP/PADDING TOP */}
                {/* Changed mt-10 pt-8 to mt-8 pt-6 */}
                <div className="mt-8 pt-6 border-t border-purple-900/50 max-w-7xl mx-auto z-10 relative flex justify-center sm:justify-start">
                    <CustomLink
                        href="/contact"
                        className={`flex items-center px-8 py-3 text-lg font-bold rounded-lg text-white ${accentButton}`}
                    >
                        Get Notified When We Launch
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </CustomLink>
                </div>
            </header>

            {/* Main Content / Features Section: REDUCED VERTICAL PADDING */}
            {/* Changed py-20 to py-16 */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-b border-gray-800">
                <div className="max-w-7xl mx-auto">
                    {/* Reduced h2 mb-12 to mb-8 */}
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        A Vetted Ecosystem Built for Growth
                    </h2>

                    {/* Reduced card gap from gap-8 to gap-6 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teaserFeatures.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index}
                                    /* Reduced inner padding from p-8 to p-6 */
                                    className="p-6 rounded-xl transition duration-500 border border-gray-800 hover:border-purple-600 hover:bg-gray-800/20 transform hover:-translate-y-2">

                                    {/* Icon & Title - Reduced mb-4 to mb-3 */}
                                    <div className="flex items-center mb-3">
                                        <div className="p-3 rounded-full mr-3 bg-purple-600/20 border border-purple-800">
                                            <IconComponent className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <h3 className="text-xl font-extrabold text-white">{feature.title}</h3>
                                    </div>

                                    {/* Description */}
                                    <p className="text-base text-gray-400 mt-2">{feature.description}</p>

                                    {/* Subtle Callout - Reduced mt-4 pt-4 to mt-3 pt-3 */}
                                    <div className={`mt-3 pt-3 border-t border-gray-700`}>
                                        <span className="text-xs font-medium text-purple-500 flex items-center">
                                            Vetted Membership <CornerDownRight className="w-3 h-3 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer / Secondary CTA: REDUCED VERTICAL PADDING */}
            {/* Changed py-12 to py-8 */}
            <footer className="py-8 px-4 bg-gray-950/80">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-md text-gray-500">
                        Ready to see the difference a dedicated network can make?
                    </p>
                    {/* Reduced p mt-2 to mt-1 */}
                    <p className="mt-1 text-sm text-gray-500">
                        In the meantime, feel free to check out our <CustomLink href="/" className={`${accentColor} hover:text-purple-300 font-medium transition-colors underline-offset-4 hover:underline`}>homepage</CustomLink> for more information.
                    </p>
                </div>
            </footer>
        </div>
    );
}