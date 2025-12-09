"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { SocialLoginButtons } from "@/components/auth/social-login-buttons";
import { PasswordStrengthIndicator } from "@/components/auth/password-strength-indicator";

export default function RegisterPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showReferralField, setShowReferralField] = useState(false);
    const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const nameInputRef = useRef<HTMLInputElement>(null);

    // Auto-focus name field on mount
    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        if (!acceptTerms) {
            setError("Please accept the terms and conditions");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }

        setIsLoading(true);

        // Mock registration
        setTimeout(() => {
            console.log("Registration successful", {
                fullName,
                email,
                referralCode,
                subscribeNewsletter
            });
            // TODO: Implement actual registration logic
            window.location.href = "/login";
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center p-4 py-12 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
                {/* Right Side - Benefits (Now on Top/Left on mobile) */}
                <div className="hidden lg:block order-2 lg:order-1">
                    {/* Header - Aligned with Form Logo */}
                    <div className="mb-8 animate-fade-in">
                        <div className="inline-block mb-4">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                ✨ EXCLUSIVE BENEFITS
                            </div>
                        </div>
                        <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 leading-tight">
                            Why Join Us?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Unlock amazing perks & rewards
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                icon: Icons.Gift,
                                title: "Welcome Bonus",
                                description: "Get 10% off your first order when you sign up",
                                gradient: "from-orange-100 to-red-100",
                                iconBg: "bg-gradient-to-br from-orange-500 to-red-500"
                            },
                            {
                                icon: Icons.Truck,
                                title: "Free Shipping",
                                description: "Free delivery on all orders over Rs. 5,000",
                                gradient: "from-blue-100 to-cyan-100",
                                iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
                            },
                            {
                                icon: Icons.Heart,
                                title: "Save Favorites",
                                description: "Create wishlists and get notified of price drops",
                                gradient: "from-pink-100 to-rose-100",
                                iconBg: "bg-gradient-to-br from-pink-500 to-rose-500"
                            },
                            {
                                icon: Icons.Clock,
                                title: "Order Tracking",
                                description: "Track your orders in real-time from our dashboard",
                                gradient: "from-purple-100 to-indigo-100",
                                iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500"
                            }
                        ].map((benefit, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-4 bg-gradient-to-br ${benefit.gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`${benefit.iconBg} rounded-xl p-3 shadow-lg`}>
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                    <p className="text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-8">
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
                            <Icons.Shield className="w-5 h-5 text-emerald-600" />
                            <span className="text-sm font-bold text-gray-700">Trusted by 10,000+ customers</span>
                        </div>
                    </div>
                </div>

                {/* Left Side - Form */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 order-1 lg:order-2">
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

                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
                        <p className="text-gray-600">Join us and start shopping today</p>
                        {/* Social Proof */}
                        <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600">
                            <Icons.Check className="w-4 h-4" />
                            <span className="font-semibold">Free account • No credit card required</span>
                        </div>
                    </div>

                    {/* Social Signup */}
                    <div className="mb-6">
                        <SocialLoginButtons />
                    </div>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500 font-medium">Or register with email</span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-2 text-red-700 animate-shake">
                            <Icons.AlertCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">{error}</span>
                        </div>
                    )}

                    {/* Email Verification Notice */}
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl flex items-start gap-2">
                        <Icons.Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div className="text-sm text-blue-700">
                            <p className="font-semibold">Email verification required</p>
                            <p className="text-blue-600">We'll send you a verification link after signup</p>
                        </div>
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <Icons.User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    ref={nameInputRef}
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base bg-white/50"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Icons.Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base bg-white/50"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                Password
                                <button
                                    type="button"
                                    onMouseEnter={() => setShowPasswordTooltip(true)}
                                    onMouseLeave={() => setShowPasswordTooltip(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </label>
                            {showPasswordTooltip && (
                                <div className="mb-2 p-3 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg text-xs text-gray-600 shadow-lg">
                                    <p className="font-semibold mb-1">Password must contain:</p>
                                    <ul className="space-y-1">
                                        <li className="flex items-center gap-1">
                                            <span className={password.length >= 8 ? "text-green-600" : "text-gray-400"}>•</span>
                                            At least 8 characters
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <span className={/[A-Z]/.test(password) ? "text-green-600" : "text-gray-400"}>•</span>
                                            One uppercase letter
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <span className={/[a-z]/.test(password) ? "text-green-600" : "text-gray-400"}>•</span>
                                            One lowercase letter
                                        </li>
                                        <li className="flex items-center gap-1">
                                            <span className={/[0-9]/.test(password) ? "text-green-600" : "text-gray-400"}>•</span>
                                            One number
                                        </li>
                                    </ul>
                                </div>
                            )}
                            <div className="relative">
                                <Icons.Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setShowPasswordTooltip(true)}
                                    onBlur={() => setShowPasswordTooltip(false)}
                                    placeholder="Create a strong password"
                                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base bg-white/50"
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
                            <PasswordStrengthIndicator password={password} />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Icons.Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Re-enter your password"
                                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base bg-white/50"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showConfirmPassword ? (
                                        <Icons.EyeOff className="w-5 h-5" />
                                    ) : (
                                        <Icons.Eye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            {confirmPassword && password !== confirmPassword && (
                                <p className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1">
                                    <Icons.X className="w-3 h-3" />
                                    Passwords do not match
                                </p>
                            )}
                            {confirmPassword && password === confirmPassword && (
                                <p className="mt-1 text-xs text-green-600 font-semibold flex items-center gap-1">
                                    <Icons.Check className="w-3 h-3" />
                                    Passwords match
                                </p>
                            )}
                        </div>

                        {/* Referral Code (Optional) */}
                        <div>
                            <button
                                type="button"
                                onClick={() => setShowReferralField(!showReferralField)}
                                className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1 transition-colors"
                            >
                                <Icons.Gift className="w-4 h-4" />
                                {showReferralField ? "Hide" : "Have a referral code?"}
                            </button>
                            {showReferralField && (
                                <div className="mt-2 relative">
                                    <Icons.Gift className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        value={referralCode}
                                        onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                                        placeholder="FRIEND10"
                                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all text-base uppercase bg-white/50"
                                    />
                                    {referralCode && (
                                        <p className="mt-1 text-xs text-emerald-600 font-semibold">
                                            🎉 You'll get an extra 5% off your first order!
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Newsletter Opt-in */}
                        <div className="pt-2">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={subscribeNewsletter}
                                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                                    className="w-4 h-4 mt-0.5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                                />
                                <span className="text-sm text-gray-700">
                                    Send me exclusive deals and updates via email
                                </span>
                            </label>
                        </div>

                        {/* Terms & Conditions */}
                        <div>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={acceptTerms}
                                    onChange={(e) => setAcceptTerms(e.target.checked)}
                                    className="w-4 h-4 mt-0.5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                                />
                                <span className="text-sm text-gray-700">
                                    I agree to the{" "}
                                    <Link href="/terms" className="font-semibold text-emerald-600 hover:text-emerald-700">
                                        Terms & Conditions
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy" className="font-semibold text-emerald-600 hover:text-emerald-700">
                                        Privacy Policy
                                    </Link>
                                </span>
                            </label>
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
                                    <span>Creating account...</span>
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Sign In Link */}
                    <p className="mt-6 text-center text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
                            Sign in
                        </Link>
                    </p>

                    {/* Trust Indicators */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                                <Icons.Shield className="w-4 h-4 text-emerald-600" />
                                <span>Secure Signup</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Icons.Lock className="w-4 h-4 text-emerald-600" />
                                <span>Data Protected</span>
                            </div>
                        </div>
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
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
                @keyframes slide-in {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-slide-in {
                    animation: slide-in 0.6s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}
