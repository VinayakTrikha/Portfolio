import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-200 font-inter overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <motion.div
            className="text-2xl font-bold text-blue-400"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            VT
          </motion.div>
          <ul className="hidden md:flex gap-6 text-slate-300">
            {["Home", "Skills", "Experience", "Projects", "Contact"].map(
              (link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-400 transition-all duration-300 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Hero Section with Dynamic Waves */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      >
        {/* Multiple Wave Layers */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          {/* Wave 1 - Slowest */}
          <motion.path
            d="M0,400 C300,300 400,500 800,400 C1000,300 1100,500 1200,400 L1200,800 L0,800 Z"
            fill="rgba(59, 130, 246, 0.1)"
            animate={{
              d: [
                "M0,400 C300,300 400,500 800,400 C1000,300 1100,500 1200,400 L1200,800 L0,800 Z",
                "M0,450 C300,350 400,550 800,450 C1000,350 1100,550 1200,450 L1200,800 L0,800 Z",
                "M0,400 C300,300 400,500 800,400 C1000,300 1100,500 1200,400 L1200,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Wave 2 - Medium */}
          <motion.path
            d="M0,500 C200,400 600,600 800,500 C1000,400 1100,600 1200,500 L1200,800 L0,800 Z"
            fill="rgba(139, 92, 246, 0.15)"
            animate={{
              d: [
                "M0,500 C200,400 600,600 800,500 C1000,400 1100,600 1200,500 L1200,800 L0,800 Z",
                "M0,480 C200,380 600,580 800,480 C1000,380 1100,580 1200,480 L1200,800 L0,800 Z",
                "M0,520 C200,420 600,620 800,520 C1000,420 1100,620 1200,520 L1200,800 L0,800 Z",
                "M0,500 C200,400 600,600 800,500 C1000,400 1100,600 1200,500 L1200,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Wave 3 - Fastest */}
          <motion.path
            d="M0,600 C400,500 600,700 1000,600 C1100,550 1150,650 1200,600 L1200,800 L0,800 Z"
            fill="rgba(96, 165, 250, 0.2)"
            animate={{
              d: [
                "M0,600 C400,500 600,700 1000,600 C1100,550 1150,650 1200,600 L1200,800 L0,800 Z",
                "M0,620 C400,520 600,720 1000,620 C1100,570 1150,670 1200,620 L1200,800 L0,800 Z",
                "M0,580 C400,480 600,680 1000,580 C1100,530 1150,630 1200,580 L1200,800 L0,800 Z",
                "M0,600 C400,500 600,700 1000,600 C1100,550 1150,650 1200,600 L1200,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Mouse follower effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <motion.h1
          className="relative text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent z-10"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          Vinayak Trikha
        </motion.h1>

        <motion.p
          className="relative text-lg md:text-xl text-slate-400 mt-4 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Software Engineer
        </motion.p>

        <motion.p
          className="relative text-slate-300 mt-6 max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Nearly 4 years of experience building scalable, accessible, and
          performant applications with a focus on user experience.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-8 flex-wrap justify-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow-lg transition-all duration-300 font-semibold"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "#60a5fa" }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.a>
        </motion.div>
      </section>

      {/* Skills Section with Enhanced Animations */}
      <section id="skills" className="py-20 container mx-auto px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20 pointer-events-none"></div>

        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend",
              skills: [
                "React",
                "Redux Toolkit",
                "Context API",
                "Angular",
                "RxJS",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS/SCSS",
              ],
              color: "blue",
            },
            {
              title: "Backend",
              skills: ["Node.js", "Express", "MongoDB", "REST API"],
              color: "purple",
            },
            {
              title: "Tools & Practices",
              skills: [
                "Docker",
                "Git",
                "Vite",
                "Parcel",
                "Tailwind CSS",
                "Agile",
                "Performance Optimization",
              ],
              color: "cyan",
            },
          ].map((cat, index) => (
            <motion.div
              key={cat.title}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                borderColor:
                  cat.color === "blue"
                    ? "#60a5fa"
                    : cat.color === "purple"
                    ? "#a855f7"
                    : "#06b6d4",
                boxShadow: `0 25px 50px rgba(${
                  cat.color === "blue"
                    ? "96, 165, 250"
                    : cat.color === "purple"
                    ? "168, 85, 247"
                    : "6, 182, 212"
                }, 0.3)`,
              }}
            >
              {/* Floating orb effect */}
              <div
                className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${
                  cat.color === "blue"
                    ? "from-blue-400/20 to-blue-600/20"
                    : cat.color === "purple"
                    ? "from-purple-400/20 to-purple-600/20"
                    : "from-cyan-400/20 to-cyan-600/20"
                } rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
              ></div>

              <h3
                className={`text-2xl font-semibold mb-6 ${
                  cat.color === "blue"
                    ? "text-blue-400"
                    : cat.color === "purple"
                    ? "text-purple-400"
                    : "text-cyan-400"
                }`}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 text-sm bg-gradient-to-r ${
                      cat.color === "blue"
                        ? "from-blue-500/20 to-blue-600/20 text-blue-300 border-blue-400/30"
                        : cat.color === "purple"
                        ? "from-purple-500/20 to-purple-600/20 text-purple-300 border-purple-400/30"
                        : "from-cyan-500/20 to-cyan-600/20 text-cyan-300 border-cyan-400/30"
                    } rounded-full border backdrop-blur-sm`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section with Timeline Animation */}
      <section
        id="experience"
        className="py-20 container mx-auto px-6 relative"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="space-y-12 pl-16">
            {[
              {
                title: "Software Engineer - iZooto",
                period: "Oct 2022 – Present",
                points: [
                  "Built production-ready features for 10k+ global users with WCAG compliance.",
                  "Improved efficiency by 20% using React Profiler and optimized SSR hydration.",
                  "Migrated Angular app to React, boosting productivity by 10%.",
                ],
              },
              {
                title: "Associate Software Engineer - Newgen Software",
                period: "Jan 2021 – Oct 2021",
                points: [
                  "Contributed to Sahara Project using React & Angular.",
                  "Collaborated with clients and debugged cross-platform features.",
                ],
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-16 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.5 }}
                  whileHover={{
                    scale: 1.5,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
                  }}
                />

                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{exp.period}</p>
                  <ul className="space-y-2 text-slate-300">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.3 + pointIndex * 0.1 + 0.8,
                        }}
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Cards */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Dev Community",
              desc: "Development commmunity where you can connect with developers.",
              tech: [
                "React",
                "Redux",
                "Node JS",
                "Express",
                "MongoDB",
                "Tailwind",
                "Redux Toolkit",
              ],
              link: "https://github.com/VinayakTrikha/Dev-Tinder-",
              gradient: "from-red-500 to-pink-500",
            },
            {
              name: "Food Delivery App",
              desc: "Enterprise-grade food delivery platform with real-time features.",
              tech: ["React", "Redux Toolkit", "Firebase", "Parcel"],
              link: "https://github.com/VinayakTrikha/Swiggy-App",
              gradient: "from-orange-500 to-red-500",
            },
            {
              name: "YouTube Clone",
              desc: "YouTube clone with search, filtering, and API integration.",
              tech: ["React", "Redux", "Tailwind", "YouTube API"],
              link: "https://github.com/VinayakTrikha/Youtube-Project",
              gradient: "from-red-500 to-pink-500",
            },
          ].map((proj, index) => (
            <motion.div
              key={proj.name}
              className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{
                y: -10,
                borderColor: "#60a5fa",
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Animated corner accent */}
              <motion.div
                className={`absolute top-0 right-0 w-0 h-0.5 bg-gradient-to-r ${proj.gradient}`}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />

              <h3 className="text-2xl font-semibold text-blue-400 mb-3 relative z-10">
                {proj.name}
              </h3>
              <p className="text-slate-300 mt-2 mb-4 relative z-10">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-4 mb-6 relative z-10">
                {proj.tech.map((t, techIndex) => (
                  <motion.span
                    key={t}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={proj.link}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors relative z-10 font-medium"
                whileHover={{ x: 5 }}
              >
                <span>🔗</span>
                View Code
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section with Wave Animation */}
      <section
        id="contact"
        className="py-20 bg-slate-900/60 relative overflow-hidden"
      >
        {/* Animated wave at top of contact section */}
        <svg
          className="absolute top-0 left-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C300,100 900,20 1200,80 L1200,0 Z"
            fill="rgba(15, 23, 42, 1)"
            animate={{
              d: [
                "M0,0 C300,100 900,20 1200,80 L1200,0 Z",
                "M0,0 C300,80 900,40 1200,100 L1200,0 Z",
                "M0,0 C300,60 900,80 1200,60 L1200,0 Z",
                "M0,0 C300,100 900,20 1200,80 L1200,0 Z",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-6 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            {
              href: "mailto:vinayaktrikha003@gmail.com",
              text: "📧 Email",
              color: "red",
            },
            {
              href: "https://linkedin.com/in/vinayak-trikha-504464239",
              text: "💼 LinkedIn",
              color: "blue",
            },
            {
              href: "https://github.com/VinayakTrikha",
              text: "💻 GitHub",
              color: "gray",
            },
            {
              href: "https://leetcode.com/u/vinayaktrikha003/",
              text: "📊 LeetCode",
              color: "orange",
            },
          ].map((contact, index) => (
            <motion.a
              key={contact.text}
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
              className="px-8 py-4 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-300 transition-all duration-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {contact.text}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom decorative waves */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,120 C200,60 400,80 600,40 C800,0 1000,60 1200,20 L1200,120 Z"
            fill="rgba(59, 130, 246, 0.1)"
            animate={{
              d: [
                "M0,120 C200,60 400,80 600,40 C800,0 1000,60 1200,20 L1200,120 Z",
                "M0,120 C200,80 400,60 600,60 C800,60 1000,40 1200,40 L1200,120 Z",
                "M0,120 C200,40 400,100 600,80 C800,20 1000,80 1200,60 L1200,120 Z",
                "M0,120 C200,60 400,80 600,40 C800,0 1000,60 1200,20 L1200,120 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        .font-inter {
          font-family: "Inter", sans-serif;
        }

        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgb(15, 23, 42);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60a5fa, #a855f7);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Background texture */
        body {
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(59, 130, 246, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(139, 92, 246, 0.1) 0%,
              transparent 50%
            );
        }
      `}</style>
    </div>
  );
}
