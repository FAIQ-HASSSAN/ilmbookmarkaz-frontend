"use client";

import { Icons } from "@/components/ui/icons";

interface CategoryHeaderProps {
    title: string;
    description: string;
    productCount: number;
    sortBy: string;
    onSortChange: (sort: string) => void;
    viewMode: "grid" | "list";
    onViewModeChange: (mode: "grid" | "list") => void;
}

export function CategoryHeader({
    title,
    description,
    productCount,
    sortBy,
    onSortChange,
    viewMode,
    onViewModeChange
}: CategoryHeaderProps) {
    const sortOptions = [
        { value: "relevance", label: "Relevance" },
        { value: "price-asc", label: "Price: Low to High" },
        { value: "price-desc", label: "Price: High to Low" },
        { value: "newest", label: "Newest First" },
        { value: "rating", label: "Top Rated" },
        { value: "popular", label: "Best Selling" }
    ];

    return (
        <div className="mb-8">
            {/* Title & Description */}
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{title}</h1>
                <p className="text-gray-600 text-lg">{description}</p>
                <p className="text-sm text-gray-500 mt-2">{productCount} products</p>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between gap-4 bg-white rounded-xl border border-gray-200 p-4">
                {/* Sort Dropdown */}
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-700">Sort by:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => onSortChange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => onViewModeChange("grid")}
                        className={`p-2 rounded-md transition-all ${viewMode === "grid"
                                ? "bg-white shadow-sm text-emerald-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                        title="Grid View"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => onViewModeChange("list")}
                        className={`p-2 rounded-md transition-all ${viewMode === "list"
                                ? "bg-white shadow-sm text-emerald-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                        title="List View"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
