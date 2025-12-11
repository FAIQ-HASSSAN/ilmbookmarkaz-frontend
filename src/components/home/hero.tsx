
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

const slides = [
    {
        id: 1,
        title: "Journey to\nEnlightenment",
        subtitle: "Rediscover the timeless wisdom of Islamic heritage through our curated collection.",
        cta: "Explore Library",
        href: "/books",
        // Deep Emerald to Night Blue
        gradient: "from-[#003d29] via-[#0f2027] to-[#203a43]",
        accent: "text-emerald-400"
    },
    {
        id: 2,
        title: "The Art of\nGifting",
        subtitle: "Express your love with gifts that carry spiritual meaning and elegant beauty.",
        cta: "Find the Perfect Gift",
        href: "/gifts",
        // Deep Purple to Night Black
        gradient: "from-[#1a0b2e] via-[#000000] to-[#16213e]",
        accent: "text-amber-400"
    },
    {
        id: 3,
        title: "Sanctuary of\nPeace",
        subtitle: "Transform your home into a haven of tranquility with our premium lifestyle essentials.",
        cta: "View Collection",
        href: "/lifestyle",
        // Midnight Blue to Deep Teal
        gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
        accent: "text-cyan-400"
    }
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-black font-sans">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset - 0 transition - opacity duration - 1000 ease -in -out ${current === index ? "opacity-100 z-10" : "opacity-0 z-0"
                        } `}
                >
                    <div className={`absolute inset - 0 bg - gradient - to - br ${slide.gradient} `}>
                        {/* Abstract Pattern */}
                        <div className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                            }}
                        />

                        {/* Glowing Orbs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] animate-pulse" />
                    </div>

                    <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-center sm:px-6 lg:px-8">
                        <div className={`transition - all duration - 1000 delay - 300 transform ${current === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            } `}>
                            {/* Floating Label */}
                            <div className="mb-6 inline-block">
                                <span className={`px - 4 py - 1.5 rounded - full border border - white / 20 bg - white / 5 backdrop - blur - xl text - sm font - medium tracking - widest uppercase ${slide.accent} `}>
                                    Premium Collection
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] drop-shadow-2xl">
                                {slide.title.split('\n').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </h1>

                            <p className="mx-auto max-w-2xl text-lg md:text-2xl text-white/80 font-light mb-12 leading-relaxed tracking-wide">
                                {slide.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                {/* Primary Glass Button with Golden Accent */}
                                <Link
                                    href={slide.href}
                                    className="group relative px-10 py-5 rounded-full border-2 border-amber-400/40 bg-gradient-to-br from-amber-500/10 via-yellow-400/5 to-amber-300/10 backdrop-blur-xl text-amber-300 font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.2)] hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] hover:border-amber-300/60 hover:bg-amber-400/15 hover:scale-105 transition-all duration-300"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {slide.cta}
                                        <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-amber-200/30 to-transparent z-0" />
                                </Link>

                                {/* Secondary Glass Button */}
                                <Link
                                    href="/flash-sale"
                                    className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-white font-medium text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 group"
                                >
                                    <Icons.Zap className="w-5 h-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                                    <span>Flash Deals</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Cinematic Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 z-20">
                <div
                    className={`h - full transition - all duration - [6000ms] ease - linear bg - gradient - to - r ${slides[current].accent.replace('text-', 'from-') + ' to-white'} `}
                    style={{ width: '100%' }}
                    key={current} // Key forces re-render for animation reset
                />
            </div>
        </section>
    );
}

