'use client';

import React, { useState } from 'react';
// Import necessary icons
import { Home, Users, DollarSign, Mail, Menu, X, Zap } from 'lucide-react';

// Custom Link component using standard <a> tag
interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => (
    <a href={href} {...props}>
        {children}
    </a>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/', Icon: Home },
        { name: 'Community', href: '/community', Icon: Users },
        { name: 'Investors', href: '/investors', Icon: DollarSign },
        { name: 'Contact', href: '/contact', Icon: Mail },
    ];

    const logoGradientClasses = "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400";

    return (
        // Switched background to a softer dark gray (900) and added a subtle bottom border
        <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg shadow-black/30 border-b border-violet-800/40 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">

                    {/* Logo/Brand - Professional text with a vibrant gradient icon */}
                    <div className="flex-shrink-0 py-4">
                        <CustomLink
                            href="/"
                            className="flex items-center text-3xl font-extrabold text-white tracking-tight transition-colors"
                        >
                            <Zap className={`w-7 h-7 mr-2 ${logoGradientClasses}`} />
                            <span className={logoGradientClasses}>Bulk</span> Business
                        </CustomLink>
                    </div>

                    {/* Desktop Navigation Links - Clean, professional, border-bottom hover */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <CustomLink
                                key={item.name}
                                href={item.href}
                                // Clean desktop style: light text, transparent background, violet underline on hover
                                className={`relative flex items-center px-4 py-2.5 text-base font-medium text-slate-200 
                                            transition-all duration-300 group
                                            hover:text-violet-400`}
                            >
                                <item.Icon className="w-5 h-5 mr-2 text-violet-400 group-hover:text-violet-300 transition-colors" />
                                {item.name}
                                {/* Underline effect for professional hover */}
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 
                                                 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-t-full"></span>
                            </CustomLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Dark theme colors */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-violet-700/30 
                                     focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-150"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6 text-violet-400" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6 text-violet-300" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel - Dark theme with simpler hover */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-violet-800/40 shadow-xl" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <CustomLink
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                // Clean mobile style: soft hover background
                                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-violet-400 hover:bg-violet-700/10 transition-all duration-200"
                            >
                                <item.Icon className="w-5 h-5 mr-3 text-violet-400" />
                                {item.name}
                            </CustomLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
