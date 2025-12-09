"use client";

import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";

const recommendedProducts = [
    {
        id: 901,
        title: "Premium Gift Wrapping Service",
        price: "Rs. 299",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80"
    },
    {
        id: 902,
        title: "Luxury Greeting Card",
        price: "Rs. 199",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=80"
    },
    {
        id: 903,
        title: "Islamic Wall Calendar 2024",
        price: "Rs. 599",
        oldPrice: "Rs. 999",
        discount: "-40%",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80"
    },
    {
        id: 904,
        title: "Premium Bookmark Set",
        price: "Rs. 399",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80"
    }
];

export function CartUpsell() {
    return (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-600 text-white p-2 rounded-xl">
                    <Icons.Gift className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Complete Your Order</h2>
                    <p className="text-gray-600">Customers also bought these items</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recommendedProducts.map((product) => (
                    <div key={product.id} className="transform transition-all hover:scale-[1.02]">
                        <ProductCardCompact {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
