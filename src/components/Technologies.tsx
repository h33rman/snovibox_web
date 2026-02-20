"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

// Track 1 Tech Stack
const techTrack1 = [
    { name: "React", icon: "fi fi-brands-react" },
    { name: "Next.js", icon: "fi fi-brands-node-js" }, // Flaticon UIcons doesn't have nextjs yet, placeholder
    { name: "TypeScript", icon: "fi fi-rr-code-commit" },
    { name: "Node.js", icon: "fi fi-brands-node-js" },
    { name: "Python", icon: "fi fi-brands-python" },
    { name: "Figma", icon: "fi fi-brands-figma" },
];

// Track 2 Tech Stack
const techTrack2 = [
    { name: "Odoo", icon: "fi fi-rr-database" },
    { name: "AWS", icon: "fi fi-brands-aws" },
    { name: "Docker", icon: "fi fi-brands-docker" },
    { name: "PostgreSQL", icon: "fi fi-rr-database" },
    { name: "TailwindCSS", icon: "fi fi-rr-paintbrush" },
    { name: "React Native", icon: "fi fi-brands-apple" },
];

export function Technologies() {
    const { t } = useLanguage();

    return (
        <section className="tech-section section">
            <div className="container">
                <AnimatedSection>
                    <div className="section-header text-center">
                        <span className="subtitle-handwriting">{t.technologies.subtitle}</span>
                        <h2>{t.technologies.title}</h2>
                    </div>
                </AnimatedSection>
            </div>

            <div className="tech-marquee-container">
                {/* ── Track 1 (Left Scrolling) ── */}
                <div className="tech-marquee">
                    <div className="tech-marquee__track tech-marquee__track--left">
                        {/* Render twice for infinite seam */}
                        {[...techTrack1, ...techTrack1].map((tech, i) => (
                            <div key={`t1-${i}`} className="tech-card">
                                <i className={tech.icon}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Track 2 (Right Scrolling) ── */}
                <div className="tech-marquee">
                    <div className="tech-marquee__track tech-marquee__track--right">
                        {/* Render twice for infinite seam */}
                        {[...techTrack2, ...techTrack2].map((tech, i) => (
                            <div key={`t2-${i}`} className="tech-card">
                                <i className={tech.icon}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
