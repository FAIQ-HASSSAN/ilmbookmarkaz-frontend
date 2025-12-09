"use client";

import confetti from "canvas-confetti";
import { useEffect } from "react";

export function SalesConfetti() {
    useEffect(() => {
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            // launch a few confetti from the left edge
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ea580c', '#ffffff', '#fbbf24'] // Orange, White, Gold
            });
            // and launch a few from the right edge
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ea580c', '#ffffff', '#fbbf24']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    return null;
}
