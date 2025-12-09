"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";

export function SearchPromoBanner() {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 30 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="space-y-4 mb-8">
            {/* Flash Sale Banner */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                </div>

                <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <Icons.Zap className="w-8 h-8 text-yellow-300 animate-bounce" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                                🔥 Flash Sale Active!
                            </h3>
                            <p className="text-white/90 text-lg">
                                Buy 3+ items and save <span className="font-bold text-yellow-300">15% instantly</span>
                            </p>
                            <p className="text-white/80 text-sm mt-1">
                                ⏰ Sale ends in: {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 py-2 text-center">
                            <div className="text-xs text-white/80 uppercase font-semibold">3+ Items</div>
                            <div className="text-xl font-bold text-white">15% OFF</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-4 py-2 text-center">
                            <div className="text-xs text-white/80 uppercase font-semibold">5+ Items</div>
                            <div className="text-xl font-bold text-yellow-300">25% OFF</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Free Shipping Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Icons.Truck className="w-6 h-6 text-white" />
                        <p className="text-white font-semibold">
                            🎁 FREE Shipping on orders over <span className="text-yellow-300">Rs. 5,000</span>
                        </p>
                    </div>
                    <div className="hidden md:block text-white/90 text-sm">
                        Shop now and save on delivery!
                    </div>
                </div>
            </div>
        </div>
    );
}
