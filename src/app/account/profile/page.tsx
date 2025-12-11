"use client";

import { Icons } from "@/components/ui/icons";

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>

            {/* Profile Picture */}
            <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    FH
                </div>
                <div>
                    <h3 className="font-bold text-gray-900">Profile Picture</h3>
                    <p className="text-sm text-gray-500 mb-3">PNG, JPG up to 5MB</p>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors">
                            Upload New
                        </button>
                        <button className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Personal Information Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Icons.User className="w-5 h-5 text-emerald-600" />
                    Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">First Name</label>
                        <input
                            type="text"
                            defaultValue="Faiq"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Last Name</label>
                        <input
                            type="text"
                            defaultValue="Hassan"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                        <div className="relative">
                            <Icons.Mail className="absolute left-3.5 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                defaultValue="faiq@example.com"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                        <div className="relative">
                            <Icons.Phone className="absolute left-3.5 top-3 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                defaultValue="+92 300 1234567"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-8 pt-6 border-t border-gray-50">
                    <button className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 hover:shadow-xl transition-all hover:-translate-y-0.5">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Password Change */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Icons.Lock className="w-5 h-5 text-emerald-600" />
                    Security
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Current Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                    <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">New Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-8 pt-6 border-t border-gray-50">
                    <button className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    );
}
