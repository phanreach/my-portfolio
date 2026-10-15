import { PROFILE } from "../constants/data-dummy";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-screen-xl items-center
        px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid w-full items-center gap-16 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        {/* Text */}
        <div>
          <h1
            className="reveal font-display max-w-3xl text-5xl font-semibold leading-[1.02]
              tracking-[-0.03em] text-gray-900 sm:text-6xl"
          >
            {PROFILE.headline}
          </h1>

          <p className="reveal reveal-1 mt-7 max-w-xl text-lg leading-relaxed text-gray-600">
            {PROFILE.intro}
          </p>

          <div className="reveal reveal-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="rounded-full bg-gray-900 px-7 py-3.5 text-center text-base font-medium text-white
                transition duration-200 hover:-translate-y-0.5 hover:bg-gray-700
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              See my experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-base font-medium
                text-gray-900 transition duration-200 hover:-translate-y-0.5 hover:border-gray-900
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Contact me
            </a>
          </div>

          <div className="reveal reveal-3 mt-14">
            <p className="text-sm text-gray-500">Works with</p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-gray-900">
              {PROFILE.stack.map((tech, i) => (
                <li
                  key={tech}
                  className={i > 0 ? "border-l border-gray-300 pl-4" : ""}
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Portrait */}
        <div className="reveal reveal-2 relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-amber-100 sm:translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100">
            {PROFILE.photo ? (
              <img
                src={PROFILE.photo}
                alt={PROFILE.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-7xl font-semibold tracking-tight text-gray-300">
                  {PROFILE.initials}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
