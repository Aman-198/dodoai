import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { CheckCircle2, Crown, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free Internship",
    price: "₹0",
    period: "entire program",
    badge: null,
    highlight: false,
    features: [
      "Full structured training program",
      "Live project experience",
      "1-on-1 mentorship sessions",
      "Letter of Recommendation (LOR)",
      "Experience certificate",
      "Portfolio project included",
      "Community & peer learning",
      "Job placement guidance",
    ],
    cta: "Apply for Free",
  },
  {
    name: "With Certificate",
    price: "₹199",
    period: "one-time",
    badge: "Most Popular",
    highlight: true,
    features: [
      "Everything in Free plan",
      "Official training certificate",
      "Digitally verifiable certificate",
      "LinkedIn-shareable credential",
      "Dodo AI official seal & signature",
      "Priority support",
      "Alumni network access",
      "Early access to new programs",
    ],
    cta: "Get Certificate — ₹199",
  },
];

export function Pricing() {
  const { isDark } = useTheme();

  return (
    <section id="pricing" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#07071a]" : "bg-gray-50"}`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] ${isDark ? "bg-indigo-600/8" : "bg-indigo-400/8"}`} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-amber-500/10 border-amber-500/20 text-amber-400" : "bg-amber-50 border-amber-200 text-amber-600"}`}>
            Transparent Pricing
          </span>
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            Simple &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-400">Honest</span>{" "}
            Pricing
          </h2>
          <p className={`max-w-lg mx-auto text-lg ${isDark ? "text-white/50" : "text-gray-500"}`}>
            The training is completely free. Pay only if you want an official certificate at the end.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlight
                  ? isDark
                    ? "bg-white/5 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
                    : "bg-white border-indigo-300 shadow-2xl shadow-indigo-200"
                  : isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold shadow-lg">
                    <Crown className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  {plan.highlight
                    ? <Sparkles className="w-5 h-5 text-indigo-500" />
                    : <div className="w-5 h-5 rounded-full border-2 border-cyan-400" />
                  }
                  <h3 className={`font-semibold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>{plan.price}</span>
                  <span className={`text-sm ${isDark ? "text-white/40" : "text-gray-400"}`}>/ {plan.period}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? "text-indigo-500" : "text-green-500"}`} />
                    <span className={`text-sm ${isDark ? "text-white/70" : "text-gray-600"}`}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-indigo-500/25"
                    : isDark
                      ? "border border-white/20 text-white hover:bg-white/5"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center text-sm mt-8 ${isDark ? "text-white/30" : "text-gray-400"}`}
        >
          ✦ No hidden fees. No subscription. The ₹199 certificate fee is a one-time payment at program completion.
        </motion.p>
      </div>
    </section>
  );
}
