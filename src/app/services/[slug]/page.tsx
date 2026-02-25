"use client";

import React from "react";
import { useParams } from "next/navigation";
import { LanguageProvider, useLanguage } from "@/hooks";
import { Navbar, Footer } from "@/components";

function ServiceDetailPageContent() {
    const params = useParams();
    const { t } = useLanguage();

    // Find the specific service from translations using the URL slug
    const service = t.services.items.find((item: any) => item.slug === params.slug);

    if (!service) {
        return (
            <>
                <Navbar />
                <main className="service-detail-error">
                    <div className="container" style={{ padding: '160px 0', textAlign: 'center' }}>
                        <h1>Service introuvable</h1>
                        <p>Le service que vous recherchez n'existe pas ou a été déplacé.</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main>
                {/* ── Dynamic Hero ── */}
                <section className="services-page-header">
                    <div className="container">
                        {service.subtitle && (
                            <span className="section-subtitle" style={{ display: 'inline-block', marginBottom: '16px' }}>
                                {service.subtitle}
                            </span>
                        )}
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </div>
                </section>

                {/* ── Content Placeholder ── */}
                <section className="service-detail-content" style={{ padding: '80px 0', background: 'var(--color-snow)' }}>
                    <div className="container">
                        <div style={{ background: 'var(--color-white)', padding: '64px', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                            <h2>Détails du service</h2>
                            <p style={{ marginTop: '24px', color: 'var(--color-gray-500)', fontSize: '1.25rem' }}>
                                (Contenu détaillé pour {service.title} à venir dans la prochaine itération...)
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default function ServiceDetailPage() {
    return (
        <LanguageProvider>
            <ServiceDetailPageContent />
        </LanguageProvider>
    );
}
