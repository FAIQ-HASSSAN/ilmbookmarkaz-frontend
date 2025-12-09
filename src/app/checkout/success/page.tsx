"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icons } from "@/components/ui/icons";
import { PostPurchaseUpsell } from "@/components/checkout/post-purchase-upsell";

export default function OrderSuccessPage() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center bg-gray-50 py-12">
            <Container className="flex max-w-4xl flex-col items-center">
                {/* Animated Checkmark Box */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100 mb-8">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50 animate-bounce transition-all">
                        <Icons.Check className="h-10 w-10 text-emerald-600" />
                    </div>

                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Order Confirmed!
                    </h1>
                    <p className="mb-6 text-gray-500">
                        Thank you for your purchase. <br />
                        Order ID: <span className="font-mono font-bold text-gray-900">#ORD-7829-XJ</span>
                    </p>

                    <Link href="/">
                        <Button variant="outline" className="w-full border-gray-200 hover:bg-gray-50 hover:text-gray-900">
                            Continue Shopping
                        </Button>
                    </Link>
                </div>

                {/* The "Buy 10 More Things" Section */}
                <PostPurchaseUpsell />

            </Container>
        </div>
    );
}
