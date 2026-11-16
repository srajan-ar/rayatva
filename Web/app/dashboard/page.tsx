"use client";

import Link from "next/link";
import { COURSES } from "@/lib/data";
import { useApp } from "../../AppProvider";

export default function DashboardPage() {
  const { user, enrolled } = useApp();

  if (!user) {
    return (
      <main className="dashboard-shell">
        <section className="dashboard-card">
          <p className="eyebrow">Rayatva dashboard</p>
          <h1>Log in to unlock your journey</h1>
          <p>Track your enrolled courses, live yoga session access, and business growth plans.</p>
          <Link className="btn" href="/#courses">
            Explore courses
          </Link>
        </section>
      </main>
    );
  }

  const enrolledCourses = COURSES.filter((course, index) => enrolled.includes(index));

  return (
    <main className="dashboard-shell">
      <section className="dashboard-card large">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>

        <div className="stats-inline">
          <div>
            <strong>{enrolled.length || 0}</strong>
            <span>Enrolled</span>
          </div>
          <div>
            <strong>{Math.min(3, enrolled.length || 1)}</strong>
            <span>Live classes</span>
          </div>
          <div>
            <strong>{enrolled.length ? "96%" : "0%"}</strong>
            <span>Focus score</span>
          </div>
        </div>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <p className="eyebrow">Next up</p>
          <h3>{enrolledCourses[0]?.title || "Brand Growth Intensive"}</h3>
          <p>{enrolledCourses[0] ? `Module 02 · ${enrolledCourses[0].category} track` : "Module 04 · Positioning your offer for premium clients"}</p>
        </article>

        <article className="dashboard-card">
          <p className="eyebrow">Schedule</p>
          <h3>Live yoga flow</h3>
          <p>Today at 7:00 AM · Zoom link active</p>
        </article>

        <article className="dashboard-card">
          <p className="eyebrow">Support</p>
          <h3>Growth coaching</h3>
          <p>Book a 1:1 session with our strategy team</p>
        </article>
      </section>

      <section className="dashboard-list">
        <div className="dashboard-header-row">
          <h2>Your learning path</h2>
          <Link href="/courses">Browse all courses</Link>
        </div>

        {enrolledCourses.length ? (
          <div className="enrolled-list">
            {enrolledCourses.map((course) => (
              <article className="dashboard-course" key={course.slug}>
                <div className="dashboard-course-icon">{course.icon}</div>
                <div className="dashboard-course-copy">
                  <div className="dashboard-course-top">
                    <h3>{course.title}</h3>
                    <span>{course.badge}</span>
                  </div>
                  <p>{course.description}</p>
                </div>
                <div className="course-progress">
                  <span>72%</span>
                  <div className="progress-bar"><i style={{ width: "72%" }} /></div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No courses enrolled yet. Pick a learning track to begin your next chapter.</p>
            <Link className="btn" href="/courses">Explore courses</Link>
          </div>
        )}
      </section>
    </main>
  );
}
