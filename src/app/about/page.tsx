"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="inline-block mb-6">
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                ✨ ABOUT ILM MART
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
                            Your Trusted Source for<br />Islamic Books & Gifts
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Bringing knowledge and spirituality to your doorstep with a curated collection of authentic Islamic literature, gifts, and educational materials.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <div className="space-y-4 text-gray-600">
                                    <p>
                                        Founded with a passion for spreading Islamic knowledge, Ilm Mart began as a small bookstore with a big vision: to make authentic Islamic literature accessible to everyone.
                                    </p>
                                    <p>
                                        Over the years, we've grown into a trusted online destination for Muslims seeking quality books, educational materials, and thoughtful gifts that strengthen their faith and connection to Islam.
                                    </p>
                                    <p>
                                        Today, we serve thousands of customers worldwide, carefully curating our collection to ensure authenticity, quality, and relevance to the modern Muslim experience.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                                <div className="text-center">
                                    <Icons.ShoppingBag className="w-32 h-32 text-emerald-600 mx-auto mb-4" />
                                    <p className="text-emerald-800 font-semibold">Image Placeholder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                                    <Icons.Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-700">
                                    To provide Muslims worldwide with easy access to authentic Islamic knowledge through carefully curated books, educational materials, and gifts that inspire spiritual growth and strengthen faith.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                    <Icons.Eye className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-700">
                                    To become the world's most trusted Islamic bookstore, known for our commitment to authenticity, quality, and exceptional customer service in spreading beneficial knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: Icons.Shield,
                                    title: "Authenticity",
                                    description: "We verify all sources to ensure authentic Islamic knowledge",
                                    gradient: "from-emerald-100 to-teal-100",
                                    iconBg: "from-emerald-500 to-teal-500"
                                },
                                {
                                    icon: Icons.Heart,
                                    title: "Quality",
                                    description: "Premium products that meet the highest standards",
                                    gradient: "from-pink-100 to-rose-100",
                                    iconBg: "from-pink-500 to-rose-500"
                                },
                                {
                                    icon: Icons.Users,
                                    title: "Community",
                                    description: "Building a global community of knowledge seekers",
                                    gradient: "from-purple-100 to-indigo-100",
                                    iconBg: "from-purple-500 to-indigo-500"
                                },
                                {
                                    icon: Icons.Star,
                                    title: "Excellence",
                                    description: "Striving for excellence in service and selection",
                                    gradient: "from-yellow-100 to-orange-100",
                                    iconBg: "from-yellow-500 to-orange-500"
                                }
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${value.gradient} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${value.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                                        <value.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                                    <p className="text-gray-700 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { number: "10,000+", label: "Happy Customers" },
                                { number: "5,000+", label: "Products" },
                                { number: "50+", label: "Publishers" },
                                { number: "99%", label: "Satisfaction Rate" }
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-5xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-emerald-100">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Join Our Community
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Start your journey of Islamic knowledge with us today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                <Icons.ShoppingBag className="w-5 h-5" />
                                <span>Shop Now</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all"
                            >
                                <Icons.Mail className="w-5 h-5" />
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
