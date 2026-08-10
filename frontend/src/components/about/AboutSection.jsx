import psicologa from "../../assets/sobremi.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#C2CDFF]/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-18 px-6">
        

        {/* TEXTO */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mt-10 md:mt-0">Sobre mí</h2>
          <p className="text-gray-600 mt-4 mb-4 md:mb-0">
            Soy Sandra y, como psicóloga, mi prioridad es ofrecer un 
            acompañamiento respetuoso y consciente. En lo personal, valoro 
            la autenticidad, la sensibilidad y la búsqueda de propósito, 
            algo que también guía mi forma de trabajar. 

          </p>
        </div>

        {/* IMAGEN */}
        <div className="flex-1">
          <div className="">
            <img
              src={psicologa}
              alt="psicóloga"
              className="object-cover w-100 h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
