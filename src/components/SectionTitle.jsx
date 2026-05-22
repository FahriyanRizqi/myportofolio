import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 font-display text-sm font-bold uppercase tracking-[.28em] text-cyanGlow">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-black md:text-5xl">
        {title} <span className="gradient-text">Interface</span>
      </h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-300">{description}</p>}
    </motion.div>
  );
}
