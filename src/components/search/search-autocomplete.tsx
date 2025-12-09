"use client";

import { useState, useEffect, useRef } from "react";
import { Icons } from "@/components/ui/icons";

interface SearchAutocompleteProps {
    query: string;
    onSelect: (query: string) => void;
    isOpen: boolean;
    onClose: () => void;
}

const popularSearches = [
    "Islamic Books",
    "Prayer Mat",
    "Hijab",
    "Quran",
    "Islamic Wall Art",
    "Tasbih",
    "Attar Perfume"
];

const productSuggestions = [
    { id: 1, title: "Premium Silk Hijab", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=100&q=80" },
    { id: 2, title: "Islamic Calligraphy Wall Art", image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=100&q=80" },
    { id: 3, title: "Velvet Prayer Mat", image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=100&q=80" }
];

export function SearchAutocomplete({ query, onSelect, isOpen, onClose }: SearchAutocompleteProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const filteredSearches = popularSearches.filter(s =>
        s.toLowerCase().includes(query.toLowerCase())
    );

    const filteredProducts = productSuggestions.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div
            ref={dropdownRef}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-gray-200 shadow-2xl z-50 max-h-[500px] overflow-y-auto"
        >
            {/* Product Suggestions */}
            {filteredProducts.length > 0 && (
                <div className="p-4 border-b border-gray-200">
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">Products</h3>
                    <div className="space-y-2">
                        {filteredProducts.map((product) => (
                            <button
                                key={product.id}
                                onClick={() => onSelect(product.title)}
                                className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-12 h-12 rounded-lg object-cover"
                                />
                                <span className="text-gray-900 font-medium">{product.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Popular Searches */}
            {filteredSearches.length > 0 && (
                <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase mb-3">
                        {query ? "Suggestions" : "Popular Searches"}
                    </h3>
                    <div className="space-y-1">
                        {filteredSearches.map((search, index) => (
                            <button
                                key={index}
                                onClick={() => onSelect(search)}
                                className="w-full flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
                            >
                                <Icons.Search className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{search}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* No Results */}
            {filteredProducts.length === 0 && filteredSearches.length === 0 && query && (
                <div className="p-8 text-center">
                    <p className="text-gray-500">No suggestions found for "{query}"</p>
                </div>
            )}
        </div>
    );
}
