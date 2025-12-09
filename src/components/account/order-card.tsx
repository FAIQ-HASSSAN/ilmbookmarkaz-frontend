"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";

interface OrderCardProps {
    order: {
        id: string;
        date: string;
        total: string;
        status: string;
        items: number;
        image: string; // Preview image of first item
    };
}

export function OrderCard({ order }: OrderCardProps) {
    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'delivered': return 'bg-emerald-50 text-emerald-600';
            case 'processing': return 'bg-blue-50 text-blue-600';
            case 'cancelled': return 'bg-red-50 text-red-600';
            case 'shipped': return 'bg-purple-50 text-purple-600';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow group">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Order Image/Preview */}
                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icons.ShoppingBag className="w-8 h-8 text-gray-400 group-hover:text-emerald-500 transition-colors" />
                </div>

                {/* Order Details */}
                <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">{order.id}</h3>
                            <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                        <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${getStatusColor(order.status)}`}>
                            {order.status}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                        <div className="text-sm font-medium text-gray-600">
                            {order.items} items for <span className="text-gray-900 font-bold">{order.total}</span>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                href={`/account/orders/${order.id}`}
                                className="px-4 py-2 text-sm font-semibold text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                            >
                                View Details
                            </Link>
                            {order.status === 'Delivered' && (
                                <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    Reorder
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
