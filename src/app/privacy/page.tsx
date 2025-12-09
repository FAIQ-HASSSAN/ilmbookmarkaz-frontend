"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function PrivacyPage() {
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "collection", title: "1. Information We Collect" },
        { id: "usage", title: "2. How We Use Information" },
        { id: "sharing", title: "3. Data Sharing" },
        { id: "cookies", title: "4. Cookies & Tracking" },
        { id: "rights", title: "5. Your Rights" },
        { id: "security", title: "6. Data Security" },
        { id: "children", title: "7. Children's Privacy" },
        { id: "contact", title: "8. Contact for Privacy" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            {/* Hero Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <div className="inline-block mb-6">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold">
                            🔒 PRIVACY
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Your privacy is important to us. Learn how we collect, use, and protect your data.
                    </p>
                    <p className="mt-4 text-blue-200">
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
                                                ? "bg-blue-100 text-blue-700 font-semibold"
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
                                    At Ilm Mart, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
                                </p>
                            </div>

                            {/* 1. Information We Collect */}
                            <section id="collection" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-lg">1</span>
                                    Information We Collect
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p className="font-semibold">Personal Information:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Name, email address, and phone number</li>
                                        <li>Billing and shipping addresses</li>
                                        <li>Payment information (processed securely by third-party providers)</li>
                                        <li>Account credentials (username and password)</li>
                                        <li>Order history and preferences</li>
                                    </ul>
                                    <p className="font-semibold mt-4">Automatically Collected Information:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>IP address and browser type</li>
                                        <li>Device information and operating system</li>
                                        <li>Pages visited and time spent on our website</li>
                                        <li>Referring website and search terms</li>
                                        <li>Cookies and similar tracking technologies</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 2. How We Use Information */}
                            <section id="usage" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg">2</span>
                                    How We Use Information
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>We use the information we collect for the following purposes:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Process and fulfill your orders</li>
                                        <li>Communicate with you about your orders and account</li>
                                        <li>Send promotional emails and newsletters (with your consent)</li>
                                        <li>Improve our website and customer service</li>
                                        <li>Personalize your shopping experience</li>
                                        <li>Prevent fraud and enhance security</li>
                                        <li>Comply with legal obligations</li>
                                        <li>Analyze website usage and trends</li>
                                    </ul>
                                </div>
                            </section>

                            {/* 3. Data Sharing */}
                            <section id="sharing" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-lg">3</span>
                                    Data Sharing
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>We may share your information with:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping companies, email services)</li>
                                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                    </ul>
                                    <p className="mt-4">
                                        We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                                    </p>
                                </div>
                            </section>

                            {/* 4. Cookies & Tracking */}
                            <section id="cookies" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-lg">4</span>
                                    Cookies & Tracking
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small data files stored on your device.
                                    </p>
                                    <p className="font-semibold">Types of Cookies We Use:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                                        <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                                        <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                                        <li><strong>Marketing Cookies:</strong> Track your browsing to show relevant ads</li>
                                    </ul>
                                    <p className="mt-4">
                                        You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.
                                    </p>
                                </div>
                            </section>

                            {/* 5. Your Rights */}
                            <section id="rights" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-lg">5</span>
                                    Your Rights
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>You have the following rights regarding your personal information:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Access:</strong> Request a copy of your personal data</li>
                                        <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                        <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                                        <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                                        <li><strong>Object:</strong> Object to certain data processing activities</li>
                                    </ul>
                                    <p className="mt-4">
                                        To exercise these rights, please contact us at <a href="mailto:privacy@ilmmart.com" className="text-blue-600 hover:text-blue-700 font-semibold">privacy@ilmmart.com</a>
                                    </p>
                                </div>
                            </section>

                            {/* 6. Data Security */}
                            <section id="security" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-lg">6</span>
                                    Data Security
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                                    </p>
                                    <p className="font-semibold">Security Measures Include:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>SSL/TLS encryption for data transmission</li>
                                        <li>Secure payment processing through trusted providers</li>
                                        <li>Regular security audits and updates</li>
                                        <li>Access controls and authentication</li>
                                        <li>Employee training on data protection</li>
                                    </ul>
                                    <p className="mt-4">
                                        However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                                    </p>
                                </div>
                            </section>

                            {/* 7. Children's Privacy */}
                            <section id="children" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg">7</span>
                                    Children's Privacy
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
                                    </p>
                                </div>
                            </section>

                            {/* 8. Contact for Privacy */}
                            <section id="contact" className="scroll-mt-24">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-lg">8</span>
                                    Contact for Privacy
                                </h2>
                                <div className="space-y-4 text-gray-700">
                                    <p>
                                        If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                                        <p className="font-semibold text-gray-900 mb-2">Privacy Contact:</p>
                                        <p>Email: <a href="mailto:privacy@ilmmart.com" className="text-blue-600 hover:text-blue-700 font-semibold">privacy@ilmmart.com</a></p>
                                        <p>Address: 123 Islamic Center, City, State 12345</p>
                                    </div>
                                </div>
                            </section>

                            {/* Footer Actions */}
                            <div className="pt-8 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                                    >
                                        <Icons.Mail className="w-5 h-5" />
                                        <span>Contact Us</span>
                                    </Link>
                                    <Link
                                        href="/terms"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all"
                                    >
                                        <Icons.FileText className="w-5 h-5" />
                                        <span>Terms & Conditions</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
