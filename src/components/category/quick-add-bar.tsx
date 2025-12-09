"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

interface QuickAddBarProps {
    selectedCount: number;
    onAddAll: () => void;
    onClearSelection: () => void;
}

export function QuickAddBar({ selectedCount, onAddAll, onClearSelection }: QuickAddBarProps) {
    if (selectedCount === 0) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-2xl p-4 px-6 animate-slide-up">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Icons.ShoppingCart className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-lg">{selectedCount} items selected</p>
                        <p className="text-sm text-emerald-100">Ready to add to cart</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        onClick={onClearSelection}
                        className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 font-semibold px-6 py-3 rounded-xl transition-all"
                    >
                        Clear
                    </Button>
                    <Button
                        onClick={onAddAll}
                        className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold px-8 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
                    >
                        <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                        Add All to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
