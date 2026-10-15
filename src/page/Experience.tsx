import ImageStack from "../components/ImageStack";
import { EXPERIENCE, EXPERIENCE_INTRO } from "../constants/data-dummy";
import type { ExperienceEntry } from "../types/api";
import { formatDuration, formatMonthYear, formatRange } from "../utils/Dates";

function formatType(e: ExperienceEntry): string {
  return e.remote ? `${e.type}, remote` : e.type;
}

const SINCE = formatMonthYear(EXPERIENCE.map((e) => e.startDate).sort()[0]);

export default function Experience() {
  return (
    <section id="experience" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Work experience
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {EXPERIENCE_INTRO}
            </p>
          </div>
          <p className="mt-6 shrink-0 text-sm text-gray-500 md:mt-0">
            Working professionally since {SINCE}
          </p>
        </div>

        <ol className="mt-12 border-b border-gray-200 lg:mt-16">
          {EXPERIENCE.map((job) => {
            const isCurrent = !job.endDate;

            return (
              <li
                key={`${job.company}-${job.startDate}`}
                className={`relative grid gap-4 border-t border-gray-200 py-8 pl-5 md:grid-cols-[13rem_1fr] md:gap-10 md:pl-7 lg:py-10 ${
                  isCurrent
                    ? "before:absolute before:top-8 before:bottom-8 before:left-0 before:w-1 before:rounded-full before:bg-emerald-500 lg:before:top-10 lg:before:bottom-10"
                    : ""
                }`}
              >
                {/* When */}
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="text-base font-medium tabular-nums text-gray-900">
                    {formatRange(job.startDate, job.endDate)}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {formatDuration(job.startDate, job.endDate)}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {formatType(job)}
                  </p>
                </div>

                {/* What: text on the left, screenshots on the right */}
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                      {job.role}
                    </h3>

                    <div className="mt-2 flex items-center gap-3">
                      {job.logo && (
                        <img
                          src={job.logo}
                          alt={`${job.company} logo`}
                          loading="lazy"
                          onError={(e) =>
                            (e.currentTarget.style.display = "none")
                          }
                          className="max-h-10 max-w-full object-contain"
                        />
                      )}
                      <p className="text-base font-semibold">{job.company}</p>
                    </div>

                    {job.summary && (
                      <p className="mt-5 max-w-2xl leading-relaxed text-gray-600">
                        {job.summary}
                      </p>
                    )}

                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="mt-5 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-gray-600 marker:text-gray-400">
                        {job.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {job.techstack && job.techstack.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                        {job.techstack.map((tech) => (
                          <li
                            key={tech.name}
                            className="flex items-center gap-2.5"
                          >
                            {tech.area && (
                              <span className="text-gray-500">{tech.area}</span>
                            )}
                            <span className="flex items-center gap-2 font-medium text-gray-900">
                              {tech.logo && (
                                <img
                                  src={tech.logo}
                                  alt=""
                                  loading="lazy"
                                  className="size-5 object-contain"
                                />
                              )}
                              {tech.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {job.link && (
                      <a
                        href={job.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block text-sm font-medium text-gray-900 underline decoration-amber-400
                          underline-offset-4 transition-colors hover:decoration-gray-900
                          focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900"
                      >
                        Visit {job.link.label}
                      </a>
                    )}
                  </div>

                  {job.image && job.image.length > 0 && (
                    <ImageStack images={job.image} label={job.company} />
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
