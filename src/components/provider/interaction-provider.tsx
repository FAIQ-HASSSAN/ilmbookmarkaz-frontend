"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { QuickViewModal } from "@/components/ui/quick-view-modal";
import { Toast } from "@/components/ui/toast";

type InteractionContextType = {
    openQuickView: (product: any) => void;
    closeQuickView: () => void;
    showToast: (message: string) => void;
};

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export function InteractionProvider({ children }: { children: ReactNode }) {
    const [quickViewProduct, setQuickViewProduct] = useState<any | null>(null);
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    const openQuickView = (product: any) => setQuickViewProduct(product);
    const closeQuickView = () => setQuickViewProduct(null);

    const showToast = (message: string) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    return (
        <InteractionContext.Provider value={{ openQuickView, closeQuickView, showToast }}>
            {children}
            {quickViewProduct && (
                <QuickViewModal product={quickViewProduct} onClose={closeQuickView} />
            )}
            {toastMessage && <Toast message={toastMessage} />}
        </InteractionContext.Provider>
    );
}

export const useInteraction = () => {
    const context = useContext(InteractionContext);
    if (!context) {
        throw new Error("useInteraction must be used within an InteractionProvider");
    }
    return context;
};
