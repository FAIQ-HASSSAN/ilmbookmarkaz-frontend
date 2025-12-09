"use client";

import { Container } from "@/components/ui/container";
import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SalesConfetti } from "@/components/ui/sales-confetti";

const flashSaleProducts = [
    // Mock Data - Extended list with Categories
    {
        id: 1,
        title: "Premium Prayer Mat",
        price: 1200,
        originalPrice: 2400,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1630325450849-0145c2fb753c?auto=format&fit=crop&q=80&w=400",
        discount: "50% OFF",
        sold: 85,
        category: "Lifestyle"
    },
    {
        id: 2,
        title: "Digital Tasbih Counter",
        price: 450,
        originalPrice: 900,
        rating: 4.5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1643444621471-15822b35a940?auto=format&fit=crop&q=80&w=400",
        discount: "50% OFF",
        sold: 45,
        category: "Electronics"
    },
    {
        id: 3,
        title: "Oud Wood Essence",
        price: 2500,
        originalPrice: 3500,
        rating: 4.9,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1595425235414-434c1640a430?auto=format&fit=crop&q=80&w=400",
        discount: "30% OFF",
        sold: 92,
        category: "Lifestyle"
    },
    {
        id: 4,
        title: "Islamic Wall Art Frame",
        price: 1800,
        originalPrice: 2200,
        rating: 4.7,
        reviews: 56,
        image: "https://images.unsplash.com/photo-1584805566373-7e44922194d2?auto=format&fit=crop&q=80&w=400",
        discount: "18% OFF",
        sold: 30,
        category: "Lifestyle"
    },
    {
        id: 5,
        title: "Dates Box (Ajwa)",
        price: 1500,
        originalPrice: 1800,
        rating: 4.9,
        reviews: 310,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
        discount: "15% OFF",
        sold: 120,
        category: "Lifestyle"
    },
    {
        id: 6,
        title: "Men's Thobe (White)",
        price: 3200,
        originalPrice: 4000,
        rating: 4.6,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=400",
        discount: "20% OFF",
        sold: 60,
        category: "Fashion"
    },
    {
        id: 7,
        title: "Smart Quran Speaker",
        price: 3500,
        originalPrice: 5000,
        rating: 4.9,
        reviews: 42,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400", // Headphone/Speaker placeholder
        discount: "30% OFF",
        sold: 15,
        category: "Electronics"
    },
    {
        id: 8,
        title: "Hadith Book Collection",
        price: 2800,
        originalPrice: 3200,
        rating: 5.0,
        reviews: 12,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400",
        discount: "12% OFF",
        sold: 5,
        category: "Books"
    }
];

export default function FlashSalePage() {
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });
    const [viewers, setViewers] = useState(124);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        // Timer Logic
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);

        // Fake "Live Viewer" fluctuations
        const viewerInterval = setInterval(() => {
            setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
        }, 3000);

        return () => { clearInterval(timer); clearInterval(viewerInterval); };
    }, []);

    const filteredProducts = activeCategory === "All" || activeCategory.includes("All")
        ? flashSaleProducts
        : flashSaleProducts.filter(p => p.category === activeCategory);

    return (
        <div className="bg-orange-50/30 min-h-screen pb-20">
            <SalesConfetti />

            {/* Header / Banner */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-14 relative overflow-hidden shadow-2xl">
                {/* ... (Header content same as before) ... */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 animate-pulse"></div>

                {/* Floating "Live" Badge */}
                <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-2 border border-white/10">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    {viewers} people shopping now
                </div>

                <Container className="relative z-10 flex flex-col items-center text-center gap-6">
                    <div>
                        <div className="inline-block bg-yellow-400 text-orange-900 font-black px-4 py-1 text-sm uppercase tracking-wider transform -rotate-2 mb-4 shadow-lg border-2 border-orange-900/10">
                            You Made It In Time!
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-sm">
                            FL<span className="text-yellow-400">⚡</span>SH SALE
                        </h1>
                        <p className="text-orange-100 text-xl font-medium max-w-2xl mx-auto">
                            Don't leave empty handed. Prices revert to normal when the timer hits zero. <span className="underline decoration-yellow-400 decoration-2 underline-offset-4">No regrets later.</span>
                        </p>
                    </div>

                    {/* Timer */}
                    <div className="flex gap-3 md:gap-6 scale-90 md:scale-100">
                        {[
                            { label: "Hours", value: timeLeft.hours },
                            { label: "Minutes", value: timeLeft.minutes },
                            { label: "Seconds", value: timeLeft.seconds },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-black/20 backdrop-blur-lg rounded-2xl p-4 min-w-[100px] border border-white/10 shadow-inner">
                                <span className="text-5xl font-mono font-bold tabular-nums text-white filter drop-shadow-lg">{String(item.value).padStart(2, '0')}</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-orange-200 mt-2">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            <Container className="mt-8">
                {/* Filters */}
                <div className="flex gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar justify-center">
                    {["All Deals", "Electronics", "Fashion", "Lifestyle", "Books"].map((cat, i) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat.replace("🔥 ", "").replace(" Crazy Deals", "").replace("All Deals", "All"))} // Simplified logic
                            className={cn(
                                "px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap shadow-sm active:scale-95",
                                activeCategory === cat.replace("🔥 ", "").replace(" Crazy Deals", "").replace("All Deals", "All")
                                    ? "bg-gray-900 text-white shadow-lg ring-2 ring-gray-900 ring-offset-2 ring-offset-orange-50"
                                    : "bg-white border border-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-900 hover:border-orange-200"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="relative group animate-in fade-in zoom-in duration-500">
                            {/* "Almost Gone" Badge on random items */}
                            {Math.random() > 0.5 && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md animate-bounce whitespace-nowrap">
                                    Only 2 Left!
                                </div>
                            )}
                            {/* Convert numbers to strings for the component */}
                            <ProductCardCompact
                                {...product}
                                price={`$${product.price}`}
                                oldPrice={`$${product.originalPrice}`}
                            />
                        </div>
                    ))}

                    {filteredProducts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-gray-400">
                            <Icons.Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>No deals in this category right now.</p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}
