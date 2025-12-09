"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Overview", href: "/account", icon: Icons.Home },
    { name: "My Orders", href: "/account/orders", icon: Icons.ShoppingBag },
    { name: "My Wallet", href: "/account/wallet", icon: Icons.Wallet },
    { name: "Wishlist", href: "/account/wishlist", icon: Icons.Heart },
    { name: "Addresses", href: "/account/addresses", icon: Icons.MapPin },
    { name: "Profile Settings", href: "/account/profile", icon: Icons.User },
];

export function AccountSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-full">
            {/* User Profile Summary */}
            <div className="flex items-center gap-4 p-4 mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold backdrop-blur-sm">
                    FH
                </div>
                <div>
                    <div className="font-bold">Faiq Hassan</div>
                    <div className="text-xs text-emerald-100">Verified Member</div>
                </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group",
                                isActive
                                    ? "bg-white shadow-md text-emerald-600 font-semibold"
                                    : "text-gray-600 hover:bg-white/50 hover:text-emerald-600"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                                    isActive ? "fill-current" : ""
                                )}
                            />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button */}
            <button className="w-full flex items-center gap-3 px-4 py-3 mt-8 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-300 group">
                <Icons.LogOut className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                Sign Out
            </button>
        </div>
    );
}
