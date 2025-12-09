"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

interface CartItem {
    id: number;
    title: string;
    price: string;
    image: string;
}

interface FloatingCartBadgeProps {
    itemCount: number;
    items: CartItem[];
}

export function FloatingCartBadge({ itemCount, items }: FloatingCartBadgeProps) {
    const [showPreview, setShowPreview] = useState(false);

    if (itemCount === 0) return null;

    return (
        <div className="fixed bottom-24 right-6 z-40">
            {/* Mini Cart Preview */}
            {showPreview && items.length > 0 && (
                <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border-2 border-emerald-200 p-4 mb-2 animate-slide-up">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">Cart Preview</h3>
                        <button
                            onClick={() => setShowPreview(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <Icons.X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        {items.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-12 h-12 rounded-lg object-cover"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {item.title}
                                    </p>
                                    <p className="text-sm text-emerald-600 font-bold">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {items.length > 3 && (
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            +{items.length - 3} more items
                        </p>
                    )}

                    <Button className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl">
                        View Cart
                    </Button>
                </div>
            )}

            {/* Floating Cart Button */}
            <button
                onClick={() => setShowPreview(!showPreview)}
                className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
            >
                <Icons.ShoppingCart className="w-7 h-7" />

                {/* Badge Count */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border-3 border-white shadow-lg animate-bounce">
                    {itemCount}
                </div>

                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500"></div>
            </button>
        </div>
    );
}
