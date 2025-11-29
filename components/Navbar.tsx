'use client';

import React, { useState } from 'react';
// Import necessary icons
import { Home, Users, DollarSign, Mail, Menu, X } from 'lucide-react';

// 1. Custom SVG Component to replicate the Skyebharat abstract logo design
const SkyebharatLogoIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 100 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Path 1: The upper, sky blue sweeping line (simulating flight/motion) */}
        <path
            d="M 0 18 C 20 8, 40 8, 60 18"
            stroke="currentColor" // Will inherit the text-sky-500 color from className
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
        />
        {/* Path 2: The lower, orange sweeping line (simulating the bird/tail) */}
        <path
            d="M 10 22 C 30 26, 60 24, 85 18 L 95 15"
            stroke="#f97316" // Direct orange-500 hex
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
        />
    </svg>
);

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

    // Removed the old logoGradientClasses

    return (
        /* Glassy Light Navbar: bg-white/80, backdrop-blur-md for the modern 'sky' look */
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg shadow-sky-300/50 border-b border-sky-200/50 font-sans transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">

                    {/* Logo/Brand - Integrated the new logo icon and two-tone text */}
                    <div className="flex-shrink-0 py-4">
                        <CustomLink
                            href="/"
                            className="flex items-center text-3xl font-extrabold tracking-tight transition-colors"
                        >
                            {/* Icon (Sky blue for the first half of the gradient) */}
                            <SkyebharatLogoIcon className="w-16 h-8 mr-2 text-sky-500" />

                            {/* Brand Name Update: SKYE (Blue) BHARAT (Orange) */}
                            <span className="flex items-end">
                                <span className="text-sky-500">SKYE</span>
                                <span className="text-orange-500">BHARAT</span>
                            </span>
                        </CustomLink>
                    </div>

                    {/* Desktop Navigation Links - Sky Blue accents */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <CustomLink
                                key={item.name}
                                href={item.href}
                                // Dark text for light background, hover color set to a vibrant sky blue
                                className={`relative flex items-center px-4 py-2.5 text-base font-medium text-gray-700 
                                            transition-all duration-300 group
                                            hover:text-sky-600`}
                            >
                                {/* Icon color set to sky blue */}
                                <item.Icon className="w-5 h-5 mr-2 text-sky-500 group-hover:text-sky-600 transition-colors" />
                                {item.name}
                                {/* Underline effect using blue gradient */}
                                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 to-cyan-500 
                                                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-t-full"></span>
                            </CustomLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Sky theme colors */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-sky-100/50 
                                        focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-150"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6 text-sky-600" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6 text-sky-500" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel - Light theme with sky accents */}
            {isOpen && (
                <div className="md:hidden bg-white/90 border-t border-sky-200 shadow-xl" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <CustomLink
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                // Mobile style: dark text, sky hover
                                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-500/10 transition-all duration-200"
                            >
                                <item.Icon className="w-5 h-5 mr-3 text-sky-500" />
                                {item.name}
                            </CustomLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}