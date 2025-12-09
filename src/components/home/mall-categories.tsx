"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icons } from "@/components/ui/icons";

const categories = [
    {
        id: "books",
        name: "Islamic Books",
        count: "1.2k+ Products",
        image: "https://images.unsplash.com/photo-1592670139749-0fa7a817cc37?w=600&q=80",
        color: "from-emerald-900 to-emerald-800",
        badge: "Best Seller"
    },
    {
        id: "clothing",
        name: "Modest Fashion",
        count: "850+ Items",
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
        color: "from-rose-900 to-rose-800",
        badge: "New Arrival"
    },
    {
        id: "perfume",
        name: "Premium Oud",
        count: "200+ Scents",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&q=80",
        color: "from-amber-900 to-amber-800",
        badge: "Luxurious"
    },
    {
        id: "decor",
        name: "Home Decor",
        count: "450+ Pieces",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80",
        color: "from-blue-900 to-blue-800"
    },
    {
        id: "prayer",
        name: "Prayer Essentials",
        count: "300+ Mats & Beads",
        image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=600&q=80",
        color: "from-emerald-950 to-emerald-900"
    },
    {
        id: "dates",
        name: "Organic Dates",
        count: "Fresh Harvest",
        image: "https://images.unsplash.com/photo-1616429408226-c2ba621d96bd?w=600&q=80",
        color: "from-yellow-900 to-orange-900",
        badge: "Fresh"
    },
    {
        id: "kids",
        name: "Kids Corner",
        count: "Toys & Books",
        image: "https://images.unsplash.com/photo-1566576912902-192137648f57?w=600&q=80",
        color: "from-cyan-900 to-blue-900"
    },
    {
        id: "gifts",
        name: "Gift Sets",
        count: "Curated Boxs",
        image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=600&q=80",
        color: "from-purple-900 to-purple-800",
        badge: "Trending"
    },
];

export function MallCategories() {
    return (
        <section className="mb-12">
            <Container>
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            Shop by Category
                            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-medium border border-orange-200">
                                Curated Collections
                            </span>
                        </h2>
                        <p className="text-sm text-gray-500">Explore our premium departments</p>
                    </div>
                    <Link href="/categories" className="text-sm font-medium text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group">
                        View All
                        <Icons.ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.id}`}
                            className="group relative h-48 md:h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 block border border-gray-100 hover:border-orange-200/60"
                        >
                            {/* Background Image with Zoom */}
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-30 transition-opacity duration-300 mix-blend-multiply`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            {/* Badge (If Exists) */}
                            {category.badge && (
                                <div className="absolute top-3 left-3 z-20">
                                    <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-full text-[10px] md:text-xs font-bold text-gray-900 shadow-md border border-white/20 flex items-center gap-1">
                                        {category.badge === "Best Seller" && <span className="text-orange-500">★</span>}
                                        {category.badge === "New Arrival" && <span className="text-emerald-500">●</span>}
                                        {category.badge === "Fresh" && <span className="text-green-500">✿</span>}
                                        {category.badge}
                                    </span>
                                </div>
                            )}

                            {/* Content (Glass Overlay) */}
                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                {/* Glass Panel Effect */}
                                <div className="relative z-10">
                                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 text-shadow-sm group-hover:text-amber-200 transition-colors">
                                        {category.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-white/80 text-xs font-medium backdrop-blur-md bg-white/10 px-2 py-1 rounded-full border border-white/10 inline-block group-hover:bg-white/20 transition-colors">
                                            {category.count}
                                        </p>
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/20 group-hover:bg-orange-500 group-hover:border-orange-400">
                                            <Icons.ChevronRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}
