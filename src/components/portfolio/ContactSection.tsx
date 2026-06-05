import { FormEvent } from "react";
import { Icon } from "@iconify/react";
import { directContact, socialLinks } from "./data";

type ContactSectionProps = {
  formError: string;
  isMessageSent: boolean;
  isSending: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function ContactSection({
  formError,
  isMessageSent,
  isSending,
  onSubmit,
}: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div data-reveal className="section-label">
            Contact
          </div>
          <h2 data-reveal className="section-title">
            Let&apos;s Build Something
            <br />
            Great Together.
          </h2>
          <p data-reveal className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Have a project in mind? Looking to hire? Or just want to say hello?
            My inbox is always open.
          </p>
          <div data-reveal className="availability-badge mt-8">
            <span />
            Currently available for freelance & full-time opportunities
          </div>
          <div className="mt-8 space-y-3">
            {directContact.map(([icon, label, value]) => (
              <div data-reveal key={label} className="contact-link">
                <span>
                  <Icon icon={icon} />
                  {label}
                </span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                data-reveal
                data-magnetic
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="social-icon"
              >
                <Icon icon={link.icon} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form data-reveal onSubmit={onSubmit} className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:p-8">
          <label className="form-label" htmlFor="name">Your Name</label>
          <input className="form-field" id="name" name="name" placeholder="Your Name" required />
          <label className="form-label" htmlFor="email">Your Email</label>
          <input className="form-field" id="email" name="email" placeholder="Your Email" type="email" required />
          <label className="form-label" htmlFor="message">Tell me about your project...</label>
          <textarea className="form-field min-h-40 resize-y" id="message" name="message" placeholder="Tell me about your project..." required />
          <button className="btn-primary mt-6 w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSending} data-magnetic>
            {isSending ? "Sending..." : "Send Message ->"}
          </button>
          {isMessageSent && (
            <p className="mt-5 font-bold text-emerald-400">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
          {formError && <p className="mt-5 font-bold text-red-400">{formError}</p>}
        </form>
      </div>
    </section>
  );
}
