type Photo = { src: string; alt: string };
type Props = { photos: Photo[]; variant?: "left" | "right" };

// Masonry-style collage: each photo keeps its natural aspect ratio,
// so nothing gets cropped and there are no empty backgrounds.
export function PhotoCollage({ photos, variant = "left" }: Props) {
  return (
    <div
      className={`columns-2 gap-3 ${
        variant === "right" ? "rotate-[1deg]" : "-rotate-[1deg]"
      }`}
    >
      {photos.map((photo, i) => (
        <div
          key={i}
          className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-gold/20 shadow-deep group"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
