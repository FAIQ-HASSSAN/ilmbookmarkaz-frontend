"use client";

import { useState, useEffect } from "react";
import { Icons } from "@/components/ui/icons";

const notifications = [
    { name: "Ahmed from Karachi", action: "purchased this item", time: "2 minutes ago" },
    { name: "Fatima from Lahore", action: "added to cart", time: "5 minutes ago" },
    { name: "Hassan from Islamabad", action: "purchased 3 items", time: "8 minutes ago" },
    { name: "Aisha from Faisalabad", action: "is viewing this", time: "just now" },
];

export function SocialProofNotifications() {
    const [currentNotification, setCurrentNotification] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentNotification((prev) => (prev + 1) % notifications.length);
                setIsVisible(true);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const notification = notifications[currentNotification];

    return (
        <div
            className={`fixed bottom-24 left-4 z-40 bg-white border-2 border-gray-200 rounded-2xl shadow-2xl p-4 max-w-sm transition-all duration-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
        >
            <div className="flex items-start gap-3">
                <div className="bg-emerald-100 p-2 rounded-full flex-shrink-0">
                    <Icons.User className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                        {notification.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        {notification.action}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        {notification.time}
                    </p>
                </div>
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
            </div>
        </div>
    );
}
