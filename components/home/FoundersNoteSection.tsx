'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Founder } from '@/components/types';
// NOTE: foundersData is assumed to have 5 founders for this calculation (5 / 3 = 2 pages)
import { foundersData } from '@/components/data/homeData';
import FounderCarouselCard from './FounderCarouselCard';

interface FoundersNoteSectionProps {
    openModal: (founder: Founder) => void;
}

// Define the number of founders to display per page
const FOUNDERS_PER_PAGE = 3;

export default function FoundersNoteSection({ openModal }: FoundersNoteSectionProps) {
    // 5 founders: Pages are [0, 1, 2] (index 0) and [3, 4] (index 1)
    const totalFounders = foundersData.length;

    // Calculate total pages based on 3 founders per page
    const totalPages = Math.ceil(totalFounders / FOUNDERS_PER_PAGE); // E.g., 5 / 3 = 1.67 -> 2 pages

    const [currentPage, setCurrentPage] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Determines the founders to display on the current page (slices 3 founders)
    const getFoundersForPage = (pageIndex: number): Founder[] => {
        const startIndex = pageIndex * FOUNDERS_PER_PAGE;
        return foundersData.slice(startIndex, startIndex + FOUNDERS_PER_PAGE);
    };

    const rotatePage = useCallback(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, [totalPages]);

    useEffect(() => {
        // Start the automatic rotation
        intervalRef.current = setInterval(rotatePage, 6000); // Rotate every 6 seconds

        // Clear the interval when the component unmounts
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [rotatePage]);

    const handleDotClick = (pageIndex: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setCurrentPage(pageIndex);
        // Restart rotation after manual click
        intervalRef.current = setInterval(rotatePage, 6000);
    };

    const foundersOnCurrentPage = getFoundersForPage(currentPage);
    const isLastPage = currentPage === totalPages - 1;
    const cardsNeededForFullPage = FOUNDERS_PER_PAGE - foundersOnCurrentPage.length;

    return (
        <section className="py-10 md:py-11 bg-gray-800">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white relative inline-block">
                        A Note from Our Founders
                        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 h-1 w-20 bg-purple-600 rounded-full"></span>
                    </h2>
                </div>

                {/* Carousel Display Area */}
                <div className="flex justify-center">
                    <div className="w-full overflow-hidden">
                        <div
                            className={`flex transition-transform duration-700 ease-in-out`}
                            style={{ width: `${totalPages * 100}%`, transform: `translateX(-${currentPage * (100 / totalPages)}%)` }}
                        >
                            {/* Map through the pages (now 2 pages) */}
                            {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                <div
                                    key={pageIndex}
                                    className="flex-shrink-0 p-2"
                                    style={{ width: `${100 / totalPages}%` }}
                                >
                                    {/* Grid layout */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                                        {getFoundersForPage(pageIndex).map((founder) => (
                                            <FounderCarouselCard
                                                key={founder.id}
                                                founder={founder}
                                                onClick={openModal}
                                            />
                                        ))}

                                        {/* Handle incomplete last page by adding blank spacers */}
                                        {isLastPage && cardsNeededForFullPage > 0 && (
                                            <>
                                                {Array.from({ length: cardsNeededForFullPage }).map((_, i) => (
                                                    // These are hidden on small screens but occupy a grid column on large screens
                                                    <div key={`blank-${pageIndex}-${i}`} className="hidden lg:block h-0"></div>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-10 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            // FIXED: Changed border-gray-300 to border-gray-400 for better contrast on dark background
                            className={`h-3 rounded-full transition-all duration-300 border-2 border-gray-400 ${index === currentPage ? 'w-6 bg-purple-600 border-purple-600' : 'w-3 bg-white hover:bg-gray-200'
                                }`}
                            aria-label={`Go to founder note page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}