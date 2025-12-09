"use client";

import { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

const categories = [
    { name: "Ramadan Essentials", icon: Icons.Moon, color: "text-emerald-600" },
    { name: "Islamic Books", icon: Icons.Book, color: "text-blue-600" },
    { name: "Prayer Mats", icon: Icons.Rug, color: "text-purple-600" },
    { name: "Fragrances (Attar)", icon: Icons.Droplets, color: "text-rose-600" },
    { name: "Modest Fashion", icon: Icons.Shirt, color: "text-pink-600" },
    { name: "Home Decor", icon: Icons.Home, color: "text-orange-600" },
    { name: "Electronics", icon: Icons.Smartphone, color: "text-gray-600" },
    { name: "Gifts & Bundles", icon: Icons.Gift, color: "text-red-600" },
];

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                variant="ghost"
                className="sm:hidden text-emerald-900 border-none hover:bg-emerald-50 h-10 w-10 p-0"
                onClick={() => setIsOpen(true)}
            >
                <Icons.Menu className="h-6 w-6" />
            </Button>

            <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu">
                <div className="flex flex-col gap-1">
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4 px-2">
                            <Icons.Logo className="w-6 h-6 text-emerald-600" />
                            <span className="font-bold text-lg text-emerald-800">Ilm Mart</span>
                        </div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-2">Categories</h4>
                        {categories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={`/category/${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 transition-colors group"
                                onClick={() => setIsOpen(false)}
                            >
                                <cat.icon className={`w-5 h-5 ${cat.color} group-hover:scale-110 transition-transform`} />
                                <span className="font-medium text-gray-700 group-hover:text-emerald-900">{cat.name}</span>
                                <Icons.ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 pl-2">Menu</h4>
                        <Link href="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                            <Icons.Home className="w-5 h-5 text-gray-500" /> Home
                        </Link>
                        <Link href="/flash-sale" className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                            <Icons.Zap className="w-5 h-5 text-orange-500" /> Flash Sale
                        </Link>
                        <Link href="/cart" className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
                            <Icons.ShoppingCart className="w-5 h-5 text-gray-500" /> Cart
                        </Link>
                    </div>
                </div>
            </Sheet>
        </>
    );
}
