"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { CartItem } from "@/components/cart/cart-item";
import { OrderSummary } from "@/components/cart/order-summary";
import { EmptyCart } from "@/components/cart/empty-cart";
import { CartUpsell } from "@/components/cart/cart-upsell";
import { BulkDiscountBanner } from "@/components/cart/bulk-discount-banner";
import { LimitedTimeCartOffer } from "@/components/cart/limited-time-cart-offer";
import { FrequentlyBoughtTogether } from "@/components/cart/frequently-bought-together-cart";
import Link from "next/link";

// Mock cart data
const initialCartItems = [
    {
        id: 1,
        title: "Premium Silk Hijab - Midnight Black",
        price: 3500,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80",
        variant: "Color: Black, Size: Large",
        stock: 12
    },
    {
        id: 2,
        title: "Islamic Calligraphy Wall Art",
        price: 6500,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1582823659979-56eb05158652?w=400&q=80",
        stock: 5
    },
    {
        id: 3,
        title: "Premium Velvet Prayer Mat",
        price: 1850,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1579457630230-aa25a975762a?w=400&q=80",
        variant: "Color: Burgundy",
        stock: 8
    }
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemove = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 5000 ? 0 : 250;
    const discount = 0;
    const tax = Math.round(subtotal * 0.05); // 5% tax

    // Empty cart state
    if (cartItems.length === 0) {
        return (
            <div className="bg-gray-50 min-h-screen py-12">
                <Container>
                    <EmptyCart />
                </Container>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <Container>
                {/* Breadcrumb */}
                <nav className="mb-6 text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-emerald-600 transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">Shopping Cart</span>
                </nav>

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Shopping Cart
                    </h1>
                    <p className="text-gray-600">
                        {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                {/* Conversion Banners */}
                <LimitedTimeCartOffer />
                <BulkDiscountBanner currentTotal={subtotal} />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                {...item}
                                onQuantityChange={handleQuantityChange}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary
                            subtotal={subtotal}
                            shipping={shipping}
                            discount={discount}
                            tax={tax}
                        />
                    </div>
                </div>

                {/* Frequently Bought Together */}
                <div className="mt-12">
                    <FrequentlyBoughtTogether />
                </div>

                {/* Cart Upsell */}
                <div className="mt-12">
                    <CartUpsell />
                </div>
            </Container>
        </div>
    );
}
