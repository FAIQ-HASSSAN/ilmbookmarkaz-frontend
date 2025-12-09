"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { Icons } from "@/components/ui/icons";

// Simulated "Smart Algorithm" Feed Data
const items = [
    // Tech & Gadgets (High Appeal)
    { id: 101, title: "Ultra Smart Watch Series 8", price: "$45.00", oldPrice: "$89.99", discount: "-50%", rating: 4.8, sold: 1200, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80" },
    { id: 102, title: "Wireless Noise Cancelling Earbuds", price: "$29.99", oldPrice: "$59.99", discount: "-50%", rating: 4.6, sold: 850, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },

    // Islamic Essentials (Core)
    { id: 201, title: "Premium Velvet Prayer Mat (Large)", price: "$18.50", rating: 4.9, sold: 420, image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=400&q=80" },
    { id: 202, title: "Digital Hive Tasbeeh Counter", price: "$5.99", oldPrice: "$12.00", discount: "-50%", rating: 4.7, sold: 2100, image: "https://images.unsplash.com/photo-1636141347326-faae406c5960?w=400&q=80" }, // Generic counter/tech

    // Home & Decor (Impulse)
    { id: 301, title: "Modern Islamic Calligraphy Wall Art", price: "$65.00", oldPrice: "$85.00", rating: 4.5, sold: 150, image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=400&q=80" }, // Decor
    { id: 302, title: "Moon Lamp 3D Touch Control", price: "$22.00", rating: 4.8, sold: 600, image: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=400&q=80" },

    // Fashion (Seasonal)
    { id: 401, title: "Silk Chiffon Hijab - Rose Gold", price: "$12.99", rating: 4.9, sold: 300, image: "https://images.unsplash.com/photo-1585250003052-1626f8d16768?w=400&q=80" }, // Scarf
    { id: 402, title: "Men's Classic Thobe - White", price: "$35.00", oldPrice: "$45.00", rating: 4.6, sold: 180, image: "https://images.unsplash.com/photo-1596700862089-d9d1073a5a54?w=400&q=80" }, // Fashion generic

    // Personal Care
    { id: 501, title: "Natural Miswak Sticks (Pack of 5)", price: "$8.99", rating: 4.8, sold: 500, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80" }, // Natural brush
    { id: 502, title: "Crystal Oud Oil Perfume 12ml", price: "$49.99", oldPrice: "$99.99", discount: "-50%", rating: 5.0, sold: 90, image: "https://images.unsplash.com/photo-1594035910387-fea477942655?w=400&q=80" },

    // Books
    { id: 601, title: "Fortress of the Muslim (Pocket)", price: "$4.50", rating: 4.9, sold: 5000, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80" },
    { id: 602, title: "Stories of the Prophets", price: "$15.00", rating: 4.7, sold: 320, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80" },

    // More Tech (Algorithm push)
    { id: 103, title: "Fast Charger Adapter 20W", price: "$11.99", discount: "-20%", rating: 4.5, sold: 900, image: "https://images.unsplash.com/photo-1597872253377-0a1385418b76?w=400&q=80" }, // Charging brick
    { id: 104, title: "Smartphone Tripod Stand", price: "$15.99", rating: 4.4, sold: 400, image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=400&q=80" }, // Tripod

    // More Home
    { id: 303, title: "Automatic Air Freshener", price: "$19.99", rating: 4.3, sold: 200, image: "https://images.unsplash.com/photo-1588610543265-d143c08129df?w=400&q=80" }, // Diffuser potentially
    { id: 304, title: "Soft Prayer Rug (Travel Size)", price: "$9.99", rating: 4.6, sold: 1500, image: "https://images.unsplash.com/photo-1542816997-76b4a20b080f?w=400&q=80" }, // Rug textual

    // Trending now
    { id: 701, title: "Adjustable Laptop Stand", price: "$24.99", oldPrice: "$35.00", discount: "-30%", rating: 4.8, sold: 600, image: "https://images.unsplash.com/photo-1616423664033-03523f6580f4?w=400&q=80" }, // Laptop stand
    { id: 702, title: "LED Ring Light 10 Inch", price: "$18.00", rating: 4.5, sold: 800, image: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=400&q=80" }, // Light
];

export function JustForYou() {
    return (
        <section className="mb-12">
            <Container>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        Just For You
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded text-orange-600 bg-orange-50 text-xs font-normal border border-orange-100">
                            Based on your interests
                        </span>
                    </h2>
                </div>

                {/* Dense Grid for "Feed" feel */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                    {items.map((item) => (
                        <ProductCardCompact key={item.id} {...item} />
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center gap-2">
                    <p className="text-gray-500 text-sm">Showing {items.length} of 156 items</p>
                    <Button size="lg" variant="outline" className="min-w-[240px] border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-orange-600 hover:border-orange-200 transition-all font-medium">
                        Load More Products
                    </Button>
                </div>
            </Container>
        </section>
    );
}
