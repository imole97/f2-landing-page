"use client";
import type { CSSProperties } from "react";
// removed
// Common ease curve for smooth ease-out
export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type FadeUpOptions = {
    delay?: number;
    y?: number;
    duration?: number;
    amount?: number;
    once?: boolean;
    style?: CSSProperties;
};

export function fadeUpProps({
    delay = 0,
    y = 24,
    duration = 0.6,
    amount = 0.25,
    once = true,
    style,
}: FadeUpOptions = {}) {
    return {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration, delay, ease },
        viewport: { amount, once },
        style: { willChange: "transform, opacity", ...style },
    } as const;
}

export function fadeInProps({
    delay = 0,
    duration = 0.6,
    amount = 0.25,
    once = true,
    style,
}: Omit<FadeUpOptions, "y"> = {}) {
    return {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration, delay, ease },
        viewport: { amount, once },
        style: { willChange: "opacity", ...style },
    } as const;
}

export const itemDelay = (index: number, base = 0.08) => index * base;
