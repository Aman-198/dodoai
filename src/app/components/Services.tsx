import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { Globe, Palette, Video, Code2, Smartphone, PenTool, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Modern, responsive websites built with React, Next.js, and the latest web technologies.", tags: ["React", "Next.js", "Tailwind"], color: "from-blue-500 to-cyan-500" },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive user interfaces and experiences designed in Figma with usability at the core.", tags: ["Figma", "Prototyping", "Research"], color: "from-pink-500 to-fuchsia-600" },
  { icon: PenTool, title: "Graphic Design", desc: "Eye-catching logos, brand identities, social media creatives, and print materials.", tags: ["Illustrator", "Photoshop", "Branding"], color: "from-amber-500 to-orange-500" },
  { icon: Video, title: "Video Production", desc: "Professional video editing, motion graphics, and promotional videos for your brand.", tags: ["After Effects", "Premiere", "Motion"], color: "from-violet-500 to-purple-600" },
  { icon: Smartphone, title: "Mobile App Design", desc: "Pixel-perfect mobile app prototypes and high-fidelity designs for iOS and Android.", tags: ["iOS", "Android", "React Native"], color: "from-green-500 to-teal-500" },
  { icon: Code2, title: "Full-Stack Development", desc: "End-to-end application development from database architecture to polished frontend.", tags: ["Node.js", "MongoDB", "PostgreSQL"], color: "from-indigo-500 to-blue-600" },
];

const whyUs = [
  "Affordable pricing without compromising quality",
  "Delivered by trained interns under expert supervision",
  "Fast turnaround times — most projects in 7–14 days",
  "High-fidelity prototypes included with every project",
  "Dedicated communication & revision support",
  "NDA & IP protection guaranteed",
];

export function Services() {
  const { isDark } = useTheme();

  return (
    <section id="services" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#07071a]" : "bg-gray-50"}`}>
      <div className={`absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full blur-[100px] ${isDark ? "bg-fuchsia-600/8" : "bg-pink-400/6"}`} />
      <div className={`absolute top-0 right-0 w-[400px] h-[300px] rounded-full blur-[100px] ${isDark ? "bg-blue-600/8" : "bg-blue-400/6"}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-pink-500/10 border-pink-500/20 text-pink-400" : "bg-pink-50 border-pink-200 text-pink-600"}`}>
            For Clients
          </span>
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Stunning Digital Products</span>
          </h2>
          <p className={`max-w-xl mx-auto text-lg ${isDark ? "text-white/50" : "text-gray-500"}`}>
            Partner with Dodo AI to get professional-quality work at a fraction of agency prices, delivered by talented interns mentored by industry experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group p-6 rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-white/20"
                  : "bg-white border-gray-100 hover:border-pink-200 hover:shadow-lg shadow-sm"
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`font-semibold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{service.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-white/50" : "text-gray-500"}`}>{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className={`px-2 py-1 rounded-lg text-xs border ${isDark ? "bg-white/5 border-white/10 text-white/50" : "bg-gray-50 border-gray-200 text-gray-500"}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className={`text-3xl mb-6 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 700 }}>
              Why Clients{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">Trust Us</span>
            </h3>
            <div className="flex flex-col gap-3">
              {whyUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className={`text-sm ${isDark ? "text-white/70" : "text-gray-600"}`}>{item}</span>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group mt-8 flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-green-500/25"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`p-8 rounded-3xl border backdrop-blur-sm ${isDark ? "bg-gradient-to-br from-white/8 to-white/3 border-white/15" : "bg-white border-gray-100 shadow-xl"}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className={`flex-1 h-8 rounded-lg ml-2 ${isDark ? "bg-white/5" : "bg-gray-100"}`} />
              </div>
              <div className="space-y-3">
                <div className="h-4 rounded-full bg-gradient-to-r from-indigo-500/40 to-cyan-500/40 w-3/4" />
                <div className={`h-3 rounded-full w-full ${isDark ? "bg-white/10" : "bg-gray-100"}`} />
                <div className={`h-3 rounded-full w-5/6 ${isDark ? "bg-white/10" : "bg-gray-100"}`} />
                <div className={`h-3 rounded-full w-4/6 ${isDark ? "bg-white/10" : "bg-gray-100"}`} />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["#6366f1", "#22d3ee", "#f59e0b"].map((c) => (
                  <div key={c} className="h-20 rounded-xl" style={{ background: `${c}20`, border: `1px solid ${c}30` }} />
                ))}
              </div>
              <div className="mt-4 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-70" />
            </div>
            <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center ${isDark ? "bg-gradient-to-br from-pink-500/20 to-fuchsia-600/20 border border-pink-500/20" : "bg-pink-50 border border-pink-200"}`}>
              <span className="text-2xl">✨</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
