"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function MartNavbar() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <header className="flex flex-col w-full sticky top-0 z-50">
                {/* 1. Top Utility Bar (Dark Green for Contrast) */}
                <div className="bg-emerald-950 text-white/80 py-1.5 text-[11px] sm:text-xs relative z-50">
                    <Container>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-6 hover:text-white transition-colors">
                                <Link href="/seller" className="hover:underline">Become a Seller</Link>
                                <Link href="/affiliate" className="hover:underline">Affiliate Program</Link>
                                <Link href="/help" className="hover:underline">Help & Support</Link>
                            </div>
                            <div className="flex gap-4 hover:text-white transition-colors">
                                <Link href="/app" className="flex items-center gap-1.5 hover:underline">
                                    <Icons.Logo className="w-3 h-3 text-emerald-400" />
                                    <span className="font-medium">Get App</span>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* 2. Main Header (White Glass Elegant) */}
                <div className="py-3 bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50 transition-all duration-300">
                    <Container>
                        <div className="flex items-center gap-4 sm:gap-8 justify-between">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-3 shrink-0 group">
                                <div className="bg-emerald-50 p-2 rounded-xl group-hover:bg-emerald-100 transition-colors border border-emerald-100">
                                    <Icons.Logo className="h-8 w-8 text-emerald-700" />
                                </div>
                                <div className="flex flex-col leading-none text-emerald-950">
                                    <span className="text-xl font-bold tracking-tight font-heading group-hover:text-emerald-700 transition-colors">Ilm Mart</span>
                                    <span className="text-xl text-[10px] uppercase tracking-[0.2em] opacity-60">My Shop</span>
                                </div>
                            </Link>

                            {/* Elegant Pill Search Bar (Light Mode) */}
                            <div className="flex-1 max-w-2xl relative hidden sm:block">
                                <div className="flex w-full group focus-within:ring-2 ring-emerald-500/20 rounded-full transition-all shadow-sm bg-gray-100 border border-transparent hover:border-gray-200">
                                    <input
                                        type="text"
                                        placeholder="Search for books, gifts, and more..."
                                        className="w-full bg-transparent rounded-l-full px-6 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none text-sm transition-colors"
                                    />
                                    <Button className="rounded-l-none rounded-r-full bg-emerald-600 text-white border-none hover:bg-emerald-700 px-8 transition-transform active:scale-95 shadow-md">
                                        <Icons.Search className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            {/* Actions (Dark Text) */}
                            <div className="flex items-center gap-4 shrink-0 text-gray-700">
                                <Link href="/login" className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-full transition-all group">
                                    <Icons.User className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:text-emerald-700" />
                                    <div className="hidden lg:flex flex-col text-xs leading-tight">
                                        <span className="opacity-60 font-light">Account</span>
                                        <span className="font-semibold group-hover:text-emerald-700 transition-colors">Login</span>
                                    </div>
                                </Link>

                                <span className="h-8 w-px bg-gray-200 hidden lg:block" />

                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="flex items-center gap-2 relative hover:bg-gray-100 px-3 py-2 rounded-full transition-all group"
                                >
                                    <div className="relative">
                                        <Icons.ShoppingCart className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:text-emerald-700" />
                                        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm ring-2 ring-white">3</span>
                                    </div>
                                    <div className="hidden lg:flex flex-col text-xs leading-tight text-left">
                                        <span className="opacity-60 font-light">Cart</span>
                                        <span className="font-semibold group-hover:text-emerald-700 transition-colors">$14,200</span>
                                    </div>
                                </button>

                                <div className="sm:hidden ml-2">
                                    <MobileMenu />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Search (Below header) */}
                        <div className="mt-4 sm:hidden">
                            <div className="flex w-full rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-transparent px-5 py-2.5 text-gray-800 placeholder:text-gray-400 text-sm focus:outline-none"
                                />
                                <Button size="sm" className="rounded-none bg-transparent text-gray-500 hover:text-emerald-600">
                                    <Icons.Search className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
