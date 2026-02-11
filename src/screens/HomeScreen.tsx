"use client";

import React from "react";
import { LanguageProvider } from "@/hooks";
import {
    Navbar,
    Hero,
    Services,
    WhyUs,
    CtaSection,
    Footer,
} from "@/components";

export function HomeScreen() {
    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <WhyUs />
                <CtaSection />
            </main>
            <Footer />
        </LanguageProvider>
    );
}

