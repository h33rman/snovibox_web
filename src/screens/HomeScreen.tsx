"use client";

import React from "react";
import { LanguageProvider } from "@/hooks";
import {
    Navbar,
    Hero,
    Services,
    WhyUs,
    Technologies,
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
                <Technologies />
                <CtaSection />
            </main>
            <Footer />
        </LanguageProvider>
    );
}

