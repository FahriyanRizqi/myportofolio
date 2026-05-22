import {
  FaPhp,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaInstagram,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import profilePhoto from "../assets/profile-photo.jpg";

export const profile = {
  name: "Fahriyan Rizqi Hanandita",
  role: "Mahasiswa Teknik Informatika",
  headline: "Web Developer Intern Candidate",
  description:
    "Saya membangun website modern, responsif, dan berorientasi user experience dengan HTML, CSS, JavaScript, PHP, MySQL, dan desain interface yang rapi.",
  photo: profilePhoto,
  cv: "./cv-magang.pdf",
  email: "nama@email.com",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/", icon: FaLinkedin },
    { label: "Instagram", href: "https://instagram.com/", icon: FaInstagram },
    { label: "Email", href: "mailto:nama@email.com", icon: FaEnvelope }
  ]
};

export const skills = [
  { name: "HTML", level: 95, icon: FaHtml5, color: "#ff6b4a" },
  { name: "CSS", level: 92, icon: FaCss3Alt, color: "#24e7ff" },
  { name: "JavaScript", level: 88, icon: FaJs, color: "#f7df1e" },
  { name: "PHP", level: 82, icon: FaPhp, color: "#9b5cff" },
  { name: "MySQL", level: 84, icon: SiMysql, color: "#1dd1a1" }
];

export const timeline = [
  {
    title: "Teknik Informatika",
    place: "Universitas Data Bangsa",
    year: "2022 - Sekarang",
    detail: "Fokus pada pengembangan web, basis data, UI/UX, dan software engineering."
  },
  {
    title: "Pengalaman Organisasi",
    place: "Himpunan / UKM / Komunitas",
    year: "2023 - 2025",
    detail: "Mengelola dokumentasi digital, desain konten, dan kolaborasi tim lintas divisi."
  },
  {
    title: "Project Web Development",
    place: "Academic & Personal Projects",
    year: "2024 - 2026",
    detail: "Membangun aplikasi web berbasis HTML, CSS, JavaScript, PHP native, MySQL, dan integrasi API sederhana."
  },
  {
    title: "Target Magang",
    place: "Frontend / Web Developer / UI UX",
    year: "2026",
    detail: "Siap berkontribusi dalam pembuatan interface modern dan sistem web yang maintainable."
  }
];
