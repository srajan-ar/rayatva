'use client';

import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';

type Dimension = {
    number: string;
    category: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    detail: string;
    layout: 'feature' | 'compact' | 'wide';
};

const dimensions: Dimension[] = [
    {
        number: '01', category: 'BUSINESS & BRAND', title: 'Ideas,\nmade iconic.',
        description: 'We turn business ideas into distinctive brands built to stand apart.',
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1800&q=88&auto=format&fit=crop',
        imageAlt: 'Bold brand identity and packaging design arranged as an editorial still life',
        detail: 'FROM CONCEPT TO IDENTITY', layout: 'feature',
    },
    {
        number: '02', category: 'DIGITAL EXPERIENCES', title: 'Make your\npresence felt.',
        description: 'Thoughtful websites and digital experiences that move businesses forward.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85&auto=format&fit=crop',
        imageAlt: 'A modern creative workspace with a laptop and digital tools',
        detail: 'DESIGN · DEVELOPMENT · DIGITAL', layout: 'compact',
    },
    {
        number: '03', category: 'LEARNING & EDUCATION', title: 'Skills that\nopen doors.',
        description: 'Practical, skill-based learning for people ready to create their next opportunity.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=85&auto=format&fit=crop',
        imageAlt: 'People collaborating and learning around a laptop',
        detail: 'LEARN · APPLY · EVOLVE', layout: 'compact',
    },
    {
        number: '04', category: 'WELLNESS & LIFESTYLE', title: 'Growth, in\nwhole.',
        description: 'Because a meaningful future is built around more than work alone.',
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1800&q=85&auto=format&fit=crop',
        imageAlt: 'Warm sunlight across a calm natural landscape',
        detail: 'A MORE BALANCED WAY FORWARD', layout: 'wide',
    },
];

