import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from '../components/BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Let's Build Something Great
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Interested in building scalable applications, backend systems, or AI-powered products? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                className="p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Phone Contact</div>
                  <a
                    href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                className="p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Current Location</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {personalInfo.contact.location}
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2 grid grid-cols-3 gap-3">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center gap-2 group hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                <span className="text-xs font-mono text-slate-800 dark:text-slate-300 font-medium">
                  GitHub
                </span>
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center gap-2 group hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-slate-800 dark:text-slate-300 font-medium">
                  LinkedIn
                </span>
              </a>

              <a
                href={personalInfo.contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center gap-2 group hover:border-emerald-500/40 transition-colors shadow-sm"
              >
                <CodeChefIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-slate-800 dark:text-slate-300 font-medium">
                  CodeChef
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Fill out the details below to initiate an email conversation directly with Sachin.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium"
                    >
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5 font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Direct delivery to <span className="font-mono text-cyan-700 dark:text-cyan-400 font-semibold">krsachin9876@gmail.com</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {formSubmitted && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in font-medium">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your email client has been opened with your pre-formatted message!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
