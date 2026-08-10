import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import FAQ from "../faq/FAQ";
import {
  Brain,
  Heart,
  Baby,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Terapia para Adultos",
    description:
      "Espacio seguro para trabajar tus dificultades emocionales. Te acompaño a desarrollar herramientas para afrontar los desafíos del día a día. Abordaje de la ansiedad, rumia de pensamientos, estrés…",
    icon: Brain,
    color: "text-[#83A68E]",
  },
  {
    title: "Terapia de Pareja",
    description:
      "Mejora la comunicación y fortalece el vínculo. Se abordan conflictos, crisis y diferencias para construir una relación más sana y equilibrada o para sostener el fin de esta.",
    icon: Heart,
    color: "text-rose-400",
  },
  {
    title: "Terapia Infantojuvenil",
    description:
      "Atención especializada para niños y adolescentes. Se trabajan problemas emocionales, conductuales y dificultades escolares desde un enfoque lúdico.",
    icon: Baby,
    color: "text-sky-400",
  },
  {
    title: "Terapia Online",
    description:
      "Una opción igual de eficaz que la terapia presencial. Mismas características y mayor comodidad sin desplazamientos.",
    icon: Sparkles,
    color: "text-yellow-400",
  },
];

export default function Services() {
  return (
    <>
    <style>{`
      .clip-diagonal {
        clip-path: polygon(0 0, 100% 0, 100% 98%, 0 100%);
      }
      @media (min-width: 768px) {
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
      }
    `}</style>

    <section className="relative overflow-hidden">
      {/* Fondo gris sólido con diagonal */}
      <div className="absolute inset-0 clip-diagonal bg-[#3A3B70]/50" />

      {/* Contenido */}
      <div className="relative px-6 pt-20 pb-28 md:pt-32 md:pb-40 z-10">
        <FadeInOnScroll>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Servicios
            </h2>
            <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
              Un espacio de confianza donde trabajar tu bienestar emocional.
              Cada servicio está adaptado a tus necesidades.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Grid de servicios */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <p className="text-gray-600 text-lg">
          ¿No encuentras lo que buscas?
        </p>
        <a
          href="/contacto"
          className="
            inline-flex items-center gap-2 mt-4
            px-8 py-4 rounded-full
            bg-[#3A3B70]/80 text-white font-semibold
            hover:bg-[#3A3B70] transition-colors
          "
        >
          Consulta otros servicios
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </FadeInOnScroll>

    <FAQ />

    
    </>
  );
}

function ServiceCard({ title, description, icon: Icon, color, index }) {
  const delay = index * 100;
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className="
        group p-8 rounded-2xl h-full
        flex flex-col
        bg-white/90 backdrop-blur-md
        border border-white/20
        hover:border-[#83A68E]/30
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      <div
        className={`w-14 h-14 rounded-xl ${color} bg-white/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed grow">{description}</p>
    </div>
  );
}