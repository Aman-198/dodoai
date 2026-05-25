import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { Brain, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const footerLinks = {
  "For Interns": ["Apply Now", "Internship Programs", "How It Works", "LOR & Certificates", "Success Stories"],
  "For Clients": ["Web Development", "UI/UX Design", "Graphic Design", "Video Production", "Start a Project"],
  "Company": ["About Dodo AI", "Our Team", "Careers", "Blog", "Contact Us"],
};

const socials = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
  { icon: Mail, label: "Email" },
];

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#030309] border-white/5" : "bg-gray-900 border-gray-800"}`}>
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[80px] ${isDark ? "bg-indigo-600/5" : "bg-indigo-600/8"}`} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#22d3ee] flex items-center justify-center shadow-lg">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">
                Dodo<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#22d3ee]"> AI</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              India's premier free internship platform — empowering students with real-world experience and helping clients build remarkable digital products.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all">
                  <social.icon className="w-4 h-4 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 hover:text-white/80 text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl bg-white/3 border border-white/8 mb-10"
        >
          <div className="flex-1">
            <h4 className="text-white font-semibold text-sm mb-1">Stay Updated</h4>
            <p className="text-white/40 text-xs">Get notified about new internship batches and project openings.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input placeholder="Enter your email" className="flex-1 md:w-64 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-indigo-500/50" />
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-white/30 text-xs">© 2026 Dodo AI. All rights reserved. Built with ❤️ in India.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
              <a key={link} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
