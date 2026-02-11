"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, type Locale, type Translations } from "@/constants/i18n";

interface LanguageContextType {
    locale: Locale;
    t: Translations;
    toggleLocale: () => void;
    setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("fr");

    const toggleLocale = useCallback(() => {
        setLocaleState((prev) => (prev === "fr" ? "en" : "fr"));
    }, []);

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale);
    }, []);

    const value: LanguageContextType = {
        locale,
        t: translations[locale],
        toggleLocale,
        setLocale,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
