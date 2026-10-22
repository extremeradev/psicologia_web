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
import despacho1 from "../../assets/despacho1.webp";

const services = [
  {
    title: "Terapia para Adultos",
    description:
      "Espacio seguro para trabajar tus dificultades emocionales. Te acompaño a desarrollar herramientas para afrontar los desafíos del día a día. Abordaje de la ansiedad, rumia de pensamientos, estrés…",
    icon: UserRound,
    color: "text-[#D498CA]",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Mejora la comunicación y fortalece el vínculo. Se abordan conflictos, crisis y diferencias para construir una relación más sana y equilibrada o para sostener el fin de esta.",
    icon: HeartHandshake,
    color: "text-rose-400",
  },
  {
    title: "Terapia Infantojuvenil",
    description:
      "Atención especializada para niños y adolescentes. Se trabajan problemas emocionales, conductuales y dificultades escolares desde un enfoque lúdico.",
    icon: Puzzle,
    color: "text-sky-400",
  },
  {
    title: "Terapia Online",
    description:
      "Una opción igual de eficaz que la terapia presencial. Mismas características y mayor comodidad sin desplazamientos.",
    icon: Video,
    color: "text-yellow-400",
  },
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src={despacho1}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10 px-3 pt-8 pb-10 md:px-6 md:pt-32 md:pb-40">
          <FadeInOnScroll>
            <div className="text-center mb-6 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Servicios
              </h2>
              <p className="text-sm md:text-lg text-gray-200 mt-3 md:mt-4 max-w-2xl mx-auto">
                Un espacio de confianza donde trabajar tu bienestar emocional.
                Cada servicio está adaptado a tus necesidades.
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
      <FadeInOnScroll>
        <div className="bg-[#C2CDFF]/2 text-center pt-20 pb-12 px-6">
          <p className="text-gray-600 text-lg">¿No encuentras lo que buscas?</p>
          <Link
            to="/contacto"
            className="
    inline-flex items-center gap-2 mt-4
    px-8 py-4 rounded-full
    bg-[#3A3B70]/80 text-white font-semibold
    hover:bg-[#3A3B70] transition-colors
  "
          >
            Consulta otros servicios
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </FadeInOnScroll>

      <FAQ />
    </>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  color,
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
        className={`w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-xl ${color} bg-white/80 flex items-center justify-center flex-shrink-0 mb-0 md:mb-5 group-hover:scale-110 transition-transform`}
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
