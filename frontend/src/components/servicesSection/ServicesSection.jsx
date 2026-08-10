import { Heart, Brain, Users } from "lucide-react";

const ServicesSection = () => {
  return (
    /* Eliminamos md:text-left y dejamos text-center */
    <section className="my-16 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 text-center animate-fade-in">
      
      {/* Tarjeta 1 */}
      {/* Cambiamos md:items-start por items-center */}
      <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center">
        <Heart className="w-10 h-10 text-[#C2CDFF]/80 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Atención personalizada
        </h3>
        <p className="text-gray-600">Texto más corto y claro aquí...</p>
      </div>

      {/* Tarjeta 2 */}
      <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-center">
        <Brain className="w-10 h-10 text-[#C2CDFF]/80 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Evidencia científica
        </h3>
        <p className="text-gray-600">Texto más corto y claro aquí...</p>
      </div>

      {/* Tarjeta 3 */}
      <div className="px-6 py-6 flex flex-col items-center">
        <Users className="w-10 h-10 text-[#C2CDFF]/80 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Cercanía y confianza
        </h3>
        <p className="text-gray-600">Texto más corto y claro aquí...</p>
      </div>

    </section>
  );
};

export default ServicesSection;