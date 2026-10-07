'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  className?: string;
}

export function Skeleton({ dark = false, className = '', style, ...props }: SkeletonProps) {
  return (
    <div
      className={`skeleton ${dark ? 'skeleton-dark' : ''} ${className}`}
      style={style}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonText({
  lines = 2,
  dark = false,
  className = '',
}: {
  lines?: number;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`skeleton-text-group ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          dark={dark}
          className={`skeleton-text ${i === lines - 1 && lines > 1 ? 'short' : i % 2 === 1 ? 'medium' : 'long'}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <div className={`skeleton-card ${dark ? 'dark' : ''} ${className}`} aria-hidden="true">
      <Skeleton dark={dark} className="skeleton-icon" />
      <Skeleton dark={dark} className="skeleton-title medium" style={{ width: '65%' }} />
      <SkeletonText lines={3} dark={dark} />
      <div style={{ marginTop: 'auto', paddingTop: 10 }}>
        <Skeleton dark={dark} className="skeleton-btn" style={{ width: 140, height: 42 }} />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <section className="hero" aria-hidden="true">
      <div className="wrap hero-in">
        <div>
          <Skeleton dark className="skeleton-badge" style={{ width: 130 }} />
          <Skeleton dark className="skeleton-title large" style={{ width: '85%', height: 48 }} />
          <Skeleton dark className="skeleton-title large" style={{ width: '65%', height: 48, marginBottom: 20 }} />
          <SkeletonText lines={3} dark />
          <div style={{ margin: '22px 0 18px' }}>
            <Skeleton dark style={{ width: 220, height: 38, borderRadius: 8 }} />
          </div>
          <div className="cta-row" style={{ marginTop: 8 }}>
            <Skeleton dark className="skeleton-btn" style={{ flex: '1 1 180px' }} />
            <Skeleton dark className="skeleton-btn" style={{ flex: '1 1 180px' }} />
          </div>
        </div>
        <div>
          <Skeleton dark className="skeleton-feed" />
        </div>
      </div>
    </section>
  );
}

export function TrustStripSkeleton() {
  return (
    <section className="trust" style={{ padding: '16px 0' }} aria-hidden="true">
      <div className="wrap" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {[1, 2, 3, 4].map((n) => (
          <Skeleton key={n} dark style={{ height: 32, width: 180, borderRadius: 8 }} />
        ))}
      </div>
    </section>
  );
}

export function GridSkeleton({ count = 3, dark = false }: { count?: number; dark?: boolean }) {
  return (
    <div className="feat-grid" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} dark={dark} />
      ))}
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div role="status" aria-label="Loading page content" style={{ width: '100%' }}>
      <span className="sr">Loading page content, please wait...</span>
      <HeroSkeleton />
      <TrustStripSkeleton />
      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <Skeleton className="skeleton-title medium" style={{ width: 280 }} />
            <Skeleton className="skeleton-text medium" style={{ width: 440 }} />
          </div>
          <GridSkeleton count={3} />
        </div>
      </section>
    </div>
  );
}

interface ShimmerImageProps extends ImageProps {
  wrapperClassName?: string;
}

export function ShimmerImage({
  wrapperClassName = '',
  className = '',
  alt,
  onLoad,
  ...props
}: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`shimmer-img-container ${!isLoaded ? 'is-loading' : ''} ${wrapperClassName}`}>
      <Image
        alt={alt}
        className={`shimmer-img-target ${isLoaded ? 'loaded' : ''} ${className}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
        {...props}
      />
    </div>
  );
}
