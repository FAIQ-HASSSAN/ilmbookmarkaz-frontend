"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useInteraction } from "@/components/provider/interaction-provider";

interface StickyAddToCartProps {
    productTitle: string;
    productImage: string;
    price: number;
}

export function StickyAddToCart({ productTitle, productImage, price }: StickyAddToCartProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { showToast } = useInteraction();

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky bar after scrolling 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAddToCart = () => {
        showToast(`Added ${quantity}x ${productTitle} to cart`);
    };

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center gap-4">
                    {/* Product Thumbnail */}
                    <div className="hidden sm:block w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                            src={productImage}
                            alt={productTitle}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate text-sm md:text-base">
                            {productTitle}
                        </h3>
                        <p className="text-lg md:text-xl font-bold text-emerald-600">
                            Rs. {(price * quantity).toLocaleString()}
                        </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                            <Icons.ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-bold text-sm md:text-base border-x-2 border-gray-300">
                            {quantity}
                        </span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-2 hover:bg-gray-100 transition-colors"
                        >
                            <Icons.ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                        onClick={handleAddToCart}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 md:px-8 py-3 rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95"
                    >
                        <Icons.ShoppingCart className="w-5 h-5 mr-2 hidden md:block" />
                        <span className="hidden md:inline">Add to Cart</span>
                        <span className="md:hidden">Add</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
