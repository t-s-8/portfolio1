export default function Badge({
  children,
}) {
  return (
    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-400">
      {children}
    </span>
  );
}