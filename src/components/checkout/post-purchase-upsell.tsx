"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const upsellProducts = [
    {
        id: 101,
        name: "Pearl Tasbih (99 Beads)",
        price: 1200,
        originalPrice: 2500,
        image: "https://images.unsplash.com/photo-1643444621471-15822b35a940?auto=format&fit=crop&q=80&w=400",
        discount: "50% OFF"
    },
    {
        id: 102,
        name: "Velvet Quran Sleeve",
        price: 850,
        originalPrice: 1500,
        image: "https://images.unsplash.com/photo-1630325450849-0145c2fb753c?auto=format&fit=crop&q=80&w=400",
        discount: "45% OFF"
    },
    {
        id: 103,
        name: "Royal Oudh Essence",
        price: 450,
        originalPrice: 900,
        image: "https://images.unsplash.com/photo-1595425235414-434c1640a430?auto=format&fit=crop&q=80&w=400",
        discount: "50% OFF"
    },
    {
        id: 104,
        name: "Geometric Art Puzzle",
        price: 950,
        originalPrice: 1800,
        image: "https://images.unsplash.com/photo-1584805566373-7e44922194d2?auto=format&fit=crop&q=80&w=400",
        discount: "Deal"
    }
];

export function PostPurchaseUpsell() {
    return (
        <div className="w-full mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Exclusive Offer Container */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-amber-50/80 to-white p-8 shadow-xl ring-1 ring-amber-100/50 backdrop-blur-sm">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -transtale-y-1/2 translate-x-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 transtale-y-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 text-center mb-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 mb-4 shadow-sm">
                        <Icons.Check className="w-3 h-3 text-emerald-600" />
                        <span>One-Time Offer Unlocked</span>
                    </div>
                    <h2 className="text-3xl font-serif font-medium text-gray-900 md:text-4xl tracking-tight mb-3">
                        Complete Your Collection
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
                        Add these premium essentials to your order with <span className="text-emerald-700 font-semibold">Zero Shipping</span>.
                    </p>
                </div>

                {/* Elegant Product Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {upsellProducts.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:border-amber-200">

                            {/* Image Section */}
                            <div className="aspect-[3/4] w-full overflow-hidden relative bg-gray-50">
                                <img
                                    src={product.image}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt={product.name}
                                />
                                {/* Subtler gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Discount Pills */}
                                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md shadow-sm text-gray-900 border border-gray-100">
                                    {product.discount}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4 bg-white relative">
                                <div className="mb-3">
                                    <h3 className="text-sm font-medium text-gray-900 truncate pr-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-sm font-bold text-gray-900">Rs {product.price}</span>
                                        <span className="text-xs text-gray-400 line-through">Rs {product.originalPrice}</span>
                                    </div>
                                </div>

                                {/* Add Button - Stays Visible but Elegant */}
                                <Button
                                    className="w-full text-xs h-9 bg-gray-50 text-gray-900 border border-gray-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 font-medium"
                                >
                                    Add to Order
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
