"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";

const flashSaleItems = [
    {
        id: 1,
        title: "Sahih Bukhari (Complete Set)",
        price: "$45.00",
        oldPrice: "$80.00",
        discount: "-44%",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
        sold: 85,
        total: 100
    },
    {
        id: 2,
        title: "Premium Velvet Prayer Mat",
        price: "$12.50",
        oldPrice: "$25.00",
        discount: "-50%",
        image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=400&q=80",
        sold: 142,
        total: 150
    },
    {
        id: 3,
        title: "Digital Quran Pen Reader",
        price: "$35.00",
        oldPrice: "$55.00",
        discount: "-36%",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
        sold: 23,
        total: 40
    },
    {
        id: 4,
        title: "Luxury Oud Perfume Oil",
        price: "$18.00",
        oldPrice: "$30.00",
        discount: "-40%",
        image: "https://images.unsplash.com/photo-1594035910387-fea477942655?w=400&q=80",
        sold: 8,
        total: 50
    },
    {
        id: 5,
        title: "Men's Thobe - White Cotton",
        price: "$22.00",
        oldPrice: "$35.00",
        discount: "-37%",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&q=80",
        sold: 67,
        total: 90
    },
    {
        id: 6,
        title: "Islamic Wall Art Calligraphy",
        price: "$29.99",
        oldPrice: "$45.00",
        discount: "-33%",
        image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=400&q=80",
        sold: 12,
        total: 15
    },
];

export function FlashSale() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 4,
        minutes: 12,
        seconds: 45
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value: number) => value.toString().padStart(2, '0');

    return (
        <section className="mb-12">
            <Container>
                {/* 1. Deals Container with Premium Gradient */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-orange-100/50">
                    {/* Background: Radial Gradient + Subtle Noise Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/40 via-white to-red-50/20" />
                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative p-6 sm:p-8">
                        {/* 2. Header Section */}
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                            <div className="flex items-center gap-6">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <div className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </div>
                                    <span className="text-orange-600">Flash Sale</span>
                                </h2>

                                {/* Timer (Active) */}
                                <div className="hidden sm:flex items-center gap-2">
                                    <span className="text-xs font-semibold text-orange-900/60 uppercase tracking-widest mr-2">Ending in</span>
                                    <div className="flex gap-1 text-white font-mono font-bold text-sm">
                                        <span className="bg-gray-900 px-2.5 py-1.5 rounded-md shadow-sm">{formatTime(timeLeft.hours)}</span>
                                        <span className="text-orange-400 py-1 font-bold">:</span>
                                        <span className="bg-gray-900 px-2.5 py-1.5 rounded-md shadow-sm">{formatTime(timeLeft.minutes)}</span>
                                        <span className="text-orange-400 py-1 font-bold">:</span>
                                        <span className="bg-red-600 px-2.5 py-1.5 rounded-md shadow-sm animate-pulse">{formatTime(timeLeft.seconds)}</span>
                                    </div>
                                </div>
                            </div>

                            <Link href="/flash-sale">
                                <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800 rounded-full px-6 transition-colors shadow-sm bg-white/50 backdrop-blur-sm">
                                    View All Deals
                                    <Icons.ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>

                        {/* 3. Horizontal Scrollable List */}
                        <div className="flex overflow-x-auto pb-4 -mx-2 px-2 gap-4 snap-x scrollbar-hide py-4">
                            {flashSaleItems.map((item) => (
                                <div key={item.id} className="min-w-[200px] w-[200px] sm:min-w-[240px] sm:w-[240px] snap-start flex-shrink-0">
                                    <ProductCardCompact {...item} />
                                </div>
                            ))}

                            {/* "Unlock More" Premium Card */}
                            <div className="min-w-[160px] flex items-center justify-center snap-start h-full">
                                <Link href="/flash-sale" className="group h-full w-full">
                                    <div className="h-[360px] sm:h-[400px] w-full rounded-2xl border-2 border-dashed border-orange-200 bg-gradient-to-br from-orange-50 to-white flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-orange-400 group-hover:shadow-lg group-hover:-translate-y-1">
                                        <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                            <Icons.ChevronRight className="w-8 h-8" />
                                        </div>
                                        <div className="text-center">
                                            <p className="font-bold text-orange-900 group-hover:text-orange-700">View All</p>
                                            <p className="text-xs text-orange-600/70 mt-1">12+ More Deals</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
