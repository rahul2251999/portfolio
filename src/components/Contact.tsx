import { Calendar, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line for collaborations or speaking engagements.',
      action: {
        label: 'rahulpodugu99@gmail.com',
        href: 'mailto:rahulpodugu99@gmail.com',
      },
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in Baltimore, MD. Open to remote-first or hybrid roles.',
      action: {
        label: 'Baltimore, Maryland, USA',
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
    {
      icon: Github,
      title: 'GitHub',
      description: 'Explore the systems and tooling I’m iterating on.',
      action: {
        label: 'github.com/rahul2251999',
        href: 'https://github.com/rahul2251999',
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
            Whether you’re building resilient infrastructure, experimenting with AI-first products, or looking for a systems-minded collaborator—let’s start a conversation.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-0 md:px-4 lg:px-6">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactMethods.map(({ icon: Icon, title, description, action }) => {
                  const cardClasses =
                    "group relative flex h-full flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-white/40 hover:bg-background/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-pure-black";

                  const content = (
                    <>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-dark-gray/60 text-accent-white transition-colors group-hover:border-accent-white/40 group-hover:text-accent-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-accent-white">{title}</h3>
                        <p className="text-sm text-accent-gray">{description}</p>
                        {action.href ? (
                          <span className="inline-flex items-center text-sm font-medium text-accent-white underline-offset-4 transition-colors group-hover:text-accent-gray group-hover:underline focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black rounded-md px-1 py-0.5">
                            {action.label}
                          </span>
                        ) : (
                          <span className="text-sm font-medium text-accent-white/80">{action.label}</span>
                        )}
                      </div>
                    </>
                  );

                  return action.href ? (
                    <a
                      key={title}
                      href={action.href}
                      target={action.href.startsWith('http') ? '_blank' : undefined}
                      rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={cardClasses}
                      aria-label={`Contact via ${title}: ${action.label}`}
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        if (action.href?.startsWith('http')) {
                          try {
                            // Let the default behavior handle the link
                          } catch (error) {
                            console.error(`Failed to open ${title} link:`, error);
                            e.preventDefault();
                            alert(`Unable to open ${title}. Please try again or contact me directly.`);
                          }
                        }
                      }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div 
                      key={title} 
                      className={cardClasses}
                      role="region"
                      aria-label={`${title} information`}
                      tabIndex={0}
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 rounded-2xl border border-border/60 bg-background/60 p-8 shadow-[0_0_40px_rgba(16,16,16,0.35)]">
              <div className="mx-auto flex h-full flex-col items-center justify-center gap-6 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-accent-white">Schedule a working session</h3>
                  <p className="text-sm text-accent-gray">
                    Prefer real-time collaboration? Grab a 30-minute slot and we’ll whiteboard, pair program, or ideate on your product roadmap.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <a
                    href="https://calendly.com/rahulpodugu2/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-accent-white bg-background/60 border border-border/60 rounded-3xl transition-all duration-300 hover:bg-background/80 hover:border-accent-white/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book 30 minutes
                  </a>
                  <a
                    href="mailto:rahulpodugu99@gmail.com"
                    className="inline-block text-sm font-medium text-accent-gray transition-colors hover:text-accent-white hover:underline focus:outline-none focus:ring-2 focus:ring-accent-white/50 focus:ring-offset-2 focus:ring-offset-pure-black rounded-md px-3 py-2 cursor-pointer"
                    aria-label="Send email to rahulpodugu99@gmail.com"
                  >
                    Or send an email instead →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
