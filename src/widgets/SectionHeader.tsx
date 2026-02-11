"use client";

import React from "react";

interface SectionHeaderProps {
    badge: string;
    title: string;
    description: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
    return (
        <div className="section-header">
            <span className="badge">{badge}</span>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
