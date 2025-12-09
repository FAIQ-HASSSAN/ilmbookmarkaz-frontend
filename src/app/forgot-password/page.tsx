"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    // Auto-focus email field on mount
    useEffect(() => {
        emailInputRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Mock password reset
        setTimeout(() => {
            console.log("Password reset email sent to:", email);
            setSuccess(true);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                    {/* Logo */}
                    <Link href="/" className="inline-block mb-8">
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-2 rounded-lg shadow-lg">
                                <Icons.ShoppingBag className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Ilm Mart
                            </span>
                        </div>
                    </Link>

                    {!success ? (
                        <>
                            {/* Header */}
                            <div className="mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-4">
                                    <Icons.Lock className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
                                <p className="text-gray-600">No worries! Enter your email and we'll send you reset instructions.</p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-2 text-red-700 animate-shake">
                                    <Icons.AlertCircle className="w-5 h-5" />
                                    <span className="text-sm font-medium">{error}</span>
                                </div>
                            )}

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-6">
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
                                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base bg-white/50"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <Icons.Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Icons.Mail className="w-5 h-5" />
                                            <span>Send Reset Link</span>
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Back to Login */}
                            <div className="mt-6 text-center">
                                <Link href="/login" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                                    <Icons.ChevronLeft className="w-4 h-4" />
                                    <span>Back to Login</span>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Success State */}
                            <div className="text-center animate-fade-in">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                                    <Icons.Check className="w-10 h-10 text-green-600" />
                                </div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">Check Your Email!</h1>
                                <p className="text-gray-600 mb-2">
                                    We've sent password reset instructions to:
                                </p>
                                <p className="text-emerald-600 font-semibold text-lg mb-6">
                                    {email}
                                </p>

                                {/* Instructions */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-4 mb-6 text-left">
                                    <p className="text-sm text-blue-700 font-semibold mb-2">📧 Next Steps:</p>
                                    <ul className="text-sm text-blue-600 space-y-1">
                                        <li>1. Check your email inbox</li>
                                        <li>2. Click the reset link in the email</li>
                                        <li>3. Create a new password</li>
                                    </ul>
                                </div>

                                {/* Didn't receive email */}
                                <p className="text-sm text-gray-600 mb-4">
                                    Didn't receive the email? Check your spam folder or{" "}
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="text-emerald-600 hover:text-emerald-700 font-semibold"
                                    >
                                        try again
                                    </button>
                                </p>

                                {/* Back to Login */}
                                <Link
                                    href="/login"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all"
                                >
                                    <Icons.ChevronLeft className="w-4 h-4" />
                                    <span>Back to Login</span>
                                </Link>
                            </div>
                        </>
                    )}

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <Icons.Shield className="w-4 h-4 text-emerald-600" />
                                <span>Secure Reset</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icons.Lock className="w-4 h-4 text-emerald-600" />
                                <span>Encrypted Link</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Help Text */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Need help?{" "}
                        <Link href="/support" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                            Contact Support
                        </Link>
                    </p>
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
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in {
                    animation: scale-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}
