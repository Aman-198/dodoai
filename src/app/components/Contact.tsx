import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

type FormType = "intern" | "client";

export function Contact() {
  const { isDark } = useTheme();
  const [formType, setFormType] = useState<FormType>("intern");
  const [form, setForm] = useState({ name: "", email: "", phone: "", domain: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1500);
  };

  const domains = ["CSE / Computer Science", "EE / Electrical Engineering", "ME / Mechanical Engineering", "CE / Civil Engineering", "ECE / Electronics", "Data Analytics", "Web Development", "UI/UX Design", "Cloud & DevOps"];

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
    isDark
      ? "bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-indigo-500/50"
      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:bg-white"
  }`;

  return (
    <section id="contact" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#07071a]" : "bg-gray-50"}`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] ${isDark ? "bg-indigo-600/10" : "bg-indigo-400/8"}`} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${isDark ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400" : "bg-indigo-50 border-indigo-200 text-indigo-600"}`}>
            Get Started
          </span>
          <h2 className={`text-4xl md:text-5xl mb-4 ${isDark ? "text-white" : "text-gray-900"}`} style={{ fontWeight: 800 }}>
            Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Dodo AI</span>{" "}
            Today
          </h2>
          <p className={`max-w-lg mx-auto ${isDark ? "text-white/50" : "text-gray-500"}`}>
            Whether you're a student seeking internship experience or a client with a project, we're here for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="space-y-6 mb-10">
              {[
                { icon: Mail, label: "Email", value: "hello@dodoai.in" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Location", value: "India (Remote-First)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${isDark ? "bg-indigo-500/10 border border-indigo-500/20" : "bg-indigo-50 border border-indigo-200"}`}>
                    <item.icon className="w-5 h-5 text-indigo-500" />
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? "text-white/40" : "text-gray-400"}`}>{item.label}</p>
                    <p className={`font-medium text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? "bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 border-indigo-500/20" : "bg-gradient-to-br from-indigo-50 to-cyan-50 border-indigo-200"}`}>
              <h4 className={`font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>Why Apply Now?</h4>
              <ul className="space-y-2">
                {["Limited seats per batch — apply early", "Next cohort starts June 2026", "100% free — zero financial risk", "Flexible remote schedule"].map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-10 rounded-3xl border text-center ${isDark ? "bg-white/5 border-green-500/20" : "bg-white border-green-200 shadow-sm"}`}
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Application Received!</h3>
                <p className={`text-sm ${isDark ? "text-white/50" : "text-gray-500"}`}>Thank you for reaching out. We'll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", domain: "", message: "" }); }}
                  className={`mt-6 px-6 py-2.5 rounded-xl border text-sm transition-colors ${isDark ? "border-white/20 text-white/70 hover:text-white" : "border-gray-200 text-gray-500 hover:text-gray-900"}`}
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <div className={`p-8 rounded-3xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-sm"}`}>
                {/* Tabs */}
                <div className={`flex gap-2 mb-6 p-1 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-100"}`}>
                  {(["intern", "client"] as FormType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormType(type)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        formType === type
                          ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                          : isDark ? "text-white/50 hover:text-white" : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      {type === "intern" ? "Apply as Intern" : "Hire Us (Client)"}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`text-xs mb-1.5 block ${isDark ? "text-white/60" : "text-gray-500"}`}>Full Name *</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label className={`text-xs mb-1.5 block ${isDark ? "text-white/60" : "text-gray-500"}`}>Phone</label>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={`text-xs mb-1.5 block ${isDark ? "text-white/60" : "text-gray-500"}`}>Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className={inputClass} />
                  </div>

                  {formType === "intern" && (
                    <div>
                      <label className={`text-xs mb-1.5 block ${isDark ? "text-white/60" : "text-gray-500"}`}>Domain *</label>
                      <select required value={form.domain} onChange={(e) => setForm({ ...form, domain: e.target.value })} className={inputClass}>
                        <option value="">Select your domain</option>
                        {domains.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className={`text-xs mb-1.5 block ${isDark ? "text-white/60" : "text-gray-500"}`}>
                      {formType === "intern" ? "Tell us about yourself" : "Project Details"} *
                    </label>
                    <textarea
                      required rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={formType === "intern" ? "Your background, goals, and why you want to join..." : "Describe your project, budget, and timeline..."}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit" disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-all shadow-lg shadow-indigo-500/25"
                  >
                    {submitting
                      ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                      : <><Send className="w-4 h-4" /> {formType === "intern" ? "Submit Application" : "Send Project Inquiry"}</>
                    }
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
