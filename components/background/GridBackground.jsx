export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">

      {/* Vertical Lines */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Horizontal Lines */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_bottom,rgba(255,255,255,.05)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

    </div>
  );
}