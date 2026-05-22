import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-night"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="relative h-28 w-28 rounded-full border border-cyanGlow/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-[-6px] h-3 w-3 rounded-full bg-cyanGlow shadow-[0_0_22px_#24e7ff]" />
          </motion.div>
          <p className="absolute mt-44 font-display text-sm font-bold uppercase tracking-[.35em] text-slate-300">
            Loading Portfolio
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
