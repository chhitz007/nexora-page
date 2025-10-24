'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { Pillar } from '@/components/types';

interface PillarModalProps {
    pillar: Pillar | null;
    closeModal: () => void;
}

// Helper function for button classes
const getButtonClass = (colorClass: string) => {
    switch (colorClass) {
        case 'text-teal-700':
            return 'bg-teal-600 hover:bg-teal-700';
        case 'text-yellow-700':
            return 'bg-yellow-600 hover:bg-yellow-700';
        case 'text-indigo-700':
            return 'bg-indigo-600 hover:bg-indigo-700';
        case 'text-pink-700':
            return 'bg-pink-600 hover:bg-pink-700';
        default:
            return 'bg-purple-600 hover:bg-purple-700';
    }
};

export default function PillarModal({ pillar, closeModal }: PillarModalProps) {
    if (!pillar) return null;

    return (
        <>
            {/* Modal Animations */}
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
                    className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl bg-white modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    {/* ✅ FIXED: Changed bg-gray-200 to bg-gray-300, text-gray-800 to text-gray-900 */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 text-gray-900 hover:bg-gray-400 transition-all duration-200 z-10 hover:rotate-90"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-8 md:p-10">
                        {/* Icon and Header */}
                        <div className="flex items-start space-x-4 mb-4">
                            <pillar.icon className={`w-16 h-16 flex-shrink-0 ${pillar.accentColor}`} strokeWidth={1.5} />
                            <div>
                                {/* Name - uses pillar.accentColor which is now -700, so it's good */}
                                <h3 className={`text-4xl font-extrabold ${pillar.accentColor} mb-1 leading-snug`}>
                                    {pillar.name}
                                </h3>
                                {/* ✅ FIXED: Changed text-gray-700 to text-gray-800 */}
                                <p className="text-lg font-semibold text-gray-800">
                                    {pillar.slogan}
                                </p>
                            </div>
                        </div>

                        {/* Full Description */}
                        {/* ✅ FIXED: Already good at text-gray-800 */}
                        <p className="text-base text-gray-800 leading-normal pt-4 border-t border-gray-200 whitespace-pre-wrap">
                            {pillar.description}
                        </p>

                        {/* Action Button / Status */}
                        <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                            {pillar.status === 'waitlist' ? (
                                <Link
                                    href={pillar.actionHref}
                                    onClick={closeModal}
                                    className={`px-8 py-3 text-lg font-bold rounded-xl text-white shadow-lg transition-all duration-200 transform hover:scale-[1.02] ${getButtonClass(pillar.accentColor)}`}
                                >
                                    {pillar.actionText}
                                </Link>
                            ) : (
                                // ✅ FIXED: Changed bg-gray-300 to bg-gray-400 and text-gray-800 to text-gray-900
                                <span className="px-8 py-3 text-lg font-bold rounded-xl bg-gray-400 text-gray-900 cursor-default shadow-inner">
                                    {pillar.actionText}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}