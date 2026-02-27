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

                {/* ── Advanced Solutions Section (Crafto Style Image 1) ── */}
                <section className="about-advanced">
                    <div className="advanced-bg-accent"></div>
                    <div className="container">
                        <div className="advanced-grid">
                            <div className="advanced-boxes-wrapper">
                                <div className="advanced-boxes-grid">
                                    {t.aboutPage.advancedSolutions.boxes.map((box: any, idx: number) => (
                                        <div key={idx} className="advanced-box-card">
                                            <div className="box-icon">
                                                <i className={`fi ${box.icon}`}></i>
                                            </div>
                                            <h3 dangerouslySetInnerHTML={{ __html: box.title.replace('\n', '<br/>') }}></h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="advanced-content">
                                <span className="subtitle-handwriting" style={{ display: 'block', marginBottom: '16px' }}>
                                    {t.aboutPage.advancedSolutions.badge}
                                </span>
                                <h2>{t.aboutPage.advancedSolutions.title}</h2>

                                <ul className="advanced-features-list">
                                    {t.aboutPage.advancedSolutions.features.map((feat: any, idx: number) => (
                                        <li key={idx}>
                                            <div className="feat-icon">
                                                <i className="fi fi-rr-check"></i>
                                            </div>
                                            <div className="feat-text">
                                                <h4>{feat.title}</h4>
                                                <p>{feat.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="advanced-actions">
                                    <Link href="/services" className="btn btn-primary btn-pill">
                                        <i className="fi fi-rr-apps" style={{ marginRight: '8px' }}></i> {t.aboutPage.advancedSolutions.btnExplore}
                                    </Link>
                                    <Link href="/contact" className="btn btn-ghost">
                                        <i className="fi fi-rr-envelope"></i> {t.aboutPage.advancedSolutions.btnContact}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Photo Gallery Slider ── */}
                <section className="about-gallery">
                    <div className="gallery-marquee">
                        <div className="gallery-track">
                            {[
                                "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
                                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                            ].map((src, idx) => (
                                <img key={idx} src={src} alt={`Snovibox Gallery ${idx + 1}`} className={`gal-img ${idx % 2 === 0 ? 'img-down' : 'img-up'}`} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Light Stats Ticker (Crafto Style Image 2) ── */}
                <section className="about-stats-light">
                    <div className="container">
                        <div className="stats-light-grid">
                            {t.aboutPage.stats.map((stat: any, idx: number) => (
                                <div key={idx} className="stat-light-item">
                                    <h4>{stat.title}</h4>
                                    <p>{stat.description}</p>
                                    <h3>{stat.number}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Creative Process Section (Crafto Style Image 3) ── */}
                <section className="about-process">
                    <div className="container">
                        <div className="process-grid">
                            <div className="process-content">
                                <span className="subtitle-handwriting" style={{ display: 'block', marginBottom: '16px' }}>
                                    {t.aboutPage.creativeProcess.badge}
                                </span>
                                <h2>{t.aboutPage.creativeProcess.title}</h2>

                                <div className="process-timeline">
                                    {t.aboutPage.creativeProcess.steps.map((step: any, idx: number) => (
                                        <div key={idx} className="timeline-item">
                                            <div className="timeline-number">{step.number}</div>
                                            <div className="timeline-text">
                                                <h4>{step.title}</h4>
                                                <p>{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="process-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Professional" />
                                <div className="experience-badge">
                                    <h3>{t.aboutPage.creativeProcess.experienceCard.number}</h3>
                                    <p>{t.aboutPage.creativeProcess.experienceCard.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Core Team Section ── */}
                <section className="about-team">
                    <div className="container">
                        <div className="team-header text-center">
                            <span className="subtitle-handwriting" style={{ display: 'inline-block', marginBottom: '16px' }}>
                                {t.aboutPage.coreTeam.badge}
                            </span>
                            <h2>{t.aboutPage.coreTeam.title}</h2>
                        </div>

                        <div className="team-grid">
                            {t.aboutPage.coreTeam.members.map((member: any, idx: number) => (
                                <div key={idx} className="team-card-minimal">
                                    <div className="team-image-wrapper-minimal">
                                        <img src={member.image} alt={member.name} />
                                        <div className="team-socials-minimal">
                                            <a href="#" className="social-link"><i className="fi fi-brands-linkedin"></i></a>
                                            <a href="#" className="social-link"><i className="fi fi-brands-twitter"></i></a>
                                        </div>
                                    </div>
                                    <div className="team-info-minimal">
                                        <h4>{member.name}</h4>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Logo Strip (Crafto Style Image 3) ── */}
                <section className="about-clients-strip">
                    <div className="container">
                        <div className="clients-flex">
                            <span className="client-logo">Walmart<i className="fi fi-rr-star" style={{ fontSize: '12px', marginLeft: '4px', position: 'relative', top: '-10px' }}></i></span>
                            <span className="client-logo" style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px' }}>NETFLIX</span>
                            <span className="client-logo" style={{ fontStyle: 'italic', fontWeight: 800 }}>in<span style={{ fontWeight: 400 }}>Vision</span></span>
                            <span className="client-logo" style={{ color: '#6001d2' }}>YAHOO!</span>
                            <span className="client-logo" style={{ fontWeight: 700 }}>amazon</span>
                        </div>
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
