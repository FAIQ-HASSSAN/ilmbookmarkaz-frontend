"use client";

import { Icons } from "@/components/ui/icons";

interface BulkDiscountBannerProps {
    currentTotal: number;
}

export function BulkDiscountBanner({ currentTotal }: BulkDiscountBannerProps) {
    const tiers = [
        { threshold: 10000, discount: 20, label: "20% OFF" },
        { threshold: 7500, discount: 15, label: "15% OFF" },
        { threshold: 5000, discount: 10, label: "10% OFF" }
    ];

    const currentTier = tiers.find(tier => currentTotal >= tier.threshold);
    const nextTier = tiers.find(tier => currentTotal < tier.threshold);

    return (
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-2xl p-6 mb-6 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-pulse"></div>
            </div>

            <div className="relative z-10">
                {currentTier ? (
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Icons.Zap className="w-6 h-6 text-yellow-300 animate-bounce" />
                            <h3 className="text-2xl font-bold text-white">
                                🎉 {currentTier.label} Unlocked!
                            </h3>
                            <Icons.Zap className="w-6 h-6 text-yellow-300 animate-bounce" />
                        </div>
                        <p className="text-white/90 text-lg">
                            You're saving <span className="font-bold text-yellow-300">Rs. {Math.round(currentTotal * (currentTier.discount / 100)).toLocaleString()}</span> on this order!
                        </p>
                        {nextTier && (
                            <p className="text-white/80 text-sm mt-2">
                                Add Rs. {(nextTier.threshold - currentTotal).toLocaleString()} more to unlock {nextTier.label}
                            </p>
                        )}
                    </div>
                ) : nextTier ? (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">
                            💰 Buy More, Save More!
                        </h3>
                        <p className="text-white/90 text-lg mb-4">
                            Add <span className="font-bold text-yellow-300">Rs. {(nextTier.threshold - currentTotal).toLocaleString()}</span> more to unlock <span className="font-bold text-yellow-300">{nextTier.label}</span>
                        </p>
                        <div className="flex justify-center gap-4">
                            {tiers.reverse().map((tier) => (
                                <div
                                    key={tier.threshold}
                                    className={`px-4 py-2 rounded-lg ${currentTotal >= tier.threshold
                                            ? "bg-green-500 text-white"
                                            : "bg-white/20 text-white/60"
                                        }`}
                                >
                                    <div className="text-xs">Rs. {tier.threshold.toLocaleString()}+</div>
                                    <div className="font-bold">{tier.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
