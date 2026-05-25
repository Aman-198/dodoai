import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import {
  Cpu, Zap, Wrench, Building2, BarChart3, Palette,
  Globe, Database, BrainCircuit, ChevronRight
} from "lucide-react";

const domains = [
  { icon: BrainCircuit, label: "Computer Science", short: "CSE", color: "from-indigo-500 to-purple-600", desc: "AI/ML, Web Dev, App Dev, Data Science" },
  { icon: Zap, label: "Electrical Engineering", short: "EE", color: "from-yellow-500 to-orange-500", desc: "Embedded Systems, IoT, Circuit Design" },
  { icon: Wrench, label: "Mechanical Engineering", short: "ME", color: "from-blue-500 to-cyan-500", desc: "CAD, Product Design, Simulation" },
  { icon: Building2, label: "Civil Engineering", short: "CE", color: "from-green-500 to-emerald-500", desc: "Structural, Infrastructure, Planning" },
  { icon: Cpu, label: "Electronics & Comm.", short: "ECE", color: "from-pink-500 to-rose-500", desc: "VLSI, Signal Processing, RF Design" },
  { icon: BarChart3, label: "Data Analytics", short: "DA", color: "from-violet-500 to-indigo-600", desc: "Python, Tableau, Power BI, SQL" },
  { icon: Globe, label: "Web Development", short: "WD", color: "from-cyan-500 to-teal-500", desc: "React, Node.js, Full Stack" },
  { icon: Palette, label: "UI/UX Design", short: "UX", color: "from-fuchsia-500 to-pink-500", desc: "Figma, User Research, Prototyping" },
  { icon: Database, label: "Cloud & DevOps", short: "CD", color: "from-sky-500 to-blue-600", desc: "AWS, Docker, CI/CD, Kubernetes" },
];

const benefits = [
  { title: "Free Training", desc: "100% free internship training — no hidden charges whatsoever.", highlight: true },
  { title: "Live Projects", desc: "Work on real client projects and build your portfolio." },
  { title: "Letter of Recommendation", desc: "Get LORs signed by industry professionals." },
  { title: "Experience Certificate", desc: "Receive an experience certificate upon completion." },
  { title: "Mentorship", desc: "1-on-1 guidance from experienced mentors." },
  { title: "Certificate (₹199)", desc: "Optional paid certificate with official seal — just ₹199.", highlight: true },
];

function DomainCard({ domain, index, isDark }: { domain: typeof domains[0]; index: number; isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
        isDark
          ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8"
          : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-lg shadow-sm"
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${domain.color} mb-4 shadow-lg`}>
        <domain.icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className={`font-semibold text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{domain.label}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${domain.color} text-white font-bold`}>{domain.short}</span>
      </div>
      <p className={`text-xs leading-relaxed ${isDark ? "text-white/50" : "text-gray-500"}`}>{domain.desc}</p>
      <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition-all mt-3 ${isDark ? "text-white/30 group-hover:text-white/60" : "text-gray-300 group-hover:text-indigo-400"}`} />
    </motion.div>
  );
}

export function Internships() {
  const { isDark } = useTheme();

  return (
    <section id="internships" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#07071a]" : "bg-gray-50"}`}>
      <div className={`absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? "bg-indigo-600/10" : "bg-indigo-400/8"}`} />
      <div className={`absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] ${isDark ? "bg-cyan-500/8" : "bg-cyan-400/6"}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400" : "bg-indigo-50 border-indigo-200 text-indigo-600"}`}>
            Internship Programs
          </span>
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Domain</span>
          </h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-white/50" : "text-gray-500"}`}>
            Train in the field you're passionate about with real-world projects and expert mentors.
          </p>
        </motion.div>

        {/* Domain grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-20">
          {domains.map((d, i) => <DomainCard key={d.short} domain={d} index={i} isDark={isDark} />)}
        </div>

        {/* What you get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className={`text-3xl md:text-4xl ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 700 }}>
            What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">Get</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                b.highlight
                  ? isDark
                    ? "bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 border-indigo-500/30"
                    : "bg-gradient-to-br from-indigo-50 to-cyan-50 border-indigo-200"
                  : isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${b.highlight ? "bg-indigo-400" : "bg-green-400"}`} />
                <div>
                  <h4 className={`font-semibold text-sm mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{b.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-white/50" : "text-gray-500"}`}>{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
