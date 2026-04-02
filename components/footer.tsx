"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";

// ─── Icons (inline SVG — no extra dependency needed) ───────────────────────

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);

const MapPinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 mt-0.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────

const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
];

const corporateLinks = [
    { label: "Investor Relations", href: "#" },
    { label: "Governance", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Settings", href: "#" },
];

const socialLinks = [
    { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
    { icon: <TwitterIcon />, label: "Twitter / X", href: "#" },
    { icon: <InstagramIcon />, label: "Instagram", href: "#" },
    { icon: <FacebookIcon />, label: "Facebook", href: "#" },
    { icon: <YouTubeIcon />, label: "YouTube", href: "#" },
];

// ─── Component ─────────────────────────────────────────────────────────────

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
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#4f8ef7] to-transparent" />

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