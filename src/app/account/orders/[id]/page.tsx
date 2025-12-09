"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { useParams } from "next/navigation";

export default function OrderDetailsPage() {
    const params = useParams();
    const orderId = params.id;

    // Mock data for order details
    const order = {
        id: orderId,
        date: "Dec 09, 2025 at 10:45 AM",
        status: "Processing",
        paymentMethod: "Visa ending in 4242",
        shippingAddress: {
            name: "Faiq Hassan",
            street: "123 Islamic Ave, Suite 4B",
            city: "Lahore",
            zip: "54000",
            country: "Pakistan"
        },
        items: [
            { id: 1, name: "Sahih Al-Bukhari (Set of 9)", price: "$125.00", quantity: 1, image: "/images/books/bukhari.jpg" },
            { id: 2, name: "Premium Prayer Rug", price: "$45.00", quantity: 2, image: "/images/gifts/rug.jpg" }
        ],
        subtotal: "$215.00",
        shipping: "$15.00",
        discount: "-$15.00",
        total: "$215.00"
    };

    // Tracking timeline
    const timeline = [
        { status: "Order Placed", date: "Dec 09, 10:45 AM", done: true },
        { status: "Processing", date: "Dec 09, 11:30 AM", done: true },
        { status: "Shipped", date: "Expected Dec 11", done: false },
        { status: "Delivered", date: "Expected Dec 14", done: false }
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                        <Link href="/account/orders" className="hover:text-emerald-600">My Orders</Link>
                        <Icons.ChevronRight className="w-3 h-3" />
                        <span>Order #{orderId}</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm">
                        Download Invoice
                    </button>
                    <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition-colors text-sm shadow-lg shadow-emerald-200">
                        Track Order
                    </button>
                </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
                <div className="flex items-center justify-between min-w-[600px] relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-0"></div>
                    <div className="absolute top-1/2 left-0 h-1 bg-emerald-500 transition-all duration-1000 -z-0" style={{ width: '35%' }}></div>

                    {timeline.map((step, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 bg-white transition-all ${step.done ? 'border-emerald-500 text-emerald-500 shadow-md' : 'border-gray-200 text-gray-300'
                                }`}>
                                {step.done ? <Icons.Check className="w-5 h-5 stroke-[3]" /> : <div className="w-3 h-3 rounded-full bg-gray-200"></div>}
                            </div>
                            <div>
                                <div className={`font-bold text-sm ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.status}</div>
                                <div className="text-xs text-gray-400">{step.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Order Items & Summary */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                            <h3 className="font-bold text-gray-900">Items ({order.items.length})</h3>
                            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-100">
                                {order.status}
                            </span>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {order.items.map((item) => (
                                <div key={item.id} className="p-6 flex gap-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">📚</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-gray-900 line-clamp-2">{item.name}</h4>
                                            <span className="font-bold text-gray-900">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Payment Summary</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Subtotal</span>
                                <span>{order.subtotal}</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Shipping</span>
                                <span>{order.shipping}</span>
                            </div>
                            <div className="flex justify-between text-sm text-emerald-600">
                                <span>Discount</span>
                                <span>{order.discount}</span>
                            </div>
                            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-lg text-gray-900">
                                <span>Total</span>
                                <span>{order.total}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shipping & Billing Info */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Shipping Address</h3>
                        <div className="flex items-start gap-3">
                            <Icons.MapPin className="w-5 h-5 text-gray-400 mt-1" />
                            <div className="text-sm text-gray-600 leading-relaxed">
                                <span className="font-bold text-gray-900 block mb-1">{order.shippingAddress.name}</span>
                                {order.shippingAddress.street}<br />
                                {order.shippingAddress.city}, {order.shippingAddress.zip}<br />
                                {order.shippingAddress.country}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">
                                VISA
                            </div>
                            <span className="text-sm text-gray-600">{order.paymentMethod}</span>
                        </div>
                    </div>

                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                        <div className="flex items-start gap-3">
                            <Icons.Headphones className="w-5 h-5 text-emerald-600 mt-1" />
                            <div>
                                <h4 className="font-bold text-emerald-900 text-sm mb-1">Need Help?</h4>
                                <p className="text-xs text-emerald-700 mb-3">
                                    Have an issue with this order? Our support team is here to help 24/7.
                                </p>
                                <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
