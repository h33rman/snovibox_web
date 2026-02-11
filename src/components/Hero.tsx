"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useLanguage } from "@/hooks";

const SLIDE_INTERVAL = 6000;

/* ── Service icons (SVG, line-style) ── */
const serviceIcons: Record<string, React.ReactNode> = {
    mobile: (
        <svg viewBox="0 0 32 32" fill="none"><rect x="8" y="2" width="16" height="28" rx="3" stroke="currentColor" strokeWidth="2" /><circle cx="16" cy="26" r="1.5" fill="currentColor" /><line x1="12" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
    ),
    web: (
        <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" /><ellipse cx="16" cy="16" rx="5" ry="12" stroke="currentColor" strokeWidth="1.5" /><line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" /><line x1="7" y1="9" x2="25" y2="9" stroke="currentColor" strokeWidth="1" /><line x1="7" y1="23" x2="25" y2="23" stroke="currentColor" strokeWidth="1" /></svg>
    ),
    design: (
        <svg viewBox="0 0 32 32" fill="none"><path d="M16 3l-2 10-10 2 10 2 2 10 2-10 10-2-10-2-2-10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.3" /></svg>
    ),
    erp: (
        <svg viewBox="0 0 32 32" fill="none"><rect x="3" y="6" width="26" height="20" rx="2" stroke="currentColor" strokeWidth="2" /><line x1="3" y1="12" x2="29" y2="12" stroke="currentColor" strokeWidth="1.5" /><line x1="12" y1="12" x2="12" y2="26" stroke="currentColor" strokeWidth="1.5" /><rect x="15" y="15" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.4" /><rect x="21" y="15" width="4" height="3" rx="0.5" fill="currentColor" opacity="0.4" /></svg>
    ),
    hardware: (
        <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="17" rx="2" stroke="currentColor" strokeWidth="2" /><line x1="10" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="16" y1="21" x2="16" y2="24" stroke="currentColor" strokeWidth="2" /></svg>
    ),
    geo: (
        <svg viewBox="0 0 32 32" fill="none"><path d="M16 3C11 3 7 7 7 12c0 7 9 17 9 17s9-10 9-17c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="2" /><circle cx="16" cy="12" r="3" stroke="currentColor" strokeWidth="2" /></svg>
    ),
    agri: (
        <svg viewBox="0 0 32 32" fill="none"><path d="M16 28V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M16 14c-6-2-9-7-9-11 6 1 9 5 9 11z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" /><path d="M16 18c6-2 9-7 9-11-6 1-9 5-9 11z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" /></svg>
    ),
    security: (
        <svg viewBox="0 0 32 32" fill="none"><rect x="9" y="14" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M12 14v-3a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" /><circle cx="16" cy="20" r="2" fill="currentColor" /></svg>
    ),
    cloud: (
        <svg viewBox="0 0 32 32" fill="none"><path d="M8 22a5 5 0 010-10 7 7 0 0114 0 4 4 0 11-1 8H8z" stroke="currentColor" strokeWidth="2" /><path d="M13 18v4M16 16v6M19 18v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
    ),
    analytics: (
        <svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2" /><line x1="10" y1="22" x2="10" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><line x1="16" y1="22" x2="16" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><line x1="22" y1="22" x2="22" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
    ),
    database: (
        <svg viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="8" rx="10" ry="4" stroke="currentColor" strokeWidth="2" /><path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" stroke="currentColor" strokeWidth="2" /><path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" stroke="currentColor" strokeWidth="1.5" /></svg>
    ),
    network: (
        <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2" /><circle cx="6" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="26" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="6" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="26" cy="24" r="2.5" stroke="currentColor" strokeWidth="1.5" /><line x1="14" y1="14" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" /><line x1="18" y1="14" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" /><line x1="14" y1="18" x2="8" y2="22" stroke="currentColor" strokeWidth="1.5" /><line x1="18" y1="18" x2="24" y2="22" stroke="currentColor" strokeWidth="1.5" /></svg>
    ),
};

