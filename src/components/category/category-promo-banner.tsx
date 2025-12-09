"use client";

import { Icons } from "@/components/ui/icons";

export function CategoryPromoBanner() {
    return (
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 mb-8 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-pulse"></div>
            </div>

            <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold animate-bounce">
                            MEGA DEAL
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Limited Time
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Buy More, Save More! 🎉
                    </h2>
                    <p className="text-white/90 text-lg">
                        Add 3+ items and get <span className="font-bold text-yellow-300">15% OFF</span> instantly •
                        Add 5+ items and get <span className="font-bold text-yellow-300">25% OFF</span>
                    </p>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 text-center">
                        <div className="text-5xl font-bold text-white mb-1">3+</div>
                        <div className="text-sm text-white/80">Items</div>
                        <div className="text-2xl font-bold text-yellow-300 mt-2">15% OFF</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6 text-center">
                        <div className="text-5xl font-bold text-white mb-1">5+</div>
                        <div className="text-sm text-white/80">Items</div>
                        <div className="text-2xl font-bold text-yellow-300 mt-2">25% OFF</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
