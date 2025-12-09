import { Container } from "@/components/ui/container";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { FrequentlyBoughtTogether } from "@/components/product/frequently-bought-together";
import { StickyAddToCart } from "@/components/product/sticky-add-to-cart";
import { RelatedProducts } from "@/components/product/related-products";
import { FreeShippingBar } from "@/components/product/free-shipping-bar";
import { SocialProofNotifications } from "@/components/product/social-proof-notifications";
import { LimitedTimeOffer } from "@/components/product/limited-time-offer";
import { CompleteTheLook } from "@/components/product/complete-the-look";
import Link from "next/link";

export default function ProductPage({ params }: { params: { id: string } }) {
    // Mock Data (In real app, fetch based on params.id)
    const product = {
        id: parseInt(params.id),
        title: "Premium Silk Hijab - Midnight Black",
        price: 3500,
        originalPrice: 4500,
        rating: 4.8,
        reviews: 128,
        stock: 12,
        description: "Experience the epitome of elegance with our Premium Silk Hijab. Crafted from the finest mulberry silk, this hijab offers a luxurious drape and a soft, breathable feel. Perfect for special occasions or adding a touch of sophistication to your daily wear. The 'Midnight Black' shade is deep, rich, and versatile, complementing any outfit with timeless grace.",
        images: [
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585856417724-4286134b2810?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582847042078-43e49635b432?q=80&w=1000&auto=format&fit=crop",
        ]
    };

    // Bundle products for "Frequently Bought Together"
    const bundleProducts = [
        {
            id: 202,
            title: "Silk Hijab Pins (Set of 12)",
            price: 450,
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
        },
        {
            id: 203,
            title: "Premium Undercap",
            price: 650,
            image: "https://images.unsplash.com/photo-1585250003052-1626f8d16768?w=400&q=80"
        }
    ];

    return (
        <div className="bg-white min-h-screen pb-20">
            <Container className="py-6">
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/category/fashion" className="hover:text-emerald-600 transition-colors">Fashion</Link>
                    <span>/</span>
                    <Link href="/category/hijabs" className="hover:text-emerald-600 transition-colors">Hijabs</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium truncate">{product.title}</span>
                </nav>

                {/* Main Product Section */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mb-12">
                    {/* Gallery - Sticky on Desktop */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <ProductGallery images={product.images} />
                    </div>

                    {/* Info & Buy Box */}
                    <div>
                        {/* Limited Time Offer - Creates Urgency */}
                        <LimitedTimeOffer />

                        {/* Free Shipping Progress - Encourages Higher Cart Value */}
                        <FreeShippingBar currentTotal={product.price} threshold={5000} />

                        <ProductInfo
                            title={product.title}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            rating={product.rating}
                            reviews={product.reviews}
                            description={product.description}
                            stock={product.stock}
                        />
                    </div>
                </div>

                {/* Complete Your Look - Cross-Sell */}
                <CompleteTheLook />

                {/* Frequently Bought Together */}
                <div className="mb-16">
                    <FrequentlyBoughtTogether
                        mainProduct={{
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.images[0]
                        }}
                        bundleProducts={bundleProducts}
                    />
                </div>
            </Container>

            {/* Related Products - Full Width */}
            <RelatedProducts />

            {/* Social Proof Notifications - Live Activity Feed */}
            <SocialProofNotifications />

            {/* Sticky Add to Cart Bar */}
            <StickyAddToCart
                productTitle={product.title}
                productImage={product.images[0]}
                price={product.price}
            />
        </div>
    );
}
