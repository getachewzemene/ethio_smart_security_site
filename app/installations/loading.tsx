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

      <section className="section inst-showcase">
        <div className="wrap">
          <div className="sec-head">
            <Skeleton style={{ width: 220, height: 18, marginBottom: 8, borderRadius: 6 }} />
            <Skeleton style={{ width: 340, height: 32, marginBottom: 10, borderRadius: 8 }} />
            <Skeleton style={{ width: 500, height: 18, borderRadius: 6 }} />
          </div>

          {/* Metrics bar skeleton */}
          <div className="inst-metrics-bar">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="inst-metric-item">
                <Skeleton style={{ width: 36, height: 36, borderRadius: 10, flex: 'none' }} />
                <div style={{ flex: 1 }}>
                  <Skeleton style={{ width: '80%', height: 16, marginBottom: 4, borderRadius: 4 }} />
                  <Skeleton style={{ width: '60%', height: 12, borderRadius: 4 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Filter pills skeleton */}
          <div className="inst-filters-wrap" style={{ gap: 8, marginBottom: 22 }}>
            {[90, 140, 130, 130, 120, 120].map((w, idx) => (
              <Skeleton key={idx} style={{ width: w, height: 38, borderRadius: 999 }} />
            ))}
          </div>

          {/* Compact 6-item Grid */}
          <div className="inst-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="inst-card">
                <Skeleton style={{ width: '100%', aspectRatio: '16/10' }} />
                <div className="inst-card-body">
                  <Skeleton style={{ width: '80%', height: 22, borderRadius: 6, marginBottom: 4 }} />
                  <Skeleton style={{ width: '50%', height: 16, borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                    <Skeleton style={{ width: 70, height: 22, borderRadius: 6 }} />
                    <Skeleton style={{ width: 85, height: 22, borderRadius: 6 }} />
                    <Skeleton style={{ width: 65, height: 22, borderRadius: 6 }} />
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 10, borderTop: '1px solid var(--line)' }}>
                    <Skeleton style={{ flex: 1, height: 34, borderRadius: 8 }} />
                    <Skeleton style={{ width: 65, height: 34, borderRadius: 8 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
