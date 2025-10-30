import { Calendar, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line for collaborations or speaking engagements.',
      action: {
        label: 'rahulpodugu2@gmail.com',
        href: 'mailto:rahulpodugu2@gmail.com',
      },
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me for professional updates and articles.',
      action: {
        label: 'linkedin.com/in/rahulpodugu',
        href: 'https://www.linkedin.com/in/rahulpodugu/',
      },
    },
  ];

  return (
    <section className="section py-24 bg-pure-black border-t border-dark-gray/60" id="contact">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl px-0 md:px-4 lg:px-6">
          <h2 className="text-left text-lg md:text-4xl font-bold text-accent-white mb-4">
            Contact
          </h2>
          <p className="text-left text-accent-gray text-sm md:text-base max-w-2xl">
            Whether you&apos;re building resilient infrastructure, experimenting with AI-first products, or looking for a systems-minded collaborator—let&apos;s start a conversation.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-0 md:px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-background/70 via-background/60 to-dark-gray/50 p-8 shadow-[0_20px_45px_rgba(10,10,10,0.45)]">
              <div className="max-w-xl space-y-6">
                <p className="text-accent-gray text-base leading-relaxed">
                  Reach out for new product ideas, architecture reviews, or async mentorship. I respond quickly and keep conversations grounded in practical next steps.
                </p>
                <ul className="space-y-6">
                  {contactMethods.map(({ icon: Icon, title, description, action }) => {
                    const isLink = Boolean(action.href);
                    const isExternal = action.href?.startsWith('http');

                    return (
                      <li key={title} className="flex items-start gap-4 rounded-2xl border border-border/40 bg-pure-black/40 p-6 transition-all duration-300 hover:border-accent-white/40 hover:bg-pure-black/70">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dark-gray/70 text-accent-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="space-y-2">
                          <div>
                            <h3 className="text-lg font-semibold text-accent-white">{title}</h3>
                            <p className="text-sm text-accent-gray">{description}</p>
                          </div>
                          {isLink ? (
                            <a
                              href={action.href}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="inline-flex items-center text-sm font-medium text-accent-white underline-offset-4 transition-colors hover:text-accent-gray hover:underline focus:outline-none focus:ring-2 focus:ring-accent-white/40 focus:ring-offset-2 focus:ring-offset-pure-black rounded-md px-1 py-0.5"
                              aria-label={`Contact via ${title}: ${action.label}`}
                            >
                              {action.label}
                            </a>
                          ) : (
                            <span className="text-sm font-medium text-accent-white/80">{action.label}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl border border-border/60 bg-gradient-to-b from-dark-gray/70 via-background/70 to-background/50 p-8 shadow-[0_25px_55px_rgba(12,12,12,0.4)]">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-accent-white">Book time with me</h3>
                <p className="text-sm text-accent-gray leading-relaxed">
                  Prefer live collaboration? Reserve a working session and we&apos;ll whiteboard, pair, or explore your roadmap together.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <a
                  href="https://calendly.com/rahulpodugu2/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-accent-white/30 bg-background/70 px-6 py-3 text-base font-medium text-accent-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-white/60 hover:bg-background"
                >
                  <Calendar className="h-4 w-4" />
                  Book a half-hour
                </a>
                <a
                  href="mailto:rahulpodugu2@gmail.com"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-transparent bg-transparent px-6 py-3 text-sm font-medium text-accent-gray transition-colors hover:text-accent-white hover:underline focus:outline-none focus:ring-2 focus:ring-accent-white/40 focus:ring-offset-2 focus:ring-offset-pure-black"
                  aria-label="Send email to rahulpodugu2@gmail.com"
                >
                  Or send an email instead →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
