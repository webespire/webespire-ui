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
                title: "Web Development",
                description: "Build modern web apps",
                href: "/services",
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
        title: "Industries",
        submenu: [
            {
                title: "Web Development",
                description: "Build modern web apps",
                href: "/services/web",
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
                href: "/services/web",
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
                href: "/services/web",
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