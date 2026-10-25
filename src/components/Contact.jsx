import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { SOCIAL_LINKS, EMAIL } from './socialLinks';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const IS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const STATUS_COLOR = {
  success: 'var(--color-primary)',
  error: 'var(--color-danger)',
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.state === 'sending') return;
    if (!IS_CONFIGURED) {
      setStatus({ state: 'error', message: `The form isn't connected right now. Email me directly at ${EMAIL}.` });
      return;
    }
    setStatus({ state: 'sending', message: 'Sending your message…' });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus({ state: 'success', message: "Thanks! Your message is on its way. I'll reply within a day or two." });
      formRef.current.reset();
    } catch {
      setStatus({ state: 'error', message: `Your message didn't send. Check your connection and try again, or email me at ${EMAIL}.` });
    }
  };

  // Messages stay until the visitor edits the form again, so nobody misses them
  const handleInput = () => {
    if (status.state === 'success' || status.state === 'error') {
      setStatus({ state: 'idle', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 relative" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
            Let's work together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          <div className="md:col-span-2 flex flex-col gap-8 min-w-0">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>Get in touch</h3>
              <p className="mb-6 text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
                Open to full-stack work — freelance, contract, or full-time. Drop a message and I'll get back to you within a day or two.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-primary)' }}>
                    <FiMail size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium [overflow-wrap:anywhere] transition-colors hover:text-[var(--color-primary)]"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-primary)' }}>
                    <FiMapPin size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>Location</p>
                    <p className="font-medium" style={{ color: 'var(--color-foreground)' }}>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>Follow me</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-link w-11 h-11 rounded-lg flex items-center justify-center"
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div
            className="md:col-span-3 rounded-2xl p-6 sm:p-8 border"
            style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} onInput={handleInput} aria-describedby="contact-form-note" className="flex flex-col gap-6">
              <p id="contact-form-note" className="text-sm -mb-2" style={{ color: 'var(--color-muted-foreground)' }}>
                All fields are required.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Name</label>
                  <input type="text" id="name" name="from_name" required autoComplete="name" placeholder="Your name"
                    className="field w-full min-w-0 px-4 py-3 rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Email</label>
                  <input type="email" id="email" name="from_email" required autoComplete="email" placeholder="you@company.com"
                    className="field w-full min-w-0 px-4 py-3 rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project..."
                  className="field w-full min-w-0 px-4 py-3 rounded-xl resize-none"
                ></textarea>
              </div>
              <div className="mt-2">
                <button type="submit" disabled={status.state === 'sending'}
                  className="btn-hire w-full py-4 rounded-xl font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.state === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
                {/* Always mounted so screen readers announce changes */}
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm text-center [&:not(:empty)]:mt-3"
                  style={{ color: STATUS_COLOR[status.state] ?? 'var(--color-muted-foreground)' }}
                >
                  {status.state === 'sending' ? <span className="sr-only">{status.message}</span> : status.message}
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
