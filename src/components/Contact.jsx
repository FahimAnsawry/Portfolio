import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const inputStyle = {
  backgroundColor: 'var(--color-secondary)',
  borderColor: 'var(--color-border)',
  color: 'var(--color-foreground)',
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.state === 'sending') return;
    setStatus({ state: 'sending', message: '' });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus({ state: 'success', message: "Thanks! Your message is on its way." });
      formRef.current.reset();
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 3000);
    } catch (err) {
      setStatus({ state: 'error', message: err?.text || 'Something went wrong. Please try again.' });
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 3000);
    }
  };
  return (
    <section id="contact" className="py-20 relative" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <p className="text-lg font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--color-primary)' }}>
            Contact
          </p>
          <h3 className="text-5xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>
            Let's work together
          </h3>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          
          <div className="md:col-span-2 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>Get in touch</h4>
              <p className="mb-6 text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
                Open to fullstack work — freelance, contract, or full-time. Drop a message and I'll get back to you within a day or two.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-primary)' }}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>Email</p>
                    <a href="mailto:fahimansawri550@gmail.com" className="font-medium transition-colors" style={{ color: 'var(--color-foreground)' }}>fahimansawri550@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center border" style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)', color: 'var(--color-primary)' }}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>Location</p>
                    <p className="font-medium" style={{ color: 'var(--color-foreground)' }}>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}>Follow me</h4>
              <div className="flex gap-4">
                {[
                  { Icon: FiGithub,   bg: '#181717', label: 'GitHub' },
                  { Icon: FiLinkedin, bg: '#0A66C2', label: 'LinkedIn' },
                  { Icon: FiTwitter,  bg: '#1DA1F2', label: 'Twitter' },
                ].map(({ Icon, bg, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300"
                    style={{
                      backgroundColor: 'var(--color-card)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-muted-foreground)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = bg;
                      e.currentTarget.style.borderColor = bg;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'var(--color-card)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.color = 'var(--color-muted-foreground)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 rounded-2xl p-8 border"
            style={{ backgroundColor: 'var(--color-card)', borderColor: 'var(--color-border)' }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Name</label>
                  <input type="text" id="name" name="from_name" required placeholder="Fahim Ansawri"
                    className="px-4 py-3 rounded-xl border focus:outline-none transition-shadow"
                    style={{ ...inputStyle, outline: 'none' }}
                    onFocus={e => e.target.style.boxShadow = `0 0 0 2px var(--color-primary)`}
                    onBlur={e => e.target.style.boxShadow = ''}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Email</label>
                  <input type="email" id="email" name="from_email" required placeholder="fahim@example.com"
                    className="px-4 py-3 rounded-xl border focus:outline-none transition-shadow"
                    style={inputStyle}
                    onFocus={e => e.target.style.boxShadow = `0 0 0 2px var(--color-primary)`}
                    onBlur={e => e.target.style.boxShadow = ''}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--color-foreground)' }}>Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..."
                  className="px-4 py-3 rounded-xl border focus:outline-none resize-none transition-shadow"
                  style={inputStyle}
                  onFocus={e => e.target.style.boxShadow = `0 0 0 2px var(--color-primary)`}
                  onBlur={e => e.target.style.boxShadow = ''}
                ></textarea>
              </div>
              <button type="submit" disabled={status.state === 'sending'}
                className="btn-hire w-full py-4 rounded-xl font-bold mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.state === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {status.message && (
                <p
                  className="text-sm text-center"
                  style={{ color: status.state === 'success' ? 'var(--color-primary)' : '#ef4444' }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
