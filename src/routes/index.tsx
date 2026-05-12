import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles } from "lucide-react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { PhotoCollage } from "@/components/PhotoCollage";
import ph1 from "@/assets/placeholder-1.jpg";
import ph2 from "@/assets/placeholder-2.jpg";
import ph3 from "@/assets/placeholder-3.jpg";

export const Route = createFileRoute("/")({
  component: BirthdayPage,
});

const carouselPhotos = [
  { src: ph1, alt: "Foto especial 1" },
  { src: ph2, alt: "Foto especial 2" },
  { src: ph3, alt: "Foto especial 3" },
  { src: ph1, alt: "Foto especial 4" },
  { src: ph2, alt: "Foto especial 5" },
];

const collageA = [
  { src: ph1, alt: "Recuerdo 1" },
  { src: ph2, alt: "Recuerdo 2" },
  { src: ph3, alt: "Recuerdo 3" },
  { src: ph1, alt: "Recuerdo 4" },
];

const collageB = [
  { src: ph3, alt: "Momento 1" },
  { src: ph2, alt: "Momento 2" },
  { src: ph1, alt: "Momento 3" },
  { src: ph3, alt: "Momento 4" },
];

function BirthdayPage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Hero */}
      <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-wine blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
        </div>

        <div className="flex justify-center mb-6 animate-float">
          <Sparkles className="size-8 text-gold" />
        </div>
        <p className="font-script text-3xl md:text-5xl animate-shimmer mb-4">
          Feliz Cumpleaños
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground tracking-tight">
          mi <em className="text-gradient-gold not-italic">amor</em>
        </h1>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold/50" />
          <Heart className="size-4 text-gold fill-gold" />
          <span className="h-px w-12 bg-gold/50" />
        </div>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto italic font-display text-lg">
          Hoy el mundo celebra contigo, y yo más que nadie.
        </p>
      </section>

      {/* Mensaje + Collage A (mensaje izquierda, collage derecha en fila) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1">
            <PhotoCollage photos={collageA} variant="left" />
          </div>
          <div className="order-2">
            <p className="text-gold font-script text-2xl mb-3">Para ti,</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Un año más a tu lado, <span className="text-gradient-gold">infinitos por venir</span>.
            </h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Desde el día en que entraste en mi vida, todo empezó a tener un brillo
                distinto. Tu sonrisa se volvió mi lugar favorito y tu voz, mi canción
                preferida.
              </p>
              <p>
                Hoy no celebro solo tu cumpleaños: celebro la suerte de despertar
                pensando en ti, de reír contigo, de poder amarte cada día un poco más
                que el anterior.
              </p>
              <p className="font-display italic text-gold/90 text-lg border-l-2 border-gold pl-4">
                Que este año te traiga todo lo que mereces… y que yo pueda estar a tu
                lado para verlo cumplirse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="font-script text-2xl text-gold mb-2">nuestros momentos</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Pequeños instantes, <span className="text-gradient-gold">grandes recuerdos</span>
          </h2>
        </div>
        <PhotoCarousel images={carouselPhotos} />
      </section>

      {/* Mensaje continuación + Collage B (mensaje izquierda, collage debajo a la derecha) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Y si me preguntan <span className="text-gradient-gold">qué deseo hoy</span>…
            </h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Diría que más años contigo. Más viajes, más cenas tontas, más
                madrugadas hablando de nada y de todo. Más tu mano en la mía cuando
                el mundo se ponga difícil.
              </p>
              <p>
                Gracias por ser luz, por ser calma y por ser fuego. Gracias por
                elegirme cada día.
              </p>
              <p className="font-display italic text-xl">
                Te amo, hoy, mañana y siempre. <Heart className="inline size-5 text-gold fill-gold" />
              </p>
            </div>
          </div>
          <div>
            <PhotoCollage photos={collageB} variant="right" />
          </div>
        </div>
      </section>

      {/* Firma */}
      <footer className="text-center mt-16 px-6">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-16 bg-gold/40" />
          <p className="font-script text-3xl text-gradient-gold">con todo mi amor</p>
          <span className="h-px w-16 bg-gold/40" />
        </div>
      </footer>
    </main>
  );
}
