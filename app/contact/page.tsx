'use client';
import React, { useState, useEffect } from 'react';

// --- TYPE DEFINITIONS (Unchanged) ---
interface FormData {
    fullName: string;
    company: string;
    email: string;
    reason: string;
    message: string;
}

interface StatusMessage {
    type: 'success' | 'error';
    text: string;
}

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    tagName?: 'input' | 'textarea';
    rows?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

interface InputGroupProps {
    label: string;
    children: React.ReactNode;
}

interface DetailCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    children: React.ReactNode;
}

interface ToastNotificationProps {
    message: StatusMessage | null;
    onClose: () => void;
}

// --- LUCIDE ICON DEFINITIONS (Unchanged) ---
const Mail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const MapPin: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" /><circle cx="12" cy="10" r="3" /></svg>;
const Send: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>;
const CheckCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
const XCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>;

// --- BRAND COLOR DEFINITIONS (Blue) ---
const brandBlueText = 'text-blue-600';
const brandLightBlueBg = 'bg-blue-50';
const accentBlueButton = 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5';
const baseDarkText = 'text-slate-900';
const mutedText = 'text-slate-600';

// --- CUSTOM COMPONENTS (Unchanged Logic from last revision) ---

const CustomInput: React.FC<CustomInputProps> = ({ tagName = 'input', ...rest }) => {
    const isTextArea = tagName === 'textarea';
    const baseClasses = "w-full p-3.5 border rounded-xl transition-all duration-300 focus:ring-1 focus:ring-offset-2 outline-none text-base font-sans";
    const lightClasses = `bg-white border-slate-300/80 ${baseDarkText} placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/50 focus:ring-1 focus:ring-offset-white`;
    const classes = `${baseClasses} ${lightClasses} ${isTextArea ? 'resize-none' : ''}`;

    const inputProps = rest as React.InputHTMLAttributes<HTMLInputElement>;
    const textareaProps = rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>;

    return isTextArea ? (
        <textarea
            {...textareaProps}
            className={classes}
        />
    ) : (
        <input
            {...inputProps}
            className={classes}
        />
    );
};

const InputGroup: React.FC<InputGroupProps> = ({ label, children }) => (
    <div className="flex flex-col group">
        <label className={`text-sm font-bold mb-2 transition-colors duration-300 ${mutedText} tracking-wider`}>
            {label}
        </label>
        {children}
    </div>
);

const DetailCard: React.FC<DetailCardProps> = ({ icon: Icon, title, children }) => {
    const cardBase = "flex items-start space-x-5 p-6 rounded-2xl border border-slate-200 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-100/50 bg-slate-100";
    const iconBase = `flex-shrink-0 p-3 rounded-xl ${brandLightBlueBg} ${brandBlueText}`;

    return (
        <div className={cardBase}>
            <div className={iconBase}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className={`text-xl font-bold ${baseDarkText} mb-1`}>
                    {title}
                </h4>
                <div className={'text-slate-700 text-sm space-y-1'}>
                    {children}
                </div>
            </div>
        </div>
    );
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onClose }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(onClose, 5000);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);


    if (!message) return null;

    const isSuccess = message.type === 'success';
    const bgColor = isSuccess ? 'bg-green-600' : 'bg-red-600';
    const Icon = isSuccess ? CheckCircle : XCircle;

    return (
        <div className="fixed bottom-6 right-6 z-50 transition-transform duration-500 ease-out animate-slideIn">
            <style>{`
                @keyframes slideIn {
                    0% { transform: translateX(100%); opacity: 0; }
                    100% { transform: translateX(0); opacity: 1; }
                }
                .animate-slideIn { animation-name: slideIn; }
            `}</style>
            <div className={`p-4 rounded-xl max-w-sm w-full shadow-2xl ${bgColor} text-white flex items-center space-x-3`}>
                <Icon className="w-6 h-6 flex-shrink-0" />
                <div className="flex-grow">
                    <p className="font-semibold text-lg">{isSuccess ? 'Transmission Complete' : 'Error Detected'}</p>
                    <p className="text-sm">{message.text}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 rounded-full text-white/80 hover:text-white transition-colors flex-shrink-0"
                    aria-label="Close notification"
                >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
}


// --- MAIN CONTACT PAGE COMPONENT (Mobile Refinements) ---

