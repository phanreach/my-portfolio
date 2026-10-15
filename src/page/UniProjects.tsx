import ScreenShowcase from "../components/ScreenShowcase";
import { UNI_PROJECTS, UNI_PROJECTS_INTRO } from "../constants/data-dummy";

export default function UniProjects() {
  if (UNI_PROJECTS.length === 0) return null;

  return (
    <section
      id="university-projects"
      className="border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            University projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {UNI_PROJECTS_INTRO}
          </p>
        </div>

        <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200 lg:mt-16">
          {UNI_PROJECTS.map((project) => {
            const meta = [project.kind, project.period]
              .filter(Boolean)
              .join(", ");
            const hasScreens = !!project.screens && project.screens.length > 0;
            const pitch = project.highlight;

            return (
              <article
                key={project.title}
                className="grid gap-10 py-12 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:py-16"
              >
                {/* Left: who and what */}
                <div className="self-start lg:sticky lg:top-28">
                  {meta && <p className="text-sm text-gray-500">{meta}</p>}

                  <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {project.title}
                  </h3>

                  {project.tagline && (
                    <p className="mt-3 text-lg leading-snug text-gray-600">
                      {project.tagline}
                    </p>
                  )}

                  {pitch && (
                    <p className="mt-5 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
                      {pitch.label}
                    </p>
                  )}

                  {project.status && (
                    <div className="mt-8">
                      <p className="flex items-center gap-2 text-sm font-medium text-gray-900">
                        <span
                          aria-hidden="true"
                          className="size-2 rounded-full bg-emerald-500"
                        />
                        {project.status.label}
                      </p>
                      {project.status.detail && (
                        <p className="mt-1 text-sm leading-relaxed text-gray-500">
                          {project.status.detail}
                        </p>
                      )}
                    </div>
                  )}

                  {project.website && (
                    <a
                      href={project.website.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-block rounded-full bg-gray-900 px-6 py-3 text-base font-medium text-white
                        transition duration-200 hover:-translate-y-0.5 hover:bg-gray-700
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                      Visit {project.website.label}
                    </a>
                  )}

                  {project.links && project.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-900 underline decoration-amber-400
                            underline-offset-4 transition-colors hover:decoration-gray-900
                            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: the story */}
                <div>
                  <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-gray-600">
                    {project.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {project.features && project.features.length > 0 && (
                    <div className="mt-10">
                      <h4 className="text-sm font-medium text-gray-500">
                        Key features
                      </h4>
                      <ul className="mt-4 grid gap-6 sm:grid-cols-3">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="border-t-2 border-gray-900 pt-4 font-medium text-gray-900"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* The pitch: where it was presented, who presented it, and what they showed */}
                  {pitch && (
                    <div className="mt-12 rounded-2xl bg-amber-100 p-6 sm:p-8">
                      <p className="font-display text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                        {pitch.title}
                      </p>
                      {pitch.detail && (
                        <p className="mt-2 max-w-xl leading-relaxed text-gray-700">
                          {pitch.detail}
                        </p>
                      )}

                      {pitch.photo && (
                        <figure className="mt-6">
                          <img
                            src={pitch.photo}
                            alt={`Our team at ${pitch.title}`}
                            loading="lazy"
                            className="aspect-[16/9] w-full rounded-xl bg-amber-200 object-cover"
                          />
                          {pitch.caption && (
                            <figcaption className="mt-3 text-sm text-amber-900">
                              {pitch.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}

                      {hasScreens && (
                        <div className="mt-8">
                          <h4 className="mb-4 text-sm font-medium text-amber-900">
                            The project we pitched
                          </h4>
                          <ScreenShowcase
                            screens={project.screens!}
                            label={project.title}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* No pitch: show the UI on its own */}
                  {!pitch && hasScreens && (
                    <div className="mt-12">
                      <h4 className="mb-4 text-sm font-medium text-gray-500">
                        Web UI
                      </h4>
                      <ScreenShowcase
                        screens={project.screens!}
                        label={project.title}
                      />
                    </div>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-gray-900">
                      {project.tags.map((tag, i) => (
                        <li
                          key={tag}
                          className={
                            i > 0 ? "border-l border-gray-300 pl-4" : ""
                          }
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
