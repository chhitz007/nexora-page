'use client';
import React, { useState } from 'react';

// --- Icon Components (Simple, professional icons for UI) ---
// Using Lucide-React for better consistency and features
import { Check, Briefcase, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';


// --- Main Content Component ---
function InvestorPageContent() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        interest: 'VC',
        message: ''
    });

    const containerClasses = 'bg-gray-950 text-gray-100 font-inter';
    const accentColor = 'text-purple-400';
    const buttonClasses = 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-500/50 shadow-lg shadow-purple-500/30';

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // --- Frontend-Only Form Submission Handler ---
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        console.log("Frontend Form Submission Simulated. Data captured:", {
            ...formData,
            timestamp: new Date().toISOString()
        });

        setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 6000);
        }, 1500);
    };

    return (
        <div className={`min-h-screen ${containerClasses} antialiased`}>
            {/* Custom Font Import for a clean look */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                .font-inter { font-family: 'Inter', sans-serif; }
            `}</style>

            {/* --- 1. Hero & Overview Section --- */}
            <header className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Subtle Background Glow/Noise Effect (Enhanced with more depth) */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-900/15 to-gray-950 opacity-20 pointer-events-none z-0"></div>
                <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"6\" height=\"6\" viewBox=\"0 0 6 6\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 0h3v3H0V0zm3 3h3v3H3V3z\"/%3E%3C/g%3E%3C/svg%3E')" }}></div>


                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between z-10 relative">
                    {/* Left side: Text Content */}
                    <div className="text-center md:text-left md:w-2/3 lg:w-3/5 mb-10 md:mb-0 pr-0 md:pr-8">
                        <span className={`inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-purple-900/50 border border-purple-400/50 ${accentColor}`}>
                            Investor Relations
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Capitalizing on <span className={`${accentColor} drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]`}>Global Supply Chain Digitalization</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-400 max-w-xl leading-relaxed">
                            Bulk Business is positioned to be a market leader in the multi-trillion dollar B2B logistics and procurement sector. We offer a high-growth opportunity to partners looking to invest in efficiency, scale, and proprietary technology.
                        </p>
                    </div>

                    {/* Right side: Abstract Visual (Placeholder for a relevant graphic or data viz) */}
                    <div className="md:w-1/3 lg:w-2/5 flex justify-center md:justify-end">
                        {/* Placeholder for a complex, abstract, glowing data visualization */}
                        <div className="w-64 h-64 sm:w-80 sm:h-80 bg-purple-800/20 rounded-full flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-blue-500/20 to-transparent animate-spin-slow"></div>
                            <Briefcase className="w-24 h-24 text-purple-300 relative z-10" />
                            <div className="absolute inset-0 ring-4 ring-purple-600/30 rounded-full animate-pulse-ring"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- 2. Key Investment Highlights --- */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-b border-gray-800">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        Why Invest in Bulk Business?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Reusing Lucide icons and enhancing their presentation */}
                        {[
                            { icon: TrendingUp, title: 'High-Growth Sector', description: 'The B2B procurement market is undergoing a massive digital shift, representing a significant total addressable market (TAM).' },
                            { icon: Briefcase, title: 'Proprietary Technology', description: 'Our logistics platform uses AI-driven routing and predictive analytics to achieve unmatched efficiency and cost savings.' },
                            { icon: ShieldCheck, title: 'Proven Execution', description: 'Consistent quarterly growth and positive customer retention metrics, demonstrating robust business model validation.' },
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 rounded-xl border border-gray-800 hover:border-purple-600 hover:bg-gray-800/20 transition-all duration-300 transform hover:-translate-y-1 group">
                                <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-purple-600/20 border border-purple-800 transition-colors duration-300 group-hover:bg-purple-600/30">
                                    <item.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300" />
                                </div>
                                <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                                <p className="mt-2 text-gray-400 text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. Investor Inquiry Form Section --- */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto relative">
                    <div className={`bg-gray-900 p-8 sm:p-10 rounded-2xl shadow-2xl shadow-purple-900/50 border-t-4 border-purple-600 transition-opacity duration-300 ${loading ? 'opacity-70' : 'opacity-100'}`}>
                        <h2 className="text-3xl font-bold text-white mb-2">Request Investor Deck</h2>
                        <p className="text-gray-400 mb-8">Please complete the form below. Our dedicated investor relations team will respond within 48 hours.</p>

                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            {/* Form Fields - Reusing previous clean styling */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                                <input type="text" name="name" id="name" required
                                    className="mt-1 w-full p-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white transition-colors placeholder:text-gray-500"
                                    onChange={handleFormChange} placeholder="John Doe" value={formData.name} />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Work Email</label>
                                <input type="email" name="email" id="email" required
                                    className="mt-1 w-full p-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white transition-colors placeholder:text-gray-500"
                                    onChange={handleFormChange} placeholder="investor@firmname.com" value={formData.email} />
                            </div>

                            <div>
                                <label htmlFor="organization" className="block text-sm font-medium text-gray-300">Organization / Fund Name</label>
                                <input type="text" name="organization" id="organization"
                                    className="mt-1 w-full p-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white transition-colors placeholder:text-gray-500"
                                    onChange={handleFormChange} placeholder="Venture Capital XYZ" value={formData.organization} />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-300">Investment Stage of Interest</label>
                                <select name="interest" id="interest" required
                                    className="mt-1 w-full p-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white transition-colors"
                                    onChange={handleFormChange} value={formData.interest}>
                                    <option className="bg-gray-900" value="VC">Venture Capital (Series A+)</option>
                                    <option className="bg-gray-900" value="PE">Private Equity (Growth)</option>
                                    <option className="bg-gray-900" value="Angel">Angel / Seed Investor</option>
                                    <option className="bg-gray-900" value="Strategic Partner">Strategic Partner</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Introductory Note</label>
                                <textarea name="message" id="message" rows={3}
                                    className="mt-1 w-full p-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500 text-white resize-none transition-colors placeholder:text-gray-500"
                                    onChange={handleFormChange} placeholder="We are interested in your recent funding round..." value={formData.message}></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" disabled={loading} className={`w-full py-3 px-4 border border-transparent rounded-lg font-semibold transition-colors duration-200 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${buttonClasses}`}>
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <>SUBMIT INQUIRY <ArrowRight className="w-5 h-5 ml-2" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* --- Success Message Popup --- */}
            {formSubmitted && (
                <div className="fixed bottom-5 right-5 bg-purple-600 text-white p-4 rounded-lg shadow-xl flex items-center space-x-2 transition-opacity duration-300">
                    <Check className="w-5 h-5" /><span>Inquiry successfully simulated and logged to console.</span>
                </div>
            )}
        </div>
    );
}

// --- Wrapper Component (Good practice if you need layout for multiple pages) ---
export default function App() {
    return <InvestorPageContent />;
}