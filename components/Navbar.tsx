'use client';

import React, { useState } from 'react';
import { Home, Users, DollarSign, Mail, Menu, X } from 'lucide-react';

/* ===== Logo Icon (Single Royal Blue Tone) ===== */
const SkyebharatLogoIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 100 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M 0 18 C 20 8, 40 8, 60 18"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <path
            d="M 10 22 C 30 26, 60 24, 85 18 L 95 15"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
        />
    </svg>
);

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

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-600 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">

                    {/* Logo */}
                    <div className="flex-shrink-0 py-4">
                        <CustomLink
                            href="/"
                            className="flex items-center text-3xl font-extrabold tracking-tight"
                        >
                            <SkyebharatLogoIcon className="w-16 h-8 mr-2 text-blue-600" />
                            <span className="text-blue-600">
                                SkyVerse
                            </span>
                        </CustomLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <CustomLink
                                key={item.name}
                                href={item.href}
                                className="relative flex items-center px-4 py-2.5 text-base font-medium text-gray-800 
                                           transition-all duration-200 group hover:text-blue-600"
                            >
                                <item.Icon className="w-5 h-5 mr-2 text-blue-600 transition-colors" />
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 
                                                transform scale-x-0 group-hover:scale-x-100 
                                                transition-transform duration-300 ease-out"></span>
                            </CustomLink>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md 
                                       text-gray-800 hover:text-blue-600 
                                       hover:bg-blue-50 transition-all duration-150"
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6 text-blue-600" />
                            ) : (
                                <Menu className="block h-6 w-6 text-blue-600" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <CustomLink
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-3 py-2 rounded-lg text-base font-medium 
                                           text-gray-800 hover:text-blue-600 
                                           hover:bg-blue-50 transition-all duration-200"
                            >
                                <item.Icon className="w-5 h-5 mr-3 text-blue-600" />
                                {item.name}
                            </CustomLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
