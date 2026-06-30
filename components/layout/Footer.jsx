import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-zinc-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Tushar Salampuria
        </p>

        <p>
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>

        <div className="flex gap-5">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
           <FaLinkedin size={20} />
          </a>

        </div>

      </div>

    </footer>
  );
}