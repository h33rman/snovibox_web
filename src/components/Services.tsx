"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

/* ── Inline SVG icons (flaticon-style) ── */
const ServiceIcons = {
    webMobile: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="8" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2.5" />
            <rect x="14" y="42" width="20" height="2" rx="1" fill="currentColor" />
            <line x1="24" y1="38" x2="24" y2="42" stroke="currentColor" strokeWidth="2.5" />
            <rect x="38" y="22" width="20" height="34" rx="3" stroke="currentColor" strokeWidth="2.5" />
            <line x1="45" y1="50" x2="51" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
    design: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
            <circle cx="32" cy="32" r="4" fill="currentColor" />
            <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="50" x2="32" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="6" y1="32" x2="14" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="50" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
    erp: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2.5" />
            <line x1="8" y1="20" x2="56" y2="20" stroke="currentColor" strokeWidth="2.5" />
            <line x1="24" y1="20" x2="24" y2="56" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="16" cy="14" r="2" fill="currentColor" />
            <rect x="30" y="28" width="18" height="4" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="30" y="38" width="12" height="4" rx="1" fill="currentColor" opacity="0.5" />
            <rect x="30" y="48" width="15" height="4" rx="1" fill="currentColor" opacity="0.5" />
        </svg>
    ),
    hardware: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="12" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="32" cy="30" r="10" stroke="currentColor" strokeWidth="2.5" />
            <path d="M32 20v2M32 38v2M22 30h2M40 30h2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="52" x2="44" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="26" y1="48" x2="26" y2="52" stroke="currentColor" strokeWidth="2" />
            <line x1="38" y1="48" x2="38" y2="52" stroke="currentColor" strokeWidth="2" />
        </svg>
    ),
    agriculture: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 56V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M32 32C32 24 24 16 16 12C16 22 22 30 32 32Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" />
            <path d="M32 38C32 30 40 22 48 18C48 28 42 36 32 38Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2.5" />
            <line x1="22" y1="56" x2="42" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    ),
    geolocation: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 6C22 6 14 14 14 24C14 38 32 58 32 58C32 58 50 38 50 24C50 14 42 6 32 6Z" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="32" cy="24" r="3" fill="currentColor" />
        </svg>
    ),
};

const iconKeys: (keyof typeof ServiceIcons)[] = [
    "webMobile",
    "design",
    "erp",
    "hardware",
    "agriculture",
    "geolocation",
];

export function Services() {
    const { t } = useLanguage();
    // Show only first 3 services on the home teaser
    const featured = t.services.items.slice(0, 3);

    return (
        <section className="services-intro section">
            <div className="container">
                {/* Section intro — left-aligned with CTA */}
                <AnimatedSection>
                    <div className="services-intro__top">
                        <div className="services-intro__text">
                            <span className="badge">{t.services.badge}</span>
                            <h2>{t.services.title}</h2>
                            <p>{t.services.description}</p>
                        </div>
                        <div className="services-intro__action">
                            <Link href="/services" className="btn btn-primary btn--glow">
                                {t.services.viewAll} →
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Bento grid — 3 featured services */}
                <div className="services-bento">
                    {featured.map((service, i) => (
                        <AnimatedSection key={i} delay={i * 0.15}>
                            <div className={`services-bento__card ${i === 0 ? "services-bento__card--featured" : ""}`}>
                                <div className="services-bento__icon">
                                    {ServiceIcons[iconKeys[i]]}
                                </div>
                                <div className="services-bento__content">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                                <div className="services-bento__number">
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Remaining services as compact pills */}
                <AnimatedSection delay={0.5}>
                    <div className="services-intro__more">
                        <span className="services-intro__more-label">{t.services.alsoOffering}</span>
                        <div className="services-intro__pills">
                            {t.services.items.slice(3).map((service, i) => (
                                <div key={i} className="services-pill">
                                    <span className="services-pill__icon">
                                        {ServiceIcons[iconKeys[i + 3]]}
                                    </span>
                                    {service.title}
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
