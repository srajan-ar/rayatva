'use client';

import Link from 'next/link';
import './FooterSection.css';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function FooterSection() {

    const year = 2026;

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="ray-footer relative isolate overflow-hidden bg-[#080808] text-[#f4eee8]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f15a24]/70 to-transparent" />
            <div className="ray-footer__ambient pointer-events-none absolute inset-0" aria-hidden="true" />

            <div className="relative mx-auto max-w-[1600px] px-5 sm:px-9 lg:px-16">
                {/* Brand, navigation and contact */}
                <div className="grid gap-9 border-b border-white/10 py-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr] lg:gap-10 lg:py-12">
                    <div className="max-w-xs">
                        <Link
                            href="/"
                            aria-label="RAYATVA home"
                            className="inline-flex items-center gap-2 text-xl font-black tracking-[-0.075em] text-white transition-colors hover:text-[#ff8157]"
                        >
                            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#f15a24]/60 text-sm tracking-normal text-[#f15a24]">
                                R
                            </span>
                            RAYATVA<span className="text-[#f15a24]">.</span>
                        </Link>
                        <p className="mt-4 max-w-[235px] text-xs leading-6 text-white/45">
                            A multidimensional growth company. Ideas, skills and possibilities — brought to life.
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/rayatva/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="RAYATVA on Instagram"
                                className="ray-footer__social"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="mailto:rayatva.co@gmail.com"
                                aria-label="Email RAYATVA"
                                className="ray-footer__social"
                            >
                                <HiOutlineMail size={19} />
                            </a>
                        </div>
                    </div>

                    <nav aria-label="Explore RAYATVA">
                        <p className="ray-footer__label">EXPLORE</p>
                        <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/60">
                            <Link className="ray-footer__link" href="/#courses">Courses</Link>
                            <Link className="ray-footer__link" href="/#testimonials">Community stories</Link>
                            <Link className="ray-footer__link" href="/#ecosystem">Our ecosystem</Link>
                        </div>
                    </nav>

                    <nav aria-label="Work with RAYATVA">
                        <p className="ray-footer__label">WORK WITH US</p>
                        <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/60">
                            <Link className="ray-footer__link" href="/contact">Business enquiries</Link>
                            <Link className="ray-footer__link" href="/contact">Collaborations</Link>
                            <Link className="ray-footer__link" href="/contact">Get in touch</Link>
                        </div>
                    </nav>

                    <div>
                        <p className="ray-footer__label">START A CONVERSATION</p>
                        <a
                            href="mailto:rayatva.co@gmail.com"
                            className="mt-4 inline-block break-all text-sm text-white/80 transition-colors hover:text-[#ff8157]"
                        >
                            rayatva.co@gmail.com
                        </a>
                        <Link
                            href="/contact"
                            className="ray-footer__contact mt-5 inline-flex mx-2 items-center gap-3 rounded-full border border-[#f15a24]/45 bg-[#f15a24]/[0.09] px-4 py-2.5 text-xs font-semibold text-[#ff8157] transition-all hover:border-[#f15a24] hover:bg-[#f15a24] hover:text-black"
                        >
                            Let&apos;s talk <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </div>

                {/* Oversized RAYATVA signature */}
                <div className="ray-footer__signature relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden py-12 sm:min-h-[270px] sm:py-16 lg:min-h-[340px]">
                    <div className="ray-footer__wordmark relative w-full select-none text-center" aria-label="RAYATVA">
                        <span className="ray-footer__wordmark-outline" aria-hidden="true">RAYATVA</span>
                        <span className="ray-footer__wordmark-fill" aria-hidden="true">RAYATVA</span>
                    </div>
                    <p className="relative mt-5 text-center text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:mt-7 sm:text-[10px] sm:tracking-[0.48em]">
                        IMAGINE <span className="mx-1.5 text-[#f15a24]">•</span> CREATE <span className="mx-1.5 text-[#f15a24]">•</span> BECOME
                    </p>
                </div>

                {/* Legal and utility links */}
                <div className="flex flex-col gap-4 border-t border-white/10 py-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {year} RAYATVA. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                        <Link href="/contact" className="ray-footer__link">Contact</Link>
                        <a
                            href="https://www.instagram.com/rayatva/"
                            target="_blank"
                            rel="noreferrer"
                            className="ray-footer__link"
                        >
                            Instagram ↗
                        </a>
                        <button type="button" onClick={backToTop} className="ray-footer__top">
                            Back to top <span aria-hidden="true">↑</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
