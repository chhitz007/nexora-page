'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { VMPanelContent } from '@/components/types';
import { visionContent, missionContent } from '@/components/data/homeData';

interface VisionMissionSectionProps {
    openVMModal: (content: VMPanelContent) => void;
}

export default function VisionMissionSection({ openVMModal }: VisionMissionSectionProps) {
    return (
        <>
            {/* Custom Animations (Unchanged) */}
            <style jsx>{`
        @keyframes shimmer-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group:hover .group-hover\\:animate-\\[shimmer-slide_1\\.5s_ease-in-out\\] {
          animation: shimmer-slide 1.5s ease-in-out;
        }
      `}</style>

            {/* **RESPONSIVENESS EDIT 1:** Adjusted vertical padding for better spacing on mobile. */}
            <section className="py-12 md:py-16 bg-gray-100">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        {/* **RESPONSIVENESS EDIT 2:** Changed base text size from 'text-4xl' to 'text-3xl sm:text-4xl' for better scaling on very small phones. */}
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block`}>
                            Our Core Philosophy
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 h-1 w-20 bg-purple-600 rounded-full"></span>
                        </h2>

                        {/* **RESPONSIVENESS EDIT 3:** Changed 'mt-4' to 'mt-6' for better vertical spacing after the title. */}
                        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                            Guiding our technology and our commitment to the future of commerce.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {/* Vision Card (No structural changes needed) */}
                        <div
                            className={`p-8 rounded-xl relative overflow-hidden group cursor-pointer transition-all duration-500 ease-out bg-white border border-gray-100 hover:shadow-xl hover:border-blue-400 hover:-translate-y-1`}
                            onClick={() => openVMModal(visionContent)}
                        >
                            {/* Effects (Unchanged) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer-slide_1.5s_ease-in-out]"></div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                                <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                            </div>

                            {/* Vision Card Content (Unchanged) */}
                            <h3 className="text-3xl font-extrabold font-serif mb-3 relative z-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                                Our Vision
                            </h3>
                            <p className="text-xl text-gray-900 relative z-10 line-clamp-4">
                                {visionContent.preview}
                            </p>

                            <div className="mt-6 relative z-10 flex items-center text-base font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-200">
                                <span>Explore the full vision</span>
                                <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1`} />
                            </div>
                        </div>

                        {/* Mission Card (No structural changes needed) */}
                        <div
                            className={`p-8 rounded-xl relative overflow-hidden group cursor-pointer transition-all duration-500 ease-out bg-white border border-gray-100 hover:shadow-xl hover:border-purple-400 hover:-translate-y-1`}
                            onClick={() => openVMModal(missionContent)}
                        >
                            {/* Effects (Unchanged) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer-slide_1.5s_ease-in-out]" style={{ animationDelay: '0.1s' }}></div>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
                                <div className="h-full bg-purple-500 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                            </div>

                            {/* Mission Card Content (Unchanged) */}
                            <h3 className="text-3xl font-extrabold font-serif mb-3 relative z-10 text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                                Our Mission
                            </h3>
                            <p className="text-xl text-gray-900 relative z-10 line-clamp-4">
                                {missionContent.preview}
                            </p>

                            <div className="mt-6 relative z-10 flex items-center text-base font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-200">
                                <span>Unveil our core mission</span>
                                <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}