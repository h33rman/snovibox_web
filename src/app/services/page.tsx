"use client";

import React from "react";
import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/hooks";
import { Navbar, Footer } from "@/components";

function ServicesPageContent() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main>
                {/* ── Page Header ── */}
                <section className="services-page-header">
                    <div className="container">
                        <span className="subtitle-handwriting">{t.services.subtitle}</span>
                        <h1>{t.services.title}</h1>
                        <p>{t.services.description}</p>
                    </div>
                </section>

                {/* ── Services Zig-Zag Layout ── */}
                <section className="services-page-list">
                    {t.services.items.map((service, index) => {
                        // Pad index, e.g., 01, 02, 03
                        const displayNum = (index + 1).toString().padStart(2, '0');

                        return (
                            <div key={index} className="service-row">
                                {/* Giant Background Number */}
                                <div className="service-number">{displayNum}</div>

                                <div className="container">
                                    <div className="service-split-grid">

                                        {/* Content Block */}
                                        <div className="service-text-content">
                                            <div className="icon-wrap">{service.icon}</div>
                                            <h2>{service.title}</h2>
                                            <p>{service.description}</p>

                                            {/* Key Features List */}
                                            {(service as any).features && (
                                                <ul className="service-features-list">
                                                    {(service as any).features.map((feature: string, fIndex: number) => (
                                                        <li key={fIndex}>
                                                            <i className="fi fi-rr-check-circle"></i>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <Link href={`/services/${(service as any).slug}`} className="btn btn-primary btn--glow">
                                                {t.about.cta}
                                            </Link>
                                        </div>

                                        {/* Graphic Placeholder (Can replace with real images later) */}
                                        <div className="service-graphic">
                                            {/* Abstract CSS design inserted via styles, or put an <img> here */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>
            </main>
            <Footer />
        </>
    );
}

export default function ServicesPage() {
    return (
        <LanguageProvider>
            <ServicesPageContent />
        </LanguageProvider>
    );
}
