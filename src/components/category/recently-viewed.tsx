"use client";

import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";

const recentlyViewedProducts = [
    {
        id: 801,
        title: "Premium Prayer Beads Tasbih",
        price: "Rs. 1,299",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80"
    },
    {
        id: 802,
        title: "Islamic Wall Clock - Ayatul Kursi",
        price: "Rs. 3,499",
        oldPrice: "Rs. 5,999",
        discount: "-42%",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80"
    },
    {
        id: 803,
        title: "Luxury Attar Gift Set",
        price: "Rs. 2,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80"
    }
];

export function RecentlyViewed() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border-2 border-blue-200 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white p-2 rounded-xl">
                    <Icons.Clock className="w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Recently Viewed</h2>
                    <p className="text-sm text-gray-600">Products you've checked out</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recentlyViewedProducts.map((product) => (
                    <div key={product.id} className="transform transition-all hover:scale-[1.02]">
                        <ProductCardCompact {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