function ArrowMark({ className = '' }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function DimensionCard({ item }: { item: Dimension }) {
    const updatePointer = (event: ReactPointerEvent<HTMLElement>) => {
        if (event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        event.currentTarget.style.setProperty('--pointer-x', `${x}%`);
        event.currentTarget.style.setProperty('--pointer-y', `${y}%`);
    };

    const feature = item.layout === 'feature';
    const wide = item.layout === 'wide';

    return (
        <article
            onPointerMove={updatePointer}
            className={[
                'rayatva-dimension-card group relative isolate min-h-[390px] overflow-hidden border border-white/[0.11] bg-[#151311] outline-none',
                'transition-[border-color,transform] duration-700 ease-[cubic-bezier(.2,.75,.25,1)] hover:border-[#F15A24]/55 focus-visible:border-[#F15A24]/55',
                'rayatva-reveal',
                feature ? 'md:col-span-7 md:row-span-2 md:min-h-[760px]' : wide ? 'md:col-span-12 md:min-h-[330px]' : 'md:col-span-5 md:min-h-[370px]',
            ].join(' ')}
            tabIndex={0}
            aria-label={`${item.category}: ${item.title.replace('\n', ' ')} ${item.description}`}
        >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.75,.25,1)] group-hover:scale-[1.055] group-focus-visible:scale-[1.055]" style={{ backgroundImage: `url("${item.image}")` }} role="img" aria-label={item.imageAlt} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,.08)_0%,rgba(8,8,8,.2)_38%,rgba(8,8,8,.9)_100%)]" />
            <div className="absolute inset-0 bg-[#0b0908]/20 mix-blend-multiply" />
            <div className="rayatva-card-grain pointer-events-none absolute inset-0 opacity-[0.17]" />
            <div className="rayatva-card-light pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />

            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
                <span className="font-mono text-[10px] tracking-[0.22em] text-white/65">RY / {item.number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white/80 transition-all duration-500 group-hover:border-[#F15A24] group-hover:bg-[#F15A24] group-hover:text-white group-focus-visible:border-[#F15A24] group-focus-visible:bg-[#F15A24]">
                    <ArrowMark className="h-[17px] w-[17px] transition-transform duration-500 group-hover:rotate-45 group-focus-visible:rotate-45" />
                </span>
            </div>

            <div className={[
                'absolute inset-x-0 bottom-0 flex flex-col',
                wide ? 'gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10' : feature ? 'gap-5 p-6 sm:p-9 lg:p-11' : 'gap-4 p-6 sm:p-7',
            ].join(' ')}>
                <div className={wide ? 'max-w-2xl' : ''}>
                    <p className="mb-4 flex items-center gap-3 text-[9px] font-medium tracking-[0.25em] text-[#FF875B] sm:text-[10px]"><span className="h-px w-7 bg-[#F15A24]" />{item.category}</p>
                    <h3 className={[
                        'whitespace-pre-line font-medium leading-[0.92] tracking-[-0.055em] text-white',
                        feature ? 'text-[clamp(3.5rem,6vw,6.8rem)]' : wide ? 'text-[clamp(2.7rem,5vw,5rem)]' : 'text-[clamp(2.5rem,4vw,4.1rem)]',
                    ].join(' ')}>{item.title}</h3>
                    <p className={['mt-5 max-w-[34rem] text-sm leading-7 text-white/65 transition-colors duration-500 group-hover:text-white/90 group-focus-visible:text-white/90', feature ? 'sm:max-w-md sm:text-base' : ''].join(' ')}>{item.description}</p>
                </div>
                <div className={['flex items-center gap-3 border-t border-white/25 pt-4 text-[8px] tracking-[0.2em] text-white/55 sm:text-[9px]', wide ? 'shrink-0 sm:border-l sm:border-t-0 sm:pb-1 sm:pl-8 sm:pt-0' : ''].join(' ')}>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F15A24] shadow-[0_0_12px_rgba(241,90,36,.9)]" />{item.detail}
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#F15A24] transition-all duration-700 ease-out group-hover:w-full group-focus-visible:w-full" />
        </article>
    );
}

export default function EcosystemSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.12 });
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="ecosystem" aria-labelledby="ecosystem-heading" data-visible={visible} className="rayatva-ecosystem relative isolate overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-16 lg:py-40">
            <div aria-hidden="true" className="pointer-events-none absolute -right-[26rem] top-[-12rem] h-[58rem] w-[58rem] rounded-full border border-white/[0.045]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-[17rem] top-[-3rem] h-[40rem] w-[40rem] rounded-full border border-white/[0.055]" />
            <div aria-hidden="true" className="pointer-events-none absolute right-[7%] top-[12rem] h-[22rem] w-[22rem] rounded-full bg-[#F15A24]/[0.075] blur-[110px]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)', backgroundSize: '88px 88px', maskImage: 'linear-gradient(to bottom, black, transparent 78%)' }} />

            <div className="relative mx-auto max-w-[1500px]">
                <div className="rayatva-reveal mb-16 flex flex-col gap-10 border-b border-white/15 pb-10 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:pb-12">
                    <div className="max-w-4xl">
                        <p className="mb-7 flex items-center gap-3 text-[9px] font-medium tracking-[0.3em] text-[#F15A24] sm:text-[10px]"><span className="h-px w-8 bg-[#F15A24]" />02 / THE RAYATVA ECOSYSTEM</p>
                        <h2 id="ecosystem-heading" className="text-[clamp(3.3rem,8.5vw,9rem)] font-medium leading-[0.83] tracking-[-0.075em]">Growth has<br /><span className="text-white/35">many forms.</span></h2>
                    </div>
                    <div className="max-w-sm lg:pb-2">
                        <p className="text-sm leading-7 text-white/55 sm:text-base">One vision. Four dimensions. We connect creativity, technology, learning and wellbeing to help people and businesses move forward.</p>
                        <div className="mt-6 flex items-center gap-3 text-[9px] tracking-[0.22em] text-white/40"><span className="h-px w-8 bg-[#F15A24]" />EXPLORE WHAT MOVES YOU</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
                    {dimensions.map((item) => <DimensionCard key={item.number} item={item} />)}
                </div>

                <div className="rayatva-reveal mt-12 flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] tracking-[0.23em] text-white/35">RAYATVA <span className="mx-2 text-[#F15A24]">/</span> MULTI-DIMENSIONAL GROWTH</p>
                    <a href="#courses" className="group inline-flex items-center gap-4 self-start text-[10px] font-medium tracking-[0.2em] text-white/75 transition-colors hover:text-[#F15A24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#F15A24] sm:self-auto">
                        DISCOVER WHAT YOU CAN LEARN
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:border-[#F15A24] group-hover:bg-[#F15A24]"><ArrowMark className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" /></span>
                    </a>
                </div>
            </div>

            <style jsx>{`
        .rayatva-ecosystem .rayatva-reveal { opacity: 0; transform: translateY(32px); transition: opacity 900ms cubic-bezier(.2,.75,.25,1), transform 900ms cubic-bezier(.2,.75,.25,1); }
        .rayatva-ecosystem[data-visible="true"] .rayatva-reveal { opacity: 1; transform: translateY(0); }
        .rayatva-ecosystem[data-visible="true"] .rayatva-dimension-card:nth-child(1) { transition-delay: 100ms; }
        .rayatva-ecosystem[data-visible="true"] .rayatva-dimension-card:nth-child(2) { transition-delay: 220ms; }
        .rayatva-ecosystem[data-visible="true"] .rayatva-dimension-card:nth-child(3) { transition-delay: 340ms; }
        .rayatva-ecosystem[data-visible="true"] .rayatva-dimension-card:nth-child(4) { transition-delay: 460ms; }
        .rayatva-card-light { background: radial-gradient(420px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(241,90,36,.16), transparent 65%); }
        .rayatva-card-grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.2'/%3E%3C/svg%3E"); mix-blend-mode: soft-light; }
        @media (prefers-reduced-motion: reduce) { .rayatva-ecosystem .rayatva-reveal { opacity: 1; transform: none; transition: none; } .rayatva-dimension-card, .rayatva-dimension-card * { transition-duration: .01ms !important; } }
      `}</style>
        </section>
    );
}
