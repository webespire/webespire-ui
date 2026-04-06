"use client";

import { companyLinks, corporateLinks } from '@/lib/homePageData';
import { ArrowRightIcon, FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, MapPinIcon, TwitterIcon, YouTubeIcon } from '@/lib/svgFIles';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

// ─── Icons (inline SVG — no extra dependency needed) ───────────────────────




// ─── Data ──────────────────────────────────────────────────────────────────
export const socialLinks = [
    { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
    { icon: <TwitterIcon />, label: "Twitter / X", href: "#" },
    { icon: <InstagramIcon />, label: "Instagram", href: "#" },
    { icon: <FacebookIcon />, label: "Facebook", href: "#" },
    { icon: <YouTubeIcon />, label: "YouTube", href: "#" },
];


// ─── Component ──

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
        <footer className="relative bg-secondary text-white overflow-hidden">

            {/* Subtle top-edge gradient accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary to-transparent" />

            {/* Background decorative blobs */}
            {/* <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1a2a6c] opacity-20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#1a4a8c] opacity-10 blur-3xl" /> */}

            <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10">

                {/* ── Four-column grid (desktop) / stacked (mobile) ── */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">

                    {/* ── Col 1 — Logo + Address + Email ── */}
                    <div className="flex flex-col gap-6">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-wide"
                        >
                            <Image src="/logo.svg" alt='logo' width={200} height={200} />
                        </Link>

                        {/* Tagline */}
                        <p className="text-sm leading-relaxed text-slate-400 max-w-55">
                            California, USA 30722 Russell Ranch Rd.
                            Suite 140 Westlake, CA 91362
                        </p>

                        {/* Address */}
                        <div className="flex items-center gap-2.5 text-sm text-slate-400">
                            <MapPinIcon />
                            <address className="not-italic leading-relaxed">
                                Noida, India A 73, Sector 65,<br />
                                Noida, G.B. Nagar (U.P.) 201301
                            </address>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-2.5 text-sm text-slate-400">
                            <MailIcon />
                            <a
                                href="mailto:hello@nexvora.io"
                                className="hover:text-[#4f8ef7] transition-colors duration-200"
                            >
                                hello@nexvora.io
                            </a>
                        </div>
                    </div>

                    {/* ── Col 2 — Company ── */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f8ef7]">
                            Company
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="block w-0 group-hover:w-3 h-px bg-[#4f8ef7] transition-all duration-300 ease-out" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 3 — Corporate ── */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f8ef7]">
                            Corporate
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {corporateLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200"
                                    >
                                        <span className="block w-0 group-hover:w-3 h-px bg-[#4f8ef7] transition-all duration-300 ease-out" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Col 4 — Subscribe + Social ── */}
                    <div className="flex flex-col gap-6">
                        {/* Heading */}
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4f8ef7]">
                            Subscribe for Insights
                        </h3>

                        {/* Email input */}
                        <div className="flex flex-col gap-2">
                            <div className="flex rounded-lg overflow-hidden border border-slate-700 focus-within:border-[#4f8ef7] transition-colors duration-200">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                                    placeholder="Enter your email"
                                    className="flex-1 bg-slate-800/50 text-sm text-white placeholder:text-slate-500 px-4 py-2.5 outline-none min-w-0"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    aria-label="Subscribe"
                                    className="shrink-0 flex items-center justify-center w-10 bg-[#1a56db] hover:bg-[#4f8ef7] transition-colors duration-200"
                                >
                                    <ArrowRightIcon />
                                </button>
                            </div>

                            {subscribed && (
                                <p className="text-xs text-emerald-400 animate-fade-in">
                                    ✓ You're subscribed — welcome aboard!
                                </p>
                            )}

                            <p className="text-xs text-slate-500">
                                No spam. Unsubscribe at any time.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-slate-800" />

                        {/* Let's stay connected */}
                        <p className="text-sm font-medium text-slate-300">
                            Let&apos;s stay connected
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 flex-wrap">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:bg-[#1a56db] hover:text-white transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-blue-900/30"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="mt-14 flex flex-col items-center gap-3 border-t border-slate-800 pt-8 text-center sm:flex-row sm:justify-around sm:text-left">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} Webespire Consulting | All Rights Reserved.
                    </p>
                    <div className="flex gap-5 text-xs text-slate-500">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">FAQ's</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}