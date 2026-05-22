import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { getProjects } from "../api/portfolioApi";
import { fadeUp, staggerContainer } from "../animations/variants";
import birdFeedWebsite from "../assets/website-pakan-burung.png";
import hotelBookingImage from "../assets/WhatsApp Image 2026-05-22 at 17.41.34.jpeg";

const fallbackProjects = [
  {
    id: "website-booking-hotel",
    title: "Website Booking Hotel",
    description:
      "Website pemesanan hotel dengan fitur pencarian kamar, pilihan tanggal, detail fasilitas, dan konfirmasi reservasi yang mudah digunakan.",
    image: hotelBookingImage,
    tech_stack: "HTML, CSS, JavaScript, PHP, MySQL",
    github_link: "https://github.com/",
    demo_link: "https://example.com",
    category: "Web App"
  },
  {
    id: "website-pakan-burung",
    title: "Website Pakan Burung",
    description:
      "Website toko pakan burung Dampit Kicaw yang menampilkan produk, informasi usaha, keranjang belanja, dan halaman admin untuk mengelola data produk berbasis database.",
    image: birdFeedWebsite,
    tech_stack: "PHP, HTML, CSS, MySQL, JavaScript",
    github_link: "https://github.com/",
    demo_link: "https://example.com",
    category: "Web App"
  },
  
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        const projectSources = [...fallbackProjects, ...data];
        const uniqueProjects = projectSources.filter(
          (project, index, source) => source.findIndex((item) => item.title === project.title) === index
        );
        const visibleProjects = uniqueProjects.filter((project) => project.title !== "Neon Task Manager");
        const webApps = visibleProjects.filter((project) => project.category === "Web App");
        setProjects(webApps.length ? webApps : fallbackProjects);
      })
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.tech_stack.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [projects, query]);

  const getProjectImage = (image) => {
    if (!image) return birdFeedWebsite;
    if (image.startsWith("http") || image.startsWith("/") || image.startsWith("data:")) return image;
    return `${import.meta.env.BASE_URL}${image.replace(/^\/+/, "")}`;
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Projects"
          title="Web App"
          description="Project web app yang dibuat dengan HTML, CSS, JavaScript, PHP, dan MySQL."
        />

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-center">
          <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3 lg:w-[420px]">
            <FaSearch className="text-cyanGlow" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search project..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="glass rounded-3xl p-8 text-center text-slate-300">Loading projects...</div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass neon-border overflow-hidden rounded-[1.75rem] transition hover:shadow-neon"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={getProjectImage(project.image)} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-night/70 px-3 py-1 text-xs font-bold text-cyanGlow backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-black">{project.title}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech_stack.split(",").map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a href={project.github_link} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg transition hover:text-cyanGlow hover:shadow-neon">
                      <FaGithub />
                    </a>
                    <a href={project.demo_link} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg transition hover:text-pinkGlow hover:shadow-neon">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
