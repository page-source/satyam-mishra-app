import Link from 'next/link';

export const metadata = { title: 'Not found' };

export default function NotFound() {
  return (
    <section
      className="section"
      style={{ minHeight: '70svh', display: 'grid', placeItems: 'center' }}
    >
      <div className="shell" style={{ textAlign: 'center' }}>
        <p className="tag accent" style={{ marginBottom: '1rem' }}>
          404
        </p>
        <h1 style={{ fontSize: 'var(--step-3)', marginBottom: '1.25rem' }}>
          Page not found.
        </h1>
        <Link className="pull pull-out" href="/">
          Go to homepage
        </Link>
      </div>
    </section>
  );
}
