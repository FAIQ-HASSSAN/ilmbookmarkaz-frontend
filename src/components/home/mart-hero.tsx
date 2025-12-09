"use client";

import { useState, useEffect, useCallback } from "react";
import { CategorySidebar } from "@/components/layout/category-sidebar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&q=80",
        subtitle: "RAMADAN SALE",
        title: "Up to 70% Off \nIslamic Books",
        description: "Get the best deals on Quran, Seerat, and lifestyle products this season.",
        cta: "Shop Now",
        color: "text-secondary"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1200&q=80",
        subtitle: "NEW ARRIVALS",
        title: "Premium Leather \nKhosas & Sandals",
        description: "Step into tradition with our handcrafted leather footwear collection.",
        cta: "Explore Collection",
        color: "text-orange-400"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=1200&q=80",
        subtitle: "ELECTRONICS DEAL",
        title: "Smart Islamic \nGadgets & More",
        description: "Enhance your daily ibadah with digital tasbeehs, azan clocks, and more.",
        cta: "View Gadgets",
        color: "text-blue-400"
    }
];

export function MartHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section className="bg-muted/10 pb-8">
            <Container className="p-0 lg:px-8">
                <div className="flex bg-white shadow-sm lg:rounded-b-lg border-x border-b overflow-hidden h-[400px] sm:h-[450px]">

                    {/* 1. Left Sidebar (Desktop Only) */}
                    <div className="hidden lg:block w-64 shrink-0 border-r z-20 bg-white">
                        <CategorySidebar />
                    </div>

                    {/* 2. Main Slider Banner */}
                    <div className="flex-1 relative bg-gray-100 group overflow-hidden">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                {/* Background Image with Zoom Effect */}
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out ${index === currentSlide ? "scale-105" : "scale-100"
                                        }`}
                                    style={{ backgroundImage: `url('${slide.image}')` }}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-16 text-white max-w-2xl">
                                    <span
                                        className={`font-bold uppercase tracking-wider mb-2 text-sm sm:text-base transition-all duration-700 delay-100 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                            } ${slide.color}`}
                                    >
                                        {slide.subtitle}
                                    </span>

                                    <h2
                                        className={`text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md whitespace-pre-line leading-tight transition-all duration-700 delay-200 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                            }`}
                                    >
                                        {slide.title}
                                    </h2>

                                    <p
                                        className={`text-base sm:text-lg mb-8 drop-shadow text-white/90 max-w-md transition-all duration-700 delay-300 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                            }`}
                                    >
                                        {slide.description}
                                    </p>

                                    <div
                                        className={`transition-all duration-700 delay-500 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                            }`}
                                    >
                                        <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none shadow-lg hover:shadow-xl transition-all font-semibold px-8 h-12">
                                            {slide.cta}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Navigation Arrows (Visible on Hover) */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        >
                            <Icons.ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                        >
                            <Icons.ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
