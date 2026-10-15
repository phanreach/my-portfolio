import { EDUCATION, EDUCATION_INTRO } from "../constants/data-dummy";
import type { EducationCategory, EducationEntry } from "../types/api";

const GROUPS: { label: string; category: EducationCategory }[] = [
  { label: "Training", category: "training" },
  { label: "High school", category: "high-school" },
  { label: "Additional learning", category: "additional" },
];

function formatPeriod(e: EducationEntry): string | undefined {
  if (e.period) return e.period;
  const { startDate: start, endDate: end } = e;
  if (start && e.current) return `${start} - Present`;
  if (start && end && start !== end) return `${start} - ${end}`;
  return start ?? end;
}

function subtitle(e: EducationEntry): string | undefined {
  const text = [e.degree, e.field, e.description].filter(Boolean).join(" · ");
  return text || undefined;
}

export default function Education() {
  const universities = EDUCATION.filter((e) => e.category === "university");

  return (
    <section id="education" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          {/* Heading */}
          <div className="self-start lg:sticky lg:top-28">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Education
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-gray-600">
              {EDUCATION_INTRO}
            </p>
          </div>

          <div>
            {/* Universities: every entry gets the same treatment */}
            {universities.length > 0 && (
              <ul className="divide-y divide-white/15 rounded-2xl bg-gray-900 p-6 text-white sm:p-10">
                {universities.map((uni) => (
                  <li
                    key={uni.institution}
                    className="flex items-start gap-4 py-6 first:pt-0 last:pb-0 sm:items-center sm:gap-5"
                  >
                    {uni.image && (
                      <img
                        src={uni.image}
                        alt=""
                        loading="lazy"
                        className="size-14 shrink-0 rounded-xl bg-white object-contain p-2 sm:size-16"
                      />
                    )}

                    <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                          {uni.institution}
                        </h3>
                        {subtitle(uni) && (
                          <p className="mt-1 text-gray-300">{subtitle(uni)}</p>
                        )}
                        {uni.intro && (
                          <p className="mt-2 text-gray-300">{uni.intro}</p>
                        )}
                      </div>
                      <p className="shrink-0 text-base tabular-nums text-gray-400">
                        {formatPeriod(uni)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* Everything else */}
            <dl className="mt-10">
              {GROUPS.map((group) => {
                const items = EDUCATION.filter(
                  (e) => e.category === group.category,
                );
                if (!items.length) return null;

                return (
                  <div
                    key={group.category}
                    className="grid gap-2 border-t border-gray-200 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
                  >
                    <dt className="text-sm font-medium text-gray-500">
                      {group.label}
                    </dt>
                    <dd>
                      <ul className="space-y-3">
                        {items.map((item) => (
                          <li
                            key={item.institution}
                            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                          >
                            <div>
                              <span className="text-gray-900">
                                {item.institution}
                              </span>
                              {subtitle(item) && (
                                <span className="block text-sm text-gray-500">
                                  {subtitle(item)}
                                </span>
                              )}
                            </div>
                            {formatPeriod(item) && (
                              <span className="shrink-0 text-sm tabular-nums text-gray-500">
                                {formatPeriod(item)}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
