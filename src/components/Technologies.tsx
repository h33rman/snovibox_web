"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { AnimatedSection } from "@/widgets";

// Track 1 Tech Stack
const techTrack1 = [
    { name: "React", img: "/assets/logos/tech/react-native-1.svg" },
    { name: "Next.js", img: "/assets/logos/tech/next-js.svg" },
    { name: "Node.js", img: "/assets/logos/tech/nodejs-ar21.svg" },
    { name: "Python", img: "/assets/logos/tech/python-5.svg" },
    { name: "PHP", img: "/assets/logos/tech/php-6.svg" },
    { name: "Figma", img: "/assets/logos/tech/figma-icon.svg" },
];

// Track 2 Tech Stack
const techTrack2 = [
    { name: "Odoo", img: "/assets/logos/tech/odoo.svg" },
    { name: "AWS", img: "/assets/logos/tech/aws-2.svg" },
    { name: "Docker", img: "/assets/logos/tech/docker-4.svg" },
    { name: "PostgreSQL", img: "/assets/logos/tech/postgresql-inc.svg" },
    { name: "TailwindCSS", img: "/assets/logos/tech/tailwindcss.svg" },
    { name: "Flutter", img: "/assets/logos/tech/flutter-logo.svg" },
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
                                <img src={tech.img} alt={tech.name} className="tech-icon-img" />
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
                                <img src={tech.img} alt={tech.name} className="tech-icon-img" />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
