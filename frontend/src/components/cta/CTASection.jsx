import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-[#3A3B70]/70 py-16 text-center text-white">
      <h2 className="text-3xl font-semibold">Da el primer paso hoy</h2>

      <p className="mt-4 max-w-xl mx-auto">
        Si estás pasando por un momento difícil, puedo acompañarte en el
        proceso.
      </p>

      <Link
        to="/contacto"
        className="inline-block mt-6 bg-white text-[#3A3B70] px-6 py-3 rounded-full font-medium hover:opacity-90 transition cursor-pointer"
      >
        Pedir cita
      </Link>
    </section>
  );
};

export default CTASection;
