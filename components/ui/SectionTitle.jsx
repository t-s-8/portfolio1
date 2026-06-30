export default function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.5em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="mt-6 text-5xl font-bold md:text-7xl">
        {title}
      </h2>

      <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
        {description}
      </p>
    </>
  );
}