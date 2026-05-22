import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaUserAstronaut } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { fadeUp, staggerContainer } from "../animations/variants";
import { timeline } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="About"
          title="Digital Identity"
          description="Profil singkat, pendidikan, organisasi, dan pengalaman dikemas dalam timeline modern."
        />
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="glass neon-border rounded-[1.75rem] p-7"
          >
            <FaUserAstronaut className="mb-6 text-5xl text-cyanGlow" />
            <h3 className="font-display text-2xl font-black">Biodata Singkat</h3>
            <p className="mt-4 leading-8 text-slate-300">
              Saya adalah mahasiswa Teknik Informatika yang tertarik pada frontend development,
              backend PHP native, database MySQL, dan desain UI yang modern. Portfolio ini dibuat
              sebagai personal brand untuk kebutuhan magang Web Developer.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <FaGraduationCap className="text-2xl text-violetGlow" />
                <p className="mt-3 text-sm text-slate-400">Pendidikan</p>
                <p className="font-bold">Teknik Informatika</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <FaBriefcase className="text-2xl text-pinkGlow" />
                <p className="mt-3 text-sm text-slate-400">Fokus</p>
                <p className="font-bold">Web Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            {timeline.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} className="glass rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-neon">
                <div className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-cyanGlow to-violetGlow font-black text-night">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-cyanGlow">{item.year}</p>
                    <h3 className="mt-1 font-display text-xl font-black">{item.title}</h3>
                    <p className="text-sm font-semibold text-slate-400">{item.place}</p>
                    <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
