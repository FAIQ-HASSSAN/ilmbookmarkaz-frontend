"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useInteraction } from "@/components/provider/interaction-provider";

interface QuickViewModalProps {
    product: any;
    onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
    const { showToast } = useInteraction();

    const handleAddToCart = () => {
        showToast(`Added ${product.title} to cart`);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 hover:bg-gray-100 rounded-full z-10"
                >
                    <Icons.X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Image */}
                    <div className="md:w-1/2 bg-gray-100 min-h-[300px] flex items-center justify-center relative">
                        <Icons.Logo className="w-20 h-20 text-gray-300 opacity-50" />
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
                            Flash Sale
                        </div>
                    </div>

                    {/* Details */}
                    <div className="md:w-1/2 p-6 flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h2>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-xl font-bold text-primary">{product.price}</div>
                            {product.oldPrice && (
                                <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                            )}
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-medium">In Stock</span>
                        </div>

                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Premium quality Islamic literature aimed at enriching your soul. This highly rated product is a must-have for your collection.
                        </p>

                        <div className="mt-auto space-y-3">
                            <Button
                                onClick={handleAddToCart}
                                className="w-full bg-primary hover:bg-primary/90 text-white shadow-md"
                            >
                                Add to Cart
                            </Button>
                            <Button variant="outline" className="w-full" onClick={onClose}>
                                View Full Details
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
