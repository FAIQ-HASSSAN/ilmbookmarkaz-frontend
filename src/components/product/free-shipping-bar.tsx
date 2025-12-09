"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";

interface FreeShippingBarProps {
    currentTotal: number;
    threshold?: number;
}

export function FreeShippingBar({ currentTotal, threshold = 5000 }: FreeShippingBarProps) {
    const remaining = Math.max(0, threshold - currentTotal);
    const progress = Math.min(100, (currentTotal / threshold) * 100);
    const isUnlocked = currentTotal >= threshold;

    return (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-5 mb-6">
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-full ${isUnlocked ? 'bg-emerald-500' : 'bg-emerald-100'}`}>
                    <Icons.Truck className={`w-5 h-5 ${isUnlocked ? 'text-white' : 'text-emerald-600'}`} />
                </div>
                <div className="flex-1">
                    {isUnlocked ? (
                        <p className="text-emerald-700 font-bold text-lg">
                            🎉 Congratulations! You've unlocked FREE Shipping!
                        </p>
                    ) : (
                        <p className="text-gray-700 font-semibold">
                            Add <span className="text-emerald-600 font-bold">Rs. {remaining.toLocaleString()}</span> more to unlock <span className="text-emerald-600 font-bold">FREE Shipping</span>
                        </p>
                    )}
                </div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-emerald-100 rounded-full overflow-hidden">
                <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500 shadow-lg"
                    style={{ width: `${progress}%` }}
                >
                    {progress > 20 && (
                        <div className="absolute inset-0 flex items-center justify-end pr-2">
                            <span className="text-[10px] font-bold text-white">
                                {Math.round(progress)}%
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
