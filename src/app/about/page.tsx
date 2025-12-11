"use client";

import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { useState, useEffect } from "react";

export default function AboutPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const testimonials = [
        {
            name: "Ahmed Hassan",
            role: "Regular Customer",
            image: "A.H.",
            quote: "Ilm Mart has been my go-to source for authentic Islamic books for 3 years. The quality and authenticity are unmatched!",
            rating: 5
        },
        {
            name: "Fatima Ali",
            role: "Islamic Studies Teacher",
            image: "F.A.",
            quote: "As an Islamic studies teacher, I trust Ilm Mart completely. Their collection is carefully curated and always authentic.",
            rating: 5
        },
        {
            name: "Omar Abdullah",
            role: "University Student",
            image: "O.A.",
            quote: "The customer service is exceptional. They helped me find exactly what I needed for my Islamic studies research.",
            rating: 5
        }
    ];

    const team = [
        { name: "Muhammad Ibrahim", role: "Founder & CEO", initials: "M.I.", color: "from-emerald-500 to-teal-500" },
        { name: "Aisha Rahman", role: "Head of Curation", initials: "A.R.", color: "from-blue-500 to-cyan-500" },
        { name: "Yusuf Ahmed", role: "Customer Success", initials: "Y.A.", color: "from-purple-500 to-pink-500" },
        { name: "Khadija Hassan", role: "Operations Manager", initials: "K.H.", color: "from-orange-500 to-red-500" }
    ];

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
                            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl">
                                ✨ ABOUT ILM MART
                            </div>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6 leading-tight">
                            Your Trusted Source for Islamic Books & Gifts
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Dedicated to spreading authentic Islamic knowledge through carefully curated books and educational materials
                        </p>
                    </div>
                </section>

                {/* Trust Badges Strip - Final Touch */}
                <section className="py-10 px-4 bg-white/50 backdrop-blur-sm border-y border-emerald-100/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-3">
                                <Icons.Shield className="w-6 h-6 text-emerald-600" />
                                <span className="font-semibold text-gray-700">SSL Secure Payment</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icons.Star className="w-6 h-6 text-emerald-600" />
                                <span className="font-semibold text-gray-700">Top Rated Seller</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icons.Check className="w-6 h-6 text-emerald-600" />
                                <span className="font-semibold text-gray-700">Verified Authenticity</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">24/7</div>
                                <span className="font-semibold text-gray-700">Dedicated Support</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Founded with a passion for Islamic knowledge, Ilm Mart has been serving the Muslim community for years. We believe that access to authentic Islamic literature should be easy and affordable for everyone.
                                </p>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Our journey began with a simple mission: to create a trusted platform where Muslims worldwide can find quality Islamic books, educational materials, and gifts that inspire and strengthen their faith.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Today, we're proud to serve thousands of customers globally, offering a carefully curated selection of authentic Islamic resources from verified publishers and scholars.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-12 flex items-center justify-center">
                                <Icons.ShoppingBag className="w-32 h-32 text-emerald-600 mx-auto mb-4" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Mission */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border-2 border-orange-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                                    <Icons.Star className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-700">
                                    To provide Muslims worldwide with easy access to authentic Islamic knowledge through carefully curated books, educational materials, and gifts that inspire spiritual growth and strengthen faith.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                    <Icons.Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-700">
                                    To become the world's most trusted Islamic bookstore, known for our unwavering commitment to authenticity, quality, and exceptional customer service in spreading beneficial knowledge.
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
                                    description: "Every source verified. Every book authenticated. Your trust is our priority.",
                                    gradient: "from-emerald-100 to-teal-100",
                                    iconBg: "from-emerald-500 to-teal-500"
                                },
                                {
                                    icon: Icons.Heart,
                                    title: "Quality",
                                    description: "Premium products that meet the highest standards of excellence.",
                                    gradient: "from-pink-100 to-rose-100",
                                    iconBg: "from-pink-500 to-rose-500"
                                },
                                {
                                    icon: Icons.ShoppingBag,
                                    title: "Community",
                                    description: "Building a global family of knowledge seekers and truth lovers.",
                                    gradient: "from-purple-100 to-indigo-100",
                                    iconBg: "from-purple-500 to-indigo-500"
                                },
                                {
                                    icon: Icons.Star,
                                    title: "Excellence",
                                    description: "Striving for perfection in service, selection, and customer care.",
                                    gradient: "from-yellow-100 to-orange-100",
                                    iconBg: "from-yellow-500 to-orange-500"
                                }
                            ].map((value, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${value.gradient} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group`}
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${value.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                        <value.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Meet Our Team */}
                <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
                            <p className="text-xl text-gray-300">The passionate people behind Ilm Mart</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                                        <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                                            {member.initials}
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2 text-center">{member.name}</h4>
                                        <p className="text-gray-300 text-center">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Founder's Message - Trust Builder */}
                        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl mx-auto mb-6">
                                M.I.
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">A Promise from Our Founder</h3>
                            <p className="text-lg text-gray-300 leading-relaxed italic mb-6">
                                "When I started Ilm Mart, my goal wasn't just to sell books. It was to create a safe haven where you could trust every single page you read. We vouch for the authenticity of every item on our shelves. That is my personal promise to you."
                            </p>
                            <div className="text-emerald-400 font-bold text-lg">Muhammad Ibrahim</div>
                            <div className="text-emerald-400/60 text-sm">Founder & CEO</div>
                        </div>
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Loved by Customers</h2>
                            <p className="text-xl text-gray-600">Real stories from real people</p>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 border-2 border-emerald-100">
                                <div className="flex items-center gap-8 mb-8">
                                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl">
                                        {testimonials[activeTestimonial].image}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                                        <p className="text-lg text-gray-600 mb-2">{testimonials[activeTestimonial].role}</p>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Icons.Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                                    "{testimonials[activeTestimonial].quote}"
                                </p>
                                <div className="flex justify-center gap-3">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveTestimonial(index)}
                                            className={`h-3 rounded-full transition-all duration-500 ${index === activeTestimonial
                                                ? 'bg-emerald-600 w-10'
                                                : 'bg-gray-300 hover:bg-gray-400 w-3'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            <div>
                                <div className="text-5xl font-bold mb-2">10,000+</div>
                                <div className="text-emerald-100">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">5,000+</div>
                                <div className="text-emerald-100">Products</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">50+</div>
                                <div className="text-emerald-100">Publishers</div>
                            </div>
                            <div>
                                <div className="text-5xl font-bold mb-2">99%</div>
                                <div className="text-emerald-100">Satisfaction Rate</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Explore our collection of authentic Islamic books and educational materials
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/products"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
                            >
                                <Icons.ShoppingBag className="w-5 h-5" />
                                <span>Shop Now</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all"
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
