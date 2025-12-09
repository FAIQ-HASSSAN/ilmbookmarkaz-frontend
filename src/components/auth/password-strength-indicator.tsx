"use client";

import { useState } from "react";

interface PasswordStrengthIndicatorProps {
    password: string;
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
    const getStrength = (pwd: string): { level: number; text: string; color: string } => {
        if (!pwd) return { level: 0, text: "", color: "" };

        let strength = 0;

        // Length check
        if (pwd.length >= 8) strength++;
        if (pwd.length >= 12) strength++;

        // Character variety checks
        if (/[a-z]/.test(pwd)) strength++;
        if (/[A-Z]/.test(pwd)) strength++;
        if (/[0-9]/.test(pwd)) strength++;
        if (/[^a-zA-Z0-9]/.test(pwd)) strength++;

        if (strength <= 2) return { level: 1, text: "Weak", color: "bg-red-500" };
        if (strength <= 4) return { level: 2, text: "Medium", color: "bg-yellow-500" };
        return { level: 3, text: "Strong", color: "bg-green-500" };
    };

    const strength = getStrength(password);

    if (!password) return null;

    return (
        <div className="mt-2">
            <div className="flex gap-1 mb-1">
                <div className={`h-1 flex-1 rounded-full ${strength.level >= 1 ? strength.color : 'bg-gray-200'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${strength.level >= 2 ? strength.color : 'bg-gray-200'}`}></div>
                <div className={`h-1 flex-1 rounded-full ${strength.level >= 3 ? strength.color : 'bg-gray-200'}`}></div>
            </div>
            <p className={`text-xs font-semibold ${strength.level === 1 ? 'text-red-600' :
                    strength.level === 2 ? 'text-yellow-600' :
                        'text-green-600'
                }`}>
                Password strength: {strength.text}
            </p>
        </div>
    );
}
