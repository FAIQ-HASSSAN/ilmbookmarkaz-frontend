"use client";

import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/provider/interaction-provider";

const completeTheLookItems = [
    {
        id: 203,
        title: "Matching Undercap",
        price: "Rs. 650",
        image: "https://images.unsplash.com/photo-1585250003052-1626f8d16768?w=400&q=80",
        rating: 4.8
    },
    {
        id: 204,
        title: "Silk Hijab Pins Set",
        price: "Rs. 450",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
        rating: 4.9
    },
    {
        id: 205,
        title: "Premium Hijab Box",
        price: "Rs. 1,200",
        oldPrice: "Rs. 1,800",
        discount: "-33%",
        image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=400&q=80",
        rating: 4.7
    }
];

export function CompleteTheLook() {
    const { showToast } = useInteraction();

    const handleAddAll = () => {
        showToast("Added 3 items to complete your look!");
    };

    return (
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-3xl p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Icons.Star className="w-6 h-6 text-pink-600 fill-pink-600" />
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Complete Your Look
                        </h2>
                    </div>
                    <p className="text-gray-600">
                        Customers who bought this also loved these items
                    </p>
                </div>
                <Button
                    onClick={handleAddAll}
                    className="hidden md:flex bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg"
                >
                    <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                    Add All 3 Items
                </Button>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {completeTheLookItems.map((item) => (
                    <div key={item.id} className="transform transition-all hover:scale-[1.02]">
                        <ProductCardCompact {...item} />
                    </div>
                ))}
            </div>

            {/* Mobile Add All Button */}
            <Button
                onClick={handleAddAll}
                className="md:hidden w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl shadow-lg"
            >
                <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                Add All 3 Items - Save Time!
            </Button>

            {/* Savings Badge */}
            <div className="mt-4 flex items-center justify-center gap-2 bg-white rounded-full px-6 py-3 border-2 border-pink-300 shadow-sm">
                <Icons.Gift className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-semibold text-gray-700">
                    Buy all 3 together and save <span className="text-pink-600">Rs. 500</span> instantly!
                </span>
            </div>
        </div>
    );
}
