"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const nameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Mock submission
        setTimeout(() => {
            console.log("Contact form submitted:", formData);
            setSuccess(true);
            setIsLoading(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-block mb-6">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                💬 GET IN TOUCH
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
                            We'd Love to<br />Hear From You
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Have a question, suggestion, or just want to say hello? We're here to help!
                        </p>
                    </div>
                </section>

                {/* Contact Cards & Form */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information Cards */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                                    <Icons.Mail className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                                <p className="text-gray-600 text-sm mb-2">Send us an email anytime</p>
                                <a href="mailto:support@ilmmart.com" className="text-blue-600 font-semibold hover:text-blue-700">
                                    support@ilmmart.com
                                </a>
                            </div>

                            {/* Phone */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                                    <Icons.ShoppingBag className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600 text-sm mb-2">Mon-Fri, 9AM-6PM</p>
                                <a href="tel:+1234567890" className="text-green-600 font-semibold hover:text-green-700">
                                    +1 (234) 567-890
                                </a>
                            </div>

                            {/* Address */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                                    <Icons.Home className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600 text-sm">
                                    123 Islamic Center<br />
                                    City, State 12345<br />
                                    Country
                                </p>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                                    <Icons.Clock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                                <div className="text-gray-600 text-sm space-y-1">
                                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                                {/* Success Message */}
                                {success && (
                                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-2 text-green-700 animate-fade-in">
                                        <Icons.Check className="w-5 h-5" />
                                        <span className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</span>
                                    </div>
                                )}

                                {/* Error Message */}
                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-2 text-red-700">
                                        <Icons.AlertCircle className="w-5 h-5" />
                                        <span className="text-sm font-medium">{error}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            ref={nameInputRef}
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all bg-white/50"
                                            required
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all bg-white/50"
                                            required
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all bg-white/50"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="order">Order Support</option>
                                            <option value="product">Product Question</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how we can help you..."
                                            rows={6}
                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all resize-none bg-white/50"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Icons.Loader2 className="w-5 h-5 animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Icons.Mail className="w-5 h-5" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Media */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Follow Us</h2>
                        <p className="text-gray-600 mb-8">Stay connected on social media</p>
                        <div className="flex justify-center gap-4">
                            {[
                                { icon: Icons.Facebook, label: "Facebook", color: "from-blue-500 to-blue-600" },
                                { icon: Icons.Twitter, label: "Twitter", color: "from-sky-500 to-sky-600" },
                                { icon: Icons.Instagram, label: "Instagram", color: "from-pink-500 to-purple-600" },
                                { icon: Icons.Youtube, label: "YouTube", color: "from-red-500 to-red-600" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all shadow-lg`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}
