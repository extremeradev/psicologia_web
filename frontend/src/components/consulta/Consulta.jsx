import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import despacho1 from "../../assets/IMG_8529.webp";
import despacho1Avif from "../../assets/IMG_8529.avif";
import escritorio1 from "../../assets/IMG_8653.webp";
import escritorio1Avif from "../../assets/IMG_8653.avif";
import escritorio2 from "../../assets/IMG_8647.webp";
import escritorio2Avif from "../../assets/IMG_8647.avif";
import mesita1 from "../../assets/IMG_8649.webp";
import mesita1Avif from "../../assets/IMG_8649.avif";
import sillones from "../../assets/IMG_8562.webp";
import sillonesAvif from "../../assets/IMG_8562.avif";

const photos = [
  { src: despacho1, avif: despacho1Avif, alt: "Vista general de la consulta" },
  { src: escritorio1, avif: escritorio1Avif, alt: "Escritorio de la consulta" },
  { src: escritorio2, avif: escritorio2Avif, alt: "Detalle del escritorio" },
  { src: mesita1, avif: mesita1Avif, alt: "Detalle de la mesita de la consulta" },
  { src: sillones, avif: sillonesAvif, alt: "Sillones de la consulta" },
];

export default function Consulta() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % photos.length);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const swipeDistance = touchStartX.current - event.changedTouches[0].clientX;
    if (swipeDistance > 50) showNext();
    if (swipeDistance < -50) showPrevious();
    touchStartX.current = null;
  };

  return (
    <main className="min-h-[70vh] bg-[#f5f2ef] py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#3A3B70] text-center mb-8 px-4">
        CONSULTA PRESENCIAL EN JAÉN
      </h1>
      <section
        aria-label="Galería de fotos de la consulta"
        aria-roledescription="carrusel"
        className="max-w-6xl mx-auto px-4 md:px-8"
      >
        <div
          className="relative h-[65vh] min-h-[360px] max-h-[800px] overflow-hidden rounded-2xl bg-[#b8aa9a] shadow-lg touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartX.current = null;
          }}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className="h-full w-full flex-shrink-0"
                role="group"
                aria-roledescription="diapositiva"
              >
                <picture className="block h-full w-full">
                  <source srcSet={photo.avif} type="image/avif" />
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index === activeIndex ? "eager" : "lazy"}
                    fetchPriority={index === activeIndex ? "high" : "low"}
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </picture>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#3A3B70] shadow-md transition hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#3A3B70] shadow-md transition hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-3" aria-label="Elegir foto">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar foto ${index + 1}: ${photo.alt}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-3 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-[#3A3B70]"
                  : "w-3 bg-[#3A3B70]/30 hover:bg-[#3A3B70]/60"
              }`}
            />
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Foto {activeIndex + 1} de {photos.length}: {photos[activeIndex].alt}
        </p>
      </section>
    </main>
  );
}
