"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
            {/* 1. Newsletter Section (High Contrast) */}
            <div className="border-b border-gray-800">
                <Container>
                    <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-emerald-900/50 flex items-center justify-center border border-emerald-500/30">
                                <Icons.Mail className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-1">Join our Newsletter</h3>
                                <p className="text-sm text-gray-400">Get 10% off your first premium order.</p>
                            </div>
                        </div>

                        <div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                            />
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 2. Main Footer Links */}
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="col-span-2 lg:col-span-2">
                            <Link href="/" className="flex items-center gap-2 mb-6 group">
                                <div className="p-2 bg-emerald-600 rounded-lg group-hover:bg-emerald-500 transition-colors">
                                    <Icons.Logo className="w-6 h-6 text-white" />
                                </div>
                                <span className="font-bold text-2xl text-white tracking-tight">Ilm Mart</span>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                                Your premium destination for Islamic books, modest fashion, and lifestyle essentials. Quality products curated for the modern Muslim home.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                {[
                                    { name: "Facebook", icon: Icons.Facebook },
                                    { name: "Twitter", icon: Icons.Twitter },
                                    { name: "Instagram", icon: Icons.Instagram },
                                    { name: "YouTube", icon: Icons.Youtube },
                                ].map((social, idx) => (
                                    <a key={idx} href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all text-gray-400 group">
                                        {social.icon && <social.icon className="w-5 h-5" />}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Customer Care */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Customer Care</h4>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">How to Buy</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Returns & Refunds</a></li>
                                <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Track Order</a></li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Top Categories</h4>
                            <ul className="space-y-4 text-sm">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Islamic Books</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Modest Fashion</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home Decor</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Fragrances</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Prayer Mats</a></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                                <li><Link href="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Become a Seller</a></li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* 3. Bottom Bar (Copyright & Payments) */}
            <div className="bg-gray-950/50 py-6 border-t border-gray-800/50">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Ilm Book Markaz. All rights reserved.
                        </p>

                        {/* Trust Badges (Replaced with text/icons for now) */}
                        <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all">
                            <div className="bg-white px-2 py-1 rounded h-8 w-12 flex items-center justify-center">
                                <span className="text-blue-700 font-bold text-xs italic">VISA</span>
                            </div>
                            <div className="bg-white px-2 py-1 rounded h-8 w-12 flex items-center justify-center">
                                <div className="flex -space-x-1">
                                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                                </div>
                            </div>
                            <div className="bg-white px-2 py-1 rounded h-8 w-12 flex items-center justify-center">
                                <span className="text-emerald-600 font-bold text-[10px]">COD</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

// Ensure you add these icons to your Icons.tsx file if they don't exist
// Using inline fallbacks or extending Icons in a real scenario
