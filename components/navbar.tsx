"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { menuItems } from "@/lib/menu"
import Image from 'next/image'

export default function Navbar() {

    const [mobileOpen, setMobileOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const [overHero, setOverHero] = useState(true)

    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title)
    }

    /* HERO SECTION DETECTION */
    useEffect(() => {

        const hero = document.getElementById("hero")

        const observer = new IntersectionObserver(
            ([entry]) => {
                setOverHero(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (hero) observer.observe(hero)

        return () => {
            if (hero) observer.unobserve(hero)
        }

    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${overHero
                    ? "bg-primary/50 text-white"
                    : "bg-white/80 backdrop-blur-md shadow text-gray-900"
                }`}
        >

            <div className="mx-auto flex w-full items-center justify-between p-4">

                {/* LOGO */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-wide"
                >
                    <Image src="/logo.svg" alt='logo' width={200} height={200} />
                </Link>

                {/* DESKTOP MENU */}
                <ul className="hidden lg:flex items-center gap-8">

                    {menuItems.map((item) => (
                        <li key={item.title} className="relative cursor-pointer">

                            {/* NORMAL LINK */}
                            {!item.submenu && item.href && (
                                <Link
                                    href={item.href}
                                    className="text-lg font-medium hover:text-blue-500 transition"
                                >
                                    {item.title}
                                </Link>
                            )}

                            {/* DROPDOWN */}
                            {item.submenu && (
                                <>
                                    <button
                                        onMouseEnter={() => setOpenDropdown(item.title)}
                                        onMouseLeave={() => setOpenDropdown(null)}
                                        className="flex items-center gap-1 text-lg font-medium cursor-pointer hover:text-blue-500 transition"
                                    >
                                        {item.title}

                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform ${openDropdown === item.title ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {openDropdown === item.title && (
                                        <div
                                            onMouseEnter={() => setOpenDropdown(item.title)}
                                            onMouseLeave={() => setOpenDropdown(null)}
                                            className="absolute left-0 top-full w-52 rounded-xl border bg-white text-gray-900 shadow-lg"
                                        >

                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.title}
                                                    href={sub.href}
                                                    className="block px-4 py-3 text-sm hover:bg-gray-100 first:rounded-t-xl last:rounded-b-xl font-medium hover:text-blue-500 transition"
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}

                                        </div>
                                    )}

                                </>
                            )}

                        </li>
                    ))}

                    <Link href="#" className='px-4 py-3 bg-white rounded-md text-black'>FREE POC</Link>

                </ul>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2"
                >
                    {mobileOpen ? <X size={40} /> : <Menu size={40} />}
                </button>

            </div>


            {/* MOBILE MENU */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300
        ${mobileOpen ? "max-h-125 pt-2" : "max-h-0"}
        bg-white/95 backdrop-blur-md`}
            >

                <div className="px-6 pb-6 space-y-4 text-gray-900">

                    {menuItems.map((item) => (
                        <div key={item.title}>

                            {!item.submenu && item.href && (
                                <Link
                                    href={item.href}
                                    className="block text-md font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            )}

                            {item.submenu && (
                                <>
                                    <button
                                        onClick={() => toggleDropdown(item.title)}
                                        className="flex w-full items-center justify-between text-md font-medium"
                                    >
                                        {item.title}

                                        <ChevronDown
                                            size={18}
                                            className={`transition-transform cursor-pointer ${openDropdown === item.title ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {openDropdown === item.title && (
                                        <div className="ml-4 mt-2 space-y-2">

                                            {item.submenu.map((sub) => (
                                                <Link
                                                    key={sub.title}
                                                    href={sub.href}
                                                    className="block text-sm text-gray-600"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}

                                        </div>
                                    )}

                                </>
                            )}

                        </div>
                    ))}

                </div>

            </div>

        </nav>
    )
}