const serviceKeys = Object.keys(serviceIcons);

/*
 * Map each slide index to the indices of icons that should be highlighted.
 * Slide 0 (Digital Solutions): mobile, web, design, analytics
 * Slide 1 (Swiss Security): security, cloud, hardware, network
 * Slide 2 (Technical Expertise): erp, geo, agri, database
 */
const slideActiveIcons: number[][] = [
    [0, 1, 2, 9],     // mobile, web, design, analytics
    [7, 8, 4, 11],    // security, cloud, hardware, network
    [3, 5, 6, 10],    // erp, geo, agri, database
];



export function Hero() {
    const { t } = useLanguage();
    const slides = t.heroSlides;
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback(
        (index: number) => {
            if (isTransitioning || index === current) return;
            setIsTransitioning(true);
            setCurrent(index);
            setTimeout(() => setIsTransitioning(false), 800);
        },
        [current, isTransitioning]
    );

    const next = useCallback(() => {
        goTo((current + 1) % slides.length);
    }, [current, goTo, slides.length]);

    useEffect(() => {
        const timer = setInterval(next, SLIDE_INTERVAL);
        return () => clearInterval(timer);
    }, [next]);

    const heroServiceEntries = Object.entries(t.heroServices);
    const activeSet = new Set(slideActiveIcons[current] || []);

    return (
        <section className="hero" id="accueil">
            {/* Background effects */}
            <div className="hero-mesh">
                <div className="mesh-blob mesh-blob--1"></div>
                <div className="mesh-blob mesh-blob--2"></div>
                <div className="mesh-blob mesh-blob--3"></div>
            </div>
            <div className="hero-grid-overlay"></div>
            <div className="hero-particles">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className={`particle particle--${i + 1}`}></div>
                ))}
            </div>

            <div className="container">
                {/* Slides */}
                <div className="hero-slider">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`hero-slide ${i === current ? "active" : ""}`}
                        >
                            <div className="hero-content">
                                <h1>
                                    {slide.titleLine1}{" "}
                                    <span className="gradient-text">{slide.titleHighlight}</span>
                                    <br />
                                    {slide.titleLine2}
                                </h1>
                                <p>{slide.description}</p>
                                <div className="hero-buttons">
                                    <a href="#services" className="btn btn-primary btn--glow">
                                        {slide.ctaPrimary}
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href="#contact" className="btn btn-outline-white">
                                        {slide.ctaSecondary}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right visual — Hexagon honeycomb grid */}
                <div className="hero-visual">
                    <div className="hero-hex-grid">
                        {heroServiceEntries.map(([key], i) => {
                            /* Hex geometry: rows alternate between 4 and 3 columns */
                            const hexW = 100;
                            const hexH = 112;
                            const gapX = 4;
                            const gapY = -24;

                            /* Layout: row 0 = 4 items, row 1 = 4 items offset, row 2 = 4 items */
                            const row = Math.floor(i / 4);
                            const col = i % 4;
                            const offsetX = row % 2 === 1 ? (hexW + gapX) / 2 : 0;
                            const x = col * (hexW + gapX) + offsetX;
                            const y = row * (hexH + gapY);

                            return (
                                <div
                                    key={key}
                                    className={`hero-hex ${activeSet.has(i) ? "hero-hex--active" : ""}`}
                                    style={{
                                        left: `${x}px`,
                                        top: `${y}px`,
                                        animationDelay: `${i * 0.06}s`,
                                    }}
                                >
                                    <div className="hero-hex__shape">
                                        <div className="hero-hex__icon">
                                            {serviceIcons[serviceKeys[i]]}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Dot progress indicators */}
            <div className="hero-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`hero-dot ${i === current ? "active" : ""}`}
                        onClick={() => goTo(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Side navigation arrows */}
            <button
                className="hero-arrow hero-arrow--prev"
                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                className="hero-arrow hero-arrow--next"
                onClick={() => goTo((current + 1) % slides.length)}
                aria-label="Next slide"
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </section>
    );
}
