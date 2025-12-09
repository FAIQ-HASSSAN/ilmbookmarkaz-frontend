"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
    onFilterChange: (filters: any) => void;
}

export function CategoryFilters({ onFilterChange }: CategoryFiltersProps) {
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [hasDiscount, setHasDiscount] = useState(false);

    const brands = ["Premium", "Luxury", "Classic", "Modern", "Traditional"];
    const ratings = [5, 4, 3, 2];

    const toggleRating = (rating: number) => {
        setSelectedRatings(prev =>
            prev.includes(rating) ? prev.filter(r => r !== rating) : [...prev, rating]
        );
    };

    const toggleBrand = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const clearAll = () => {
        setPriceRange([0, 10000]);
        setSelectedRatings([]);
        setSelectedBrands([]);
        setInStockOnly(false);
        setHasDiscount(false);
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                    onClick={clearAll}
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                    Clear All
                </button>
            </div>

            {/* Price Range */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Price Range</h4>
                <div className="space-y-3">
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Rs. 0</span>
                        <span className="font-bold text-emerald-600">Rs. {priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Customer Rating</h4>
                <div className="space-y-2">
                    {ratings.map((rating) => (
                        <label
                            key={rating}
                            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        >
                            <input
                                type="checkbox"
                                checked={selectedRatings.includes(rating)}
                                onChange={() => toggleRating(rating)}
                                className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                            />
                            <div className="flex items-center gap-1">
                                {[...Array(rating)].map((_, i) => (
                                    <Icons.Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="text-sm text-gray-600 ml-1">& Up</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Brand</h4>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <label
                            key={brand}
                            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        >
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(brand)}
                                onChange={() => toggleBrand(brand)}
                                className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                            />
                            <span className="text-sm text-gray-700">{brand}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Availability */}
            <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="text-sm font-bold text-gray-900 mb-4">Availability</h4>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">In Stock Only</span>
                </label>
            </div>

            {/* Discount */}
            <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4">Special Offers</h4>
                <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <input
                        type="checkbox"
                        checked={hasDiscount}
                        onChange={(e) => setHasDiscount(e.target.checked)}
                        className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">On Sale</span>
                </label>
            </div>
        </div>
    );
}
