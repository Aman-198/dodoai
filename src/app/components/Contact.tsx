import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  Rocket,
  Link2,
} from "lucide-react";

type FormType = "intern" | "client";

export function Contact() {
  const { isDark } = useTheme();

  const [formType, setFormType] = useState<FormType>("intern");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",

    // Intern
    college: "",
    year: "",
    domain: "",
    portfolio: "",
    resumeLink: "",
    message: "",

    // Client
    company: "",
    projectType: "",
    budget: "",
    projectDetails: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    setError("");

    const formData = new FormData();

    formData.append(
      "access_key",
      "53c5e218-80fd-4332-a486-6235750d0871"
    );

    formData.append(
      "subject",
      formType === "intern"
        ? "New Intern Application — Dodo AI"
        : "New Client Inquiry — Dodo AI"
    );

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);

    if (formType === "intern") {
      formData.append("college", form.college);
      formData.append("year", form.year);
      formData.append("domain", form.domain);
      formData.append("portfolio", form.portfolio);
      formData.append("resume_link", form.resumeLink);
      formData.append("message", form.message);
    } else {
      formData.append("company", form.company);
      formData.append("project_type", form.projectType);
      formData.append("budget", form.budget);
      formData.append("message", form.projectDetails);
    }

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(
          data.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setError(
        "Network error. Please check your connection."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);

    setForm({
      name: "",
      email: "",
      phone: "",

      college: "",
      year: "",
      domain: "",
      portfolio: "",
      resumeLink: "",
      message: "",

      company: "",
      projectType: "",
      budget: "",
      projectDetails: "",
    });
  };

  const internDomains = [
    "Web Development",
    "UI/UX Design",
    "Data Analytics",
    "Machine Learning / AI",
    "Cloud & DevOps",
    "CSE / Computer Science",
    "EE / Electrical Engineering",
    "ME / Mechanical Engineering",
    "ECE / Electronics",
    "Other",
  ];

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors ${
    isDark
      ? "bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-indigo-500/50"
      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-400 focus:bg-white"
  }`;

  const labelClass = `text-xs mb-1.5 block uppercase tracking-wide font-medium ${
    isDark ? "text-white/50" : "text-gray-400"
  }`;

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#07071a]" : "bg-gray-50"
      }`}
    >
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] ${
          isDark
            ? "bg-indigo-600/10"
            : "bg-indigo-400/8"
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 border ${
              isDark
                ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                : "bg-indigo-50 border-indigo-200 text-indigo-600"
            }`}
          >
            Get Started
          </span>

          <h2
            className={`text-4xl md:text-5xl mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontWeight: 800 }}
          >
            Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
              Dodo AI
            </span>{" "}
            Today
          </h2>

          <p
            className={`max-w-lg mx-auto ${
              isDark ? "text-white/50" : "text-gray-500"
            }`}
          >
            Whether you're a student seeking internship
            experience or a client with a project, we're here
            for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "dodo.ai.in11@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9905899846",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "India (Remote-First)",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isDark
                        ? "bg-indigo-500/10 border border-indigo-500/20"
                        : "bg-indigo-50 border border-indigo-200"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-indigo-500" />
                  </div>

                  <div>
                    <p
                      className={`text-xs uppercase tracking-wide ${
                        isDark
                          ? "text-white/40"
                          : "text-gray-400"
                      }`}
                    >
                      {item.label}
                    </p>

                    <p
                      className={`font-medium text-sm ${
                        isDark
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? "bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 border-indigo-500/20"
                  : "bg-gradient-to-br from-indigo-50 to-cyan-50 border-indigo-200"
              }`}
            >
              <h4
                className={`font-semibold mb-3 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <Rocket className="w-4 h-4 text-indigo-500" />
                Why Apply Now?
              </h4>

              <ul className="space-y-2">
                {[
                  "Limited seats per batch",
                  "Remote internship",
                  "Certificate included",
                  "Flexible timing",
                  "Mentorship support",
                ].map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 text-sm ${
                      isDark
                        ? "text-white/60"
                        : "text-gray-600"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div
                className={`p-10 rounded-3xl border text-center ${
                  isDark
                    ? "bg-white/5 border-green-500/20"
                    : "bg-white border-green-200 shadow-sm"
                }`}
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />

                <h3
                  className={`text-xl font-semibold mb-2 ${
                    isDark
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Submitted Successfully!
                </h3>

                <p
                  className={`text-sm ${
                    isDark
                      ? "text-white/50"
                      : "text-gray-500"
                  }`}
                >
                  We'll get back to you shortly.
                </p>

                <button
                  onClick={resetForm}
                  className="mt-6 px-6 py-3 rounded-xl bg-indigo-500 text-white text-sm"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <div
                className={`p-8 rounded-3xl border ${
                  isDark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >

                {/* Tabs */}
                <div
                  className={`flex gap-2 mb-6 p-1 rounded-xl ${
                    isDark
                      ? "bg-white/5"
                      : "bg-gray-100"
                  }`}
                >
                  {(["intern", "client"] as FormType[]).map(
                    (type) => (
                      <button
                        key={type}
                        onClick={() => setFormType(type)}
                        className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          formType === type
                            ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white"
                            : isDark
                            ? "text-white/50"
                            : "text-gray-500"
                        }`}
                      >
                        {type === "intern"
                          ? "Apply as Intern"
                          : "Hire Us"}
                      </button>
                    )
                  )}
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* Name */}
                  <div>
                    <label className={labelClass}>
                      Full Name *
                    </label>

                    <input
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>
                      Email *
                    </label>

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>
                      Phone Number
                    </label>

                    <input
                      value={form.phone}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+91 ..."
                      className={inputClass}
                    />
                  </div>

                  {/* INTERN */}
                  {formType === "intern" && (
                    <>
                      <div>
                        <label className={labelClass}>
                          College / University *
                        </label>

                        <input
                          required
                          value={form.college}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              college: e.target.value,
                            })
                          }
                          placeholder="Your college name"
                          className={inputClass}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">

                        <div>
                          <label className={labelClass}>
                            Year *
                          </label>

                          <select
                            required
                            value={form.year}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                year: e.target.value,
                              })
                            }
                            className={inputClass}
                          >
                            <option value="">
                              Select
                            </option>

                            <option>1st Year</option>
                            <option>2nd Year</option>
                            <option>3rd Year</option>
                            <option>4th Year</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelClass}>
                            Domain *
                          </label>

                          <select
                            required
                            value={form.domain}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                domain: e.target.value,
                              })
                            }
                            className={inputClass}
                          >
                            <option value="">
                              Select
                            </option>

                            {internDomains.map((domain) => (
                              <option key={domain}>
                                {domain}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Resume Link */}
                      <div>
                        <label className={labelClass}>
                          <span className="flex items-center gap-1">
                            <Link2 className="w-3 h-3" />
                            Resume / CV Link *
                          </span>
                        </label>

                        <div className="relative">
                          <input
                            required
                            type="url"
                            value={form.resumeLink}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                resumeLink:
                                  e.target.value,
                              })
                            }
                            placeholder="https://drive.google.com/your-cv-link"
                            className={`${inputClass} pl-12`}
                          />

                          <div
                            className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                              isDark
                                ? "text-white/30"
                                : "text-gray-400"
                            }`}
                          >
                            <Link2 className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Portfolio */}
                      <div>
                        <label className={labelClass}>
                          Portfolio / LinkedIn / GitHub
                          (Optional)
                        </label>

                        <input
                          value={form.portfolio}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              portfolio:
                                e.target.value,
                            })
                          }
                          placeholder="https://linkedin.com/in/..."
                          className={inputClass}
                        />
                      </div>

                      {/* About */}
                      <div>
                        <label className={labelClass}>
                          About Yourself *
                        </label>

                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              message:
                                e.target.value,
                            })
                          }
                          placeholder="Tell us about yourself..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </>
                  )}

                  {/* CLIENT */}
                  {formType === "client" && (
                    <>
                      <div>
                        <label className={labelClass}>
                          Company Name
                        </label>

                        <input
                          value={form.company}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              company:
                                e.target.value,
                            })
                          }
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          Project Details *
                        </label>

                        <textarea
                          required
                          rows={4}
                          value={form.projectDetails}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              projectDetails:
                                e.target.value,
                            })
                          }
                          placeholder="Describe your project..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    </>
                  )}

                  {/* Error */}
                  {error && (
                    <div
                      className={`text-sm p-3 rounded-xl ${
                        isDark
                          ? "bg-red-500/10 text-red-400"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-all"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />

                        {formType === "intern"
                          ? "Submit Application"
                          : "Send Inquiry"}
                      </>
                    )}
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
