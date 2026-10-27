import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import FAQ from "../faq/FAQ";
import {
  UserRound,
  HeartHandshake,
  Puzzle,
  Video,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import despacho1 from "../../assets/IMG_8653.webp";
import despacho1Avif from "../../assets/IMG_8653.avif";

const services = [
  {
    title: "Terapia para Adultos",
    description:
      "Espacio seguro para trabajar tus dificultades emocionales. Te acompaño a desarrollar herramientas para afrontar los desafíos del día a día. Abordaje de la ansiedad, rumia de pensamientos, estrés…",
    icon: UserRound,
  },
  {
    title: "Terapia de Pareja",
    description:
      "Mejora la comunicación y fortalece el vínculo. Se abordan conflictos, crisis y diferencias para construir una relación más sana y equilibrada o para sostener el fin de esta.",
    icon: HeartHandshake,
  },
  {
    title: "Terapia Infantojuvenil",
    description:
      "Atención especializada para niños y adolescentes. Se trabajan problemas emocionales, conductuales y dificultades escolares desde un enfoque lúdico.",
    icon: Puzzle,
  },
  {
    title: "Terapia Online",
    description:
      "Una opción igual de eficaz que la terapia presencial. Mismas características y mayor comodidad sin desplazamientos.",
    icon: Video,
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={despacho1Avif} type="image/avif" />
            <img
              src={despacho1}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* Contenido */}
        <div className="relative z-10 px-3 pt-8 pb-10 md:px-6 md:pt-32 md:pb-40">
          <FadeInOnScroll>
            <div className="text-center mb-6 md:mb-16">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Terapias personalizadas
              </p>
              <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm">
                Servicios
              </h1>
              <p className="text-sm md:text-lg text-white/90 mt-3 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                Terapia para adultos, parejas, niños y adolescentes; presencial
                en Jaén y online
              </p>
            </div>
          </FadeInOnScroll>

          {/* Una columna en móvil; dos columnas en pantallas grandes */}
          <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
            {services.map((service, i) => (
              <FadeInOnScroll key={i}>
                <ServiceCard {...service} index={i} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <div className="relative z-10 -mt-8 md:-mt-12 rounded-t-3xl bg-[#F6F8FF] text-center pt-12 md:pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/80 bg-white/75 px-6 py-8 md:px-12 md:py-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#3A3B70]/70">
            ¿Necesitas orientación?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#3A3B70] mt-2">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-gray-700 mt-3 max-w-xl mx-auto">
            Cuéntame qué necesitas y te ayudaré a encontrar la opción adecuada.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-full bg-[#3A3B70]/80 text-white font-semibold hover:bg-[#3A3B70] transition-colors"
          >
            Consulta otros servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <FAQ />
    </>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
}) {
  const delay = index * 100;
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className="
        group p-4 md:p-8 rounded-xl md:rounded-2xl h-full
        flex flex-row md:flex-col items-start gap-3 md:gap-0
        bg-white/60 backdrop-blur-md
        border border-white/20
        hover:border-[#83A68E]/30
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      <div
        className="w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-xl text-black bg-white/80 flex items-center justify-center flex-shrink-0 mb-0 md:mb-5 group-hover:scale-110 transition-transform"
      >
        <Icon className="w-5 h-5 md:w-7 md:h-7" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-sm md:text-base text-black leading-snug md:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
