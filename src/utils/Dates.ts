export function parseDate(value: string): Date {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

const monthYear = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
});

export function formatMonthYear(value: string): string {
  return monthYear.format(parseDate(value));
}

/** "Feb 2025 - Present" when there is no end date */
export function formatRange(start: string, end?: string): string {
  return `${formatMonthYear(start)} - ${end ? formatMonthYear(end) : "Present"}`;
}

/** "1 yr 8 mos" */
export function formatDuration(start: string, end?: string): string {
  const from = parseDate(start);
  const to = end ? parseDate(end) : new Date();
  const total = Math.max(
    1,
    (to.getFullYear() - from.getFullYear()) * 12 +
      (to.getMonth() - from.getMonth()),
  );
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
