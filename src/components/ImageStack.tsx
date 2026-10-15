interface ImageStackProps {
  images: string[];
  label: string;
  /** Controls the size. Defaults to a compact stack for the experience rows. */
  className?: string;
}

// Where each screenshot sits in the stack (up to 3)
const POSITIONS = [
  "top-0 left-0 z-10",
  "top-[22%] right-0 z-20",
  "top-[48%] left-[11%] z-30",
];

const imageStyles =
  "rounded-lg border border-gray-200 bg-gray-100 object-cover object-top shadow-lg";

export default function ImageStack({
  images,
  label,
  className = "max-w-sm shrink-0 lg:w-80 xl:w-96",
}: ImageStackProps) {
  const shown = images.slice(0, 3);

  if (shown.length === 1) {
    return (
      <img
        src={shown[0]}
        alt={`${label} screenshot`}
        loading="lazy"
        className={`${imageStyles} aspect-[16/10] w-full ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative w-full ${className} ${
        shown.length > 2 ? "aspect-square" : "aspect-[4/3]"
      }`}
    >
      {shown.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${label} screenshot ${i + 1}`}
          loading="lazy"
          className={`${imageStyles} absolute aspect-[16/10] w-[78%] transition-transform duration-300
            hover:z-40 hover:-translate-y-1 ${POSITIONS[i]}`}
        />
      ))}
    </div>
  );
}
