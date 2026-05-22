import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { skills } from "../data/profile";
import { fadeUp, staggerContainer } from "../animations/variants";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Skills"
          title="Technology Stack"
          description="Skill cards dengan progress bar animasi, icon, hover scale, dan glow effect."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -6 }}
                className="glass rounded-3xl p-5 transition hover:shadow-neon"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-3xl" style={{ color: skill.color }}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black">{skill.name}</h3>
                    <p className="text-sm text-slate-400">{skill.level}% proficiency</p>
                  </div>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, #9b5cff)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
