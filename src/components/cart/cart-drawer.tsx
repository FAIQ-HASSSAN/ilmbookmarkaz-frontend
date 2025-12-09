"use client";

import { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    // Mock Cart State
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Premium Prayer Mat - Navy",
            price: 4500,
            image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=200",
            quantity: 1,
            variant: "Navy Blue"
        },
        {
            id: 2,
            name: "Oud Wood Essence",
            price: 8500,
            image: "https://images.unsplash.com/photo-1594035910387-fea4779426e9?auto=format&fit=crop&q=80&w=200",
            quantity: 1,
            variant: "50ml"
        },
        {
            id: 3,
            name: "The Sealed Nectar",
            price: 1200,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=200",
            quantity: 2,
            variant: "Hardcover"
        }
    ]);

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const freeShippingThreshold = 20000;
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    const remaining = freeShippingThreshold - subtotal;

    const updateQuantity = (id: number, delta: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <Sheet isOpen={isOpen} onClose={onClose} title={`My Cart (${items.length})`}>
            {/* Free Shipping Bar */}
            <div className="mb-6 rounded-lg bg-gray-50 p-4 border border-gray-100">
                <div className="mb-2 flex items-center justify-between text-sm">
                    {remaining > 0 ? (
                        <span>Add <span className="font-bold text-emerald-600">Rs {remaining.toLocaleString()}</span> for Free Shipping</span>
                    ) : (
                        <span className="font-bold text-emerald-600 flex items-center gap-2"><Icons.Check className="h-4 w-4" /> Free Shipping Unlocked!</span>
                    )}
                    <span className="text-xs text-gray-400">{Math.round(progress)}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Cart Items */}
            <div className="flex flex-col gap-6">
                {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border bg-gray-100">
                            <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <h3 className="font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                                <p className="text-sm text-gray-500">{item.variant}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center rounded border">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-2 py-1 text-gray-500 hover:bg-gray-50 bg-white rounded-l"
                                    >
                                        -
                                    </button>
                                    <span className="px-2 text-sm font-medium min-w-[30px] text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="px-2 py-1 text-gray-500 hover:bg-gray-50 bg-white rounded-r"
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-semibold text-gray-900">Rs {item.price.toLocaleString()}</span>
                                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                                        <Icons.X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {items.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        Your cart is empty.
                    </div>
                )}
            </div>

            {/* Footer (Fixed at bottom) */}
            <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="mb-4 flex items-center justify-between text-lg font-bold text-gray-900">
                    <span>Subtotal</span>
                    <span>Rs {subtotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 text-center">Shipping & taxes calculated at checkout</p>
                <Button className="w-full h-12 text-lg bg-gray-900 text-white hover:bg-black">
                    Checkout Securely
                </Button>
            </div>
        </Sheet>
    );
}
