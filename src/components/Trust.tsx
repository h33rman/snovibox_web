"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { SectionHeader, AnimatedSection } from "@/widgets";

export function Trust() {
    const { t } = useLanguage();

    return (
        <section className="trust section" id="confiance">
            <div className="container">
                <AnimatedSection>
                    <SectionHeader
                        badge={t.trust.badge}
                        title={t.trust.title}
                        description={t.trust.description}
                    />
                </AnimatedSection>

                <div className="trust-grid">
                    {t.trust.items.map((point, i) => (
                        <AnimatedSection key={i} delay={i * 0.12}>
                            <div className="trust-card">
                                <div className="trust-icon">{point.icon}</div>
                                <h4>{point.title}</h4>
                                <p>{point.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
