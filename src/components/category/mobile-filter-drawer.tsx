"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { CategoryFilters } from "./category-filters";

interface MobileFilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onFilterChange: (filters: any) => void;
}

export function MobileFilterDrawer({ isOpen, onClose, onFilterChange }: MobileFilterDrawerProps) {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                    <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <Icons.X className="w-6 h-6 text-gray-600" />
                    </button>
                </div>

                {/* Filters Content */}
                <div className="p-4">
                    <CategoryFilters onFilterChange={onFilterChange} />
                </div>

                {/* Apply Button */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                    <Button
                        onClick={onClose}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl"
                    >
                        Apply Filters
                    </Button>
                </div>
            </div>
        </>
    );
}
