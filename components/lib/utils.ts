// lib/utils.ts

import { Briefcase, Database, Handshake, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Founder } from '@/components/types';

// Get border background class based on accent color
export const getBorderBgClass = (colorClass: string): string => {
    switch (colorClass) {
        case 'text-teal-700':
            return 'bg-teal-700';
        case 'text-yellow-700':
            return 'bg-yellow-700';
        case 'text-indigo-700': // Blue
            return 'bg-indigo-700';
        case 'text-pink-700':
            return 'bg-pink-700';
        case 'text-emerald-700': // Green
            return 'bg-emerald-700';
        case 'text-amber-700': // Amber
            return 'bg-amber-700';
        default:
            return 'bg-purple-700';
    }
};

// Get button class based on accent color
export const getButtonClass = (colorClass: string): string => {
    switch (colorClass) {
        case 'text-teal-700':
            return 'bg-teal-600 hover:bg-teal-700';
        case 'text-yellow-700':
            return 'bg-yellow-600 hover:bg-yellow-700';
        case 'text-indigo-700':
            return 'bg-indigo-600 hover:bg-indigo-700';
        case 'text-pink-700':
            return 'bg-pink-600 hover:bg-pink-700';
        case 'text-emerald-700':
            return 'bg-emerald-600 hover:bg-emerald-700';
        case 'text-amber-700':
            return 'bg-amber-600 hover:bg-amber-700';
        default:
            return 'bg-purple-600 hover:bg-purple-700';
    }
};

// Get status badge classes based on accent color
export const getStatusClasses = (colorClass: string): string => {
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

// Get background color with intensity
export const getBgColor = (colorClass: string, intensity: number): string => {
    return colorClass.replace('text-', `bg-`).replace('700', `${intensity}`);
};

// Founder color mapping
export const founderColorMap = (
    accentColor: Founder['accentColor'] | 'amber'
): { cardBg: string; text: string; dot: string; avatarBorder: string } => {
    switch (accentColor) {
        case 'red':
            return {
                cardBg: 'bg-red-500/10',
                text: 'text-red-700',
                dot: 'bg-red-500',
                avatarBorder: 'border-red-500'
            };
        case 'blue':
            return {
                cardBg: 'bg-blue-500/10',
                text: 'text-blue-700',
                dot: 'bg-blue-500',
                avatarBorder: 'border-blue-500'
            };
        case 'yellow':
            return {
                cardBg: 'bg-yellow-500/10',
                text: 'text-yellow-700',
                dot: 'bg-yellow-500',
                avatarBorder: 'border-yellow-500'
            };
        case 'green':
            return {
                cardBg: 'bg-green-500/10',
                text: 'text-green-700',
                dot: 'bg-green-500',
                avatarBorder: 'border-green-500'
            };
        case 'pink':
            return {
                cardBg: 'bg-pink-500/10',
                text: 'text-pink-700',
                dot: 'bg-pink-500',
                avatarBorder: 'border-pink-500'
            };
        case 'amber':
            return {
                cardBg: 'bg-amber-500/10',
                text: 'text-amber-700',
                dot: 'bg-amber-500',
                avatarBorder: 'border-amber-500'
            };
        default:
            return {
                cardBg: 'bg-gray-500/10',
                text: 'text-gray-700',
                dot: 'bg-gray-500',
                avatarBorder: 'border-gray-500'
            };
    }
};

// Founder icon mapping based on title
export const founderIconMap = (title: string): LucideIcon => {
    switch (title) {
        case 'Co-Founder & CEO':
            return Briefcase;
        case 'Co-Founder & CTO':
            return Database;
        case 'Head of Strategic Partnerships':
            return Handshake;
        case 'Chief Operations Officer':
            return Users;
        case 'Director of Finance':
            return TrendingUp;
        default:
            return MessageSquare;
    }
};
