"use client";

import { Icons } from "@/components/ui/icons";

export default function WalletPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">My Wallet</h1>

            {/* Balance Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 text-emerald-100 mb-1">
                            <Icons.Wallet className="w-5 h-5" />
                            <span className="font-medium">Available Balance</span>
                        </div>
                        <div className="text-4xl font-bold mb-2">$450.00</div>
                        <div className="text-sm text-emerald-200">Earn 5% cashback on all orders</div>
                    </div>

                    <button className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm flex items-center justify-center gap-2">
                        <Icons.Plus className="w-4 h-4" />
                        Top Up Wallet
                    </button>
                </div>
            </div>

            {/* Loyalty Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 group hover:border-emerald-100 transition-colors">
                    <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icons.Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">1,250</div>
                        <div className="text-gray-500 text-sm">Loyalty Points</div>
                    </div>
                    <div className="ml-auto text-sm text-emerald-600 font-bold cursor-pointer hover:underline">
                        Redeem
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 group hover:border-emerald-100 transition-colors">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icons.Gift className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900">2</div>
                        <div className="text-gray-500 text-sm">Active Vouchers</div>
                    </div>
                    <div className="ml-auto text-sm text-emerald-600 font-bold cursor-pointer hover:underline">
                        View
                    </div>
                </div>
            </div>

            {/* Transaction History */}
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</h3>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    {[
                        { type: "Purchase", desc: "Order #ORD-9382", date: "Dec 09, 2025", amount: "-$125.00", isNegative: true },
                        { type: "Top Up", desc: "Credit Card ending 4242", date: "Dec 08, 2025", amount: "+$500.00", isNegative: false },
                        { type: "Refund", desc: "Order #ORD-9155", date: "Nov 15, 2025", amount: "+$35.00", isNegative: false },
                        { type: "Purchase", desc: "Order #ORD-9201", date: "Nov 28, 2025", amount: "-$210.00", isNegative: true },
                    ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.isNegative ? 'bg-red-50' : 'bg-emerald-50'
                                    }`}>
                                    {tx.isNegative ? (
                                        <Icons.ShoppingBag className="w-5 h-5 text-red-500" />
                                    ) : (
                                        <Icons.Plus className="w-5 h-5 text-emerald-500" />
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{tx.type}</div>
                                    <div className="text-xs text-gray-500">{tx.desc} • {tx.date}</div>
                                </div>
                            </div>
                            <div className={`font-bold ${tx.isNegative ? 'text-gray-900' : 'text-emerald-600'}`}>
                                {tx.amount}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
