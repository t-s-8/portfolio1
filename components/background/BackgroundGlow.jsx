export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.22),_transparent_35%)] blur-3xl opacity-80" />
      
    </div>
  );
}