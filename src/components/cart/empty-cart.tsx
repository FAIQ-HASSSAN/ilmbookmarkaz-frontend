"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function EmptyCart() {
    return (
        <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 text-center">
            <div className="max-w-md mx-auto">
                {/* Empty Cart Icon */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icons.ShoppingCart className="w-16 h-16 text-gray-400" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Your Cart is Empty
                </h2>
                <p className="text-gray-600 mb-8">
                    Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
                </p>

                <Link href="/">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg transition-all hover:scale-105">
                        <Icons.Home className="w-5 h-5 mr-2" />
                        Continue Shopping
                    </Button>
                </Link>
            </div>
        </div>
    );
}
