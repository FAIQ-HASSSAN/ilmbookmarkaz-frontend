"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/provider/interaction-provider";

interface ProductCardListProps {
    id: number;
    title: string;
    price: string;
    oldPrice?: string;
    rating: number;
    reviews?: number;
    image: string;
    discount?: string;
    description?: string;
}

export function ProductCardList(props: ProductCardListProps) {
    const { id, title, price, oldPrice, rating, reviews, image, discount, description } = props;
    const { showToast } = useInteraction();

    const handleAddToCart = () => {
        showToast(`Added ${title} to cart`);
    };

    return (
        <Link href={`/product/${id}`} className="block">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-200 transition-all group">
                <div className="flex gap-6">
                    {/* Image */}
                    <div className="relative w-48 h-48 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {discount && (
                            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {discount}
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {title}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Icons.Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(rating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "fill-gray-200 text-gray-200"
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">
                                {rating} {reviews && `(${reviews} reviews)`}
                            </span>
                        </div>

                        {/* Description */}
                        {description && (
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
                        )}

                        {/* Price & Actions */}
                        <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-baseline gap-3">
                                <span className="text-2xl font-bold text-emerald-600">{price}</span>
                                {oldPrice && (
                                    <span className="text-lg text-gray-400 line-through">{oldPrice}</span>
                                )}
                            </div>

                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAddToCart();
                                }}
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105"
                            >
                                <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
