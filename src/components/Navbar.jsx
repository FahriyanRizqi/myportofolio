import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      const current = links.findLast((item) => {
        const section = document.getElementById(item.toLowerCase());
        return section && window.scrollY >= section.offsetTop - 160;
      });
      setActive(current || "Home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-night/55 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="font-display text-xl font-black">
          <span className="gradient-text">My</span> Portofolio
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:text-cyanGlow hover:shadow-[0_0_22px_rgba(36,231,255,.25)] ${
                active === link ? "bg-white/10 text-cyanGlow" : "text-slate-300"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-cyanGlow transition hover:scale-105 hover:shadow-neon"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Open navigation"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-white lg:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="section-shell mb-4 grid gap-2 rounded-2xl border border-white/10 bg-ink/95 p-4 shadow-card lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${
                  active === link ? "bg-white/10 text-cyanGlow" : "text-slate-200"
                }`}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
