'use client';

import { useState } from 'react';
import CircularGallery, { type GalleryItem } from './CircularGallery';

type Course = {
    number: string;
    title: string;
    kicker: string;
    description: string;
    detail: string;
    status: 'AVAILABLE NOW' | 'COMING SOON';
    includes: string[];
    item: GalleryItem;
};

const courses: Course[] = [
    {
        number: '01',
        title: 'Video Editing',
        kicker: 'MAKE EVERY FRAME MATTER',
        description: 'Turn raw footage into stories people feel. Learn to shape rhythm, build atmosphere and create engaging videos with the editing tools already in your pocket.',
        detail: 'A practical, creator-first course that takes you from your first cut to a polished final export.',
        status: 'AVAILABLE NOW',
        includes: ['CapCut', 'VN', 'InShot', 'Certificate included'],
        item: {
            image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85',
            text: 'Video Editing',
            description: 'Learn to cut with intention, build rhythm, work with sound and colour, and turn everyday footage into a story worth watching.',
            alt: 'Cinematic video camera and film production equipment',
        },
    },
    {
        number: '02',
        title: 'Digital Marketing',
        kicker: 'TURN ATTENTION INTO IMPACT',
        description: 'Discover how brands earn attention, build trust and turn an audience into a community through purposeful digital strategy.',
        detail: 'Explore content, social platforms, positioning and the thinking behind campaigns that connect.',
        status: 'COMING SOON',
        includes: ['Content strategy', 'Social platforms', 'Brand growth'],
        item: {
            locked: true,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
            text: 'Digital Marketing',
            description: 'Understand the moving parts behind digital growth—from audience insight and content strategy to campaigns that build real connection.',
            alt: 'Digital marketing analytics displayed on a laptop',
        },
    },
    {
        number: '03',
        title: 'Entrepreneurship',
        kicker: 'IDEAS DESERVE TO BE BUILT',
        description: 'Move beyond the idea stage. Learn to identify opportunities, test assumptions and build the foundations of something people genuinely need.',
        detail: 'An introduction to validating ideas, understanding customers and building a business with intention.',
        status: 'COMING SOON',
        includes: ['Idea validation', 'Business foundations', 'Sustainable growth'],
        item: {
            locked: true,
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
            text: 'Entrepreneurship',
            description: 'Explore how to recognise an opportunity, test an idea, understand customers and take the first steps towards building something of your own.',
            alt: 'Founders collaborating around a table',
        },
    },
    {
        number: '04',
        title: 'Manifestation',
        kicker: 'INTENTION INTO ACTION',
        description: 'Bring clarity to what you want, align your daily choices with that direction and build the consistency to move towards it.',
        detail: 'A reflective learning experience centred on intention, mindset and purposeful action.',
        status: 'COMING SOON',
        includes: ['Clarity', 'Mindset', 'Daily practice'],
        item: {
            locked: true,
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
            text: 'Manifestation',
            description: 'Build a clearer relationship with your goals through reflection, intentional habits and consistent action in everyday life.',
            alt: 'Sunlit mountain landscape at sunrise',
        },
    },
];

