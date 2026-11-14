import Link from "next/link";

export default function NotFound() {
  return (
    <main className="dashboard-shell" style={{ textAlign: "center" }}>
      <section className="dashboard-card" style={{ maxWidth: 640, margin: "0 auto" }}>
        <p className="eyebrow">404 error</p>
        <h1>Page not found</h1>
        <p>The page you are looking for has moved, changed, or no longer exists.</p>
        <Link className="btn" href="/">
          Return home
        </Link>
      </section>
    </main>
  );
}
