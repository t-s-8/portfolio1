import Container from "./Container";

export default function Section({
  children,
  className = "",
}) {
  return (
    <section
      className={`relative py-32 lg:py-40 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}