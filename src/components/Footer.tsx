"use client";

import React from "react";
import { useLanguage } from "@/hooks";
import { COMPANY } from "@/constants";

export function Footer() {
    const { t } = useLanguage();

    const navLinks = [
        { label: t.nav.home, href: "/" },
        { label: t.nav.services, href: "/services" },
        { label: t.nav.about, href: "/about" },
        { label: t.nav.blog, href: "/blog" },
    ];

    return (
        <footer className="footer">
            {/* ── Top CTA Block ── */}
            <div className="container">
                <div className="footer-cta-card">
                    <div className="footer-cta-content">
                        <h2>{t.footer.cta.title}</h2>
                        <p>{t.footer.cta.description}</p>
                    </div>
                    <div className="footer-cta-action">
                        <a href={`mailto:${COMPANY.email}`} className="btn btn-primary btn--glow">
                            {t.footer.cta.buttonText}
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Main Footer Architecture ── */}
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/assets/logos/website/wide-logo-white.svg" alt="Snovibox Logo" style={{ height: '64px', width: 'auto' }} />
                        </div>
                        <span className="subtitle-handwriting footer-slogan">{t.footer.description}</span>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.columns.navigation}</h4>
                        <ul>
                            {navLinks.map((link, i) => (
                                <li key={i}><a href={link.href}>{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>{t.footer.columns.services}</h4>
                        <ul>
                            {t.footer.serviceLinks.map((label, i) => (
                                <li key={i}><a href="#services">{label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col footer-contact-col">
                        <h4>{t.footer.columns.contact}</h4>
                        <ul>
                            <li>
                                <a href={`mailto:${COMPANY.email}`}>
                                    <i className="fi fi-rr-envelope"></i>
                                    {COMPANY.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
                                    <i className="fi fi-rr-phone-call"></i>
                                    {COMPANY.phone}
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <i className="fi fi-rr-marker"></i>
                                    Antananarivo, Madagascar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} {COMPANY.fullName}. {t.footer.copyright}</p>
                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook" title="Facebook">
                            <i className="fi fi-brands-facebook"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn" title="LinkedIn">
                            <i className="fi fi-brands-linkedin"></i>
                        </a>
                        <a href="#" aria-label="Instagram" title="Instagram">
                            <i className="fi fi-brands-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
