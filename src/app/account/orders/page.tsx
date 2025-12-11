"use client";

import { useState } from "react";
import { OrderCard } from "@/components/account/order-card";
import { Icons } from "@/components/ui/icons";

export default function OrdersPage() {
    const [filter, setFilter] = useState("All");

    const orders = [
        { id: "#ORD-9382", date: "Dec 09, 2025", total: "$125.00", status: "Processing", items: 3, image: "/placeholder.jpg" },
        { id: "#ORD-9381", date: "Dec 05, 2025", total: "$45.50", status: "Delivered", items: 1, image: "/placeholder.jpg" },
        { id: "#ORD-9201", date: "Nov 28, 2025", total: "$210.00", status: "Delivered", items: 5, image: "/placeholder.jpg" },
        { id: "#ORD-9155", date: "Nov 15, 2025", total: "$35.00", status: "Cancelled", items: 1, image: "/placeholder.jpg" }
    ];

    const filteredOrders = filter === "All"
        ? orders
        : orders.filter(order => order.status === filter);

    const tabs = ["All", "Processing", "Delivered", "Cancelled"];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>

                {/* Filter Tabs */}
                <div className="flex p-1 bg-gray-100 rounded-xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${filter === tab
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order, index) => (
                        <OrderCard key={index} order={order} />
                    ))
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icons.ShoppingBag className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No orders found</h3>
                        <p className="text-gray-500">We couldn't find any orders with this status.</p>
                    </div>
                )}
            </div>

            {/* Pagination (Mock) */}
            <div className="flex items-center justify-center pt-8">
                <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                    <Icons.ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 mx-4">
                    <button className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm">1</button>
                    <button className="w-8 h-8 rounded-lg hover:bg-gray-100 text-gray-600 font-bold text-sm">2</button>
                </div>
                <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                    <Icons.ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
