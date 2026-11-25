'use client';

import { useState } from 'react';
import InfiniteMenu, { type InfiniteMenuItem } from './InfiniteMenu';

const experiences: InfiniteMenuItem[] = [
    {
        image: 'https://images.unsplash.com/photo-1634942536790-2539db5a9a3b?w=900&q=85&auto=format&fit=crop',
        title: 'Build a brand that stays.',
        description: 'Brand strategy, identity and business growth — made distinctive.',
    },
    {
        image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=85&auto=format&fit=crop',
        title: 'Turn ideas into experiences.',
        description: 'Digital design and development that makes every interaction count.',
    },
    {
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85&auto=format&fit=crop',
        title: 'Learn. Then lead.',
        description: 'Practical education and skills for the next opportunity.',
    },
    {
        image: 'https://images.unsplash.com/photo-1506126613408-acc6c3b5b8e7?w=900&q=85&auto=format&fit=crop',
        title: 'Make room for wellbeing.',
        description: 'A more considered approach to health, lifestyle and everyday growth.',
    },
    {
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85&auto=format&fit=crop',
        title: 'Create what comes next.',
        description: 'Bring people, ideas and opportunity into the same room.',
    },
    {
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=85&auto=format&fit=crop',
        title: 'Make technology meaningful.',
        description: 'Digital tools and experiences with purpose behind every detail.',
    },
    {
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85&auto=format&fit=crop',
        title: 'Move forward, together.',
        description: 'Collaboration and community that turn ambition into momentum.',
    },
    {
        image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=85&auto=format&fit=crop',
        title: 'Grow beyond the obvious.',
        description: 'A broader view of what progress can look and feel like.',
    },
];

export default function EcosystemSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            id="ecosystem"
            aria-labelledby="ecosystem-heading"
            className="relative isolate min-h-[900px] overflow-hidden bg-[#070707] text-white"
        >
            {/* Atmospheric background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        'radial-gradient(ellipse at 50% 47%, rgba(241,90,36,.13) 0%, rgba(241,90,36,.035) 28%, transparent 62%), radial-gradient(ellipse at 50% 100%, rgba(255,255,255,.055), transparent 45%)',
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)',
                    backgroundSize: '72px 72px',
                    maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
                }}
            />

            <div className="relative mx-auto flex min-h-[900px] w-full max-w-[1600px] flex-col px-5 pb-8 pt-28 sm:px-8 lg:px-14 lg:pt-32">
                <header className="relative z-10 flex items-start justify-between gap-6">
                    <div>
                        <p className="mb-5 flex items-center gap-3 text-[9px] font-semibold tracking-[0.32em] text-[#F15A24] sm:text-[10px]">
                            <span className="h-px w-8 bg-[#F15A24]" />
                            03 / THE RAYATVA ECOSYSTEM
                        </p>
                        <h2
                            id="ecosystem-heading"
                            className="max-w-4xl text-[clamp(2.8rem,7.5vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.075em]"
                        >
                            Not one path.
                            <br />
                            <span className="text-white/35">A universe of possibility.</span>
                        </h2>
                    </div>

                    <div className="hidden max-w-[190px] pt-2 text-right md:block">
                        <span className="font-mono text-[10px] tracking-[0.22em] text-white/35">
                            RY / 0{activeIndex + 1}
                        </span>
                        <p className="mt-3 text-xs leading-6 text-white/45">
                            Different worlds. One shared direction: forward.
                        </p>
                    </div>
                </header>

                <div className="relative mt-5 min-h-[590px] flex-1 sm:mt-0 sm:min-h-[650px]">
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                    <div className="absolute inset-0">
                        <InfiniteMenu
                            items={experiences}
                            count={150}
                            tileSize={0.72}
                            roundness={0.18}
                            zoom={1.5}
                            pullBack={0.8}
                            stretch={0.7}
                            inertia={0.72}
                            autoplay={4.2}
                            grayscale={true}
                            dim={0.3}
                            intro={true}
                            showInfo={true}
                            theme="dark"
                            accentColor="#F15A24"
                            backgroundColor="transparent"
                            onActiveChange={(_, index) => setActiveIndex(index)}
                            className="h-full w-full"
                        />
                    </div>
                    <div className="pointer-events-none absolute bottom-2 left-0 z-10 flex items-center gap-3 text-[9px] tracking-[0.2em] text-white/35 sm:bottom-5">
                        <span className="inline-block h-7 w-7 rounded-full border border-white/20 text-center text-[15px] leading-[25px] text-[#F15A24]">↔</span>
                        DRAG TO EXPLORE
                    </div>
                    <div className="pointer-events-none absolute bottom-2 right-0 z-10 text-right font-mono text-[9px] tracking-[0.18em] text-white/30 sm:bottom-5">
                        {String(activeIndex + 1).padStart(2, '0')}
                        <span className="mx-2 text-[#F15A24]">/</span>
                        {String(experiences.length).padStart(2, '0')}
                    </div>
                </div>

                <footer className="relative z-10 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[9px] tracking-[0.24em] text-white/35">
                        RAYATVA <span className="mx-2 text-[#F15A24]">/</span> MULTI-DIMENSIONAL GROWTH
                    </p>
                    <p className="text-[10px] tracking-[0.12em] text-white/45">
                        EXPLORE THE SPHERES. FIND YOUR NEXT MOVE.
                    </p>
                </footer>
            </div>
        </section>
    );
}
