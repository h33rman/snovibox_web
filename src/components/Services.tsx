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


    // Pagination logic
    const [activeIndex, setActiveIndex] = useState(0);

    const checkScrollProgress = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Calculate which card is currently the most visible
        const maxScroll = scrollWidth - clientWidth;
        const scrollPercentage = scrollLeft / maxScroll;
        const totalItems = t.services.items.length;

        let newIndex = Math.round(scrollPercentage * (totalItems - 1));
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= totalItems) newIndex = totalItems - 1;
        setActiveIndex(newIndex);
    };

    const scrollToSlide = (index: number) => {
        if (!scrollRef.current) return;
        const cardWidth = 380 + 24; // Card width + gap (approximate, fine for modern smooth behavior)
        scrollRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth"
        });
        setActiveIndex(index);
    };

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
            <div className="svc-track-container" onMouseLeave={onMouseLeave}>
                <AnimatedSection delay={0.2}>
                    <div
                        className={`svc-track-wrapper ${isDragging ? "is-dragging" : ""}`}
                        ref={scrollRef}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onScroll={checkScrollProgress}
                    >
                        <div className="svc-track">
                            {t.services.items.map(
                                (item: { subtitle?: string; title: string; description: string }, i: number) => (
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

                    {/* ── Navigation (Arrows + Dots) ── */}
                    <div className="svc-navigation">
                        <button
                            className="svc-nav-btn"
                            aria-label="Previous"
                            onClick={() => scrollToSlide(activeIndex - 1)}
                            disabled={activeIndex === 0}
                        >
                            <i className="fi fi-rr-arrow-small-left"></i>
                        </button>

                        <div className="svc-pagination">
                            {t.services.items.map((_: any, i: number) => (
                                <button
                                    key={`dot-${i}`}
                                    className={`svc-dot ${activeIndex === i ? "active" : ""}`}
                                    onClick={() => scrollToSlide(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            className="svc-nav-btn"
                            aria-label="Next"
                            onClick={() => scrollToSlide(activeIndex + 1)}
                            disabled={activeIndex === t.services.items.length - 1}
                        >
                            <i className="fi fi-rr-arrow-small-right"></i>
                        </button>
                    </div>

                </AnimatedSection>
            </div>
        </section>
    );
}
