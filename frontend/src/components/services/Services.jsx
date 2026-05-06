import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import image1 from "../../assets/flor.jpg";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Aplicaciones modernas con React, rendimiento y diseño limpio.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas centradas en la experiencia del usuario.",
    icon: "🎨",
  },
  {
    title: "SEO",
    description: "Optimización para posicionarte mejor en buscadores.",
    icon: "🚀",
  },
];

export default function Services() {
  return (
    <section
      className=" 
        group text-black
        "
    >
      <div className="relative m-0 p-0 pb-40">
        {/* Imagen */}

        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image1}
          alt=""
        />

        {/* Título */}
        <div className="relative p-8 space-y-6">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Servicios</h2>
              <p className=" mt-4">Lo que puedo hacer por ti</p>
            </div>
          </FadeInOnScroll>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeInOnScroll key={i}>
                <ServiceCard {...service} delay={i * 150} />
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon, delay }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className="
        group p-8 rounded-2xl 
        bg-white/50 backdrop-blur-md
        border border-white/10
        hover:border-white/20
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
      "
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="">{description}</p>
    </div>
  );
}
