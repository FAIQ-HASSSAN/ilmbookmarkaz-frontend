"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useInteraction } from "@/components/provider/interaction-provider";

interface ProductCardProps {
    id?: number | string;
    title: string;
    price: string;
    oldPrice?: string;
    rating?: number;
    discount?: string;
    image?: string;
    sold?: number;
    total?: number;
}

export function ProductCardCompact(props: ProductCardProps) {
    const { id, title, price, oldPrice, rating = 4.5, discount, image } = props;
    const { openQuickView, showToast } = useInteraction();

    const handleQuickView = (e: React.MouseEvent) => {
        e.preventDefault();
        openQuickView(props);
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        showToast(`Added ${title} to cart`);
    }

    const cardContent = (
        <div
            className="group relative h-[360px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer border border-transparent hover:border-orange-200/50"
        >
            {/* 1. Full Height Background Image -> Enhanced Scale Effect */}
            <div className="absolute inset-0 bg-gray-200 overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
                        <Icons.Logo className="w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity" />
                    </div>
                )}
                {/* Gradient: Lighter at top, Darker at bottom for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>

            {/* 2. Premium Badges */}
            {/* 2. Premium Badges & Controls */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {discount && (
                    <div className="bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] border border-red-400/30 tracking-wider animate-pulse-slow">
                        {discount}
                    </div>
                )}
            </div>

            {/* Favorite Button */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // In a real app, this would toggle state
                    showToast("Added to Wishlist");
                }}
                className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-red-500 hover:border-red-400 hover:scale-110 active:scale-90 group/fav"
            >
                <Icons.Heart className="w-4 h-4 transition-transform group-hover/fav:fill-white" />
            </button>

            {/* 3. Elegant Info Panel */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="relative z-10 flex flex-col gap-1.5">

                    {/* Quick Add Button - Clean & Minimal */}
                    <button
                        onClick={handleAddToCart}
                        className="absolute bottom-[4.5rem] right-0 h-10 w-10 bg-white/95 backdrop-blur-sm text-black rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-emerald-600 hover:text-white"
                        title="Add to Cart"
                    >
                        <Icons.ShoppingCart className="w-4 h-4" />
                    </button>

                    <h3 className="text-white font-medium text-[15px] leading-snug line-clamp-2 pr-8 text-shadow-sm opacity-95 group-hover:opacity-100">
                        {title}
                    </h3>

                    {/* Refined Stock Bar - Thinner & Cleaner */}
                    {props.sold && props.total && (
                        <div className="mt-1.5 mb-2">
                            <div className="flex justify-between text-[9px] text-white/80 mb-1 font-medium tracking-wide uppercase">
                                <span>Sold: {props.sold}/{props.total}</span>
                                <span className="text-orange-300">Fast Selling</span>
                            </div>
                            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-md">
                                <div
                                    className="h-full bg-gradient-to-r from-orange-400 via-red-500 to-red-600 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                                    style={{ width: `${(props.sold / props.total) * 100}%` }}
                                />
                            </div>
                        </div>
                    )}

                    <div className="flex items-end justify-between pt-1 border-t border-white/10">
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold text-white">{price}</span>
                                {oldPrice && <span className="text-[11px] text-white/50 line-through font-light">{oldPrice}</span>}
                            </div>
                        </div>

                        <div className="flex items-center gap-1 mb-1">
                            <span className="text-yellow-400 text-xs">★</span>
                            <span className="text-[10px] font-medium text-white/80">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // If we have an ID, wrap in Link for navigation
    if (id) {
        return (
            <Link href={`/product/${id}`} className="block">
                {cardContent}
            </Link>
        );
    }

    // Otherwise, use quick view on click
    return <div onClick={handleQuickView}>{cardContent}</div>;
}
