import { Heart, Brain, Users } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="my-16 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 text-center md:text-left animate-fade-in">
      <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center md:items-start">
        <Heart className="w-10 h-10 text-[#83A68E] mb-4" />

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Atención personalizada
        </h3>
        <p className="text-gray-600">Texto más corto y claro aquí...</p>
      </div>

      <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center md:items-start">
        <Brain className="w-10 h-10 text-[#83A68E] mb-4" />

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Enfoque profesional
        </h3>
        <p className="text-gray-600">Texto más corto y claro aquí...</p>
      </div>

      <div className="px-6 py-6 flex flex-col items-center md:items-start">
        <Users className="w-10 h-10 text-[#83A68E] mb-4" />

        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Cercanía y confianza
        </h3>
        <p className="text-gray-600">Texto más corto y claro aquí...</p>
      </div>
    </section>
  );
};

export default ServicesSection;
