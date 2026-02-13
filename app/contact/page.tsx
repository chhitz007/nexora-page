'use client';

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import React, { useState, useEffect } from 'react';
import {
    Briefcase,
    Handshake,
    Rocket,
    MessageCircle,
    Mic,
    MapPin,
    Mail,
    Send,
    CheckCircle,
    XCircle
} from 'lucide-react';

/* ================= TYPES ================= */

interface FormData {
    fullName: string;
    email: string;
    organisation?: string;
    partnershipType?: string;
    message: string;
    reason: string;
}

interface StatusMessage {
    type: 'success' | 'error';
    text: string;
}

/* ================= TOAST ================= */

const ToastNotification = ({ message, onClose }: any) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(onClose, 4000);
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!message) return null;

    const isSuccess = message.type === 'success';
    const Icon = isSuccess ? CheckCircle : XCircle;
    const bg = isSuccess ? 'bg-green-600' : 'bg-red-600';

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className={`p-4 rounded-xl shadow-xl ${bg} text-white flex items-center gap-3`}>
                <Icon className="w-5 h-5" />
                <div>
                    <p className="font-semibold">
                        {isSuccess ? 'Transmission Complete' : 'Error Detected'}
                    </p>
                    <p className="text-sm">{message.text}</p>
                </div>
                <button onClick={onClose}>✕</button>
            </div>
        </div>
    );
};

/* ================= MAIN ================= */

