import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
];

const CONTACT = { label: "Contact", href: "#contact" };

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);

    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  useEffect(() => {
    const sections = [...LINKS, CONTACT]
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  const desktopLink = (href: string) =>
    `relative py-2 text-sm font-medium transition-colors duration-200
     after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left
     after:bg-gray-900 after:transition-transform after:duration-300
     focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900
     ${
       active === href
         ? "text-gray-900 after:scale-x-100"
         : "text-gray-500 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100"
     }`;

  const mobileLink = (href: string) =>
    `block rounded-lg px-3 py-2.5 text-base font-medium transition-colors
     focus-visible:outline-2 focus-visible:outline-gray-900
     ${
       active === href
         ? "bg-gray-100 text-gray-900"
         : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
     }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md
        transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-none"
        }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-gray-900
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
          >
            REACH
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={desktopLink(link.href)}
                  aria-current={active === link.href ? "location" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href={CONTACT.href}
                className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white
                  transition-colors duration-200 hover:bg-gray-700
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                {CONTACT.label}
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative size-10 rounded-lg transition-colors hover:bg-gray-100 lg:hidden
              focus-visible:outline-2 focus-visible:outline-gray-900"
          >
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-gray-900
                transition-all duration-300 motion-reduce:transition-none
                ${
                  isOpen ? "-translate-y-1/2 rotate-45" : "-translate-y-[7px]"
                }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded bg-gray-900
                transition-opacity duration-200 motion-reduce:transition-none
                ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded bg-gray-900
                transition-all duration-300 motion-reduce:transition-none
                ${
                  isOpen ? "-translate-y-1/2 -rotate-45" : "translate-y-[5px]"
                }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-300 ease-out
            motion-reduce:transition-none lg:hidden
            ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div
            className={`overflow-hidden transition-[visibility] duration-300
              ${isOpen ? "visible" : "invisible"}`}
          >
            <ul className="flex flex-col gap-1 pb-4 pt-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={mobileLink(link.href)}
                    aria-current={active === link.href ? "location" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href={CONTACT.href}
                  onClick={closeMenu}
                  className="block rounded-full bg-gray-900 px-5 py-3 text-center text-base font-medium
                    text-white transition-colors hover:bg-gray-700
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  {CONTACT.label}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
