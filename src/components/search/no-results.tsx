"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ProductCardCompact } from "@/components/ui/product-card-compact";

const popularProducts = [
    {
        id: 201,
        title: "Premium Prayer Mat",
        price: "Rs. 1,850",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=400&q=80"
    },
    {
        id: 202,
        title: "Islamic Wall Clock",
        price: "Rs. 3,499",
        oldPrice: "Rs. 5,999",
        discount: "-42%",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80"
    },
    {
        id: 203,
        title: "Quran Reading Stand",
        price: "Rs. 1,599",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
    },
    {
        id: 204,
        title: "Premium Hijab Set",
        price: "Rs. 2,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80"
    }
];

interface NoResultsProps {
    query: string;
}

export function NoResults({ query }: NoResultsProps) {
    return (
        <div className="bg-white rounded-3xl border-2 border-gray-200 p-12">
            <div className="max-w-2xl mx-auto text-center">
                {/* Icon */}
                <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <Icons.Search className="w-16 h-16 text-gray-400" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    No Results Found
                </h2>
                <p className="text-gray-600 mb-8">
                    We couldn't find any products matching "<span className="font-semibold text-gray-900">{query}</span>".
                    Try adjusting your search or browse our popular products below.
                </p>

                {/* Suggestions */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Search Tips:</h3>
                    <ul className="text-left space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <Icons.Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Check your spelling</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Icons.Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Try more general keywords</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Icons.Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>Try different keywords</span>
                        </li>
                    </ul>
                </div>

                <Link href="/">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 text-lg rounded-xl mb-12">
                        <Icons.Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </Button>
                </Link>

                {/* Popular Products */}
                <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Popular Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {popularProducts.map((product) => (
                            <ProductCardCompact key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
