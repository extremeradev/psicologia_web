const FeaturesSection = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 text-center md:text-left animate-fade-in">
      <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-300">
        {" "}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Atención personalizada
        </h3>
        <p className="text-gray-600">
          El objetivo para mi es ayudarte a construir una vida con significado
          para ti, partiendo de tus propios valores, deseos y necesidades.
          <br /> Mi papel aquí es acompañarte, creando un espacio libre de
          juicios donde puedas descubrir qué es lo que realmente buscas y
          avanzar hacia una vida más plena.
        </p>
      </div>

      <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-300">
        {" "}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Enfoque profesional
        </h3>
        <p className="text-gray-600">
          Mi enfoque tiene una base contextual, que tiene en cuenta cómo el
          entorno social, cultural y las relaciones influyen en nuestro
          bienestar emocional. Además, defiendo una práctica de la psicología
          basada en el rigor ético y en la evidencia científica.
        </p>
      </div>

      <div className="px-6 py-6">
        {" "}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Cercanía y confianza
        </h3>
        <p className="text-gray-600">
          Uno de los factores que más influyen en el éxito de la terapia es la
          calidad de la relación terapéutica. Por ello, para mí es importante
          que ambxs nos sintamos cómodxs durante el proceso. Espero que este sea
          un espacio seguro para ti, donde puedas compartir todo aquello que
          necesites en cada momento.
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
