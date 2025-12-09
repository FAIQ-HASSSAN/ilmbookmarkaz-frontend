"use client";

import { Icons } from "@/components/ui/icons";
import { ProductCardCompact } from "@/components/ui/product-card-compact";

export default function WishlistPage() {
    // Mock Wishlist Items
    const wishlistItems = [
        {
            id: "1",
            title: "Premium Prayer Mat - Velvet Touch",
            price: 45.00,
            originalPrice: 59.99,
            rating: 4.8,
            reviews: 124,
            image: "/placeholder.jpg",
            category: "Prayer Essentials",
            inStock: true
        },
        {
            id: "2",
            title: "Sahih Al-Bukhari - Full Set",
            price: 120.00,
            originalPrice: 150.00,
            rating: 5.0,
            reviews: 89,
            image: "/placeholder.jpg",
            category: "Books",
            inStock: true
        },
        {
            id: "3",
            title: "Oud Wood - Arabic Perfume",
            price: 85.00,
            rating: 4.9,
            reviews: 215,
            image: "/placeholder.jpg",
            category: "Fragrances",
            inStock: false
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">My Wishlist ({wishlistItems.length})</h1>
                <button className="text-emerald-600 font-semibold hover:underline text-sm">
                    Move all to Cart
                </button>
            </div>

            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Using ProductCardCompact but we might want a remove button overlay */}
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="relative group">
                            <button className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors">
                                <Icons.Trash className="w-4 h-4" />
                            </button>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                                <div className="aspect-[4/5] bg-gray-100 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <Icons.ShoppingBag className="w-12 h-12 opacity-50" />
                                    </div>
                                    {!item.inStock && (
                                        <div className="absolute top-2 left-2 px-2 py-1 bg-gray-900/80 text-white text-xs font-bold rounded">
                                            OUT OF STOCK
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-900 mb-1 truncate">{item.title}</h3>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="font-bold text-emerald-600">${item.price.toFixed(2)}</span>
                                        {item.originalPrice && (
                                            <span className="text-xs text-gray-400 line-through">${item.originalPrice.toFixed(2)}</span>
                                        )}
                                    </div>
                                    <button
                                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!item.inStock}
                                    >
                                        <Icons.ShoppingBag className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icons.Heart className="w-10 h-10 text-gray-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-500 mb-6">Save items you love to revisit later.</p>
                    <Link href="/" className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors">
                        Start Shopping
                    </Link>
                </div>
            )}
        </div>
    );
}
