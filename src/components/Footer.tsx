import { CONTACT } from "../constants/data-dummy"; // adjust the path to where you save contact.ts

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
];

const linkStyles = `text-gray-300 underline-offset-4 transition-colors hover:text-white hover:underline
  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`;

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold">
            Have a project or role in mind?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-400 mb-6">
            {CONTACT.message}
          </p>
          <a href={`mailto:${CONTACT.email}`} className="text-xl">
            {CONTACT.email}
          </a>
        </div>

        {/* Details */}
        <div className="mt-10 grid gap-10 border-t border-white/15 pt-10 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-medium text-gray-400">Pages</h3>
            <ul className="mt-4 space-y-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkStyles}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={CONTACT.phoneHref} className={linkStyles}>
                  {CONTACT.phone}
                </a>
              </li>
              <li className="text-gray-300">{CONTACT.location}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400">Elsewhere</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={CONTACT.github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkStyles}
                >
                  GitHub: {CONTACT.github.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT.name}. All rights
            reserved.
          </p>
          <a href="#home" className={linkStyles}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
