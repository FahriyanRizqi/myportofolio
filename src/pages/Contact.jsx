import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { addContact } from "../api/portfolioApi";
import { fadeUp } from "../animations/variants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast({ type: "error", message: "Semua field wajib diisi." });
      return;
    }
    setLoading(true);
    try {
      const result = await addContact(form);
      setToast({ type: "success", message: result.message || "Pesan berhasil dikirim." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setToast({ type: "error", message: "Gagal mengirim pesan. Pastikan API XAMPP aktif." });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3600);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Contact"
          title="Signal Channel"
          description="Form kontak tersimpan ke database MySQL melalui PHP API dengan validasi dan toast notification."
        />
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass neon-border mx-auto max-w-3xl rounded-[1.75rem] p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Nama"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition placeholder:text-slate-500 focus:border-cyanGlow/60"
            />
            <input
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="Email"
              type="email"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition placeholder:text-slate-500 focus:border-cyanGlow/60"
            />
          </div>
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            placeholder="Pesan"
            rows="6"
            className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none transition placeholder:text-slate-500 focus:border-cyanGlow/60"
          />
          <button disabled={loading} className="btn-neon mt-5 inline-flex items-center gap-3 rounded-full px-7 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60">
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            className={`fixed bottom-6 right-6 z-[95] rounded-2xl px-5 py-4 font-bold shadow-neon ${
              toast.type === "success" ? "bg-cyanGlow text-night" : "bg-pinkGlow text-white"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
