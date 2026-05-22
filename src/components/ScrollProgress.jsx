import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-cyanGlow via-violetGlow to-pinkGlow"
      style={{ scaleX }}
    />
  );
}
