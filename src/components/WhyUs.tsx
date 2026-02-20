"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

export function WhyUs() {
    const { t } = useLanguage();

    return (
        <section className="wu-split section">
            <div className="container wu-split__container">
                {/* ── Left Column: Intro & Stats ── */}
                <div className="wu-split__left">
                    <AnimatedSection>
                        <div className="wu-split__header">
                            <span className="subtitle-handwriting">{t.whyUs.subtitle}</span>
                            <h2>{t.whyUs.title}</h2>
                            <p>{t.whyUs.description}</p>
                        </div>
                    </AnimatedSection>

                    <div className="wu-split__stats">
                        {t.whyUs.stats.map((stat: { icon: string; number: string; label: string }, i: number) => (
                            <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                                <div className="wu-stat">
                                    <div className="wu-stat__icon">
                                        <i className={stat.icon}></i>
                                    </div>
                                    <div className="wu-stat__content">
                                        <span className="wu-stat__number">{stat.number}</span>
                                        <span className="wu-stat__label">{stat.label}</span>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* ── Right Column: Value Prop Stack ── */}
                <div className="wu-split__right">
                    <div className="wu-stack">
                        {t.whyUs.items.map((item: { icon: string; title: string; description: string }, i: number) => (
                            <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                                <div className="wu-card">
                                    <div className="wu-card__icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="wu-card__content">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
