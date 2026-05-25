import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { UserPlus, BookOpen, Briefcase, Award, Star } from "lucide-react";

const steps = [
  { step: "01", icon: UserPlus, title: "Apply Online", desc: "Fill out the simple application form with your details and preferred domain. Approval within 24–48 hours.", color: "from-indigo-500 to-purple-600" },
  { step: "02", icon: BookOpen, title: "Free Training Begins", desc: "Access structured learning materials, video sessions, and assignments curated by industry experts.", color: "from-cyan-500 to-blue-600" },
  { step: "03", icon: Briefcase, title: "Work on Live Projects", desc: "Apply your skills on real client projects, building a portfolio that stands out to employers.", color: "from-violet-500 to-indigo-600" },
  { step: "04", icon: Award, title: "Get Your LOR & Certificate", desc: "Receive a Letter of Recommendation and experience certificate. Optional paid certificate for just ₹199.", color: "from-amber-500 to-orange-500" },
  { step: "05", icon: Star, title: "Launch Your Career", desc: "Use your projects, LOR, and certificate to land your dream job or pursue higher studies.", color: "from-pink-500 to-rose-600" },
];

export function HowItWorks() {
  const { isDark } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050510]" : "bg-white"}`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] ${isDark ? "bg-indigo-600/5" : "bg-indigo-400/6"}`} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" : "bg-cyan-50 border-cyan-200 text-cyan-600"}`}>
            How It Works
          </span>
          <h2 className={`text-4xl md:text-5xl ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            Your Journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-500">Success</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/50 to-transparent" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 group">
                  <div className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8"
                      : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-lg shadow-sm"
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold bg-gradient-to-r ${step.color} text-transparent bg-clip-text`}>
                          Step {step.step}
                        </span>
                        <h3 className={`font-semibold text-lg mt-1 mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{step.title}</h3>
                        <p className={`text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-500"}`}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30 flex-shrink-0 z-10">
                  <span className="text-white text-xs font-bold">{step.step}</span>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
