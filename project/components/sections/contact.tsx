'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { personal } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const message = String(data.get('message') ?? '');

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        { name, email, message },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '' }
      );
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try emailing me directly.');
    }
  };

  const contactItems = [
    { Icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { Icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
    {
      Icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personal.location)}`,
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeading eyebrow="Contact" title="Get In Touch" />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's build something together
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out using the form or through any of the
                channels below.
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl glass p-4 transition-all hover:bg-white/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
                    <p className="text-sm font-medium text-white/85">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-7 md:p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-blue-500/50 focus:bg-white/[0.07]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] disabled:opacity-60"
                >
                  {status === 'loading' && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent!
                    </>
                  )}
                  {(status === 'idle' || status === 'error') && (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'error' && errorMsg && (
                  <p className="text-center text-xs text-red-400">{errorMsg}</p>
                )}
                {status === 'success' && (
                  <p className="text-center text-xs text-green-400">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
