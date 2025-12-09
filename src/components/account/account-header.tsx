"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/ui/icons";
import { Sheet } from "@/components/ui/sheet";
import { AccountSidebar } from "./account-sidebar";

export function AccountHeader() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const getPageTitle = () => {
        switch (pathname) {
            case "/account": return "Overview";
            case "/account/orders": return "My Orders";
            case "/account/wishlist": return "Wishlist";
            case "/account/addresses": return "Addresses";
            case "/account/profile": return "Profile Settings";
            default: return "Account";
        }
    };

    return (
        <div className="lg:hidden mb-6">
            <div className="flex items-center justify-between bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <Icons.Menu className="w-6 h-6 text-gray-700" />
                    </button>

                    <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} title="Menu" className="bg-slate-50">
                        <div className="mb-8">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                                    I
                                </div>
                                <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                    Ilm Mart
                                </span>
                            </Link>
                        </div>
                        <div onClick={() => setIsOpen(false)}>
                            <AccountSidebar />
                        </div>
                    </Sheet>

                    <h1 className="text-xl font-bold text-gray-900">{getPageTitle()}</h1>
                </div>
                <Link href="/" className="group">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                        <Icons.Home className="w-5 h-5 text-gray-600 group-hover:text-emerald-600" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
