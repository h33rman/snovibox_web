export interface NavLink {
    label: string;
    href: string;
}

export interface Service {
    icon: string;
    title: string;
    description: string;
}

export interface TrustPoint {
    icon: string;
    title: string;
    description: string;
}

export interface Stat {
    icon: string;
    number: string;
    label: string;
}

export interface HeroService {
    icon: string;
    label: string;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}
