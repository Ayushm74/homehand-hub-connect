const SkeletonCard = () => (
  <div className="rounded-[20px] border border-border bg-card p-5 shadow-card">
    <div className="flex gap-4">
      <div className="h-16 w-16 shrink-0 rounded-full bg-secondary skeleton-shimmer" />
      <div className="flex-1 space-y-2">
        <div className="h-5 w-2/3 rounded bg-secondary skeleton-shimmer" />
        <div className="h-4 w-1/2 rounded bg-secondary skeleton-shimmer" />
        <div className="h-3 w-1/3 rounded bg-secondary skeleton-shimmer" />
      </div>
    </div>
    <div className="mt-4 flex gap-2">
      <div className="h-6 w-16 rounded-md bg-secondary skeleton-shimmer" />
      <div className="h-6 w-20 rounded-md bg-secondary skeleton-shimmer" />
    </div>
    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
      <div className="h-6 w-20 rounded bg-secondary skeleton-shimmer" />
      <div className="h-9 w-28 rounded-full bg-secondary skeleton-shimmer" />
    </div>
  </div>
);

export default SkeletonCard;
