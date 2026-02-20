"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

/* ── Flaticon UIcons ── */
const icons = [
    <i key="web" className="fi fi-rr-smartphone"></i>,
    <i key="design" className="fi fi-rr-pencil"></i>,
    <i key="erp" className="fi fi-rr-settings"></i>,
    <i key="hw" className="fi fi-rr-computer"></i>,
    <i key="agri" className="fi fi-rr-leaf"></i>,
    <i key="geo" className="fi fi-rr-map-marker"></i>,
];

/* ── Unsplash Images for Hover Backgrounds ── */
const bgImages = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop", // Web/Mobile
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop", // Design
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", // ERP/Dashboard
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", // Hardware
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop", // Agriculture
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop", // Geolocation
];

export function Services() {
    const { t } = useLanguage();

    // Drag-to-scroll logic
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="svc-carousel-section section">
            <div className="container">
                {/* ── Header ── */}
                <AnimatedSection>
                    <div className="svc-header">
                        <div className="svc-header-left">
                            <span className="subtitle-handwriting">{t.services.subtitle}</span>
                            <h2>{t.services.title}</h2>
                        </div>
                        <div className="svc-header-right">
                            <p>{t.services.description}</p>
                            <Link href="/services" className="btn btn-primary">
                                {t.services.viewAll}
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            {/* ── Horizontal Scrolling Track ── */}
            <div className="svc-track-container">
                <AnimatedSection delay={0.2}>
                    <div
                        className={`svc-track-wrapper ${isDragging ? "is-dragging" : ""}`}
                        ref={scrollRef}
                        onMouseDown={onMouseDown}
                        onMouseLeave={onMouseLeave}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                    >
                        <div className="svc-track">
                            {t.services.items.map(
                                (item: { icon: string; title: string; description: string }, i: number) => (
                                    <div key={i} className="svc-card">
                                        {/* Hover Background Image */}
                                        <div
                                            className="svc-card__bg"
                                            style={{ backgroundImage: `url(${bgImages[i]})` }}
                                        ></div>
                                        <div className="svc-card__overlay"></div>

                                        {/* Card Content */}
                                        <div className="svc-card__content">
                                            <div className="svc-card__icon">
                                                {icons[i]}
                                            </div>
                                            <div className="svc-card__text">
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                            {/* Empty spacer to align the last item properly with container margin */}
                            <div className="svc-spacer"></div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
