"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollPosition, useLanguage } from "@/hooks";

export function Navbar() {
    const { isScrolled } = useScrollPosition();
    const { locale, toggleLocale, t } = useLanguage();
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: t.nav.home, href: "/" },
        { label: t.nav.services, href: "/services" },
        { label: t.nav.about, href: "/about" },
        { label: t.nav.blog, href: "/blog" },
    ];

    return (
        <>
            {/* Animated accent line */}
            <div className={`nav-accent-line ${isScrolled ? "solid" : ""}`}></div>

            <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
                <div className="container">
                    {/* Logo */}
                    <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
                        <img
                            src={isScrolled ? "/assets/logos/website/wide-logo-on-white.svg" : "/assets/logos/website/wide-logo-white.svg"}
                            alt="Snovibox Logo"
                            className="nav-brand-img"
                            style={{ height: "36px", width: "auto" }}
                        />
                    </Link>

                    {/* Center links */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-link ${pathname === link.href ? "active" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="nav-actions">
                        <Link href="/contact" className="btn btn-primary nav-cta-btn">
                            {t.nav.cta}
                        </Link>
                        <button
                            className="lang-switcher"
                            onClick={toggleLocale}
                            aria-label="Toggle language"
                        >
                            {locale.toUpperCase()}
                            <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Hamburger */}
                    <button
                        className="nav-mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        <span style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}}></span>
                        <span style={mobileOpen ? { opacity: 0 } : {}}></span>
                        <span style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                        {link.label}
                    </Link>
                ))}
                <div className="mobile-menu__bottom">
                    <button className="lang-switcher lang-switcher--mobile" onClick={toggleLocale}>
                        <span className="lang-switcher__flag">{locale === "fr" ? "🇫🇷" : "🇬🇧"}</span>
                        {locale === "fr" ? "Français" : "English"}
                    </button>
                    <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                        {t.nav.cta}
                    </Link>
                </div>
            </div>
        </>
    );
}
