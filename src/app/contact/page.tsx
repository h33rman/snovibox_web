"use client";

import React from "react";
import { LanguageProvider, useLanguage } from "@/hooks";
import { Navbar, Footer, PageHero } from "@/components";
import "../../styles/contact-page.css";

function ContactPageContent() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main>
                {/* ── Premium Hero Section ── */}
                <PageHero
                    title={t.contactPage.hero.title}
                    subtitle={t.contactPage.hero.subtitle}
                    image="/assets/images/about-hero-web.jpg" /* Placeholder image for now */
                />

                <section className="contact-main">
                    <div className="container">
                        <div className="contact-grid">
                            {/* Contact Information (Left) */}
                            <div className="contact-info-panel">
                                <span className="subtitle-handwriting">{t.contactPage.hero.badge}</span>
                                <h2>{t.contactPage.info.title}</h2>
                                <p className="contact-info-desc">{t.contactPage.info.description}</p>

                                <div className="contact-details">
                                    <div className="contact-detail-item">
                                        <div className="detail-icon"><i className="fi fi-rr-marker"></i></div>
                                        <div>
                                            <h4>{t.contactPage.info.addressLabel}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: t.contactPage.info.addressValue.replace('\n', '<br/>') }}></p>
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="detail-icon"><i className="fi fi-rr-phone-call"></i></div>
                                        <div>
                                            <h4>{t.contactPage.info.phoneLabel}</h4>
                                            <p><a href="tel:+261342246951">+261 34 22 469 51</a></p>
                                        </div>
                                    </div>
                                    <div className="contact-detail-item">
                                        <div className="detail-icon"><i className="fi fi-rr-envelope"></i></div>
                                        <div>
                                            <h4>{t.contactPage.info.emailLabel}</h4>
                                            <p><a href="mailto:contact@snovibox.com">contact@snovibox.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form (Right) */}
                            <div className="contact-form-panel">
                                <h3>{t.contactPage.form.title}</h3>
                                <p className="form-desc">{t.contactPage.form.description}</p>

                                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group-row">
                                        <div className="form-group">
                                            <input type="text" placeholder={t.contactPage.form.namePlaceholder} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" placeholder={t.contactPage.form.emailPlaceholder} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder={t.contactPage.form.subjectPlaceholder} required />
                                    </div>
                                    <div className="form-group">
                                        <textarea placeholder={t.contactPage.form.messagePlaceholder} rows={5} required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-submit">
                                        {t.contactPage.form.submitBtn} <i className="fi fi-rr-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default function ContactPage() {
    return (
        <LanguageProvider>
            <ContactPageContent />
        </LanguageProvider>
    );
}
