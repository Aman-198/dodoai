import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const projects = [
  { title: "FinTrack Dashboard", category: "Web Development", desc: "A complete financial analytics dashboard with real-time data visualization.", gradient: "from-blue-600 to-indigo-700", emoji: "📊", tags: ["React", "Charts", "API"] },
  { title: "EcoShop Mobile App", category: "UI/UX Design", desc: "End-to-end UX design for a sustainable e-commerce mobile application.", gradient: "from-green-600 to-teal-700", emoji: "🌿", tags: ["Figma", "iOS", "Prototype"] },
  { title: "NeoBank Branding", category: "Graphic Design", desc: "Complete brand identity for a modern digital banking startup.", gradient: "from-violet-600 to-purple-700", emoji: "🏦", tags: ["Logo", "Brand Kit", "Cards"] },
  { title: "TechConf 2026 Website", category: "Web Development", desc: "Event website with registration system, schedule, and speaker profiles.", gradient: "from-orange-600 to-red-700", emoji: "🎤", tags: ["Next.js", "Supabase", "Animations"] },
  { title: "MediCare App Design", category: "UI/UX Design", desc: "Patient-centered healthcare app with appointment booking and records.", gradient: "from-pink-600 to-rose-700", emoji: "🏥", tags: ["Figma", "User Research", "Android"] },
  { title: "Brand Promo Video", category: "Video Production", desc: "60-second motion graphics product launch video for a SaaS company.", gradient: "from-amber-600 to-yellow-700", emoji: "🎬", tags: ["After Effects", "Motion", "2D Anim"] },
];

export function Portfolio() {
  const { isDark } = useTheme();

  return (
    <section id="portfolio" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050510]" : "bg-white"}`}>
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] ${isDark ? "bg-violet-600/8" : "bg-violet-400/6"}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-violet-500/10 border-violet-500/20 text-violet-400" : "bg-violet-50 border-violet-200 text-violet-600"}`}>
            Our Work
          </span>
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            Projects We're{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500">Proud Of</span>
          </h2>
          <p className={`max-w-xl mx-auto ${isDark ? "text-white/50" : "text-gray-500"}`}>
            A showcase of real projects delivered by our talented interns to clients across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                isDark ? "border-white/10 hover:border-white/20" : "border-gray-100 hover:border-violet-200 hover:shadow-xl shadow-sm"
              }`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                <span className="text-7xl opacity-60">{project.emoji}</span>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/30 text-white text-xs backdrop-blur-sm">{project.category}</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className={`p-5 ${isDark ? "bg-white/5" : "bg-white"}`}>
                <h3 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                <p className={`text-sm leading-relaxed mb-4 ${isDark ? "text-white/50" : "text-gray-500"}`}>{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`px-2 py-1 rounded-lg text-xs border ${isDark ? "bg-white/5 border-white/10 text-white/50" : "bg-gray-50 border-gray-200 text-gray-500"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button className={`px-8 py-3 rounded-xl border text-sm transition-all ${isDark ? "border-white/20 text-white/70 hover:text-white hover:border-white/40" : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-violet-300"}`}>
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
