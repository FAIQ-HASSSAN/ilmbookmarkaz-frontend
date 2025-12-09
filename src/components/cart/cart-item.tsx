"use client";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useInteraction } from "@/components/provider/interaction-provider";

interface CartItemProps {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
    stock: number;
    onQuantityChange: (id: number, newQuantity: number) => void;
    onRemove: (id: number) => void;
}

export function CartItem({
    id,
    title,
    price,
    quantity,
    image,
    variant,
    stock,
    onQuantityChange,
    onRemove
}: CartItemProps) {
    const { showToast } = useInteraction();

    const handleIncrease = () => {
        if (quantity < stock) {
            onQuantityChange(id, quantity + 1);
        } else {
            showToast("Maximum stock reached");
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            onQuantityChange(id, quantity - 1);
        }
    };

    const handleRemove = () => {
        onRemove(id);
        showToast(`Removed ${title} from cart`);
    };

    return (
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-emerald-200 transition-all">
            <div className="flex gap-6">
                {/* Product Image */}
                <div className="w-32 h-32 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                            {variant && (
                                <p className="text-sm text-gray-500">{variant}</p>
                            )}
                        </div>
                        <button
                            onClick={handleRemove}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                            title="Remove from cart"
                        >
                            <Icons.X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Stock Status */}
                    {stock <= 5 && (
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-orange-600 font-semibold">
                                Only {stock} left in stock!
                            </span>
                        </div>
                    )}

                    {/* Price and Quantity */}
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-emerald-600">
                                Rs. {(price * quantity).toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500">
                                Rs. {price.toLocaleString()} each
                            </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleDecrease}
                                disabled={quantity <= 1}
                                className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                            >
                                <Icons.ChevronLeft className="w-5 h-5" />
                            </button>
                            <span className="text-lg font-bold text-gray-900 min-w-[40px] text-center">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrease}
                                disabled={quantity >= stock}
                                className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
                            >
                                <Icons.ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
