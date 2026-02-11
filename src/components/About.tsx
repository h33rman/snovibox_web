"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

export function About() {
    const { t } = useLanguage();

    return (
        <section className="about section" id="apropos">
            <div className="container">
                <div className="about-grid">
                    <AnimatedSection>
                        <div className="about-content">
                            <span className="badge">{t.about.badge}</span>
                            <h2>{t.about.title}</h2>
                            {t.about.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                            <a href="#contact" className="btn btn-primary">
                                {t.about.cta}
                            </a>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="about-stats">
                            {t.about.stats.map((stat, i) => (
                                <div className="about-stat-card" key={i}>
                                    <span className="stat-icon">{stat.icon}</span>
                                    <span className="stat-number">{stat.number}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
