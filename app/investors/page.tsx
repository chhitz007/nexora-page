'use client';
import React, { useState } from 'react';
import { Check, TrendingUp, ArrowRight, PieChart, Globe, Lock } from 'lucide-react';

function InvestorPageTighter() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        interest: 'VC',
        message: ''
    });

    // Brand Design System
    const brandPurpleText = 'text-purple-600';
    const brandLightBg = 'bg-purple-50';
    const brandBorder = 'border-purple-200';

    // Button: Purple, Solid, High Visibility
    const accentButton = 'bg-purple-600 hover:bg-purple-500 text-white font-bold tracking-tight shadow-lg shadow-purple-600/30 transition-all duration-300 transform hover:-translate-y-0.5';

    // TIGHTENED: Reduced input padding from p-4 to p-3.5, changed rounded-xl to rounded-lg
    const inputClasses = "mt-1 w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200 font-medium";
    const labelClasses = "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1";

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setFormSubmitted(true);
            setTimeout(() => setFormSubmitted(false), 6000);
        }, 1500);
    };

    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 antialiased selection:bg-purple-100 selection:text-purple-900">

            {/* --- 1. Hero Section (Light & Airy) --- */}
            <header className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">

                    {/* Left side: Text Content */}
                    <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full border ${brandBorder} ${brandLightBg} shadow-sm mb-8`}>
                            <TrendingUp className={`w-4 h-4 ${brandPurpleText} mr-2`} />
                            <span className={`text-[11px] font-black ${brandPurpleText} uppercase tracking-[0.2em]`}>
                                Investor Relations
                            </span>
                        </span>

                        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                            Capitalizing on <span className={`${brandPurpleText}`}>Global Supply Chain</span> Digitalization
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Bulk Business is positioned to lead the multi-trillion dollar B2B logistics sector. We offer a high-growth opportunity for partners investing in efficiency.
                        </p>
                    </div>

                    {/* Right side: Visual */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                        {/* Data Card Visual */}
                        <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl p-8 border-t-[6px] border-t-purple-600">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wide">Annual Growth</div>
                                    <div className="text-4xl font-black text-slate-900 mt-1">+127%</div>
                                </div>
                                <div className="p-3 bg-green-50 rounded-xl text-green-600">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-600 w-[85%]"></div>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-slate-500">
                                    <span>Q1 Performance</span>
                                    <span className="text-purple-600">Exceeded Target</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- 2. Key Investment Highlights (NEW: Slate-50 Background for Contrast) --- */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-200 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-16 text-center">
                        Why Invest in Bulk Business?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Globe, title: 'High-Growth Sector', description: 'The B2B procurement market is undergoing a massive digital shift with significant TAM.' },
                            { icon: PieChart, title: 'Proprietary Tech', description: 'Our platform uses AI-driven routing and predictive analytics for unmatched cost savings.' },
                            { icon: Lock, title: 'Proven Execution', description: 'Consistent quarterly growth and positive customer retention metrics validate our model.' },
                        ].map((item, index) => (
                            <div key={index}
                                // Cards are now white, lifted by a shadow, sitting on the slate-50 background.
                                className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <div className="flex flex-col items-start">
                                    <div className="mb-6 p-3.5 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3">{item.title}</h3>
                                    <p className="text-[15px] text-slate-600 leading-7 font-medium">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. Investor Inquiry Form (Spotlight Section - TIGHTENED) --- */}
            {/* TIGHTENED: Reduced py-24 to py-16 */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">

                {/* Background Texture for the Dark Section */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none"></div>

                <div className="max-w-3xl mx-auto relative z-10">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
                            Request Investor Deck
                        </h2>
                        <p className="text-lg text-slate-400 font-medium">
                            Our dedicated investor relations team responds within 48 hours.
                        </p>
                    </div>

                    {/* Form Card: TIGHTENED - Reduced p-8/p-10 to p-6/p-8 */}
                    <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/50 relative overflow-hidden transition-opacity duration-300 ${loading ? 'opacity-70' : 'opacity-100'}`}>

                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600"></div>

                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                                    <input type="text" name="name" id="name" required
                                        className={inputClasses} // uses p-3.5
                                        onChange={handleFormChange} placeholder="John Doe" value={formData.name} />
                                </div>

                                <div>
                                    <label htmlFor="email" className={labelClasses}>Work Email</label>
                                    <input type="email" name="email" id="email" required
                                        className={inputClasses} // uses p-3.5
                                        onChange={handleFormChange} placeholder="name@firm.com" value={formData.email} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="organization" className={labelClasses}>Organization / Fund Name</label>
                                <input type="text" name="organization" id="organization"
                                    className={inputClasses}
                                    onChange={handleFormChange} placeholder="Venture Capital XYZ" value={formData.organization} />
                            </div>

                            <div>
                                <label htmlFor="interest" className={labelClasses}>Investment Stage of Interest</label>
                                <div className="relative">
                                    <select name="interest" id="interest" required
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                        onChange={handleFormChange} value={formData.interest}>
                                        <option value="VC">Venture Capital (Series A+)</option>
                                        <option value="PE">Private Equity (Growth)</option>
                                        <option value="Angel">Angel / Seed Investor</option>
                                        <option value="Strategic Partner">Strategic Partner</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className={labelClasses}>Introductory Note</label>
                                <textarea name="message" id="message" rows={3}
                                    className={inputClasses}
                                    onChange={handleFormChange} placeholder="We are interested in..." value={formData.message}></textarea>
                            </div>

                            {/* TIGHTENED: Reduced py-4 to py-3.5 */}
                            <div className="pt-4">
                                <button type="submit" disabled={loading} className={`w-full py-3.5 px-4 rounded-xl flex items-center justify-center ${accentButton} disabled:opacity-70 disabled:cursor-not-allowed`}>
                                    {loading ? (
                                        <span className="flex items-center">Processing...</span>
                                    ) : (
                                        <>REQUEST ACCESS <ArrowRight className="w-5 h-5 ml-2" /></>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Message */}
            {formSubmitted && (
                <div className="fixed bottom-8 right-8 z-50 animate-bounce-in">
                    <div className="bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center border border-slate-800">
                        <div className="bg-green-500 rounded-full p-1 mr-3">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">Inquiry Sent Successfully</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function App() {
    return <InvestorPageTighter />;
}