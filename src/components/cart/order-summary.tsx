"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useInteraction } from "@/components/provider/interaction-provider";

interface OrderSummaryProps {
    subtotal: number;
    shipping: number;
    discount: number;
    tax: number;
}

export function OrderSummary({ subtotal, shipping, discount, tax }: OrderSummaryProps) {
    const [promoCode, setPromoCode] = useState("");
    const [appliedPromo, setAppliedPromo] = useState("");
    const { showToast } = useInteraction();

    const total = subtotal + shipping - discount + tax;
    const freeShippingThreshold = 5000;
    const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
    const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

    const handleApplyPromo = () => {
        // Mock promo code validation
        const validCodes: Record<string, number> = {
            "SAVE15": 0.15,
            "WELCOME10": 0.10,
            "MEGA25": 0.25
        };

        if (validCodes[promoCode.toUpperCase()]) {
            setAppliedPromo(promoCode.toUpperCase());
            showToast(`Promo code ${promoCode.toUpperCase()} applied! 🎉`);
        } else {
            showToast("Invalid promo code");
        }
    };

    return (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

            {/* Free Shipping Progress */}
            {remainingForFreeShipping > 0 && (
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Icons.Truck className="w-5 h-5 text-emerald-600" />
                        <p className="text-sm font-semibold text-gray-700">
                            Add <span className="text-emerald-600">Rs. {remainingForFreeShipping.toLocaleString()}</span> more for FREE shipping!
                        </p>
                    </div>
                    <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
                            style={{ width: `${shippingProgress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Promo Code */}
            <div className="mb-6">
                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    Promo Code
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 transition-colors"
                    />
                    <Button
                        onClick={handleApplyPromo}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 rounded-xl"
                    >
                        Apply
                    </Button>
                </div>
                {appliedPromo && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-emerald-600">
                        <Icons.Check className="w-4 h-4" />
                        <span>Code {appliedPromo} applied</span>
                    </div>
                )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                        {shipping === 0 ? (
                            <span className="text-emerald-600">FREE</span>
                        ) : (
                            `Rs. ${shipping.toLocaleString()}`
                        )}
                    </span>
                </div>
                {discount > 0 && (
                    <div className="flex items-center justify-between text-emerald-600">
                        <span>Discount</span>
                        <span className="font-semibold">-Rs. {discount.toLocaleString()}</span>
                    </div>
                )}
                <div className="flex items-center justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-semibold">Rs. {tax.toLocaleString()}</span>
                </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-emerald-600">
                    Rs. {total.toLocaleString()}
                </span>
            </div>

            {/* Checkout Button */}
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 text-lg rounded-xl shadow-lg shadow-emerald-200 transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] mb-4">
                <Icons.ShoppingCart className="w-5 h-5 mr-2" />
                Proceed to Checkout
            </Button>

            {/* Trust Badges */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.Check className="w-4 h-4 text-emerald-600" />
                    <span>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.RotateCw className="w-4 h-4 text-emerald-600" />
                    <span>30-Day Money Back</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Icons.Truck className="w-4 h-4 text-emerald-600" />
                    <span>Fast Delivery</span>
                </div>
            </div>
        </div>
    );
}
