import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "CSE Intern → Software Engineer at TCS", text: "Dodo AI gave me the real-world experience I was missing. The live projects were challenging and the mentors were incredibly supportive. Got my LOR and landed a job!", stars: 5, avatar: "PS", color: "from-indigo-500 to-purple-600" },
  { name: "Arjun Mehta", role: "EE Intern → IoT Developer", text: "The embedded systems training was top-notch. I worked on a real IoT dashboard project and got mentored by professionals. The ₹199 certificate was totally worth it.", stars: 5, avatar: "AM", color: "from-cyan-500 to-blue-600" },
  { name: "Sneha Patel", role: "UI/UX Intern → Product Designer", text: "From zero design skills to a full portfolio in 8 weeks. The training, project work, and LOR from Dodo AI helped me secure my dream role at a product startup.", stars: 5, avatar: "SP", color: "from-pink-500 to-rose-600" },
  { name: "Rohit Kumar", role: "Web Dev Intern → Freelance Developer", text: "I built 3 real client projects during my internship. The experience and recommendation letter boosted my freelance credibility instantly. Highly recommend!", stars: 5, avatar: "RK", color: "from-green-500 to-teal-600" },
  { name: "Ananya Singh", role: "DA Intern → Data Analyst at Infosys", text: "The data analytics program was comprehensive. I learned Python, SQL, and Tableau while solving actual business problems. The internship genuinely transformed my career.", stars: 5, avatar: "AS", color: "from-violet-500 to-indigo-600" },
  { name: "Vikram Nair", role: "Client → CEO, DigitalRoots", text: "We hired Dodo AI to redesign our website and the quality exceeded our expectations. Professional, on-time, and at a reasonable cost. Will work with them again!", stars: 5, avatar: "VN", color: "from-amber-500 to-orange-600" },
];

export function Testimonials() {
  const { isDark } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050510]" : "bg-white"}`}>
      <div className={`absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full blur-[100px] ${isDark ? "bg-indigo-600/8" : "bg-indigo-400/6"}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" : "bg-yellow-50 border-yellow-200 text-yellow-600"}`}>
            Testimonials
          </span>
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            Hear from Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400">Community</span>
          </h2>
          <p className={`max-w-lg mx-auto ${isDark ? "text-white/50" : "text-gray-500"}`}>
            Real words from interns who transformed their careers and clients who trusted us with their projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-white/20"
                  : "bg-white border-gray-100 hover:border-yellow-200 hover:shadow-lg shadow-sm"
              }`}
            >
              <Quote className={`w-6 h-6 mb-4 ${isDark ? "text-white/20" : "text-gray-200"}`} />
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-white/70" : "text-gray-600"}`}>"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{t.name}</p>
                  <p className={`text-xs truncate ${isDark ? "text-white/40" : "text-gray-400"}`}>{t.role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
