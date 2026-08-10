import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";

const faqs = [
  {
    q: "¿Cuánto dura una sesión?",
    a: "Las sesiones tienen una duración de 50-60 minutos aproximadamente. La frecuencia de estas depende de cada persona y de sus circunstancias. El ritmo lo marcas tú.",
  },
  {
    q: "¿Cuántas sesiones necesito?",
    a: "Depende de muchos factores como la idea que se tiene de la terapia, el motivo de consulta o los objetivos. Algunas personas generan un cambio en pocas sesiones, mientras que otras prefieren un acompañamiento más prolongado. Lo valoramos juntxs en la primera cita.",
  },
  {
    q: "¿Qué puedo esperar de la primera sesión?",
    a: "La primera sesión es una toma de contacto. Hablamos de lo que te trae aquí, tus expectativas y cómo puedo ayudarte. Sin compromiso y sin presión.",
  },
  {
    q: "¿Atiendes online o solo presencial?",
    a: "Ambas modalidades. Las sesiones online se realizan por videollamada y son igual de efectivas. Tú eliges lo que mejor se adapte a ti.",
  },
  {
    q: "¿Cómo sé si la terapia es para mí?",
    a: "Cualquier persona puede beneficiarse de la terapia, no solo quienes atraviesan una crisis. Si sientes que necesitas apoyo, herramientas o simplemente un espacio para ti, estaré encantada de acompañarte.",
  },
];

function AccordionItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  const openDelay = index * 80;

  return (
    <div
      style={{ transitionDelay: `${openDelay}ms` }}
      className="border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-gray-800 font-medium hover:bg-[#3A3B70]/50 transition-colors"
      >
        <span>{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#C2CDFF]/50 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <FadeInOnScroll>
      <section className="bg-[#C2CDFF]/30 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Resuelve tus dudas antes de dar el primer paso
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
}
