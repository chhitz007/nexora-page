'use client';

// 🚀 FIX 1: Import the Next.js Image component
import Image from 'next/image';
import React from 'react';
import { X, ChevronRight, Briefcase, Database, Handshake, Users, TrendingUp, MessageSquare } from 'lucide-react';
import { Founder } from '@/components/types';

interface FoundersModalProps {
    founder: Founder | null;
    closeModal: () => void;
    founders: Founder[];
    setCurrentFounder: (founder: Founder) => void;
}

// Helper function to map founder colors (Unchanged)
const founderColorMap = (accentColor: Founder['accentColor']): { cardBg: string, text: string, dot: string, avatarBorder: string } => {
    switch (accentColor) {
        case 'red':
            return { cardBg: 'bg-red-500/10', text: 'text-red-600', dot: 'bg-red-500', avatarBorder: 'border-red-500' };
        case 'blue':
            return { cardBg: 'bg-blue-500/10', text: 'text-blue-600', dot: 'bg-blue-500', avatarBorder: 'border-blue-500' };
        case 'yellow':
            return { cardBg: 'bg-yellow-500/10', text: 'text-yellow-600', dot: 'bg-yellow-500', avatarBorder: 'border-yellow-500' };
        case 'green':
            return { cardBg: 'bg-green-500/10', text: 'text-green-600', dot: 'bg-green-500', avatarBorder: 'border-green-500' };
        case 'pink':
            return { cardBg: 'bg-pink-500/10', text: 'text-pink-600', dot: 'bg-pink-500', avatarBorder: 'border-pink-500' };
        default:
            return { cardBg: 'bg-gray-500/10', text: 'text-gray-600', dot: 'bg-gray-500', avatarBorder: 'border-gray-500' };
    }
};

// Helper function to map founder icons based on title (Unchanged)
const founderIconMap = (title: string): React.ElementType => {
    switch (title) {
        case 'Co-Founder & CEO': return Briefcase;
        case 'Co-Founder & CTO': return Database;
        case 'Head of Strategic Partnerships': return Handshake;
        case 'Chief Operations Officer': return Users;
        case 'Director of Finance': return TrendingUp;
        default: return MessageSquare;
    }
};

export default function FoundersModal({ founder, closeModal, founders, setCurrentFounder }: FoundersModalProps) {
    if (!founder) return null;

    const colorClasses = founderColorMap(founder.accentColor);
    const Icon = founderIconMap(founder.title);

    const currentIndex = founders.findIndex(f => f.id === founder.id);
    const nextFounder = founders[(currentIndex + 1) % founders.length];
    const prevFounder = founders[(currentIndex - 1 + founders.length) % founders.length];

    return (
        <>
            {/* Modal Animations (Unchanged) */}
            <style jsx global>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-backdrop {
          animation: modalFadeIn 0.1s ease-out;
        }
        .modal-content {
          animation: modalSlideUp 0.2s ease-out;
        }
      `}</style>

            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
                onClick={closeModal}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                {/* Modal Content */}
                <div
                    className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-white modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button - CHANGED: Increased contrast and hover state */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200 z-10 hover:rotate-90"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-8 md:p-10">
                        {/* Modal Header (Founder Info) */}
                        <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200">
                            {/* Avatar / Icon Container - Parent div is w-24 h-24 (96px) */}
                            <div className={`w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center bg-gray-100/50 overflow-hidden border-2 ${colorClasses.avatarBorder}`}>
                                {founder.avatarUrl ? (
                                    // 🚀 FIX 2 & 3: Replace <img> with <Image /> and fix sizing/errors
                                    <Image
                                        src={founder.avatarUrl}
                                        alt={founder.name}
                                        width={96} // Fixes CLS
                                        height={96} // Fixes CLS
                                        style={{ objectFit: 'cover' }}
                                        loading="eager" // It's in a modal, so load it fast
                                        sizes="96px"
                                    // The onError handler causing the 'any' error is removed
                                    />
                                ) : (
                                    <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                                )}
                            </div>
                            {/* Name and Title */}
                            <div>
                                {/* CHANGED: Increased font weight to font-extrabold */}
                                <h3 className={`text-4xl font-extrabold text-gray-900 mb-1 leading-snug`}>{founder.name}</h3>
                                {/* CHANGED: Increased size to text-xl and weight to font-bold */}
                                <p className={`text-xl font-bold ${colorClasses.text}`}>{founder.title}</p>
                            </div>
                        </div>

                        {/* Note Content */}
                        {/* CHANGED: Note title size to text-3xl and contrast to text-gray-900 */}
                        <h4 className="text-3xl font-extrabold text-gray-900 mb-4">{founder.noteTitle}</h4>
                        {founder.noteContent.split('\n\n').map((paragraph, index) => (
                            // CHANGED: Paragraph size to text-lg, contrast to text-gray-800, and line height to leading-snug
                            <p key={index} className={`text-lg text-gray-800 leading-snug ${index > 0 ? 'mt-4' : ''}`}>
                                {paragraph}
                            </p>
                        ))}

                        {/* Navigation Buttons */}
                        {/* CHANGED: Navigation link styles to be more prominent and use brand color */}
                        <div className="mt-8 flex justify-between items-center pt-4 border-t border-gray-200">
                            <button
                                onClick={() => setCurrentFounder(prevFounder)}
                                className="flex items-center text-base font-bold text-purple-700 hover:text-purple-900 transition-colors group"
                            >
                                <ChevronRight className="w-5 h-5 mr-1 transform rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                                Note from {prevFounder.name.split(' ')[0]}
                            </button>
                            <button
                                onClick={() => setCurrentFounder(nextFounder)}
                                className="flex items-center text-base font-bold text-purple-700 hover:text-purple-900 transition-colors group"
                            >
                                Note from {nextFounder.name.split(' ')[0]}
                                <ChevronRight className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}