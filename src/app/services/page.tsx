"use client";

import React from "react";
import { LanguageProvider } from "@/hooks";
import { Navbar, Footer } from "@/components";

export default function ServicesPage() {
    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <section className="page-placeholder">
                    <div className="container">
                        <h1>Services</h1>
                        <p>Coming soon...</p>
                    </div>
                </section>
            </main>
            <Footer />
        </LanguageProvider>
    );
}
