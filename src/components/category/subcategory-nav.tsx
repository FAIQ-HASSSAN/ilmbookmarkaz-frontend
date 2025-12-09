"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";

interface Subcategory {
    slug: string;
    name: string;
    count: number;
    icon?: string;
}

interface SubcategoryNavProps {
    categorySlug: string;
    subcategories: Subcategory[];
    activeSubcategory?: string;
}

export function SubcategoryNav({ categorySlug, subcategories, activeSubcategory }: SubcategoryNavProps) {
    return (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
                <Icons.Grid className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-gray-900">Browse by Category</h3>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-3">
                {/* All Items */}
                <Link
                    href={`/category/${categorySlug}`}
                    className={`group p-4 rounded-xl border-2 transition-all hover:scale-105 ${!activeSubcategory
                            ? "border-emerald-600 bg-emerald-50 shadow-lg"
                            : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${!activeSubcategory ? "bg-emerald-600" : "bg-gray-100 group-hover:bg-emerald-100"}`}>
                            <Icons.Grid className={`w-5 h-5 ${!activeSubcategory ? "text-white" : "text-gray-600 group-hover:text-emerald-600"}`} />
                        </div>
                        <div className="flex-1">
                            <p className={`font-bold text-sm ${!activeSubcategory ? "text-emerald-700" : "text-gray-900"}`}>
                                All Items
                            </p>
                            <p className="text-xs text-gray-500">
                                {subcategories.reduce((sum, sub) => sum + sub.count, 0)} products
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Subcategories */}
                {subcategories.map((sub) => (
                    <Link
                        key={sub.slug}
                        href={`/category/${categorySlug}/${sub.slug}`}
                        className={`group p-4 rounded-xl border-2 transition-all hover:scale-105 ${activeSubcategory === sub.slug
                                ? "border-emerald-600 bg-emerald-50 shadow-lg"
                                : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${activeSubcategory === sub.slug ? "bg-emerald-600" : "bg-gray-100 group-hover:bg-emerald-100"}`}>
                                <Icons.Book className={`w-5 h-5 ${activeSubcategory === sub.slug ? "text-white" : "text-gray-600 group-hover:text-emerald-600"}`} />
                            </div>
                            <div className="flex-1">
                                <p className={`font-bold text-sm ${activeSubcategory === sub.slug ? "text-emerald-700" : "text-gray-900"}`}>
                                    {sub.name}
                                </p>
                                <p className="text-xs text-gray-500">{sub.count} products</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden overflow-x-auto -mx-6 px-6">
                <div className="flex gap-3 pb-2">
                    {/* All Items */}
                    <Link
                        href={`/category/${categorySlug}`}
                        className={`flex-shrink-0 px-4 py-2 rounded-full border-2 transition-all ${!activeSubcategory
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-gray-300 bg-white text-gray-700 hover:border-emerald-600"
                            }`}
                    >
                        <span className="text-sm font-semibold whitespace-nowrap">All Items</span>
                    </Link>

                    {subcategories.map((sub) => (
                        <Link
                            key={sub.slug}
                            href={`/category/${categorySlug}/${sub.slug}`}
                            className={`flex-shrink-0 px-4 py-2 rounded-full border-2 transition-all ${activeSubcategory === sub.slug
                                    ? "border-emerald-600 bg-emerald-600 text-white"
                                    : "border-gray-300 bg-white text-gray-700 hover:border-emerald-600"
                                }`}
                        >
                            <span className="text-sm font-semibold whitespace-nowrap">{sub.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
