"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const emailInputRef = useRef<HTMLInputElement>(null);

    // Auto-focus email field on mount
    useEffect(() => {
        emailInputRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Mock login validation
        setTimeout(() => {
            if (email && password) {
                console.log("Login successful", { email, rememberMe });
                // TODO: Implement actual login logic
                window.location.href = "/";
            } else {
                setError("Please enter both email and password");
            }
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Form */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    {/* Logo */}
                    <Link href="/" className="inline-block mb-8">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2 rounded-lg">
                                <Icons.ShoppingBag className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Ilm Mart
                            </span>
                        </div>
                    </Link>

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
                        <p className="text-gray-600">Sign in to continue shopping</p>
                        {/* Social Proof */}
                        <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600">
                            <Icons.Check className="w-4 h-4" />
                            <span className="font-semibold">Join 10,000+ happy customers</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="mb-6">
                        <SocialLoginButtons />
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-2 text-red-700 animate-shake">
                            <Icons.AlertCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">{error}</span>
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Icons.Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    ref={emailInputRef}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Icons.Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <Icons.EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Icons.Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                                />
                                <span className="text-sm text-gray-700">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Icons.Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-center text-gray-600">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                            Create one now
                        </Link>
                    </p>

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <Icons.Shield className="w-4 h-4 text-emerald-600" />
                                <span>Secure Login</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icons.Lock className="w-4 h-4 text-emerald-600" />
                                <span>SSL Encrypted</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Benefits */}
                <div className="hidden lg:block">
                    <div className="text-center mb-8">
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                            Shop with Confidence
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands of satisfied customers
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                icon: Icons.ShoppingBag,
                                title: "Easy Shopping",
                                description: "Browse thousands of premium Islamic products"
                            },
                            {
                                icon: Icons.Truck,
                                title: "Fast Delivery",
                                description: "Free shipping on orders over Rs. 5,000"
                            },
                            {
                                icon: Icons.Shield,
                                title: "Secure Payments",
                                description: "100% secure and encrypted transactions"
                            },
                            {
                                icon: Icons.Heart,
                                title: "Save Favorites",
                                description: "Create wishlists and track your orders"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="bg-emerald-100 rounded-xl p-3">
                                    <benefit.icon className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.5s;
                }
            `}</style>
        </div>
    );
}