export default function CoursesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = courses[activeIndex] ?? courses[0];

    return (
        <section id="courses" aria-labelledby="courses-heading" className="ray-learning relative isolate overflow-hidden bg-[#080808] text-[#f4eee8]">
            <div className="ray-learning__grid pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="ray-learning__glow pointer-events-none absolute" aria-hidden="true" />

            <div className="relative mx-auto max-w-[1600px] px-5 pb-20 pt-24 sm:px-9 sm:pb-24 sm:pt-28 lg:px-16 lg:pt-32">
                <header className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-6">
                    <div>
                        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.42em] text-[#f15a24]">04 / Learn and grow</p>
                        <h2 id="courses-heading" className="max-w-3xl text-[clamp(2.5rem,6.2vw,6.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.075em]">
                            Your next chapter<br /><span className="text-white/35">starts here.</span>
                        </h2>
                    </div>
                    <p className="max-w-[220px] pb-1 text-[10px] leading-6 tracking-[0.2em] text-white/40">
                        SKILLS TO CREATE.<br />IDEAS TO BUILD.<br />ROOM TO BECOME.
                    </p>
                </header>

                <div className="mt-8 flex items-center justify-between gap-4">
                    <p className="text-[9px] tracking-[0.32em] text-white/35">EXPLORE THE RAYATVA LEARNING COLLECTION</p>
                    <p className="font-mono text-[10px] text-[#f15a24]">0{activeIndex + 1} <span className="text-white/25">/ 04</span></p>
                </div>

                <div className="ray-learning__gallery relative mt-2 h-[390px] w-full sm:h-[500px] lg:h-[590px]">
                    <CircularGallery
                        items={courses.map((course) => course.item)}
                        bend={2.8}
                        textColor="#f4eee8"
                        borderRadius={0.035}
                        font="600 28px Figtree"
                        scrollSpeed={1.8}
                        scrollEase={0.065}
                        itemSize={0.92}
                        itemAspect={0.78}
                        gap={0.3}
                        wave={0.65}
                        fadeEdges={0.16}
                        shadow={0.32}
                        grayscale={false}
                        showTitles={true}
                        snap={true}
                        autoScroll={0}
                        openOnClick={true}
                        intro={true}
                        onActiveChange={(index) => setActiveIndex(index)}
                        dpr={1.5}
                        className="h-full w-full"
                        aria-label="RAYATVA courses. Drag or scroll to explore; select a course to open its description."
                    />
                    <div className="pointer-events-none absolute bottom-1 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-[9px] tracking-[0.24em] text-white/35">
                        <span className="h-px w-7 bg-[#f15a24]/70" />
                        DRAG TO EXPLORE
                        <span className="h-px w-7 bg-[#f15a24]/70" />
                    </div>
                </div>

                <div className="ray-learning__details relative mt-5 grid grid-cols-1 gap-8 border-t border-white/15 pt-8 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] md:gap-12">
                    <div key={active.number} className="ray-learning__copy">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                            <span className="font-mono text-xs text-[#f15a24]">{active.number}</span>
                            <span className="h-px w-7 bg-[#f15a24]/70" />
                            <span className="text-[9px] tracking-[0.3em] text-white/45">{active.kicker}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            <h3 className="text-[clamp(2.1rem,4.5vw,4.5rem)] font-semibold uppercase leading-[0.92] tracking-[-0.065em]">{active.title}</h3>
                            <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[0.2em] ${active.status === 'AVAILABLE NOW'
                                    ? 'border-[#f15a24]/45 bg-[#f15a24]/10 text-[#ff7a4d]'
                                    : 'border-[#f15a24]/55 bg-[#f15a24]/10 text-[#ff8a62] shadow-[0_0_28px_rgba(241,90,36,0.12)]'
                                }`}>
                                <i className={`h-2 w-2 rounded-full ${active.status === 'AVAILABLE NOW' ? 'bg-[#f15a24]' : 'animate-pulse bg-[#f15a24]'}`} />
                                {active.status}
                            </span>
                        </div>
                        <p className="mt-6 max-w-3xl text-base font-light leading-[1.85] text-white/75 sm:text-lg">{active.description}</p>
                        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">{active.detail}</p>
                    </div>

                    <aside className="flex flex-col justify-between border-l-0 border-white/15 md:border-l md:pl-9">
                        <div>
                            <p className="mb-5 text-[9px] tracking-[0.3em] text-white/35">{active.status === 'AVAILABLE NOW' ? 'INCLUDED IN THIS COURSE' : 'WHAT YOU WILL EXPLORE'}</p>
                            <ul className="space-y-3">
                                {active.includes.map((item, index) => (
                                    <li key={item} className="flex items-center gap-4 text-xs tracking-[0.08em] text-white/65">
                                        <span className="font-mono text-[9px] text-[#f15a24]">0{index + 1}</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {active.status === 'AVAILABLE NOW' && (
                            <p className="mt-8 inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-[#f15a24]">
                                <span className="h-px w-8 bg-[#f15a24]" />
                                ENROLMENT IS OPEN
                            </p>
                        )}
                    </aside>
                </div>

                <footer className="mt-16 flex items-center justify-between border-t border-white/15 pt-5">
                    <p className="text-[9px] tracking-[0.26em] text-white/30">KNOW MORE. CREATE MORE. BECOME MORE.</p>
                    <p className="font-mono text-[10px] text-white/30">R / 04</p>
                </footer>
            </div>

            {/* <style jsx>{`
        .ray-learning {
          background:
            radial-gradient(ellipse at 50% 48%, rgba(241,90,36,.075), transparent 42%),
            linear-gradient(180deg,#080808 0%,#0d0c0b 48%,#080808 100%);
        }
        .ray-learning__grid {
          opacity:.16;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.035) 1px, transparent 1px);
          background-size:72px 72px;
          mask-image:linear-gradient(to bottom,transparent,black 18%,black 75%,transparent);
        }
        .ray-learning__glow {
          width:42rem;height:42rem;left:50%;top:23rem;transform:translateX(-50%);
          border-radius:50%;background:radial-gradient(circle,rgba(241,90,36,.12),transparent 68%);
          filter:blur(45px);
        }
        .ray-learning__gallery { isolation:isolate; }
        .ray-learning__copy { animation:ray-copy-in .42s ease both; }
        @keyframes ray-copy-in {
          from { opacity:0; transform:translateY(10px); }
          to { opacity:1; transform:translateY(0); }
        }
        @media (max-width:639px) {
          .ray-learning__grid { background-size:44px 44px; }
          .ray-learning__gallery { margin-left:-1.25rem;width:calc(100% + 2.5rem); }
        }
        @media (prefers-reduced-motion:reduce) {
          .ray-learning__copy { animation:none; }
        }
      `}</style> */}
        </section>
    );
}
