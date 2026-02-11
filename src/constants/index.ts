import { NavLink, Service, TrustPoint, Stat, FooterColumn } from "@/models";

export const NAV_LINKS: NavLink[] = [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#apropos" },
    { label: "Pourquoi nous", href: "#confiance" },
    { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
    {
        icon: "📱",
        title: "Applications Web & Mobile",
        description:
            "Développement d'applications sur mesure, multi-plateformes, adaptées à vos processus métier et à votre identité.",
    },
    {
        icon: "🎨",
        title: "UX/UI Design",
        description:
            "Conception d'interfaces intuitives et élégantes qui offrent une expérience utilisateur optimale sur tous les écrans.",
    },
    {
        icon: "⚙️",
        title: "ERP Odoo",
        description:
            "Implémentation et configuration de l'ERP Odoo pour digitaliser et automatiser la gestion de votre entreprise.",
    },
    {
        icon: "🖥️",
        title: "Déploiement Hardware",
        description:
            "Mise en place et configuration de matériel informatique adapté à vos infrastructures sur le terrain.",
    },
    {
        icon: "🌾",
        title: "Solutions Agriculture & Élevage",
        description:
            "Outils digitaux dédiés aux secteurs agriculture, pisciculture et élevage pour optimiser la production.",
    },
    {
        icon: "📍",
        title: "Géolocalisation",
        description:
            "Solutions de tracking et géolocalisation en temps réel pour la gestion de flottes, terrains et ressources.",
    },
];

export const TRUST_POINTS: TrustPoint[] = [
    {
        icon: "🇨🇭",
        title: "Hébergement Suisse",
        description:
            "Vos données sont stockées en Suisse, garantissant une protection maximale grâce à une législation stricte.",
    },
    {
        icon: "🎯",
        title: "Solutions Sur Mesure",
        description:
            "Chaque projet est unique. Nous développons des solutions entièrement adaptées à vos besoins spécifiques.",
    },
    {
        icon: "📱",
        title: "Multi-Plateforme",
        description:
            "Applications web, mobile et desktop. Une seule équipe pour toutes vos plateformes, avec cohérence et qualité.",
    },
    {
        icon: "🤝",
        title: "Expertise Locale",
        description:
            "Basés à Madagascar, nous combinons expertise technique internationale et connaissance approfondie du marché local.",
    },
];

export const ABOUT_STATS: Stat[] = [
    { icon: "🚀", number: "2020", label: "Année de création" },
    { icon: "👨‍💻", number: "10+", label: "Experts dans l'équipe" },
    { icon: "🌍", number: "5+", label: "Secteurs d'activité" },
    { icon: "🇨🇭", number: "100%", label: "Données en Suisse" },
];

export const HERO_SERVICES = [
    { icon: "📱", label: "Mobile" },
    { icon: "🌐", label: "Web" },
    { icon: "🎨", label: "Design" },
    { icon: "⚙️", label: "ERP" },
    { icon: "🖥️", label: "Hardware" },
    { icon: "📍", label: "Géo" },
    { icon: "🌾", label: "Agri" },
    { icon: "🔒", label: "Sécurité" },
    { icon: "☁️", label: "Cloud" },
];

export const COMPANY = {
    name: "Snovibox",
    fullName: "Snovibox SARL",
    tagline: "Solutions Digitales Durables",
    email: "info@snovibox.com",
    emailAlt: "snovibox@gmail.com",
    phone: "+261 34 22 469 51",
    phoneAlt: "+261 034 67 818 28",
    address: "VR 62 AAB Mahazoarivo, Antananarivo 101, Madagascar",
    founded: 2020,
};

export const FOOTER_COLUMNS: FooterColumn[] = [
    {
        title: "Navigation",
        links: [
            { label: "Accueil", href: "#accueil" },
            { label: "Services", href: "#services" },
            { label: "À propos", href: "#apropos" },
            { label: "Pourquoi nous", href: "#confiance" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "Applications Web", href: "#services" },
            { label: "Applications Mobile", href: "#services" },
            { label: "UX/UI Design", href: "#services" },
            { label: "ERP Odoo", href: "#services" },
            { label: "Hardware", href: "#services" },
        ],
    },
    {
        title: "Contact",
        links: [
            { label: "info@snovibox.com", href: "mailto:info@snovibox.com" },
            { label: "+261 34 22 469 51", href: "tel:+261342246951" },
            { label: "+261 034 67 818 28", href: "tel:+261346781828" },
            { label: "Antananarivo, Madagascar", href: "#contact" },
        ],
    },
];
