"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function AccountOverviewPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150"></div>

                <h1 className="text-3xl font-bold mb-2">Good Morning, Faiq!</h1>
                <p className="text-emerald-100 text-lg">Here's what's happening with your account today.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">12</div>
                        <div className="text-sm text-emerald-100">Total Orders</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">5</div>
                        <div className="text-sm text-emerald-100">Processing</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">8</div>
                        <div className="text-sm text-emerald-100">Wishlist</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold mb-1">0</div>
                        <div className="text-sm text-emerald-100">Returns</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/account/orders" className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.ShoppingBag className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">My Orders</h3>
                    <p className="text-sm text-gray-500">Track current orders and view history</p>
                </Link>

                <Link href="/account/addresses" className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Addresses</h3>
                    <p className="text-sm text-gray-500">Manage shipping and billing locations</p>
                </Link>

                <Link href="/account/profile" className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icons.User className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Profile Settings</h3>
                    <p className="text-sm text-gray-500">Update your personal information</p>
                </Link>
            </div>

            {/* Recent Orders Preview */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
                    <Link href="/account/orders" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:underline">
                        View All
                    </Link>
                </div>

                <div className="space-y-4">
                    {[
                        { id: "#ORD-9382", date: "Dec 09, 2025", total: "$125.00", status: "Processing", items: 3 },
                        { id: "#ORD-9381", date: "Dec 05, 2025", total: "$45.50", status: "Delivered", items: 1 },
                    ].map((order, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                                    <Icons.ShoppingBag className="w-6 h-6 text-gray-400" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{order.id}</div>
                                    <div className="text-sm text-gray-500">{order.items} items • {order.date}</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                                <div className="font-bold text-gray-900">{order.total}</div>
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Processing'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'bg-emerald-50 text-emerald-600'
                                    }`}>
                                    {order.status}
                                </span>
                                <Link
                                    href={`/account/orders/${order.id}`}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
                                >
                                    <Icons.ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
