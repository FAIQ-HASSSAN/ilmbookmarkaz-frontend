"use client";

import { useState } from "react";
import { Icons } from "@/components/ui/icons";

interface ProductGalleryProps {
    images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 group">
                <img
                    src={images[selectedImage]}
                    alt="Product"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icons.Search className="w-3 h-3" />
                    Click to zoom
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Icons.ChevronLeft className="w-5 h-5 text-gray-800" />
                        </button>
                        <button
                            onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        >
                            <Icons.ChevronRight className="w-5 h-5 text-gray-800" />
                        </button>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                    {images.map((image, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedImage(idx)}
                            className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${selectedImage === idx
                                    ? "border-emerald-600 ring-2 ring-emerald-200"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <img
                                src={image}
                                alt={`Product ${idx + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
