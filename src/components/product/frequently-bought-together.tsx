"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/provider/interaction-provider";

interface BundleItem {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface FrequentlyBoughtTogetherProps {
    mainProduct: BundleItem;
    bundleProducts: BundleItem[];
}

export function FrequentlyBoughtTogether({ mainProduct, bundleProducts }: FrequentlyBoughtTogetherProps) {
    const [selectedItems, setSelectedItems] = useState<number[]>([mainProduct.id, ...bundleProducts.map(p => p.id)]);
    const { showToast } = useInteraction();

    const toggleItem = (id: number) => {
        if (id === mainProduct.id) return; // Main product always selected
        setSelectedItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const allProducts = [mainProduct, ...bundleProducts];
    const selectedProducts = allProducts.filter(p => selectedItems.includes(p.id));
    const totalPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);
    const savings = Math.round(totalPrice * 0.15); // 15% bundle discount

    const handleAddBundle = () => {
        showToast(`Added ${selectedProducts.length} items to cart (Saved Rs. ${savings})`);
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-xl">
                    <Icons.Gift className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Frequently Bought Together</h2>
                    <p className="text-sm text-blue-700">Save 15% when you buy these items together</p>
                </div>
            </div>

            {/* Bundle Items */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                {allProducts.map((product, idx) => (
                    <div key={product.id} className="relative">
                        {/* Plus Icon */}
                        {idx > 0 && (
                            <div className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
                                <Icons.Check className="w-4 h-4 text-blue-600" />
                            </div>
                        )}

                        <div
                            className={`relative bg-white rounded-2xl p-4 border-2 transition-all ${selectedItems.includes(product.id)
                                    ? "border-blue-600 shadow-lg"
                                    : "border-gray-200"
                                }`}
                        >
                            {/* Checkbox */}
                            <button
                                onClick={() => toggleItem(product.id)}
                                disabled={product.id === mainProduct.id}
                                className={`absolute top-3 right-3 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${selectedItems.includes(product.id)
                                        ? "bg-blue-600 border-blue-600"
                                        : "bg-white border-gray-300 hover:border-blue-400"
                                    } ${product.id === mainProduct.id ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                {selectedItems.includes(product.id) && (
                                    <Icons.Check className="w-4 h-4 text-white" />
                                )}
                            </button>

                            {/* Product Image */}
                            <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Product Info */}
                            <h3 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
                                {product.title}
                            </h3>
                            <p className="text-lg font-bold text-emerald-600">
                                Rs. {product.price.toLocaleString()}
                            </p>

                            {product.id === mainProduct.id && (
                                <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">
                                    This item
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Total & Add Button */}
            <div className="bg-white rounded-2xl p-5 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Total for {selectedProducts.length} items</p>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-bold text-gray-900">
                                Rs. {(totalPrice - savings).toLocaleString()}
                            </span>
                            <span className="text-lg text-gray-400 line-through">
                                Rs. {totalPrice.toLocaleString()}
                            </span>
                            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Save Rs. {savings}
                            </span>
                        </div>
                    </div>
                </div>

                <Button
                    onClick={handleAddBundle}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg shadow-blue-200 transition-all hover:shadow-xl"
                >
                    <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                    Add Selected to Cart
                </Button>
            </div>
        </div>
    );
}
