import { useState } from "react";

export type Screen = {
  src: string;
  title: string;
};

interface ScreenShowcaseProps {
  screens: Screen[];
  label: string;
}

export default function ScreenShowcase({
  screens,
  label,
}: ScreenShowcaseProps) {
  const [active, setActive] = useState(0);
  if (screens.length === 0) return null;

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
        {screens.map((screen, i) => (
          <img
            key={screen.src}
            src={screen.src}
            alt={`${label}: ${screen.title}`}
            className={`aspect-[16/10] w-full object-cover object-top ${
              i === active ? "block" : "hidden"
            }`}
          />
        ))}
      </div>

      {screens.length > 1 && (
        <div
          role="group"
          aria-label={`${label} screens`}
          className="mt-4 flex flex-wrap gap-2"
        >
          {screens.map((screen, i) => (
            <button
              key={screen.src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 ${
                  i === active
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                }`}
            >
              {screen.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
