import React from "react";
import "../styles/page-hero.css";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, description, image }) => {
    return (
        <section
            className="page-hero"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('${image}')`
            }}
        >
            <div className="container">
                <h1>{title}</h1>
                {subtitle && <h3 className="hero-subtitle">{subtitle}</h3>}
                {description && <p>{description}</p>}
            </div>
            {/* Wavy shape divider (Single Wave) */}
            <div className="custom-shape-divider-bottom">
                <svg className="waves single-wave" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#ffffff" />
                    </g>
                </svg>
            </div>
        </section>
    );
};