const ContactPage: React.FC = () => {
    const initialFormData: FormData = {
        fullName: '',
        company: '',
        email: '',
        reason: '',
        message: '',
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [statusMessage, setStatusMessage] = useState<StatusMessage | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatusMessage(null);

        if (!formData.fullName || !formData.email || !formData.reason || !formData.message) {
            setStatusMessage({ type: 'error', text: 'Critical fields are missing. Please complete all required inputs.' });
            return;
        }

        console.log("Contact Form Data Transmitted (Frontend Simulation):", {
            ...formData,
            timestamp: new Date().toISOString()
        });

        setFormData(initialFormData);
        setStatusMessage({ type: 'success', text: 'Your message has been received by our secure servers.' });
    };

    const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => (
        <a {...props}>{props.children}</a>
    );

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Corporate Hub (Sector V)',
            details: (
                <>
                    <p>SDF Building, Salt Lake, Kolkata</p>
                    <p>West Bengal, India, 700091</p>
                    <CustomLink href="#map-link" className={`${brandBlueText} font-medium hover:underline cursor-pointer`}>View on Global Grid Map</CustomLink>
                </>
            )
        },
        {
            icon: Mail,
            title: 'Access Channels (24/7)',
            details: (
                <>
                    <p className="font-semibold mt-1">Partnership Interface</p>
                    <a href="mailto:partners@cluchh.com" className={`${brandBlueText} hover:text-blue-500 transition-colors`} style={{ wordBreak: 'break-word' }}>partners@cluchh.com</a>

                    <p className="font-semibold mt-3">Recruitment Matrix</p>
                    <a href="mailto:careers@cluchh.com" className={`${brandBlueText} hover:text-blue-500 transition-colors`} style={{ wordBreak: 'break-word' }}>careers@cluchh.com</a>
                </>
            )
        },
    ];

    return (
        <div className={`min-h-screen relative overflow-hidden bg-white ${baseDarkText} font-sans antialiased selection:bg-blue-100 selection:text-blue-900`}>

            <ToastNotification message={statusMessage} onClose={() => setStatusMessage(null)} />

            <main className="relative z-10 pt-16 pb-20">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Main Headings (Refined for better mobile text size) */}
                    <div className="text-center mb-16 pt-8">
                        <p className={`text-base font-semibold uppercase tracking-widest ${brandBlueText} mb-3`}>
                            INITIATE SECURE CONNECTION
                        </p>
                        <h1 className={`
                            text-4xl 
                            sm:text-6xl 
                            lg:text-8xl 
                            font-black ${baseDarkText} mb-5 tracking-tighter leading-tight sm:leading-none
                        `}>
                            {/* Changed base text size from 5xl to 4xl (or even 3xl if you wanted it smaller, but 4xl is a good compromise) */}
                            Let&#39;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Forge</span> the Future.
                        </h1>
                        <h2 className={`text-lg md:text-xl font-medium ${mutedText} max-w-4xl mx-auto leading-relaxed`}>
                            We&#39;re fueling the next generation of e-commerce. Connect with us to explore partnership, investment, and career opportunities globally.
                        </h2>
                    </div>

                    {/* Contact Form & Address Grid */}
                    {/* Added `sm:p-8` to ensure padding is generous on mobile, but scales correctly. */}
                    <div className={`grid grid-cols-1 lg:grid-cols-7 gap-10 lg:gap-12 p-6 sm:p-8 md:p-12 lg:p-12 rounded-3xl bg-slate-200 border border-slate-500 shadow-2xl shadow-blue-200/50 ring-2 ring-blue-100/70`}>

                        {/* Left Column: Contact Form */}
                        <div className="lg:col-span-4">
                            <h3 className={`text-3xl font-extrabold ${baseDarkText} mb-8 pb-3 relative`}>
                                Secure Transmission Protocol
                                <span className={`absolute bottom-0 left-0 w-24 h-1 ${brandBlueText} rounded-full`}></span>
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Grid remains 1-column on mobile, then 2-columns on sm: breakpoint. This is responsive. */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup label="Full Name">
                                        <CustomInput tagName="input" type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required placeholder="Name/Alias" />
                                    </InputGroup>
                                    <InputGroup label="Entity/Organization">
                                        <CustomInput tagName="input" type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Acme Corp (Optional)" />
                                    </InputGroup>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <InputGroup label="Secure E-mail Address">
                                        <CustomInput tagName="input" type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="you@cluchh.com" />
                                    </InputGroup>
                                    <InputGroup label="Inquiry Protocol">
                                        <div className="relative">
                                            <select
                                                name="reason"
                                                value={formData.reason}
                                                onChange={handleInputChange}
                                                required
                                                className={`w-full p-3.5 border rounded-xl transition-all duration-300 outline-none appearance-none cursor-pointer text-base bg-white border-slate-300/80 ${baseDarkText} focus:border-blue-500 focus:ring-blue-500/50 focus:ring-1 focus:ring-offset-2 focus:ring-offset-white`}
                                            >
                                                <option value="" disabled>Select a priority...</option>
                                                <option value="Partnership">Partnership Inquiry</option>
                                                <option value="Investment">Investment Opportunities</option>
                                                <option value="Career">Career Opportunities</option>
                                                <option value="General">General Question / Other</option>
                                            </select>
                                            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 ${brandBlueText}`}>
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </InputGroup>
                                </div>
                                <InputGroup label="Encrypted Message Payload">
                                    <CustomInput
                                        tagName="textarea"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Transmit your message (max 500 characters)..."
                                        maxLength={500}
                                        required
                                    />
                                </InputGroup>
                                <button
                                    type="submit"
                                    className={`w-full py-3.5 ${accentBlueButton} text-lg font-black rounded-xl uppercase tracking-wider flex items-center justify-center space-x-3`}
                                >
                                    <Send className="w-5 h-5" />
                                    <span>SUBMIT INQUIRY</span>
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Address/Details */}
                        {/* Added mt-8 to the right column on mobile to add separation when stacked on top of the form */}
                        <div className="lg:col-span-3 space-y-8 h-full flex flex-col justify-start border-t lg:border-t-0 pt-8 lg:pt-0 border-slate-200 mt-8 lg:mt-0">

                            <h3 className={`text-xl font-bold ${baseDarkText} relative uppercase tracking-wider`}>
                                Operational Centers & Channels
                            </h3>

                            {contactInfo.map((item, index) => (
                                <DetailCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                >
                                    {item.details}
                                </DetailCard>
                            ))}

                            <div className="mt-10 pt-6 border-t border-slate-200">
                                <h3 className={`text-xl font-semibold ${baseDarkText} mb-3`}>Investor Inquiries</h3>
                                <p className={mutedText}>
                                    For strategic capital inquiries, please select the Investment Opportunities protocol in the form, or reach out to our dedicated investor relations channel.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ContactPage;