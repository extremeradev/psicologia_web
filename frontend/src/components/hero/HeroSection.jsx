import psicologa from "../../assets/bicho.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    
      <section className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-12 px-6 animate-fade-in">
        {/* IMAGEN */}
        <div className="flex-1 relative max-w-md md:mr-20">
          <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-[#DCF2E4] rounded-[60%_40%_50%_70%] z-0"></div>

          <img
            src={psicologa}
            alt="psicóloga"
            className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
        
        
        {/* TEXTO */}
        <div className="flex-1 max-w-xl text-center md:text-left animate-fade-in">
          <span className="inline-block bg-[#DCF2E4] text-sm px-3 py-1 rounded-full text-gray-700">
            Psicóloga sanitaria
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mt-4 leading-tight">
            Acompañamiento psicológico cercano y profesional
          </h1>

          <p className="text-gray-600 mt-4">
            Te ayudo a gestionar la ansiedad, autoestima y relaciones desde un
            enfoque práctico y humano.
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <button
              onClick={() => (window.location.href = "/pedir-cita")}
              className="bg-[#83A68E] text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300 cursor-pointer"
            >
              Pedir cita
            </button>

            <button className="border border-[#83A68E] text-[#83A68E] px-6 py-3 rounded-full hover:bg-[#83A68E] hover:text-white transition cursor-pointer">
              Conocer más
            </button>
          </div>
        </div>

        
      </section>
  );
};

export default HeroSection;
