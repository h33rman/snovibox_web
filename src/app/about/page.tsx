"use client";

import React from "react";
import { LanguageProvider, useLanguage } from "@/hooks";
import { Navbar, Footer, PageHero } from "@/components";
import Link from "next/link";
import "../../styles/about-page.css";

function AboutPageContent() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main>
                {/* ── Premium Hero Section ── */}
                <PageHero
                    title={t.aboutPage.hero.title}
                    subtitle={t.aboutPage.hero.subtitle}
                    description={t.aboutPage.hero.description}
                    image="/assets/images/about-hero-web.jpg"
                />

                {/* ── Immersive Story Section ── */}
                <section className="about-story">
                    <div className="container">
                        <div className="story-grid">
                            <div className="story-image-collage">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team collaborating" className="story-img-main" />
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Statistics and planning" className="story-img-overlap" />
                            </div>
                            <div className="story-content">
                                <div className="section-pill">{t.aboutPage.story.badge}</div>
                                <h2>{t.aboutPage.story.headline}</h2>
                                {t.aboutPage.story.paragraphs.map((p: string, idx: number) => (
                                    <p key={idx}>{p}</p>
                                ))}

                                <div className="progress-bars-container">
                                    {t.aboutPage.story.progressBars?.map((bar: any, idx: number) => (
                                        <div key={idx} className="progress-item">
                                            <div className="progress-header">
                                                <span>{bar.label}</span>
                                                <span>{bar.percentage}</span>
                                            </div>
                                            <div className="progress-track">
                                                <div className="progress-fill" style={{ width: bar.percentage }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Impactful Stats Ticker ── */}
                <section className="about-stats">
                    <div className="container">
                        <div className="stats-grid">
                            {t.aboutPage.stats.map((stat: any, idx: number) => (
                                <div key={idx} className="stat-item">
                                    <h3>{stat.number}</h3>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Minimalist Values Grid ── */}
                <section className="about-values">
                    <div className="container">
                        <div className="values-header">
                            <div className="section-pill">{t.aboutPage.values.badge}</div>
                            <h2>{t.aboutPage.values.title}</h2>
                        </div>
                        <div className="values-grid">
                            {t.aboutPage.values.items.map((val: any, i: number) => (
                                <div key={i} className="value-card">
                                    <div className="value-icon">
                                        <i className={`fi ${val.icon}`}></i>
                                    </div>
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Clean Minimal CTA ── */}
                <section className="service-detail-cta" style={{ background: 'var(--color-bg)', padding: '120px 0', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '24px', letterSpacing: '-1px' }}>
                            {t.aboutPage.cta.title}
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-gray-500)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                            {t.aboutPage.cta.description}
                        </p>
                        <Link href="/contact" className="btn btn-primary btn-lg" style={{ padding: '16px 40px', fontSize: '1.125rem' }}>
                            {t.aboutPage.cta.buttonText}
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}

export default function AboutPage() {
    return (
        <LanguageProvider>
            <AboutPageContent />
        </LanguageProvider>
    );
}
