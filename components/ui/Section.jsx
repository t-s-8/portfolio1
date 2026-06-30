import Container from "./Container";

export default function Section({
  children,
  className = "",
  id,
}) {
  return (
    <section
      id={id}
      className={`relative py-32 lg:py-40 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}