"use client";

import React from "react";
import { LanguageProvider } from "@/hooks";
import { Navbar, Footer } from "@/components";

export default function AboutPage() {
    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <section className="page-placeholder">
                    <div className="container">
                        <h1>About Us</h1>
                        <p>Coming soon...</p>
                    </div>
                </section>
            </main>
            <Footer />
        </LanguageProvider>
    );
}
