'use client';

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import React, { useState } from 'react';

// Using inline SVG components from lucide-react (simulated)
interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Check: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);
const TrendingUp: React.FC<IconProps> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
const PieChart: React.FC<IconProps> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>;
const Globe: React.FC<IconProps> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const Lock: React.FC<IconProps> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;


const InvestorPage: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        linkedin: '',
        interest: 'VC',
        message: '',
        representsFirm: false
    });

    // Brand Design System
    const brandBlueText = 'text-blue-600';
    const brandLightBg = 'bg-blue-50';
    const brandBorder = 'border-blue-200';

    // Button: Blue, Solid, High Visibility
    const accentButton = 'bg-blue-600 hover:bg-blue-500 text-white font-bold tracking-tight shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5';

    // Input classes: uses p-3.5 and blue focus
    const inputClasses = "mt-1 w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 font-medium";
    const labelClasses = "block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1";

    const handleFormChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const name = target.name;
        const type = (target as HTMLInputElement).type;
        const value = target.value;
        const checked = (target as HTMLInputElement).checked;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };


    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "investorInquiries"), {
                ...formData,
                createdAt: serverTimestamp()
            });

            setFormSubmitted(true);

            setFormData({
                name: '',
                email: '',
                organization: '',
                linkedin: '',
                interest: 'VC',
                message: '',
                representsFirm: false
            });

            setTimeout(() => setFormSubmitted(false), 6000);

        } catch (error) {
            console.error("Error submitting investor form:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">

            {/* --- 1. Hero Section (Light & Airy) --- */}
            {/* Added py-16 on mobile for a tighter header feel */}
            <header className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">

                    {/* Left side: Text Content */}
                    <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">

                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full border ${brandBorder} ${brandLightBg} shadow-sm mb-8`}>
                            <TrendingUp className={`w-4 h-4 ${brandBlueText} mr-2`} />
                            <span className={`text-[11px] font-black ${brandBlueText} uppercase tracking-[0.2em]`}>
                                Investor Relations
                            </span>
                        </span>

                        <h1 className="
                            text-4xl 
                            sm:text-6xl 
                            lg:text-7xl 
                            font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]"
                        >
                            {/* Adjusted base text size from 5xl to 4xl for better mobile display */}
                            A System-First  <span className={`${brandBlueText}`}> Approach to Supply Chain </span>
                            Digitalisation
                        </h1>

                        <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            SkyeVerse is building connected digital systems that bring clarity and reliability to global
                            supply chains. By focusing on strong foundations rather than rapid expansion, we offer
                            partners a durable, long-term opportunity rooted in operational efficiency.

                        </p>
                    </div>

                    {/* Data Card Visual */}
                    <div className="relative w-full max-w-sm bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl p-6 sm:p-8 border-t-[6px] border-t-blue-600">

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="text-sm text-slate-500 font-bold uppercase tracking-wide">
                                    Built for Real-World Value
                                </div>
                                <div className="text-5xl font-black text-blue-600 mt-2">
                                    ₹
                                </div>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-xl text-blue-600">
                                <Globe className="w-8 h-8" />
                            </div>
                        </div>

                        <div className="space-y-4 mt-6">
                            <div className="text-sm text-slate-600 font-medium">
                                Designed around procurement, logistics, and settlement —
                                not vanity metrics.
                            </div>

                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 w-[70%]"></div>
                            </div>

                            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <span>Operational Focus</span>
                                <span className="text-blue-600">System First</span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>

            {/* --- 2. Key Investment Highlights --- */}
            {/* Added py-12 on mobile for better spacing */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-200 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">

                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mb-12 sm:mb-16 text-center">
                        Why SkyeVerse?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: 'Because execution is the real moat',
                                description: 'Markets change fast. What survives is the ability to execute consistently. SkyeVerse is built around disciplined execution across procurement, logistics, services, and settlement not assumptions.'
                            },
                            {
                                icon: PieChart,
                                title: 'Because growth should simplify, not complicate',
                                description: 'Most platforms grow by adding layers. SkyeVerse grows by reducing friction across buying, movement, and coordination keeping the system coherent over time.'
                            },
                            {
                                icon: Lock,
                                title: 'Because long-term value is built quietly',
                                description: 'No shortcuts. No inflated stories. Just systems designed to hold up in real conditions, improve through use, and earn trust over time.'
                            }

                        ].map((item, index) => (
                            <div key={index}
                                // Reduced padding on mobile from p-8 to p-6
                                className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                            >
                                <div className="flex flex-col items-start">
                                    <div className="mb-6 p-3.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
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


            {/* --- 3. Investor Inquiry Form (Spotlight Section) --- */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">

                {/* Background Texture for the Dark Section */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
                {/* Background gradient to Blue */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

                <div className="max-w-3xl mx-auto relative z-10">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
                            ACCESS THE SKYEVERSE INVESTOR BRIEF
                        </h2>
                        <p className="text-lg text-slate-400 font-medium">
                            We respond within 48 hours. The investor brief is shared after review.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-2xl shadow-black/50 relative overflow-hidden transition-opacity duration-300 ${loading ? 'opacity-70' : 'opacity-100'}`}>

                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>

                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            {/* Grid stacks naturally on mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name" className={labelClasses}>Full Name</label>
                                    <input type="text" name="name" id="name" required
                                        className={inputClasses}
                                        onChange={handleFormChange} placeholder="John Doe" value={formData.name} />
                                </div>

                                <div>
                                    <label htmlFor="email" className={labelClasses}>Work Email</label>
                                    <input type="email" name="email" id="email" required
                                        className={inputClasses}
                                        onChange={handleFormChange} placeholder="name@firm.com" value={formData.email} />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="organization" className={labelClasses}>Organization / Fund Name</label>
                                <input type="text" name="organization" id="organization"
                                    className={inputClasses}
                                    onChange={handleFormChange} placeholder="Venture Capital XYZ" value={formData.organization} />
                            </div>

                            {/* NEW LinkedIn Field */}
                            <div>
                                <label htmlFor="linkedin" className={labelClasses}>LinkedIn Profile (Optional)</label>
                                <input type="url" name="linkedin" id="linkedin"
                                    className={inputClasses}
                                    onChange={handleFormChange}
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    value={formData.linkedin} />
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

                            {/* NEW Checkbox */}
                            <div className="flex items-start space-x-3 pt-2">
                                <input
                                    type="checkbox"
                                    name="representsFirm"
                                    id="representsFirm"
                                    checked={formData.representsFirm}
                                    onChange={handleFormChange}
                                    className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="representsFirm" className="text-sm text-slate-700 font-medium leading-relaxed">
                                    I represent an investment firm, fund, or family office.
                                </label>
                            </div>

                            <div className="pt-4">
                                <button type="submit" disabled={loading} className={`w-full py-3.5 px-4 rounded-xl flex items-center justify-center ${accentButton} disabled:opacity-70 disabled:cursor-not-allowed`}>
                                    {loading ? (
                                        <span className="flex items-center">Processing...</span>
                                    ) : (
                                            <>Access the SkyeVerse Investor Brief  </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Success Message (Fixed Position) */}
            {formSubmitted && (
                <div className="fixed bottom-8 right-8 z-50 transition-transform duration-500 ease-out animate-slideIn">
                    <style>{`
                        @keyframes slideIn {
                            0% { transform: translateX(100%); opacity: 0; }
                            100% { transform: translateX(0); opacity: 1; }
                        }
                        .animate-slideIn { animation-name: slideIn; }
                    `}</style>
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
    return <InvestorPage />;
}