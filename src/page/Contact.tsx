import { CONTACT } from "../constants/data-dummy";
import emailIcon from "../assets/email.png";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.webp";

const linkStyles =
  "break-all text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

const contacts: {
  title: string;
  value: string;
  href: string;
  action: string;
  icon?: string;
  logo?: string;
  color: string;
  external?: boolean;
}[] = [
  {
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    action: "Send me a message",
    logo: emailIcon,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    action: "Give me a call",
    icon: "☎",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "GitHub",
    value: CONTACT.github.label,
    href: CONTACT.github.href,
    action: "Explore my projects",
    logo: githubIcon,
    color: "bg-violet-50 text-violet-600",
    external: true,
  },
  {
    title: "LinkedIn",
    value: CONTACT.linkedin.label,
    href: CONTACT.linkedin.href,
    action: "Connect with me",
    logo: linkedinIcon,
    color: "bg-sky-50 text-sky-600",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-b from-white to-slate-50"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-blue-600" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Contact
              </p>
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Let’s work together.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {CONTACT.message}
            </p>
          </div>

          <div className="hidden items-center gap-3 rounded-2xl border border-blue-100 bg-white/80 px-5 py-4 shadow-sm sm:flex">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
              <img src={emailIcon} alt="Email" />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Have a project in mind?
              </p>
              <p className="mt-1 text-xs text-gray-500">
                I’d love to hear about it.
              </p>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {contacts.map((contact) => (
            <article
              key={contact.title}
              className="group flex min-w-0 flex-col rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${contact.color}`}
              >
                {contact.logo ? (
                  <img
                    src={contact.logo}
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                ) : (
                  contact.icon
                )}
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {contact.title}
              </h3>

              {contact.href ? (
                <a
                  className={`mt-2 inline-flex min-w-0 items-start gap-2 ${linkStyles}`}
                  href={contact.href}
                  {...(contact.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  <span className="min-w-0 break-all">{contact.value}</span>
                  <span aria-hidden="true" className="shrink-0 text-blue-500">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="mt-2 text-sm text-gray-500">{contact.value}</p>
              )}

              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="flex items-center gap-2 text-sm text-gray-500 transition-colors group-hover:text-blue-600">
                  {contact.action}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-gray-300" />
          <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-gray-400">
            Let’s build something great
          </p>
          <span className="h-px w-8 bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
