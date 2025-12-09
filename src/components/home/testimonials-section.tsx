"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        id: 1,
        name: "Ahmed Hassan",
        role: "Verified Buyer",
        content: "The quality of the prayer mats is absolutely stunning. Very soft and premium. Delivery was super fast too!",
        rating: 5,
        avatar: "AH"
    },
    {
        id: 2,
        name: "Sarah Khan",
        role: "Loyal Customer",
        content: "I love shopping here for my kids' books. The collection is vast and the prices are unbeatable. Highly recommended.",
        rating: 5,
        avatar: "SK"
    },
    {
        id: 3,
        name: "Fatima Ali",
        role: "Interior Designer",
        content: "The calligraphy frames added such a beautiful touch to my living room. Excellent craftsmanship.",
        rating: 5,
        avatar: "FA"
    },
    {
        id: 4,
        name: "Usman Zafar",
        role: "Tech Enthusiast",
        content: "Ordered a digital Quran pen. Works perfectly and the sound quality is crisp. Will buy again for gifts.",
        rating: 5,
        avatar: "UZ"
    },
    {
        id: 5,
        name: "Ayesha Bibi",
        role: "Homemaker",
        content: "The abayas are exactly as shown in the pictures. The fabric is breathable and the stitching is perfect.",
        rating: 5,
        avatar: "AB"
    },
    {
        id: 6,
        name: "Omar Farooq",
        role: "Student",
        content: "Best place for authentic Islamic books. Found some rare editions I couldn't find anywhere else.",
        rating: 4,
        avatar: "OF"
    }
];

export function TestimonialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400; // Approx card width
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="py-16 bg-gray-50/50">
            <Container>
                <div className="flex items-end justify-between mb-10 px-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Trusted by Thousands
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 max-w-2xl">
                            Join our community of happy customers who trust Ilm Book Markaz for quality and service.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="hidden md:flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => scroll("left")} className="h-10 w-10 rounded-full border-gray-300 hover:bg-white hover:border-gray-900">
                            <Icons.ChevronLeft className="h-5 w-5 text-gray-700" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => scroll("right")} className="h-10 w-10 rounded-full border-gray-300 hover:bg-white hover:border-gray-900">
                            <Icons.ChevronRight className="h-5 w-5 text-gray-700" />
                        </Button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex-shrink-0 w-[85vw] md:w-[350px] snap-center flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-primary/20"
                        >
                            <div>
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Icons.Star
                                            key={i}
                                            className={`h-5 w-5 ${i < testimonial.rating ? "fill-current" : "text-gray-200 fill-gray-200"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 leading-relaxed font-medium min-h-[80px]">
                                    &quot;{testimonial.content}&quot;
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-4 border-t pt-6 border-gray-50">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-teal-200 text-emerald-800 font-bold text-lg shadow-inner">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-emerald-600 font-medium">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
