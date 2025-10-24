import React, { useState } from "react";
import { Linkedin, Github, Instagram, ExternalLink, Mail, User, MessageSquare, Send } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rithik-s-056804363",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/Rithikzz",
    displayName: "GitHub",
    subText: "@Rithikzz",
    icon: Github,
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_rithik_.s/",
    displayName: "Instagram",
    subText: "@_rithik_.s",
    icon: Instagram,
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");

    try {
      const res = await fetch("https://formspree.io/f/mdklqdgl", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormMessage("Oops! Something went wrong.");
      }
    } catch (error) {
      setFormMessage("Oops! Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-5 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Contact Me
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-3"><Mail className="inline mr-2 w-5 h-5" /> Email: <a href="mailto:sankarrithik5@gmail.com">sankarrithik5@gmail.com</a></p>
            <p className="text-gray-400 mb-3"><User className="inline mr-2 w-5 h-5" /> Phone: <a href="tel:+916383616410">+91 63836 16410</a></p>
            <p className="text-gray-400 mb-3"><MessageSquare className="inline mr-2 w-5 h-5" /> Location: Ooty, Tamil Nadu, India</p>

            <div className="mt-6 space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg bg-white/5 border border-white/10 hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <link.icon className="w-6 h-6 text-white" />
                      <div>
                        <p className="font-bold text-gray-200">{link.displayName}</p>
                        <p className="text-gray-400 text-sm">{link.subText}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none"
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none"
                disabled={isSubmitting}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none resize-none"
                disabled={isSubmitting}
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {formMessage && <p className="mt-2 text-center text-green-400">{formMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
