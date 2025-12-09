"use client";

import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";

const relatedProducts = [
    {
        id: 201,
        title: "Premium Velvet Prayer Mat (Large)",
        price: "Rs. 1,850",
        oldPrice: "Rs. 2,500",
        rating: 4.9,
        discount: "-26%",
        image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=400&q=80"
    },
    {
        id: 202,
        title: "Digital Tasbeeh Counter",
        price: "Rs. 599",
        oldPrice: "Rs. 1,200",
        rating: 4.7,
        discount: "-50%",
        image: "https://images.unsplash.com/photo-1636141347326-faae406c5960?w=400&q=80"
    },
    {
        id: 301,
        title: "Islamic Calligraphy Wall Art",
        price: "Rs. 6,500",
        oldPrice: "Rs. 8,500",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=400&q=80"
    },
    {
        id: 302,
        title: "Moon Lamp 3D Touch Control",
        price: "Rs. 2,200",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=400&q=80"
    },
    {
        id: 401,
        title: "Silk Chiffon Hijab - Rose Gold",
        price: "Rs. 1,299",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1585250003052-1626f8d16768?w=400&q=80"
    }
];

export function RelatedProducts() {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200 mb-4">
                        <Icons.Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Recommended for You</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-3">You May Also Like</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Customers who viewed this item also loved these handpicked selections
                    </p>
                </div>

                {/* Products Grid - Better spacing and layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {relatedProducts.map((product) => (
                        <div
                            key={product.id}
                            className="transform transition-all duration-300 hover:scale-[1.02] hover:z-10"
                        >
                            <ProductCardCompact {...product} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg border-2 border-gray-200 hover:border-emerald-600 transition-all hover:shadow-xl group">
                        <span>Explore More Products</span>
                        <Icons.ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
