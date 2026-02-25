"use client";

import React from "react";
import { LanguageProvider } from "@/hooks";
import { Navbar, Footer, PageHero } from "@/components";

export default function BlogPage() {
    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <PageHero
                    title="Blog"
                    subtitle="Coming soon..."
                    image="/assets/images/about-hero-web.jpg"
                />
            </main>
            <Footer />
        </LanguageProvider>
    );
}
