import Link from "next/link";
import { COURSES } from "@/lib/data";

export default function CoursesCatalogPage() {
  return (
    <main className="catalog-shell">
      <div className="catalog-wrap">
        <div className="catalog-head">
          <div>
            <p className="eyebrow">Rayatva learning</p>
            <h1>Choose your next learning sprint</h1>
          </div>
          <Link className="btn" href="/#booking">Book a custom service</Link>
        </div>

        <div className="catalog-pills">
          <span className="chip active">All courses</span>
          <span className="chip">Business</span>
          <span className="chip">Creative</span>
          <span className="chip">Wellness</span>
        </div>

        <div className="course-grid">
          {COURSES.map((course) => (
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

              <div className="price">
                ₹{course.price.toLocaleString("en-IN")}
                <small>one-time</small>
              </div>

              <div className="card-actions">
                <Link className="btn btn-light" href={`/courses/${course.slug}`}>
                  View course
                </Link>
                <Link className="btn" href="/#courses">
                  Enroll
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
