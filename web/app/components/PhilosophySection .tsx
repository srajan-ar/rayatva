'use client';

import { useEffect, useRef, useState } from 'react';

export default function PhilosophySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            aria-labelledby="rayatva-philosophy-heading"
            className="relative isolate overflow-hidden bg-[#080808] text-[#f4eee8]"
        >
            {/* Quiet grid and atmospheric light */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)',
                        backgroundSize: '76px 76px',
                        maskImage: 'linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)',
                    }}
                />
            </div>

            {/* A restrained, slowly breathing ring */}
            <div
                className="animate-pulse pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(82vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
                aria-hidden="true"
            >
                <div className="absolute inset-0 rounded-full border border-[#f15a24]/15" />
                <div className="absolute inset-[10%] rounded-full border border-white/[0.055]" />
                <div className="absolute inset-[22%] rounded-full border border-white/[0.04]" />
                <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(241,90,36,.14),rgba(241,90,36,.025)_48%,transparent_72%)] blur-2xl" />
                <div className="absolute left-[17%] top-[20%] h-2 w-2 rounded-full bg-[#ff8057] shadow-[0_0_24px_6px_rgba(241,90,36,.42)]" />
            </div>

            <div className="relative mx-auto flex min-h-[490px] max-w-[1600px] flex-col justify-between px-5 py-12 sm:min-h-[540px] sm:px-9 sm:py-16 lg:min-h-[590px] lg:px-16 lg:py-20">
                <div className="flex items-center justify-between gap-4">
                    <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.34em] text-[#f15a24] sm:text-[10px]">
                        <span className="h-px w-7 bg-[#f15a24]" />
                        RAYATVA / A MOMENT TO THINK
                    </p>
                    <span className="font-mono text-[10px] text-white/25">07 — 07</span>
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1320px] py-16 text-center sm:py-20">
                    <p
                        className={`mb-8 text-[9px] uppercase tracking-[0.38em] text-white/35 transition-all duration-700 sm:text-[10px] ${visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                            }`}
                    >
                        A thought worth not postponing
                    </p>

                    <h2
                        id="rayatva-philosophy-heading"
                        className={`text-balance text-[clamp(2.35rem,7.4vw,7.4rem)] font-semibold uppercase leading-[0.94] tracking-[-0.075em] transition-all duration-[1200ms] ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                    >
                        <span className="block text-white/45">One day,</span>
                        <span className="mt-2 block text-white/90">the things you postponed</span>
                        <span className="mt-2 block text-white/45">will become the things</span>
                        <span className="mt-2 block text-[#f15a24]">you can no longer do.</span>
                    </h2>

                    <div
                        className={`mx-auto mt-10 flex items-center justify-center gap-3 transition-all delay-500 duration-700 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                            }`}
                        aria-hidden="true"
                    >
                        <span className="h-px w-8 bg-white/20" />
                        <span className="h-1 w-1 rounded-full bg-[#f15a24]" />
                        <span className="h-px w-8 bg-white/20" />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                    <p className="text-[9px] uppercase tracking-[0.24em] text-white/35 sm:text-[10px]">
                        Not everything can wait.
                    </p>
                    <p className="text-right text-[9px] uppercase tracking-[0.2em] text-white/25 sm:text-[10px]">
                        Make this moment count.
                    </p>
                </div>
            </div>


        </section>
    );
}
