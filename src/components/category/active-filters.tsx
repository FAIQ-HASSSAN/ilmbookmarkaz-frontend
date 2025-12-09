"use client";

import { Icons } from "@/components/ui/icons";

interface ActiveFiltersProps {
    filters: {
        priceRange?: [number, number];
        ratings?: number[];
        brands?: string[];
        inStock?: boolean;
        hasDiscount?: boolean;
    };
    onClearAll: () => void;
    onRemoveFilter: (type: string, value?: any) => void;
}

export function ActiveFilters({ filters, onClearAll, onRemoveFilter }: ActiveFiltersProps) {
    const hasActiveFilters =
        (filters.priceRange && filters.priceRange[1] < 10000) ||
        (filters.ratings && filters.ratings.length > 0) ||
        (filters.brands && filters.brands.length > 0) ||
        filters.inStock ||
        filters.hasDiscount;

    if (!hasActiveFilters) return null;

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-gray-900">Active Filters</h3>
                <button
                    onClick={onClearAll}
                    className="text-sm text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
                >
                    <Icons.X className="w-4 h-4" />
                    Clear All
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {filters.priceRange && filters.priceRange[1] < 10000 && (
                    <FilterChip
                        label={`Price: Up to Rs. ${filters.priceRange[1].toLocaleString()}`}
                        onRemove={() => onRemoveFilter("price")}
                    />
                )}

                {filters.ratings?.map((rating) => (
                    <FilterChip
                        key={rating}
                        label={`${rating}★ & Up`}
                        onRemove={() => onRemoveFilter("rating", rating)}
                    />
                ))}

                {filters.brands?.map((brand) => (
                    <FilterChip
                        key={brand}
                        label={brand}
                        onRemove={() => onRemoveFilter("brand", brand)}
                    />
                ))}

                {filters.inStock && (
                    <FilterChip label="In Stock" onRemove={() => onRemoveFilter("stock")} />
                )}

                {filters.hasDiscount && (
                    <FilterChip label="On Sale" onRemove={() => onRemoveFilter("discount")} />
                )}
            </div>
        </div>
    );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
    return (
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-medium">
            <span>{label}</span>
            <button
                onClick={onRemove}
                className="hover:bg-emerald-200 rounded-full p-0.5 transition-colors"
            >
                <Icons.X className="w-3 h-3" />
            </button>
        </div>
    );
}
