import { MenuItem } from "@/types/menu"
import {
    Code,
    Smartphone,
    Palette,
    ShoppingCart,
    BarChart,
    Database
} from "lucide-react"

export const menuItems: MenuItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services & Solutions",
        submenu: [
            {
                title: "Offshore Software Development",
                description: "Build modern web apps",
                href: "/services/offshore-software-development",
                icon: Code,
            },
            {
                title: "Enterprise Web Platforms",
                description: "iOS & Android development",
                href: "/services/enterprise-web-platforms",
                icon: Smartphone,
            },
            {
                title: "Custom Web & Mobile Platforms",
                description: "Beautiful user interfaces",
                href: "/services/custom-web-mobile-platforms",
                icon: Palette,
            },
            {
                title: "Legacy Modernization",
                description: "Online store solutions",
                href: "/services/legacy-modernization",
                icon: ShoppingCart,
            },
            {
                title: "SaaS & Internal Tools",
                description: "Business insights",
                href: "/services/saas-internal-tools",
                icon: BarChart,
            },
            {
                title: "AI Search Visibility (AI SEO)",
                description: "Scalable infrastructure",
                href: "/services/ai-search-visibility",
                icon: Database,
            },
            {
                title: "AI Automation & Workflows",
                description: "Scalable infrastructure",
                href: "/services/ai-automation-workflows",
                icon: Database,
            },
            {
                title: "UI/UX Experience Design",
                description: "Scalable infrastructure",
                href: "/services/ui-ux-experience-design",
                icon: Database,
            },
            {
                title: "Application Modernization",
                description: "Scalable infrastructure",
                href: "/services/application-modernization",
                icon: Database,
            },
            {
                title: "Startup Partnership",
                description: "Scalable infrastructure",
                href: "/services/startup-partnership",
                icon: Database,
            },
            {
                title: "Cloud & DevOps",
                description: "Scalable infrastructure",
                href: "/services/cloud-devops",
                icon: Database,
            },
            {
                title: "Staff Augmentation",
                description: "Scalable infrastructure",
                href: "/services/staff-augmentation",
                icon: Database,
            },
            {
                title: "IT Consulting & Support",
                description: "Scalable infrastructure",
                href: "/services/it-consulting-support",
                icon: Database,
            },
            {
                title: "HRMS Software Solutions",
                description: "Scalable infrastructure",
                href: "/services/hrms-software-solutions",
                icon: Database,
            },
            {
                title: "Education Social Media Solutions",
                description: "Scalable infrastructure",
                href: "/services/education-social-media-solutions",
                icon: Database,
            },
            {
                title: "Custom Headless CMS Solutions",
                description: "Scalable infrastructure",
                href: "/services/custom-headless-cms-solutions",
                icon: Database,
            },
        ],
    },
    {
        title: "Industries",
        submenu: [
            {
                title: "Web Development",
                description: "Build modern web apps",
                href: "/industries",
                icon: Code,
            },
            {
                title: "Mobile Apps",
                description: "iOS & Android development",
                href: "/services/mobile",
                icon: Smartphone,
            },
            {
                title: "UI/UX Design",
                description: "Beautiful user interfaces",
                href: "/services/design",
                icon: Palette,
            },
            {
                title: "Ecommerce",
                description: "Online store solutions",
                href: "/services/ecommerce",
                icon: ShoppingCart,
            },
            {
                title: "Analytics",
                description: "Business insights",
                href: "/services/analytics",
                icon: BarChart,
            },
            {
                title: "Cloud Systems",
                description: "Scalable infrastructure",
                href: "/services/cloud",
                icon: Database,
            },
        ],
    },
    {
        title: "Corporate",
        submenu: [
            {
                title: "Web Development",
                description: "Build modern web apps",
                href: "/case-studies",
                icon: Code,
            },
            {
                title: "Mobile Apps",
                description: "iOS & Android development",
                href: "/services/mobile",
                icon: Smartphone,
            },
            {
                title: "UI/UX Design",
                description: "Beautiful user interfaces",
                href: "/services/design",
                icon: Palette,
            },
            {
                title: "Ecommerce",
                description: "Online store solutions",
                href: "/services/ecommerce",
                icon: ShoppingCart,
            },
            {
                title: "Analytics",
                description: "Business insights",
                href: "/services/analytics",
                icon: BarChart,
            },
            {
                title: "Cloud Systems",
                description: "Scalable infrastructure",
                href: "/services/cloud",
                icon: Database,
            },
        ],
    },
    {
        title: "Resources",
        submenu: [
            {
                title: "Web Development",
                description: "Build modern web apps",
                href: "/about-us",
                icon: Code,
            },
            {
                title: "Mobile Apps",
                description: "iOS & Android development",
                href: "/services/mobile",
                icon: Smartphone,
            },
            {
                title: "UI/UX Design",
                description: "Beautiful user interfaces",
                href: "/services/design",
                icon: Palette,
            },
            {
                title: "Ecommerce",
                description: "Online store solutions",
                href: "/services/ecommerce",
                icon: ShoppingCart,
            },
            {
                title: "Analytics",
                description: "Business insights",
                href: "/services/analytics",
                icon: BarChart,
            },
            {
                title: "Cloud Systems",
                description: "Scalable infrastructure",
                href: "/services/cloud",
                icon: Database,
            },
        ],
    },

]