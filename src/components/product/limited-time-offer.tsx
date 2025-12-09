"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";

interface LimitedTimeOfferProps {
    endTime?: Date;
}

export function LimitedTimeOffer({ endTime }: LimitedTimeOfferProps) {
    const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 34, seconds: 15 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-2 border-orange-300 rounded-2xl p-5 mb-6 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] animate-pulse"></div>
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                    <Icons.Zap className="w-6 h-6 text-orange-600 animate-pulse" />
                    <h3 className="text-lg font-bold text-orange-900">
                        ⚡ Limited Time Offer - Ends Soon!
                    </h3>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-700 font-medium">
                        Special discount expires in:
                    </p>
                    <div className="flex gap-2">
                        {[
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Min", value: timeLeft.minutes },
                            { label: "Sec", value: timeLeft.seconds },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg px-3 py-2 min-w-[60px] text-center border-2 border-orange-300 shadow-sm">
                                <div className="text-2xl font-bold text-orange-600 tabular-nums">
                                    {String(item.value).padStart(2, "0")}
                                </div>
                                <div className="text-[10px] text-gray-600 uppercase font-semibold">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
