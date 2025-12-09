"use client";

import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/provider/interaction-provider";

const frequentlyBoughtTogether = [
    {
        id: 1001,
        title: "Islamic Prayer Times Clock",
        price: "Rs. 2,499",
        oldPrice: "Rs. 3,999",
        discount: "-38%",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80"
    },
    {
        id: 1002,
        title: "Premium Tasbih Counter",
        price: "Rs. 899",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80"
    },
    {
        id: 1003,
        title: "Islamic Wall Stickers Set",
        price: "Rs. 1,299",
        oldPrice: "Rs. 2,499",
        discount: "-48%",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80"
    },
    {
        id: 1004,
        title: "Quran Reading Stand",
        price: "Rs. 1,599",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
    }
];

export function FrequentlyBoughtTogether() {
    const { showToast } = useInteraction();

    const handleAddAll = () => {
        showToast("Added 4 items to cart! 🎉");
    };

    const totalPrice = frequentlyBoughtTogether.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^0-9]/g, ""));
        return sum + price;
    }, 0);

    const bundleDiscount = Math.round(totalPrice * 0.15);
    const bundlePrice = totalPrice - bundleDiscount;

    return (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-200 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Icons.ShoppingCart className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-gray-900">
                            Customers Also Bought
                        </h2>
                    </div>
                    <p className="text-gray-600">
                        Add these popular items and save <span className="font-bold text-blue-600">15%</span>
                    </p>
                </div>

                <div className="hidden md:block bg-white rounded-xl border-2 border-blue-300 p-4">
                    <div className="text-sm text-gray-600 mb-1">Bundle Price</div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-blue-600">
                            Rs. {bundlePrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                            Rs. {totalPrice.toLocaleString()}
                        </span>
                    </div>
                    <div className="text-xs text-green-600 font-semibold mt-1">
                        Save Rs. {bundleDiscount.toLocaleString()}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {frequentlyBoughtTogether.map((product) => (
                    <div key={product.id} className="transform transition-all hover:scale-[1.02]">
                        <ProductCardCompact {...product} />
                    </div>
                ))}
            </div>

            <Button
                onClick={handleAddAll}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg transition-all hover:scale-[1.02]"
            >
                <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                Add All 4 Items - Save Rs. {bundleDiscount.toLocaleString()}
            </Button>
        </div>
    );
}
