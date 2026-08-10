import psicologa from "../../assets/hero3.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto mt-8 md:mt-16 flex flex-col md:flex-row items-center gap-12 md:gap-16 px-6 overflow-x-clip animate-fade-in relative z-10">
      <div className="flex-1 mt-10 md:mt-0 relative w-full max-w-md md:mr-10">
        <div
          className="
          absolute 
          -top-12
          -left-8       /* Reducido para evitar el corte recto en el borde izquierdo */
          w-[125%] 
          h-[120%] 
          bg-[#C2CDFF]/80 
          rounded-[60%_40%_30%_70%/50%_60%_40%_50%] 
          transform 
          rotate-12 
          z-0 
          [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)] 
        "
        ></div>

        {/* IMAGEN PRINCIPAL (con bordes suaves para integrarse) */}
        <img
          src={psicologa}
          alt="psicóloga"
          className="
            relative 
            z-10 
            w-full 
            rounded-2xl 
            object-cover 
            [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]
          "
        />
      </div>

      {/* BLOQUE DE TEXTO */}
      <div className="flex-1 max-w-xl text-center md:text-left animate-fade-in relative z-20 mt-10 md:mt-0">
        <span className="inline-block bg-[#C2CDFF]/30 text-sm px-3 py-1 rounded-full text-gray-700 font-medium">
          Psicóloga sanitaria
        </span>

        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 mt-4 leading-tight">
          Terapia psicológica cercana y profesional con perspectiva contextual
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Te acompaño a hacer espacio al malestar y a construir una vida con sentido.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <Link
            to="/contacto"
            className="bg-[#3A3B70] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300 text-center font-medium"
          >
            Pedir cita
          </Link>

          <Link
            to="/sobre-mi"
            className="border border-[#3A3B70]/30 text-[#3A3B70] px-6 py-3 rounded-full hover:bg-[#3A3B70] hover:text-white transition duration-300 text-center font-medium"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
