import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const channels = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Share opportunities, collaborations, or ideas. I reply quickly with next steps.',
    action: 'rahulpodugu2@gmail.com',
    href: 'mailto:rahulpodugu2@gmail.com',
  },
  {
    icon: Phone,
    title: 'Book time',
    description: 'Prefer to jam live? Lock a 30-minute working session and we\'ll ideate together.',
    action: 'Calendly - schedule',
    href: 'https://calendly.com/rahulpodugu2/30min',
  },
];

export function Contact() {
  return (
    <section className="section border-t border-dark-gray/60 bg-pure-black py-24" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-4">
          <span className="text-sm uppercase tracking-[0.4em] text-accent-gray">Let&apos;s build together</span>
          <h2 className="text-4xl font-bold text-accent-white sm:text-5xl">
            I&apos;m actively looking for opportunities and collaborations
          </h2>
          <p className="text-sm text-accent-gray md:text-base">
            Reach out if you&apos;re shipping resilient platforms, weaving AI into production, or need a systems-minded partner to steady the roadmap.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {channels.map(({ icon: Icon, title, description, action, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/60 bg-gradient-to-br from-background/70 via-background/60 to-dark-gray/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-white/40 hover:bg-background"
              aria-label={`${title} - ${action}`}
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-dark-gray/70 text-accent-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-accent-white">{title}</h3>
                  <p className="mt-1 text-sm text-accent-gray">{description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent-white group-hover:text-accent-gray">
                {action}
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
