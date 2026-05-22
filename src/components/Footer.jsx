import { FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/80 py-10">
      <div className="section-shell">
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-cyanGlow to-transparent shadow-[0_0_28px_rgba(36,231,255,.6)]" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-display text-2xl font-black"><span className="gradient-text">My</span> Portofolio</h3>
            <p className="mt-2 text-sm text-slate-400">Copyright 2026. Built for Web Developer internship.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-slate-200 transition hover:text-cyanGlow hover:shadow-neon" aria-label={social.label}>
                  <Icon />
                </a>
              );
            })}
            <a href="#home" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-cyanGlow transition hover:shadow-neon" aria-label="Back to top">
              <FaArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
