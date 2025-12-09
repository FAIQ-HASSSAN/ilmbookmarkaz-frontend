"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handlePlaceOrder = async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        router.push("/checkout/success");
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <Container className="pt-10">
                <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <span>Cart</span>
                    <Icons.ChevronRight className="h-4 w-4" />
                    <span className="font-semibold text-gray-900">Checkout</span>
                </div>

                <div className="grid gap-12 lg:grid-cols-12">
                    {/* LEFT COLUMN: FORMS */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* 1. Contact Info */}
                        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                            <h2 className="mb-4 text-lg font-bold text-gray-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">1</span>
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                                        <Input placeholder="you@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                        <Input placeholder="+92 300 1234567" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Shipping Address */}
                        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                            <h2 className="mb-4 text-lg font-bold text-gray-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">2</span>
                                Shipping Address
                            </h2>
                            <div className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">First Name</label>
                                        <Input placeholder="" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                                        <Input placeholder="" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Address</label>
                                    <Input placeholder="Street, House No, Sector..." />
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">City</label>
                                        <Input placeholder="Lahore" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Postal Code</label>
                                        <Input placeholder="54000" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. Payment Method */}
                        <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                            <h2 className="mb-4 text-lg font-bold text-gray-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">3</span>
                                Payment Method
                            </h2>
                            <div className="space-y-3">
                                {/* Cash on Delivery */}
                                <div
                                    onClick={() => setPaymentMethod("cod")}
                                    className={cn(
                                        "flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-all",
                                        paymentMethod === "cod" ? "border-emerald-500 ring-1 ring-emerald-500 bg-emerald-50/50" : "hover:bg-gray-50"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={cn("h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center", paymentMethod === "cod" && "border-emerald-600")}>
                                            {paymentMethod === "cod" && <div className="h-2 w-2 rounded-full bg-emerald-600" />}
                                        </div>
                                        <span className="font-medium text-gray-900">Cash on Delivery (COD)</span>
                                    </div>
                                    <Icons.Truck className="h-5 w-5 text-gray-400" />
                                </div>

                                {/* Online Payment (Disabled/Mock) */}
                                <div
                                    className="flex cursor-not-allowed items-center justify-between rounded-lg border border-gray-100 bg-gray-50 p-4 opacity-60"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="h-4 w-4 rounded-full border border-gray-300" />
                                        <span className="font-medium text-gray-400">Credit / Debit Card (Coming Soon)</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {/* Payment Icons Placeholder */}
                                        <div className="h-5 w-8 rounded bg-gray-200" />
                                        <div className="h-5 w-8 rounded bg-gray-200" />
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: ORDER SUMMARY */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24 rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
                            <h3 className="mb-6 text-lg font-bold text-gray-900">Order Summary</h3>

                            {/* Items List */}
                            <div className="space-y-4 mb-6">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="h-16 w-16 rounded-md bg-gray-100 overflow-hidden border">
                                            <img src={`https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=100`} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-medium text-gray-900">Islamic Book Premium Edition</h4>
                                            <p className="text-xs text-gray-500">Qty: 1</p>
                                        </div>
                                        <div className="text-sm font-semibold">Rs 2,500</div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t pt-4 space-y-2 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>Rs 5,000</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-emerald-600 font-medium">Free</span>
                                </div>
                            </div>

                            <div className="border-t my-4 pt-4 flex justify-between text-lg font-bold text-gray-900">
                                <span>Total</span>
                                <span>Rs 5,000</span>
                            </div>

                            <Button
                                size="lg"
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-12"
                                onClick={handlePlaceOrder}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <Icons.Loader2 className="h-4 w-4 animate-spin" />
                                        Processing...
                                    </div>
                                ) : (
                                    "Place Order (COD)"
                                )}
                            </Button>

                            <p className="mt-4 text-xs text-center text-gray-500">
                                By placing your order, you agree to our Terms of Service.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}
