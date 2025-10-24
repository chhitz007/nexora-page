'use client';

import React from 'react';
import { X } from 'lucide-react';
import { VMPanelContent } from '@/components/types';

interface VisionMissionModalProps {
    content: VMPanelContent | null;
    closeModal: () => void;
}

export default function VisionMissionModal({ content, closeModal }: VisionMissionModalProps) {
    if (!content) return null;

    // Define stronger accent colors for better contrast
    const titleColorClass = content.accentColor === 'teal' ? 'text-teal-700' : 'text-purple-700';

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
                    className={`relative max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl bg-white modal-content`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button - CHANGED: Increased contrast */}
                    <button
                        onClick={closeModal}
                        className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-200 hover:rotate-90 z-10`}
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Modal Header */}
                    {/* CHANGED: Border color for a subtle brand accent */}
                    <div className="p-8 pb-5 border-b border-purple-300/50">
                        {/* CHANGED: Size to text-4xl, weight to font-extrabold, and color to darker shade */}
                        <h3 className={`text-4xl font-extrabold ${titleColorClass}`}>
                            {content.title}
                        </h3>
                    </div>

                    {/* Modal Body */}
                    <div className="p-8">
                        {content.fullContent.split('\n\n').map((paragraph, index) => (
                            // CHANGED: Size to text-lg, contrast to text-gray-800, and line height to leading-snug
                            <p key={index} className={`text-lg text-gray-800 leading-snug ${index > 0 ? 'mt-6' : ''}`}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}