"use client";

import React from "react";
import { LanguageProvider } from "@/hooks";
import {
    Navbar,
    Hero,
    Services,
    WhyUs,
    Technologies,
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
            </main>
            <Footer />
        </LanguageProvider>
    );
}

