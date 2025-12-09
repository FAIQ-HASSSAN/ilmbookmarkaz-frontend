"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { CategoryHeader } from "@/components/category/category-header";
import { CategoryFilters } from "@/components/category/category-filters";
import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { ProductCardList } from "@/components/category/product-card-list";
import { Pagination } from "@/components/category/pagination";
import { CategoryPromoBanner } from "@/components/category/category-promo-banner";
import { QuickAddBar } from "@/components/category/quick-add-bar";
import { MobileFilterDrawer } from "@/components/category/mobile-filter-drawer";
import { FloatingCartBadge } from "@/components/category/floating-cart-badge";
import { RecentlyViewed } from "@/components/category/recently-viewed";
import { ActiveFilters } from "@/components/category/active-filters";
import { useInteraction } from "@/components/provider/interaction-provider";
import { Icons } from "@/components/ui/icons";
import { SubcategoryNav } from "@/components/category/subcategory-nav";
import Link from "next/link";

// Mock product data
const mockProducts = [
    {
        id: 101,
        title: "Ultra Smart Watch Series 8",
        price: "Rs. 4,500",
        oldPrice: "Rs. 8,999",
        discount: "-50%",
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
        description: "Advanced fitness tracking with heart rate monitor and GPS"
    },
    {
        id: 201,
        title: "Premium Velvet Prayer Mat",
        price: "Rs. 1,850",
        oldPrice: "Rs. 2,500",
        discount: "-26%",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=400&q=80",
        description: "Luxurious velvet material with non-slip backing"
    },
    {
        id: 301,
        title: "Islamic Calligraphy Wall Art",
        price: "Rs. 6,500",
        oldPrice: "Rs. 8,500",
        rating: 4.5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=400&q=80",
        description: "Hand-crafted Islamic art with premium wooden frame"
    },
    {
        id: 302,
        title: "Moon Lamp 3D Touch Control",
        price: "Rs. 2,200",
        rating: 4.8,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1533158388470-9a56699990c6?w=400&q=80",
        description: "Realistic moon design with adjustable brightness"
    },
    {
        id: 401,
        title: "Silk Chiffon Hijab - Rose Gold",
        price: "Rs. 1,299",
        rating: 4.9,
        reviews: 445,
        image: "https://images.unsplash.com/photo-1585250003052-1626f8d16768?w=400&q=80",
        description: "Premium silk material in elegant rose gold color"
    },
    {
        id: 501,
        title: "Natural Miswak Sticks Pack",
        price: "Rs. 899",
        rating: 4.8,
        reviews: 678,
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80",
        description: "Organic miswak sticks for natural oral care"
    },
    {
        id: 601,
        title: "Fortress of the Muslim Book",
        price: "Rs. 450",
        rating: 4.9,
        reviews: 1234,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
        description: "Pocket-sized dua book with English translation"
    },
    {
        id: 701,
        title: "Premium Oud Perfume Oil",
        price: "Rs. 4,999",
        oldPrice: "Rs. 9,999",
        discount: "-50%",
        rating: 5.0,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1594035910387-fea477942655?w=400&q=80",
        description: "Authentic Arabian oud oil in luxury packaging"
    }
];

// Mock subcategory data - would come from API/database
const categorySubcategories: Record<string, any[]> = {
    "books": [
        { slug: "islamic-books", name: "Islamic Books", count: 156 },
        { slug: "motivational-books", name: "Motivational Books", count: 89 },
        { slug: "children-books", name: "Children's Books", count: 124 },
        { slug: "educational-books", name: "Educational Books", count: 203 }
    ],
    "islamic-books": [
        { slug: "quran", name: "Quran & Tafsir", count: 45 },
        { slug: "hadith", name: "Hadith Collections", count: 38 },
        { slug: "fiqh", name: "Fiqh & Jurisprudence", count: 42 },
        { slug: "seerah", name: "Seerah & History", count: 31 }
    ],
    "clothing": [
        { slug: "hijabs", name: "Hijabs", count: 234 },
        { slug: "abayas", name: "Abayas", count: 156 },
        { slug: "thobes", name: "Thobes", count: 98 },
        { slug: "modest-wear", name: "Modest Wear", count: 187 }
    ]
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const [sortBy, setSortBy] = useState("relevance");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [activeFilters, setActiveFilters] = useState<any>({});
    const { showToast } = useInteraction();

    const categoryName = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const handleFilterChange = (filters: any) => {
        setActiveFilters(filters);
        console.log("Filters changed:", filters);
    };

    const handleClearAllFilters = () => {
        setActiveFilters({});
    };

    const handleRemoveFilter = (type: string, value?: any) => {
        // Logic to remove specific filter
        console.log("Remove filter:", type, value);
    };

    const handleAddAllToCart = () => {
        showToast(`Added ${selectedItems.length} items to cart! 🎉`);
        setSelectedItems([]);
    };

    const handleClearSelection = () => {
        setSelectedItems([]);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <Container>
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-emerald-600 transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{categoryName}</span>
                </nav>

                {/* Header */}
                <CategoryHeader
                    title={categoryName}
                    description={`Discover our curated collection of premium ${categoryName.toLowerCase()}. Quality guaranteed with fast shipping.`}
                    productCount={mockProducts.length}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                    viewMode={viewMode}
                    onViewModeChange={setViewMode}
                />

                {/* Promo Banner - Bulk Purchase Incentive */}
                <CategoryPromoBanner />

                {/* Subcategory Navigation */}
                {categorySubcategories[slug] && (
                    <SubcategoryNav
                        categorySlug={slug}
                        subcategories={categorySubcategories[slug]}
                    />
                )}

                {/* Mobile Filter Button */}
                <button
                    onClick={() => setIsFilterDrawerOpen(true)}
                    className="lg:hidden mb-6 w-full bg-white border-2 border-gray-300 hover:border-emerald-600 text-gray-900 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                    <Icons.Filter className="w-5 h-5" />
                    Filters & Sort
                </button>

                {/* Active Filters */}
                <ActiveFilters
                    filters={activeFilters}
                    onClearAll={handleClearAllFilters}
                    onRemoveFilter={handleRemoveFilter}
                />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="hidden lg:block">
                        <CategoryFilters onFilterChange={handleFilterChange} />
                    </div>

                    {/* Products Grid/List */}
                    <div className="lg:col-span-3">
                        {viewMode === "grid" ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {mockProducts.map((product) => (
                                    <div key={product.id}>
                                        <ProductCardCompact {...product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {mockProducts.map((product) => (
                                    <ProductCardList key={product.id} {...product} />
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={5}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </Container>

            {/* Recently Viewed Section */}
            <Container className="mt-12">
                <RecentlyViewed />
            </Container>

            {/* Mobile Filter Drawer */}
            <MobileFilterDrawer
                isOpen={isFilterDrawerOpen}
                onClose={() => setIsFilterDrawerOpen(false)}
                onFilterChange={handleFilterChange}
            />

            {/* Floating Cart Badge */}
            <FloatingCartBadge itemCount={cartItems.length} items={cartItems} />

            {/* Quick Add Bar - Floating */}
            <QuickAddBar
                selectedCount={selectedItems.length}
                onAddAll={handleAddAllToCart}
                onClearSelection={handleClearSelection}
            />
        </div>
    );
}