const ContactPage = () => {

    const initialFormData: FormData = {
        fullName: '',
        email: '',
        organisation: '',
        partnershipType: '',
        message: '',
        reason: ''
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [statusMessage, setStatusMessage] = useState<StatusMessage | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const handleInputChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.message || !formData.partnershipType) {
            setStatusMessage({
                type: 'error',
                text: 'Please complete all required fields.'
            });
            return;
        }

        setActiveModal(null);
        setFormData(initialFormData);
        setStatusMessage({
            type: 'success',
            text: 'Your partnership inquiry has been securely received.'
        });
    };

    const options = [
        { title: 'Partnership', icon: Handshake },
        { title: 'Careers', icon: Briefcase },
        { title: 'Join Waitlist', icon: Rocket },
        { title: 'General', icon: MessageCircle },
        { title: 'Media', icon: Mic }
    ];


    const submitForm = async (collectionName: string, data: any) => {
        await addDoc(collection(db, collectionName), {
            ...data,
            createdAt: serverTimestamp()
        });
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-slate-400 text-slate-900">

            <ToastNotification
                message={statusMessage}
                onClose={() => setStatusMessage(null)}
            />

            <main className="max-w-6xl mx-auto px-6 py-20">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black mb-4 tracking-tight">
                        Connect With <span className="text-blue-600">SkyeVerse</span>
                    </h1>
                    <p className="text-slate-600 text-lg">
                        Partnerships, careers, media, or general enquiries.
                    </p>
                </div>

                {/* Container */}
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-12 bg-white/70 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-slate-200">


                    {/* LEFT SIDE */}
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-semibold mb-10 tracking-tight">
                            Choose Your Path
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {options.map(({ title, icon: Icon }) => (
                                <div
                                    key={title}
                                    onClick={() => {
                                        setActiveModal(title);
                                        setFormData({ ...initialFormData, reason: title });
                                    }}
                                    className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-lg font-semibold">{title}</h4>
                                    </div>
                                    <p className="text-sm text-slate-500">
                                        Click to proceed with {title.toLowerCase()} enquiry.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-3 space-y-8">
                        <h3 className="text-xl font-semibold tracking-wide uppercase text-slate-700">
                            Operational Centers & Channels
                        </h3>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Operational Presence</h4>
                                    <p className="text-slate-600 text-sm">North Kolkata, West Bengal 700004, India</p>
                                    <p className="text-slate-600 text-sm">Indiranagar, Karnataka 560038, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Primary Contact</h4>
                                    <p className="text-blue-600 text-sm font-medium">
                                        connect@skyeverse.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Investor Inquiries */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                            <h4 className="text-lg font-semibold text-slate-800 mb-2">
                                Investor Inquiries
                            </h4>

                            <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                For strategic capital discussions, please visit our dedicated investor page
                                to connect with our investor relations team.
                            </p>

                            <a
                                href="/investors"
                                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm hover:shadow-md"
                            >
                                Go to Investor Inquiry
                            </a>

                        </div>

                    </div>

                </div>
            </main>


            {/* ================= MODAL ================= */}
            {activeModal === 'Partnership' && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-10 relative border border-slate-200 animate-fadeIn">

                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                <Handshake className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                Partnership Inquiry
                            </h3>
                        </div>

                        <p className="text-sm text-slate-500 mb-8">
                            For suppliers, logistics partners, and strategic collaborations.
                        </p>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                try {
                                    await submitForm("contact_partnership", formData);

                                    setActiveModal(null);
                                    setFormData(initialFormData);

                                    setStatusMessage({
                                        type: "success",
                                        text: "Your partnership inquiry has been securely received."
                                    });

                                } catch (error) {
                                    setStatusMessage({
                                        type: "error",
                                        text: "Something went wrong. Please try again."
                                    });
                                }
                            }}
                            className="space-y-6"
                        >

                            <div>
                                <label className="text-sm font-medium text-slate-600">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-600">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-600">Organisation Name</label>
                                <input
                                    type="text"
                                    name="organisation"
                                    value={formData.organisation}
                                    onChange={handleInputChange}
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-600">Type of Partnership</label>
                                <select
                                    name="partnershipType"
                                    value={formData.partnershipType}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                >
                                    <option value="">Select Type</option>
                                    <option value="Supplier">Supplier</option>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Strategic">Strategic</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-600">Short Proposal</label>
                                <textarea
                                    name="message"
                                    maxLength={500}
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <div className="text-right text-xs text-slate-400 mt-1">
                                    {formData.message.length}/500
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <Send className="w-4 h-4" />
                                Submit Partnership Inquiry
                            </button>

                        </form>
                    </div>
                </div>
            )}



            {activeModal === 'Careers' && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-10 relative border border-slate-200 animate-fadeIn">

                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                <Briefcase className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                Careers Application
                            </h3>
                        </div>

                        <p className="text-sm text-slate-500 mb-8">
                            Join our talent pipeline before the full hiring portal launches.
                        </p>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    await submitForm("contact_careers", data);

                                    setActiveModal(null);

                                    setStatusMessage({
                                        type: "success",
                                        text: "Your application has been submitted successfully."
                                    });

                                    form.reset();

                                } catch (error) {
                                    setStatusMessage({
                                        type: "error",
                                        text: "Something went wrong. Please try again."
                                    });
                                }
                            }}
                            className="space-y-6"
                        >

                            {/* Full Name */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Area of Interest */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Area of Interest
                                </label>
                                <select
                                    name="areaOfInterest"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                >
                                    <option value="">Select Area</option>
                                    <option>Operations</option>
                                    <option>Product</option>
                                    <option>Logistics</option>
                                    <option>Finance</option>
                                    <option>Growth</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    LinkedIn Profile (URL)
                                </label>
                                <input
                                    type="url"
                                    name="linkedin"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Short Note */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Short Note (Why SkyeVerse?)
                                </label>
                                <textarea
                                    name="note"
                                    maxLength={500}
                                    rows={4}
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <Send className="w-4 h-4" />
                                Submit Application
                            </button>

                            <p className="text-xs text-slate-500 text-center mt-4">
                                We review every application carefully.
                            </p>

                        </form>
                    </div>
                </div>
            )}



            {activeModal === 'Join Waitlist' && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-10 relative border border-slate-200 animate-fadeIn">

                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                <Rocket className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                Join the Waitlist
                            </h3>
                        </div>

                        <p className="text-sm text-slate-500 mb-8">
                            Be among the first to access SkyeVerse as we launch.
                        </p>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    await submitForm("contact_waitlist", data);

                                    setActiveModal(null);

                                    setStatusMessage({
                                        type: "success",
                                        text: "You’ve been added to the waitlist successfully."
                                    });

                                    form.reset();

                                } catch (error) {
                                    setStatusMessage({
                                        type: "error",
                                        text: "Something went wrong. Please try again."
                                    });
                                }
                            }}
                            className="space-y-6"
                        >

                            {/* Full Name */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Business or Individual Toggle */}
                            <div>
                                <label className="text-sm font-medium text-slate-600 block mb-3">
                                    Business or Individual?
                                </label>

                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="Business"
                                            className="accent-blue-600"
                                            defaultChecked
                                        />
                                        <span className="text-sm text-slate-600">Business</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="userType"
                                            value="Individual"
                                            className="accent-blue-600"
                                        />
                                        <span className="text-sm text-slate-600">Individual</span>
                                    </label>
                                </div>
                            </div>

                            {/* City */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Optional Note */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    What are you looking for? (Optional)
                                </label>
                                <textarea
                                    name="note"
                                    rows={3}
                                    maxLength={300}
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <Send className="w-4 h-4" />
                                Join Waitlist
                            </button>

                        </form>
                    </div>
                </div>
            )}



            {activeModal === 'General' && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-10 relative border border-slate-200 animate-fadeIn">

                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                General Inquiry
                            </h3>
                        </div>

                        <p className="text-sm text-slate-500 mb-8">
                            For platform questions, support requests, feedback, or anything else.
                        </p>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    await submitForm("contact_general", data);

                                    setActiveModal(null);

                                    setStatusMessage({
                                        type: "success",
                                        text: "Your message has been sent successfully."
                                    });

                                    form.reset();

                                } catch (error) {
                                    setStatusMessage({
                                        type: "error",
                                        text: "Something went wrong. Please try again."
                                    });
                                }
                            }}
                            className="space-y-6"
                        >

                            {/* Full Name */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                >
                                    <option value="">Select Category</option>
                                    <option>Platform Question</option>
                                    <option>Support</option>
                                    <option>Feedback</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    maxLength={500}
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            )}



            {activeModal === 'Media' && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-8">

                    <div className="bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-10 relative border border-slate-200 animate-fadeIn">

                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700"
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                                <Mic className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-semibold">
                                Media / Press Request
                            </h3>
                        </div>

                        <p className="text-sm text-slate-500 mb-8">
                            For journalists, PR teams, interviews, and media coverage inquiries.
                        </p>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    await submitForm("contact_media", data);

                                    setActiveModal(null);

                                    setStatusMessage({
                                        type: "success",
                                        text: "Your media request has been submitted successfully."
                                    });

                                    form.reset();

                                } catch (error) {
                                    setStatusMessage({
                                        type: "error",
                                        text: "Something went wrong. Please try again."
                                    });
                                }
                            }}
                            className="space-y-6"
                        >

                            {/* Full Name */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Publication */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Publication / Platform
                                </label>
                                <input
                                    type="text"
                                    name="publication"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Work Email */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Work Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Type of Request */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Type of Request
                                </label>
                                <select
                                    name="requestType"
                                    required
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                >
                                    <option value="">Select Request Type</option>
                                    <option>Interview</option>
                                    <option>Press Kit</option>
                                    <option>Statement</option>
                                    <option>Feature</option>
                                </select>
                            </div>

                            {/* Deadline */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Deadline (Optional)
                                </label>
                                <input
                                    type="date"
                                    name="deadline"
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="text-sm font-medium text-slate-600">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    maxLength={500}
                                    className="mt-2 w-full border border-slate-300 p-3 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                            >
                                <Send className="w-4 h-4" />
                                Submit Media Request
                            </button>

                        </form>
                    </div>
                </div>
            )}



            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.25s ease-out;
                }
                `}
            </style>



        </div>
    );
};

export default ContactPage;
