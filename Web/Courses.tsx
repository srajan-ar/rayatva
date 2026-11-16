"use client";
import Link from "next/link";
import { useRef } from "react";
import { COURSES } from "@/lib/data";
import { useApp } from "./AppProvider";

export default function Courses() {
  const { buy } = useApp();
  const sc = useRef<HTMLDivElement>(null);
  const go = (d: number) => sc.current?.scrollBy({ left: (d * sc.current.clientWidth) / 1.2, behavior: "smooth" });

  return (
    <section id="courses">
      <div className="w">
        <div className="sh">
          <span className="eb">Courses</span>
          <h2>Build real momentum with premium learning tracks</h2>
          <p className="lead">Track your progress, earn certificates, and join guided live programs designed for focus, growth, and mindful execution.</p>
        </div>

        <div className="course-feature-band">
          <div className="feature-pill active">All courses</div>
          <div className="feature-pill">Business</div>
          <div className="feature-pill">Creative</div>
          <div className="feature-pill">Wellness</div>
          <div className="feature-pill">Certificates</div>
        </div>

        <div className="catalog-toolbar">
          <div className="catalog-pills">
            <span className="chip active">All</span>
            <span className="chip">Business</span>
            <span className="chip">Creative</span>
            <span className="chip">Wellness</span>
          </div>

          <div className="arrows">
            <button aria-label="Previous courses" onClick={() => go(-1)}>←</button>
            <button aria-label="Next courses" onClick={() => go(1)}>→</button>
          </div>
        </div>

        <div className="scroller" ref={sc}>
          {COURSES.map((course, index) => (
            <article className="card course-card" key={course.slug}>
              <div className="thumb">
                {course.icon}
                <em>{course.badge}</em>
              </div>

              <div className="course-topline">
                <span>{course.category}</span>
                <span>⭐ {course.rating}</span>
              </div>

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="meta">
                <span>⏱ {course.duration}</span>
                <span>▶ {course.lessons} lessons</span>
              </div>

              <div className="course-stats">
                <span>{course.students.toLocaleString()} learners</span>
                <span>{course.level}</span>
              </div>

              <div className="price-row">
                <div className="price">
                  ₹{course.price.toLocaleString("en-IN")}
                  <small>one-time</small>
                </div>
                <span className="mini-tag">Top Rated</span>
              </div>

              <div className="card-actions">
                <Link className="btn btn-light" href={`/courses/${course.slug}`}>
                  View course
                </Link>
                <button className="btn" onClick={() => buy(index)}>Buy course</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
