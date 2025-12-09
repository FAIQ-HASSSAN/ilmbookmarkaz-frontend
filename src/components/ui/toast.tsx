"use client";

import { Icons } from "@/components/ui/icons";

export function Toast({ message }: { message: string }) {
    return (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 md:bottom-8 md:right-8 md:translate-x-0 md:left-auto z-[70] bg-gray-900 text-white px-4 py-3 rounded-md shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 fade-in duration-300">
            <div className="bg-green-500 rounded-full p-1">
                <Icons.Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium">{message}</span>
        </div>
    );
}
