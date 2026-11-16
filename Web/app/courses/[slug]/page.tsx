import Link from "next/link";
import { notFound } from "next/navigation";
import { COURSES } from "@/lib/data";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = COURSES.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="course-detail-shell">
      <div className="course-detail-wrap">
        <div>
          <div className="course-header">
            <p className="eyebrow">{course.category}</p>
            <h1>{course.title}</h1>
            <p>{course.overview}</p>

            <div className="detail-meta">
              <span>⭐ {course.rating} rating</span>
              <span>{course.students.toLocaleString()} learners</span>
              <span>{course.level}</span>
              <span>{course.lessons} lessons</span>
            </div>

            <div className="row" style={{ marginTop: 24 }}>
              <Link className="btn" href="/#courses">Enroll now</Link>
              <Link className="btn btn-light" href="/courses">Back to catalog</Link>
            </div>
          </div>

          <section className="detail-section">
            <h2>What you will learn</h2>
            <ul>
              {course.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Course curriculum</h2>
            <ul className="curriculum-list">
              {course.curriculum.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="course-aside">
          <div className="thumb" style={{ height: 180 }}>{course.icon}</div>
          <div className="price">
            ₹{course.price.toLocaleString("en-IN")}
            <small>one-time</small>
          </div>

          <div className="detail-meta" style={{ marginTop: 8, marginBottom: 18 }}>
            <span>{course.duration}</span>
            <span>{course.certificate}</span>
          </div>

          <Link className="btn" href="/#courses" style={{ width: "100%", justifyContent: "center" }}>
            Enroll now
          </Link>

          <div className="detail-section" style={{ marginTop: 22, padding: 18 }}>
            <h2 style={{ marginBottom: 12 }}>Instructor</h2>
            <p style={{ margin: 0 }}>{course.instructor}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
