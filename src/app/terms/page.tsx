"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "general", title: "1. General Terms" },
        { id: "accounts", title: "2. User Accounts" },
        { id: "orders", title: "3. Orders & Payments" },
        { id: "shipping", title: "4. Shipping & Delivery" },
        { id: "returns", title: "5. Returns & Refunds" },
        { id: "privacy", title: "6. Privacy & Data" },
        { id: "intellectual", title: "7. Intellectual Property" },
        { id: "liability", title: "8. Limitation of Liability" },
        { id: "governing", title: "9. Governing Law" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <div className="inline-block mb-6">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold">
                            📜 LEGAL
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                        Please read these terms carefully before using our services
                    </p>
                    <p className="mt-4 text-emerald-200">
                        Last Updated: December 10, 2025
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table of Contents - Sticky Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-lg p-6">
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
                            <nav className="space-y-2">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={`block text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === section.id
                                                ? "bg-emerald-100 text-emerald-700 font-semibold"
                                                : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                        onClick={() => setActiveSection(section.id)}
                                    >
                                        {section.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
                            {/* Introduction */}
                            <div>
                                <p className="text-gray-700 leading-relaxed">
                                    Welcome to Ilm Mart. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                                </p>
                            </div>

                            {/* 1. General Terms */}
                            <section id="general" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-lg">1</span>
                                    General Terms
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        By using this website, you warrant that you are at least 18 years of age and have the legal capacity to enter into these Terms. You agree to use our website only for lawful purposes and in accordance with these Terms.
                                    </p>
                                    <p>
                                        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the modified Terms.
                                    </p>
                                </div>
                            </section>

                            {/* 2. User Accounts */}
                            <section id="accounts" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-lg">2</span>
                                    User Accounts
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>You must provide accurate and complete information when creating an account</li>
                                        <li>You must keep your account information up to date</li>
                                        <li>You are responsible for all activities under your account</li>
                                        <li>You must notify us immediately of any unauthorized use of your account</li>
                                        <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 3. Orders & Payments */}
                            <section id="orders" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg">3</span>
                                    Orders & Payments
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.
                                    </p>
                                    <p>
                                        Payment must be received before we dispatch your order. We accept various payment methods as displayed during checkout. All prices are in the currency specified on the website and include applicable taxes unless otherwise stated.
                                    </p>
                                </div>
                            </section>

                            {/* 4. Shipping & Delivery */}
                            <section id="shipping" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-lg">4</span>
                                    Shipping & Delivery
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        We aim to process and ship orders within 1-3 business days. Delivery times vary depending on your location and chosen shipping method. We are not responsible for delays caused by shipping carriers or customs.
                                    </p>
                                    <p>
                                        Risk of loss and title for items purchased pass to you upon delivery to the shipping carrier. You are responsible for providing accurate shipping information.
                                    </p>
                                </div>
                            </section>

                            {/* 5. Returns & Refunds */}
                            <section id="returns" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-lg">5</span>
                                    Returns & Refunds
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        We accept returns within 30 days of delivery for most items in their original condition. Items must be unused, in original packaging, and with all tags attached. Certain items may not be eligible for return due to hygiene or other reasons.
                                    </p>
                                    <p>
                                        Refunds will be processed to the original payment method within 7-10 business days after we receive and inspect the returned item. Shipping costs are non-refundable unless the return is due to our error.
                                    </p>
                                </div>
                            </section>

                            {/* 6. Privacy & Data */}
                            <section id="privacy" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-lg">6</span>
                                    Privacy & Data
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. By using our website, you consent to our collection and use of personal information as described in the Privacy Policy.
                                    </p>
                                    <p>
                                        <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                                            Read our Privacy Policy →
                                        </Link>
                                    </p>
                                </div>
                            </section>

                            {/* 7. Intellectual Property */}
                            <section id="intellectual" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg">7</span>
                                    Intellectual Property
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        All content on this website, including text, graphics, logos, images, and software, is the property of Ilm Mart or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
                                    </p>
                                </div>
                            </section>

                            {/* 8. Limitation of Liability */}
                            <section id="liability" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg">8</span>
                                    Limitation of Liability
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        To the fullest extent permitted by law, Ilm Mart shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or any products purchased through the website.
                                    </p>
                                    <p>
                                        Our total liability for any claims arising from your use of the website or products shall not exceed the amount you paid for the product or service in question.
                                    </p>
                                </div>
                            </section>

                            {/* 9. Governing Law */}
                            <section id="governing" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-lg">9</span>
                                    Governing Law
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of [Your Jurisdiction].
                                    </p>
                                </div>
                            </section>

                            {/* Contact */}
                            <div className="pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
                                <p className="text-gray-700 mb-4">
                                    If you have any questions about these Terms and Conditions, please contact us:
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                                    >
                                        <Icons.Mail className="w-5 h-5" />
                                        <span>Contact Us</span>
                                    </Link>
                                    <a
                                        href="mailto:legal@ilmmart.com"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all"
                                    >
                                        <Icons.Mail className="w-5 h-5" />
                                        <span>legal@ilmmart.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
