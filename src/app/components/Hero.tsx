import { motion } from "motion/react";
import { ArrowRight, Star, Users, Award, Briefcase } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function FloatingParticle({ x, y, delay, size, isDark }: { x: number; y: number; delay: number; size: number; isDark: boolean }) {
  return (
    <motion.div
      className={`absolute rounded-full ${isDark ? "bg-gradient-to-br from-indigo-500/30 to-cyan-400/30" : "bg-gradient-to-br from-indigo-400/20 to-cyan-400/20"}`}
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const particles = Array.from({ length: 20 }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  size: Math.random() * 6 + 3,
}));

const stats = [
  { icon: Users, value: "500+", label: "Interns Trained" },
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Award, value: "100%", label: "Free Training" },
  { icon: Star, value: "4.9★", label: "Intern Rating" },
];

export function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#050510]" : "bg-gradient-to-br from-[#f0f0ff] via-[#f8f5ff] to-[#e8f4ff]"
      }`}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse ${isDark ? "bg-indigo-600/20" : "bg-indigo-400/15"}`} />
        <div className={`absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse ${isDark ? "bg-cyan-500/15" : "bg-cyan-400/12"}`} style={{ animationDelay: "1s" }} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? "bg-purple-600/10" : "bg-purple-400/8"}`} />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "#6366f1" : "#6366f1"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#6366f1" : "#6366f1"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: isDark ? 0.03 : 0.04,
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => <FloatingParticle key={i} {...p} isDark={isDark} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm border ${
            isDark ? "bg-white/5 border-white/10 text-white/70" : "bg-white/70 border-indigo-200 text-indigo-700"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Accepting Intern Applications for 2026
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`text-5xl md:text-7xl mb-6 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}
          style={{ fontWeight: 800 }}
        >
          Launch Your Career with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#22d3ee]">
            Real-World
          </span>{" "}
          Experience
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}
        >
          Join <strong className={isDark ? "text-white/80" : "text-gray-800"}>Dodo AI</strong> — India's premier internship platform offering
          free training, live projects, letter of recommendations, and industry exposure across
          CSE, EE, ME, CE, and more.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#22d3ee] text-white font-semibold text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            Apply for Free Internship
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border ${
              isDark
                ? "border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                : "border-indigo-200 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300"
            }`}
          >
            Our Services
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`flex flex-col items-center p-4 rounded-2xl border backdrop-blur-sm transition-colors ${
                isDark
                  ? "bg-white/5 border-white/10 hover:bg-white/8"
                  : "bg-white/70 border-indigo-100 hover:bg-white shadow-sm"
              }`}
            >
              <stat.icon className="w-5 h-5 text-indigo-500 mb-2" />
              <span className={`text-2xl ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 700 }}>{stat.value}</span>
              <span className={`text-xs mt-1 ${isDark ? "text-white/50" : "text-gray-500"}`}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className={`w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2 ${isDark ? "border-white/20" : "border-indigo-300"}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white/50" : "bg-indigo-400"}`} />
        </div>
      </motion.div>
    </section>
  );
}
