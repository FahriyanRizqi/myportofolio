import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 280, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 280, damping: 30 });

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 80);
      y.set(event.clientY - 80);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-40 w-40 rounded-full bg-cyanGlow/10 blur-2xl md:block"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}
