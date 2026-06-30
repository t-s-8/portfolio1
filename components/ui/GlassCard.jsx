export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}