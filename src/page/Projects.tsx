import ImageStack from "../components/ImageStack";
import { PROJECTS, PROJECTS_INTRO } from "../constants/data-dummy";
import { formatRange } from "../utils/Dates";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Freelance Project
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {PROJECTS_INTRO}
          </p>
        </div>

        <ol className="mt-12 space-y-20 lg:mt-20 lg:space-y-28">
          {PROJECTS.map((project, i) => {
            const hasImages = !!project.image && project.image.length > 0;
            const isOngoing = !project.endDate;

            return (
              <li
                key={project.title}
                className={`grid items-center gap-12 ${
                  hasImages ? "lg:grid-cols-2 lg:gap-20" : ""
                }`}
              >
                {hasImages && (
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <ImageStack
                      images={project.image!}
                      label={project.title}
                      className="max-w-xl lg:max-w-none"
                    />
                  </div>
                )}

                <div className="max-w-xl">
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    {isOngoing && (
                      <span
                        aria-hidden="true"
                        className="size-2 shrink-0 rounded-full bg-emerald-500"
                      />
                    )}
                    {project.kind},{" "}
                    {formatRange(project.startDate, project.endDate)}
                  </p>

                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    {project.title}
                  </h3>

                  {project.role && (
                    <p className="mt-2 text-base text-gray-600">
                      {project.role}
                    </p>
                  )}

                  {project.summary && (
                    <p className="mt-6 leading-relaxed text-gray-600">
                      {project.summary}
                    </p>
                  )}

                  {project.techstack && project.techstack.length > 0 && (
                    <ul
                      aria-label="Technology stack"
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {project.techstack.map((technology) => (
                        <li
                          key={technology.name ?? technology.logo}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700"
                        >
                          {technology.logo && (
                            <img
                              src={technology.logo}
                              alt=""
                              loading="lazy"
                              className="size-5 object-contain"
                            />
                          )}
                          {technology.name}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="mt-6 list-disc space-y-2 pl-5 leading-relaxed text-gray-600 marker:text-gray-400">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-gray-900">
                      {project.tags.map((tag, t) => (
                        <li
                          key={tag}
                          className={
                            t > 0 ? "border-l border-gray-300 pl-4" : ""
                          }
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-block rounded-full bg-gray-900 px-6 py-3 text-base font-medium text-white
                        transition duration-200 hover:-translate-y-0.5 hover:bg-gray-700
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                      Visit {project.link.label}
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
