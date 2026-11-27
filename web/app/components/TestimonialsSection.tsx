'use client';

import { useState } from 'react';

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
  category: string;
};

const testimonials: Testimonial[] = [
  {
    id: '01',
    quote: 'Add a real customer or student quote here. Keep it specific: what changed, what they learned, or what result they experienced.',
    name: 'Add customer name',
    detail: 'Add course, service or role',
    category: 'LEARNING',
  },
  {
    id: '02',
    quote: 'Use a second verified testimonial here. A short, honest sentence is more powerful than an exaggerated promise.',
    name: 'Add customer name',
    detail: 'Add course, service or role',
    category: 'BRAND BUILDING',
  },
  {
    id: '03',
    quote: 'Add another real experience here when you have permission to publish it. You can also use a short video testimonial later.',
    name: 'Add customer name',
    detail: 'Add course, service or role',
    category: 'GROWTH',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="ray-voices relative isolate overflow-hidden bg-[#090909] text-[#f4eee8]"
    >
      <div className="ray-voices__grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="ray-voices__orb pointer-events-none absolute" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1600px] px-5 py-24 sm:px-9 sm:py-28 lg:px-16 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#f15a24]">
                <span className="h-px w-8 bg-[#f15a24]" />
                06 / The voices
              </p>

              <h2
                id="testimonials-heading"
                className="max-w-[760px] text-[clamp(3.4rem,8vw,8.4rem)] font-semibold uppercase leading-[0.82] tracking-[-0.085em]"
              >
                Not our
                <br />
                <span className="text-white/30">words.</span>
                <br />
                <span className="text-[#f15a24]">Theirs.</span>
              </h2>

              <p className="mt-8 max-w-md text-base font-light leading-8 text-white/55 sm:text-lg">
                Every meaningful journey leaves a story behind. This is where
                the experiences of the RAYATVA community belong.
              </p>
            </div>

            <div className="mt-12 flex items-end justify-between border-t border-white/15 pt-5 lg:mt-20">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                  A space for real experiences
                </p>
                <p className="mt-2 text-sm text-white/65">
                  Honest words. Real people. No inflated claims.
                </p>
              </div>
              <span className="font-mono text-xs text-[#f15a24]">R / 06</span>
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                Community stories
              </p>
              <p className="font-mono text-xs text-[#f15a24]">
                0{active + 1} <span className="text-white/25">/ 0{testimonials.length}</span>
              </p>
            </div>

            <div
              className="ray-voices__card relative flex min-h-[390px] flex-col justify-between overflow-hidden border border-white/15 bg-[#11100f] p-6 sm:min-h-[470px] sm:p-10 lg:p-12"
              aria-live="polite"
            >
              <div className="pointer-events-none absolute -right-8 -top-16 select-none text-[15rem] font-semibold leading-none tracking-[-0.12em] text-white/[0.035] sm:text-[20rem]">
                “
              </div>

              <div className="relative flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 border border-[#f15a24]/35 bg-[#f15a24]/[0.08] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#ff8a62]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f15a24]" />
                  {current.category}
                </span>
                <span className="font-mono text-[10px] text-white/30">
                  STORY / {current.id}
                </span>
              </div>

              <div key={current.id} className="ray-voices__quote relative py-12 sm:py-16">
                <p className="mb-5 text-[9px] uppercase tracking-[0.28em] text-[#f15a24]">
                  Testimonial placeholder
                </p>
                <blockquote className="max-w-2xl text-[clamp(1.65rem,3.3vw,3.35rem)] font-medium leading-[1.15] tracking-[-0.045em] text-white/85">
                  “{current.quote}”
                </blockquote>
              </div>

              <div className="relative flex flex-col gap-5 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/80">
                    {current.name}
                  </p>
                  <p className="mt-1 text-xs text-white/40">{current.detail}</p>
                </div>
                <div className="flex items-center gap-2" aria-label="Choose a testimonial placeholder">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Show testimonial slot ${index + 1}`}
                      aria-pressed={active === index}
                      className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f15a24] ${
                        active === index ? 'w-10 bg-[#f15a24]' : 'w-4 bg-white/25 hover:bg-white/55'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <span>Replace these slots with approved, genuine testimonials</span>
              <span>Real stories only <span className="text-[#f15a24]">✳</span></span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
