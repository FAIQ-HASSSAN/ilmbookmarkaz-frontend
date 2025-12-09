"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Icons } from "@/components/ui/icons";
import { SearchAutocomplete } from "@/components/search/search-autocomplete";
import { TrendingSearches } from "@/components/search/trending-searches";
import { NoResults } from "@/components/search/no-results";
import { ProductCardCompact } from "@/components/ui/product-card-compact";
import { SearchPromoBanner } from "@/components/search/search-promo-banner";
import Link from "next/link";

// Mock search results
const allProducts = [
    {
        id: 101,
        title: "Premium Islamic Wall Art - Ayatul Kursi",
        price: "Rs. 6,500",
        oldPrice: "Rs. 9,999",
        discount: "-35%",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=400&q=80",
        category: "home-decor",
        stock: 3,
        soldToday: 12
    },
    {
        id: 102,
        title: "Luxury Silk Hijab Collection - 5 Pack",
        price: "Rs. 8,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80",
        category: "clothing",
        stock: 8,
        soldToday: 24
    },
    {
        id: 103,
        title: "Velvet Prayer Mat with Compass",
        price: "Rs. 2,850",
        oldPrice: "Rs. 4,500",
        discount: "-37%",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=400&q=80",
        category: "prayer-items",
        stock: 5,
        soldToday: 18
    },
    {
        id: 104,
        title: "Quran with Urdu Translation - Premium Edition",
        price: "Rs. 1,999",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&q=80",
        category: "books",
        stock: 15,
        soldToday: 31
    },
    {
        id: 105,
        title: "Islamic Prayer Times Digital Clock",
        price: "Rs. 4,499",
        oldPrice: "Rs. 6,999",
        discount: "-36%",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80",
        category: "electronics",
        stock: 2,
        soldToday: 9
    },
    {
        id: 106,
        title: "Premium Tasbih Counter - 99 Beads",
        price: "Rs. 1,299",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80",
        category: "prayer-items",
        stock: 12,
        soldToday: 15
    }
];

const quickFilters = [
    { label: "All", value: "all" },
    { label: "Books", value: "books" },
    { label: "Clothing", value: "clothing" },
    { label: "Prayer Items", value: "prayer-items" },
    { label: "Home Decor", value: "home-decor" },
    { label: "Electronics", value: "electronics" }
];

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(false);
    const [sortBy, setSortBy] = useState("relevance");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter products based on search query and category
    let searchResults = searchQuery
        ? allProducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : allProducts;

    if (activeFilter !== "all") {
        searchResults = searchResults.filter(p => p.category === activeFilter);
    }

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setIsAutocompleteOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
            <Container>
                {/* Hero Search Section */}
                <div className="pt-12 pb-8">
                    {/* Breadcrumb */}
                    <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
                        <Link href="/" className="hover:text-emerald-600 transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Search</span>
                    </nav>

                    {/* Search Header with Gradient */}
                    <div className="text-center mb-8">
                        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                            Find Your Perfect Product
                        </h1>
                        <p className="text-xl text-gray-600">
                            Search from thousands of premium Islamic products
                        </p>
                    </div>

                    {/* Enhanced Search Bar */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative">
                                <Icons.Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-600" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setIsAutocompleteOpen(true);
                                    }}
                                    onFocus={() => setIsAutocompleteOpen(true)}
                                    placeholder="Search for products, categories, brands..."
                                    className="w-full pl-16 pr-6 py-6 text-lg bg-white border-2 border-gray-200 rounded-3xl focus:outline-none focus:border-emerald-600 transition-all shadow-xl"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => {
                                            setSearchQuery("");
                                            setIsAutocompleteOpen(false);
                                        }}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <Icons.X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            {/* Autocomplete Dropdown */}
                            <SearchAutocomplete
                                query={searchQuery}
                                onSelect={handleSearch}
                                isOpen={isAutocompleteOpen}
                                onClose={() => setIsAutocompleteOpen(false)}
                            />
                        </div>

                        {/* Search Info */}
                        {searchQuery && (
                            <div className="mt-4 text-center">
                                <p className="text-gray-600">
                                    Found <span className="font-bold text-emerald-600 text-xl">{searchResults.length}</span> results for "
                                    <span className="font-bold text-gray-900">{searchQuery}</span>"
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Quick Filter Chips */}
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
                        {quickFilters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${activeFilter === filter.value
                                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg scale-105"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Promo Banner */}
                <SearchPromoBanner />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12">
                    {/* Sidebar */}
                    <div className="hidden lg:block space-y-6">
                        <TrendingSearches onSearch={handleSearch} />

                        {/* Sort Options Card - Elegant Design */}
                        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-emerald-100 rounded-lg p-2">
                                    <Icons.Filter className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">Sort By</h3>
                            </div>

                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-3 pr-10 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 font-medium text-gray-700 cursor-pointer transition-all appearance-none hover:border-emerald-400"
                                >
                                    <option value="relevance">✨ Most Relevant</option>
                                    <option value="price-low">💰 Price: Low to High</option>
                                    <option value="price-high">💎 Price: High to Low</option>
                                    <option value="newest">🆕 Newest Arrivals</option>
                                    <option value="rating">⭐ Highest Rated</option>
                                    <option value="popular">🔥 Best Sellers</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Sort Info */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    Showing {searchResults.length} products
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-3">
                        {/* View Toggle */}
                        <div className="flex items-center justify-end gap-2 mb-6">
                            <span className="text-sm font-semibold text-gray-700 mr-2">View:</span>
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-3 rounded-xl transition-all ${viewMode === "grid"
                                    ? "bg-emerald-600 text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
                                    }`}
                            >
                                <Icons.Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-3 rounded-xl transition-all ${viewMode === "list"
                                    ? "bg-emerald-600 text-white shadow-lg"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200"
                                    }`}
                            >
                                <Icons.Menu className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Results Grid/List */}
                        {searchResults.length > 0 ? (
                            viewMode === "grid" ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {searchResults.map((product) => (
                                        <div key={product.id} className="transform transition-all hover:scale-[1.02]">
                                            <ProductCardCompact {...product} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {searchResults.map((product) => (
                                        <div key={product.id} className="bg-white rounded-2xl border-2 border-gray-200 p-4 hover:border-emerald-400 hover:shadow-lg transition-all">
                                            <div className="flex gap-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-32 h-32 object-cover rounded-xl"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                                                    <div className="flex items-center gap-2 mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <Icons.Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                                                        </div>
                                                        {product.stock && product.stock < 10 && (
                                                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold">
                                                                Only {product.stock} left!
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                                                        {product.oldPrice && (
                                                            <>
                                                                <span className="text-lg text-gray-400 line-through">{product.oldPrice}</span>
                                                                <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">{product.discount}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all">
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ) : (
                            <NoResults query={searchQuery} />
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
