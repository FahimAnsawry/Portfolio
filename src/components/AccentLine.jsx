// Thin mint gradient rule used to divide sections and edge the header
export default function AccentLine({ className = 'absolute bottom-0 left-0 right-0', opacity = 0.4 }) {
  return (
    <div
      aria-hidden="true"
      className={`h-[1px] ${className}`}
      style={{
        background: 'linear-gradient(90deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
        opacity,
      }}
    />
  );
}
