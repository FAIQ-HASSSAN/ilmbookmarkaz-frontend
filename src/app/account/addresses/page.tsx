"use client";

import { Icons } from "@/components/ui/icons";

export default function AddressesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Address Book</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors">
                    <Icons.Plus className="w-4 h-4" />
                    Add New Address
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Default Address */}
                <div className="p-6 bg-white rounded-2xl border-2 border-emerald-500 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-bl-xl">
                        DEFAULT
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                            <Icons.Home className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Home</h3>
                            <p className="text-gray-500 text-sm">Faiq Hassan</p>
                            <p className="text-gray-500 text-sm mt-1">
                                123 Islamic Center Road, Block 4<br />
                                Karachi, Sindh 75000<br />
                                Pakistan
                            </p>
                            <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                                <Icons.Phone className="w-3 h-3" /> +92 (300) 123-4567
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-50">
                        <button className="flex-1 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            Edit
                        </button>
                        <button className="flex-1 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Secondary Address (Office) */}
                <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                            <Icons.Briefcase className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-lg">Office</h3>
                            <p className="text-gray-500 text-sm">Faiq Hassan</p>
                            <p className="text-gray-500 text-sm mt-1">
                                Tech Park Plaza, Office 404<br />
                                Lahore, Punjab 54000<br />
                                Pakistan
                            </p>
                            <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                                <Icons.Phone className="w-3 h-3" /> +92 (300) 123-4567
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-6 pt-4 border-t border-gray-50">
                        <button className="flex-1 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            Edit
                        </button>
                        <button className="flex-1 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            Make Default
                        </button>
                    </div>
                </div>

                {/* Add New Placeholder */}
                <button className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all group min-h-[240px]">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                        <Icons.Plus className="w-6 h-6 text-gray-400 group-hover:text-emerald-500" />
                    </div>
                    <span className="font-bold text-gray-500 group-hover:text-emerald-600">Add New Address</span>
                </button>
            </div>
        </div>
    );
}
