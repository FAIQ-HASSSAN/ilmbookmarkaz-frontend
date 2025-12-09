"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useInteraction } from "@/components/provider/interaction-provider";

interface ProductInfoProps {
    title: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    description: string;
    stock?: number;
}

export function ProductInfo({
    title,
    price,
    originalPrice,
    rating,
    reviews,
    description,
    stock = 12
}: ProductInfoProps) {
    const [quantity, setQuantity] = useState(1);
    const { showToast } = useInteraction();

    const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

    // Bulk discount tiers
    const bulkDiscounts = [
        { qty: 3, discount: 10, label: "Buy 3" },
        { qty: 5, discount: 15, label: "Buy 5" },
        { qty: 10, discount: 20, label: "Buy 10" }
    ];

    const handleAddToCart = () => {
        showToast(`Added ${quantity}x ${title} to cart`);
    };

    return (
        <div className="space-y-6">
            {/* Title & Rating */}
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                    {title}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Icons.Star
                                key={i}
                                className={`w-5 h-5 ${i < Math.floor(rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "fill-gray-200 text-gray-200"
                                    }`}
                            />
                        ))}
                        <span className="ml-2 text-sm font-semibold text-gray-900">{rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({reviews} reviews)</span>
                    <span className="text-sm text-emerald-600 font-medium">✓ Verified Purchases</span>
                </div>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6">
                <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-bold text-emerald-700">Rs. {price.toLocaleString()}</span>
                    {originalPrice && (
                        <>
                            <span className="text-xl text-gray-400 line-through">Rs. {originalPrice.toLocaleString()}</span>
                            <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                -{discount}%
                            </span>
                        </>
                    )}
                </div>
                <p className="text-sm text-emerald-700">Inclusive of all taxes</p>
            </div>

            {/* Stock Indicator */}
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </div>
                <span className="text-sm font-semibold text-orange-700">
                    Only {stock} left in stock - Order soon!
                </span>
            </div>

            {/* Bulk Discount Tiers */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-purple-900 mb-3 flex items-center gap-2">
                    <Icons.Gift className="w-4 h-4" />
                    Bulk Discounts Available
                </h3>
                <div className="grid grid-cols-3 gap-2">
                    {bulkDiscounts.map((tier) => (
                        <button
                            key={tier.qty}
                            onClick={() => setQuantity(tier.qty)}
                            className={`p-3 rounded-xl border-2 transition-all text-center ${quantity === tier.qty
                                    ? "border-purple-600 bg-purple-100"
                                    : "border-purple-200 bg-white hover:border-purple-300"
                                }`}
                        >
                            <div className="text-xs font-semibold text-purple-900">{tier.label}</div>
                            <div className="text-lg font-bold text-purple-600">-{tier.discount}%</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Selector */}
            <div>
                <label className="text-sm font-semibold text-gray-700 mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                    <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-4 py-3 hover:bg-gray-100 transition-colors"
                        >
                            <Icons.ChevronLeft className="w-5 h-5" />
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-16 text-center font-bold text-lg border-x-2 border-gray-300 py-3 focus:outline-none"
                        />
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-4 py-3 hover:bg-gray-100 transition-colors"
                        >
                            <Icons.ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="text-sm text-gray-600">
                        Total: <span className="font-bold text-emerald-600">Rs. {(price * quantity).toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg shadow-emerald-200 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                </Button>
                <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 font-semibold py-4 rounded-xl transition-all"
                >
                    <Icons.Heart className="w-5 h-5 mr-2" />
                    Add to Wishlist
                </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.Truck className="w-5 h-5 text-emerald-600" />
                    <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.RotateCw className="w-5 h-5 text-emerald-600" />
                    <span>Easy Returns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.Check className="w-5 h-5 text-emerald-600" />
                    <span>Authentic Product</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.Star className="w-5 h-5 text-emerald-600" />
                    <span>Best Seller</span>
                </div>
            </div>

            {/* Description */}
            <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
