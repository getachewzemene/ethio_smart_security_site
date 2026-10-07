import { Skeleton, SkeletonText } from '@/components/Skeleton';

export default function InstallationsLoading() {
  return (
    <div role="status" aria-label="Loading installations...">
      <span className="sr">Loading installations...</span>
      <section className="page-hero">
        <div className="wrap">
          <Skeleton dark style={{ width: 340, height: 42, marginBottom: 14, borderRadius: 8 }} />
          <SkeletonText lines={2} dark />
          <div className="cta-row" style={{ marginTop: 20 }}>
            <Skeleton dark style={{ width: 200, height: 48, borderRadius: 999 }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <Skeleton style={{ width: 240, height: 32, marginBottom: 10, borderRadius: 8 }} />
            <Skeleton style={{ width: 420, height: 18, borderRadius: 6 }} />
          </div>
          <div className="inst-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="inst" style={{ border: '1px solid var(--line)' }}>
                <Skeleton style={{ width: '100%', aspectRatio: '4/3', borderRadius: '10px 10px 0 0' }} />
                <div style={{ padding: '14px' }}>
                  <Skeleton style={{ width: '70%', height: 20, marginBottom: 8, borderRadius: 6 }} />
                  <Skeleton style={{ width: '45%', height: 16, borderRadius: 6 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
