import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const stars = Array.from({ length: 72 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 9) * 0.22
}));

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 18 });

  useEffect(() => {
    const move = (event) => {
      mouseX.set((event.clientX / window.innerWidth - 0.5) * 28);
      mouseY.set((event.clientY / window.innerHeight - 0.5) * 28);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-night">
      <div className="absolute inset-0 cyber-grid opacity-80" />
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violetGlow/30 blur-[110px]"
      />
      <motion.div
        style={{ x: smoothY, y: smoothX }}
        className="absolute right-[-10rem] top-1/3 h-[32rem] w-[32rem] rounded-full bg-cyanGlow/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [.35, .7, .35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-14rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-pinkGlow/20 blur-[120px]"
      />
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="star"
          style={{ left: star.left, top: star.top }}
          animate={{ opacity: [.25, 1, .25], scale: [1, 1.8, 1] }}
          transition={{ duration: 2.8, delay: star.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
