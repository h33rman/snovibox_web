"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

const stats = [
    { icon: "🚀", numberKey: "2020", labelKey: "yearFounded" },
    { icon: "👨‍💻", numberKey: "10+", labelKey: "teamExperts" },
    { icon: "🌍", numberKey: "5+", labelKey: "industrySectors" },
    { icon: "🇨🇭", numberKey: "100%", labelKey: "swissData" },
];

const values = [
    {
        icon: "🇨🇭",
        titleKey: "swissHosting",
        descKey: "swissHostingDesc",
    },
    {
        icon: "🎯",
        titleKey: "customSolutions",
        descKey: "customSolutionsDesc",
    },
    {
        icon: "📱",
        titleKey: "multiPlatform",
        descKey: "multiPlatformDesc",
    },
    {
        icon: "🤝",
        titleKey: "localExpertise",
        descKey: "localExpertiseDesc",
    },
];

export function WhyUs() {
    const { t } = useLanguage();

    return (
        <section className="why-us section">
            <div className="container">
                {/* Stats bar */}
                <AnimatedSection>
                    <div className="why-us__stats">
                        {t.whyUs.stats.map((stat: { icon: string; number: string; label: string }, i: number) => (
                            <div key={i} className="why-us__stat">
                                <span className="why-us__stat-icon">{stat.icon}</span>
                                <span className="why-us__stat-number">{stat.number}</span>
                                <span className="why-us__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Value props */}
                <AnimatedSection delay={0.2}>
                    <div className="why-us__header">
                        <span className="badge">{t.whyUs.badge}</span>
                        <h2>{t.whyUs.title}</h2>
                        <p>{t.whyUs.description}</p>
                    </div>
                </AnimatedSection>

                <div className="why-us__grid">
                    {t.whyUs.items.map((item: { icon: string; title: string; description: string }, i: number) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <div className="why-us__card">
                                <div className="why-us__card-icon">
                                    <span>{item.icon}</span>
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
