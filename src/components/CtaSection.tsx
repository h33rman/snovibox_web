"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { COMPANY } from "@/constants";
import { AnimatedSection } from "@/widgets";

export function CtaSection() {
    const { t } = useLanguage();

    return (
        <section className="cta-section section" id="contact">
            {/* Ambient Background Glow */}
            <div className="cta-section__glow"></div>

            <div className="container cta-container">
                {/* ── Left Column: Contact Info & Messaging ── */}
                <div className="cta-left">
                    <AnimatedSection>
                        <div className="cta-header">
                            <span className="badge">{t.cta.badge}</span>
                            <span className="subtitle-handwriting">{t.cta.subtitle}</span>
                            <h2>{t.cta.title}</h2>
                            <p>{t.cta.description}</p>
                        </div>
                    </AnimatedSection>

                    <div className="cta-info-list">
                        {t.cta.info.map((item: { icon: string; text: string }, i: number) => (
                            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                                <div className="cta-info-item">
                                    <div className="cta-info-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <span>{item.text}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* ── Right Column: Premium Action Card ── */}
                <div className="cta-right">
                    <AnimatedSection delay={0.3}>
                        <div className="cta-action-card">
                            <h3>{t.cta.actionTitle}</h3>
                            <p>{t.cta.actionDesc}</p>

                            <div className="cta-buttons">
                                <a href={`mailto:${COMPANY.email}`} className="btn btn-primary btn--full">
                                    <i className="fi fi-rr-envelope"></i>
                                    {t.cta.emailBtn}
                                </a>
                                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="btn btn-secondary btn--full">
                                    <i className="fi fi-rr-phone-call"></i>
                                    {t.cta.phoneBtn}
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
