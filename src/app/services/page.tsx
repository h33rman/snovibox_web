"use client";

import React from "react";
import Link from "next/link";
import { LanguageProvider, useLanguage } from "@/hooks";
import { Navbar, Footer, PageHero } from "@/components";

function ServicesPageContent() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main>
                {/* ── Page Header ── */}
                <PageHero
                    title={t.services.title}
                    subtitle={t.services.subtitle}
                    description={t.services.description}
                    image="/assets/images/about-hero-web.jpg" /* Default placeholder for now */
                />

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
                                            {/* Beautiful Handwritten Subtitle */}
                                            {(service as any).subtitle && (
                                                <span className="section-subtitle">{(service as any).subtitle}</span>
                                            )}

                                            <h2>{service.title}</h2>
                                            <p>{service.description}</p>

                                            {/* Key Features List */}
                                            {(service as any).features && (
                                                <ul className="service-features-list">
                                                    {(service as any).features.map((feature: { icon: string; text: string }, fIndex: number) => (
                                                        <li key={fIndex}>
                                                            <i className={`fi ${feature.icon}`}></i>
                                                            {feature.text}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            <Link href={`/services/${(service as any).slug}`} className="btn btn-primary btn--glow">
                                                {t.about.cta}
                                            </Link>
                                        </div>

                                        {/* Dynamic Masonry Collage Graphic */}
                                        <div className="service-graphic-collage">
                                            <div
                                                className="collage-item img-1"
                                                style={{ backgroundImage: `url('/assets/images/placeholder/collage-main.jpg')` }}
                                            ></div>
                                            <div
                                                className="collage-item img-2"
                                                style={{ backgroundImage: `url('/assets/images/placeholder/collage-tr.jpg')` }}
                                            ></div>
                                            <div
                                                className="collage-item img-3"
                                                style={{ backgroundImage: `url('/assets/images/placeholder/collage-br.jpg')` }}
                                            ></div>
                                            <div
                                                className="collage-item img-4"
                                                style={{ backgroundImage: `url('/assets/images/placeholder/collage-bl.jpg')` }}
                                            ></div>
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
