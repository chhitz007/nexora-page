import React from 'react';

export default function App() {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white pt-20 pb-40 lg:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="lg:grid lg:grid-cols-12 lg:gap-20 items-center">

                    {/* Left Side - Improved Text Presentation */}
                    <div className="lg:col-span-6 text-center lg:text-left">
                        <div className="relative">
                            <p className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
                                One Sky.
                            </p>

                            <p className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
                                One Ecosystem.
                            </p>

                            <p className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-8">
                                One Environment.
                            </p>

                            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                                The{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-700">
                                    SkyeVerse
                                </span>
                                .
                            </h2>

                            {/* Accent line */}
                            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-sky-600 to-blue-800 rounded-full mx-auto lg:mx-0"></div>
                        </div>
                    </div>
                    

                    {/* Right Side - Visual / Graphic (unchanged) */}
                    <div className="mt-16 lg:mt-0 lg:col-span-6">
                        <div className="relative w-full h-96 bg-gradient-to-br from-sky-200 to-white rounded-2xl flex items-center justify-center shadow-xl border border-sky-300">
                            <svg
                                className="w-40 h-40 text-sky-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
