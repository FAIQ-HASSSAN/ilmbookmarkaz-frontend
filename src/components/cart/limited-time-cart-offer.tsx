"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";

export function LimitedTimeCartOffer() {
    const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 mb-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Icons.Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">
                            ⚡ Cart Discount Active!
                        </h3>
                        <p className="text-white/90 text-sm">
                            Complete checkout now to save extra 5%
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-3 py-2 min-w-[60px] text-center">
                        <div className="text-2xl font-bold text-white tabular-nums">
                            {String(timeLeft.minutes).padStart(2, "0")}
                        </div>
                        <div className="text-[10px] text-white/80 uppercase font-semibold">
                            Min
                        </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-lg px-3 py-2 min-w-[60px] text-center">
                        <div className="text-2xl font-bold text-white tabular-nums">
                            {String(timeLeft.seconds).padStart(2, "0")}
                        </div>
                        <div className="text-[10px] text-white/80 uppercase font-semibold">
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
