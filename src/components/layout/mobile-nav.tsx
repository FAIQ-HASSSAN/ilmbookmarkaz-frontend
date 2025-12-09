"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/ui/icons";

export function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: Icons.Logo },
        { name: "Categories", href: "/categories", icon: Icons.Menu },
        { name: "Cart", href: "/cart", icon: Icons.ShoppingCart },
        { name: "Account", href: "/account", icon: Icons.User },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-white pb-safe shadow-[0_-1px_3px_rgba(0,0,0,0.1)] md:hidden">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`flex flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-gray-500"
                            }`}
                    >
                        <item.icon className={`h-6 w-6 ${isActive ? "fill-current" : ""}`} />
                        <span className="text-[10px] font-medium">{item.name}</span>
                    </Link>
                );
            })}
        </div>
    );
}
