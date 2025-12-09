"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function PromotionalBanner() {
    return (
        <div className="py-8">
            <Container>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-700 px-6 py-12 md:px-12 md:py-16 shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
                        <div className="mb-8 md:mb-0 md:max-w-xl">
                            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                                Download the App & Get <span className="text-yellow-400">20% OFF</span>
                            </h2>
                            <p className="mb-6 text-emerald-100 text-lg">
                                Experience the best of Ilm Book Markaz on your phone.
                                Exclusive deals, faster checkout, and real-time notifications.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100 font-semibold h-12 px-8">
                                    Download on App Store
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8">
                                    Get it on Google Play
                                </Button>
                            </div>
                        </div>

                        {/* Simulated Phone Mockup Image Placeholder */}
                        <div className="hidden md:block">
                            <div className="relative h-64 w-64 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <span className="text-6xl">📱</span>
                                {/* Decorative circles */}
                                <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-yellow-400/80 blur-md animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
