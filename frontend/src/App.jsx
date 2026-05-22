import { useEffect, useState } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import CursorGlow from "./components/CursorGlow";
import FloatingSocial from "./components/FloatingSocial";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <>
      <LoadingScreen loading={loading} />
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <FloatingSocial />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
