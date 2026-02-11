"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { COMPANY } from "@/constants";
import { AnimatedSection } from "@/widgets";

export function CtaSection() {
    const { t } = useLanguage();

    return (
        <section className="cta-section" id="contact">
            <div className="cta-section__bg-glow"></div>
            <div className="container">
                <AnimatedSection>
                    <div className="cta-content">
                        <h2>{t.cta.title}</h2>
                        <p>{t.cta.description}</p>
                        <div className="cta-buttons">
                            <a href={`mailto:${COMPANY.email}`} className="btn btn-white btn--glow-white">
                                ✉️ {COMPANY.email}
                            </a>
                            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="btn btn-outline-white">
                                📞 {COMPANY.phone}
                            </a>
                        </div>

                        <div className="cta-contact-info">
                            <div className="cta-contact-item">
                                <span className="icon">📍</span>
                                {COMPANY.address}
                            </div>
                            <div className="cta-contact-item">
                                <span className="icon">📧</span>
                                {COMPANY.emailAlt}
                            </div>
                            <div className="cta-contact-item">
                                <span className="icon">📞</span>
                                {COMPANY.phoneAlt}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
