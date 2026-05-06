"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { companyLinks, corporateLinks } from '@/lib/homePageData';

export const socialLinks = [
    {
        label: "Facebook",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="white" />
            </svg>
        ),
    },
    {
        label: "Twitter / X",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4l16 16M4 20L20 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="white" />
                <circle cx="4" cy="4" r="2" fill="white" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="white" />
                <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#1a5f7a" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    return (
        <footer className="bg-[#1a5f7a] text-white">

            {/* ── Main grid ── */}
            <div className="mx-auto max-w-7xl px-8 pt-12 pb-0">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 pb-10">

                    {/* ── Col 1 — Logo + Addresses + Email ── */}
                    <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <Link href="/">
                            <Image src="/logo.svg" alt="Webespire" width={200} height={52} />
                        </Link>

                        {/* US Address */}
                        <p className="text-sm leading-relaxed text-blue-100">
                            California, USA 30722 Russell Ranch Rd.<br />
                            Suite 140 Westlake, CA 91362
                        </p>

                        {/* India Address */}
                        <p className="text-sm leading-relaxed text-blue-100">
                            Noida, India A 73, Sector 65,<br />
                            Noida, G.B. Nagar (U.P.) 201301
                        </p>

                        {/* Email */}
                        <div className="flex items-start gap-3">
                            {/* Circle mail icon */}
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50">
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.75" width="14.5" height="10.5" rx="1.25" stroke="white" strokeWidth="1.5" />
                                    <path d="M1 1.5l7 5.5 7-5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-bold text-white">Email Us Anytime</span>
                                <a
                                    href="mailto:info@webespire.com"
                                    className="text-sm text-blue-100 underline hover:text-white transition-colors duration-200"
                                >
                                    info@webespire.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Col 2 — Company ── */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[15px] font-bold text-white">Company</h3>
                        <ul className="flex flex-col gap-3.5">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-blue-100 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3 — Corporate ── */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[15px] font-bold text-white">Company</h3>
                        <ul className="flex flex-col gap-3.5">
                            {corporateLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-blue-100 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4 — Subscribe + Social ── */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[15px] font-bold text-white">Subscribe for Insights</h3>

                        {/* Email input row */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex overflow-hidden rounded-lg border-2 border-white/30">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                                    placeholder="Enter Your Email"
                                    className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    aria-label="Subscribe"
                                    className="flex w-11 shrink-0 items-center justify-center border-l border-gray-200 bg-white transition-colors duration-200 hover:bg-gray-100"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12h14M13 6l6 6-6 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {subscribed && (
                                <p className="text-xs text-emerald-400">
                                    ✓ You're subscribed — welcome aboard!
                                </p>
                            )}
                        </div>

                        {/* Let's stay connected */}
                        <p className="text-sm font-bold text-white">Let&apos;s Stay Connected</p>

                        {/* Social icons */}
                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 transition-all duration-200 hover:bg-white/30 hover:scale-105"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Bottom bar ── */}
                <div className="flex flex-col items-center gap-3 border-t border-white/30 py-5 sm:flex-row sm:justify-between">
                    <p className="text-xs text-blue-100">
                        © {new Date().getFullYear()} Webespire Consulting | All Rights Reserved.
                    </p>
                    <div className="flex flex-wrap items-center gap-1 text-xs text-blue-100">
                        <span>We respect your business privacy</span>
                        <Link href="#" className="hover:text-white transition-colors ml-2">Privacy Policy</Link>
                        <span className="mx-1 opacity-50">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms &amp; Condition</Link>
                        <span className="mx-1 opacity-50">|</span>
                        <Link href="#" className="hover:text-white transition-colors">FAQ&apos;s</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
