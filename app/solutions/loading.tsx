import { Skeleton, SkeletonCard, SkeletonText } from '@/components/Skeleton';

export default function SolutionsLoading() {
  return (
    <div role="status" aria-label="Loading CCTV solutions...">
      <span className="sr">Loading CCTV solutions...</span>
      <section className="page-hero">
        <div className="wrap">
          <Skeleton dark style={{ width: 320, height: 42, marginBottom: 14, borderRadius: 8 }} />
          <SkeletonText lines={2} dark />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <Skeleton style={{ width: 260, height: 32, marginBottom: 10, borderRadius: 8 }} />
            <Skeleton style={{ width: 450, height: 18, borderRadius: 6 }} />
          </div>
          <div className="feat-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
