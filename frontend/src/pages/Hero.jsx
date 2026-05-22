import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import { fadeUp, slideIn } from "../animations/variants";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen overflow-hidden pt-28">
      <div className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div variants={slideIn("left")} initial="hidden" animate="visible">
          <p className="mb-5 inline-flex rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-4 py-2 text-sm font-bold text-cyanGlow shadow-[0_0_28px_rgba(36,231,255,.18)]">
            {profile.headline}
          </p>
          <h1 className="font-display text-4xl font-black leading-tight md:text-6xl xl:text-7xl">
            {profile.name}
            <span className="block gradient-text">Futuristic Web Developer</span>
          </h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {profile.role}. {profile.description}
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.cv} className="btn-neon inline-flex items-center gap-3 rounded-full px-6 py-3 font-bold text-white">
              <FaDownload /> Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:border-cyanGlow/60 hover:text-cyanGlow hover:shadow-neon">
              <FaPaperPlane /> Hire Me
            </a>
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full px-2 py-3 font-bold text-slate-300 transition hover:text-white">
              Projects <FaArrowRight />
            </a>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-lg text-slate-100 transition hover:-translate-y-1 hover:border-cyanGlow/50 hover:text-cyanGlow hover:shadow-neon"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right")}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-[520px]"
        >
          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass neon-border relative overflow-hidden rounded-[2rem] p-5"
          >
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-cyanGlow/25 blur-3xl" />
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-cyanGlow/30 via-violetGlow/20 to-pinkGlow/30 p-1">
              <img
                src={profile.photo}
                alt={`Foto profil ${profile.name}`}
                className="h-full w-full rounded-[1.35rem] object-cover object-[52%_35%]"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["HTML", "CSS", "PHP"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center text-sm font-bold text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [12, -12, 12], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-4 top-16 rounded-2xl px-5 py-4 text-sm font-bold text-cyanGlow"
          >
            Available for Internship
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [2, -2, 2] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-2 bottom-20 rounded-2xl px-5 py-4 text-sm font-bold text-pinkGlow"
          >
            UI/UX Friendly
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
