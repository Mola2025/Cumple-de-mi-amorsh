import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles } from "lucide-react";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { PhotoCollage } from "@/components/PhotoCollage";
import ph1 from "@/assets/Nosotros1.jpeg";
import ph2 from "@/assets/Nosotros2.jpeg";
import ph3 from "@/assets/Nosotros3.jpeg";
import ph4 from "@/assets/Nosotros4.jpeg";
import ph5 from "@/assets/Nosotros5.jpeg";
import ph6 from "@/assets/Nosotros6.jpeg";
import ph7 from "@/assets/Tu1.jpeg";
import ph8 from "@/assets/Tu2.jpeg";
import ph9 from "@/assets/Tu3.jpeg";
import ph10 from "@/assets/Tu4.jpeg";
import ph11 from "@/assets/Tu5.jpeg";
import ph12 from "@/assets/Tu6.jpeg";
import ph13 from "@/assets/Tu7.jpeg";
import ph14 from "@/assets/Tu8.jpeg";
import ph15 from "@/assets/Tu9.jpeg";
import ph16 from "@/assets/Tu10.jpeg";
import ph17 from "@/assets/Tu11.jpeg";
import ph18 from "@/assets/Tu12.jpeg";
import ph19 from "@/assets/gato.jpeg";


export const Route = createFileRoute("/")({
  component: BirthdayPage,
});

const carouselPhotos = [
  { src: ph1, alt: "Nosotros 1" },
  { src: ph2, alt: "Nosotros 2" },
  { src: ph3, alt: "Nosotros 3" },
  { src: ph4, alt: "Nosotros 4" },
  { src: ph5, alt: "Nosotros 5" },
  { src: ph6, alt: "Nosotros 6" },
  { src: ph19, alt: "Chismosa por llegar hasta aca :D" },
];

const collageA = [
  { src: ph8, alt: "Recuerdo 1" },
  { src: ph9, alt: "Recuerdo 2" },
  { src: ph11, alt: "Recuerdo 3" },
  { src: ph12, alt: "Recuerdo 4" },
  { src: ph10, alt: "Recuerdo 5" },
  { src: ph14, alt: "Recuerdo 6" },
];

const collageB = [
  { src: ph18, alt: "Tú 12" },
  { src: ph13, alt: "Tú 1" },
  { src: ph7, alt: "Tú 4" },
  { src: ph17, alt: "Tú 17" },
  { src: ph15, alt: "Tú 9" },
  { src: ph16, alt: "Tú 16" },
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
          Al Amor De <em className="text-gradient-gold not-italic">Mai LAIF</em>
        </h1>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold/50" />
          <Heart className="size-4 text-gold fill-gold" />
          <span className="h-px w-12 bg-gold/50" />
        </div>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto italic font-display text-lg">
          Hoy que se nos crece la niña pequeña un año mas :D.
        </p>
      </section>

      {/* Mensaje + Collage A (mensaje izquierda, collage derecha en fila) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1">
            <PhotoCollage photos={collageA} variant="left" />
          </div>
          <div className="order-2">
            <p className="text-gold font-script text-2xl mb-3">Para ti mi vida hermosa,</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Un increible año más a tu lado, <span className="text-gradient-gold"> y los muchos que estan por venir</span>.
            </h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Hoy me siento muy feliz de poder compartir otro año mas viendote crecer como mujer, como persona,
                como una arquitecta muy nerda y como la mejor novia del mundo mundial :D. Te amo con todo mi corazón,
                te deseo lo mejor toda la vida y se que vas a lograr todo lo que tu quieras siempreeee :3.
              </p>
              <p>
                Hoy no celebro solo tu cumpleaños: celebro la suerte de despertar
                pensando en ti, de reír contigo, de poder amarte cada día un poco más
                que el anterior y de que me permitas estar contigo un dia mas y quiero que sean muchos dias hasta otras vidas.
              </p>
              <p className="font-display italic text-gold/90 text-lg border-l-2 border-gold pl-4">
                Espero poder seguir viviendo todo tu crecimiento por mucho mas tiempo y seguir aprendiendo junto a ti porque eres
                una persona increible, una mujer muy pero muy hermosa, muy juiciosa, nerda, loca pero que me gustaaaaa
                y con la que quiero vivir mucho mas juntos :3
              </p>

              <p className="font-display italic text-gold/90 text-lg border-l-2 border-gold pl-4">
                PD: Si llegas hasta el final del carrusel es porque eres chismosa :p.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="font-script text-2xl text-gold mb-2">Nuestros momentos juntos :3</p>
          <h2 className="font-display text-4xl md:text-5xl">
            Pequeños instantes, <span className="text-gradient-gold">Grandes recuerdos junto a ti :3333</span>
          </h2>
        </div>
        <PhotoCarousel images={carouselPhotos} />
      </section>

      {/* Mensaje continuación + Collage B (mensaje izquierda, collage debajo a la derecha) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Y si te preguntas <span className="text-gradient-gold">qué quiero contigo</span>…
            </h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Diría que más años contigo. Más viajes juntos, conocer muchas cosas nuevas junto a ti
                mas salidas a lugares, más comidas nuevas por probar, mas tonterias ;p, más
                madrugadas hablando y jugando, mas besos, mas abrazos y algun dia mucho mas con nuestras mascotas :3.
              </p>
              <p>
                Gracias por elegirme cada día mi amor. Feliz cumpleaños, espero que la pases increible en tu dia, que te consientan mucho
                y que sepas que te amo con todo mi corazón y que quiero seguir amándote por siempre :3.
                Espero te gusten mis regalos y se que pronto podremos celebrar todo lo que nos falta y lo que nos espera juntos :3.
              </p>
              <p className="font-display italic text-xl">
                Te amo demasiado Sofia, te quiero, me encantas, me fascinas, me enamoras todos los dias, y lo haras todo el tiempo :3.
              </p>
              <p className="font-display italic text-xl">
                Felices 21 añitos amor :3
                <Heart className="inline size-5 ml-2 text-gray-500 fill-gray-500" />
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
          <p className="font-script text-3xl text-gradient-gold">Para ti mi amorsh con todo mi amor</p>
          <span className="h-px w-16 bg-gold/40" />
        </div>
      </footer>
    </main>
  );
}
