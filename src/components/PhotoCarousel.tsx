import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { images: { src: string; alt: string }[] };

export function PhotoCarousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    const id = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-deep border border-gold/20" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 relative aspect-[16/10] bg-card">
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-background/70 backdrop-blur border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-all flex items-center justify-center"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 size-11 rounded-full bg-background/70 backdrop-blur border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-all flex items-center justify-center"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="flex justify-center gap-2 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Ir a foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === selected ? "w-8 bg-gold" : "w-1.5 bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
