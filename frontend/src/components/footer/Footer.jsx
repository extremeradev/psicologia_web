const Footer = () => {
  return (
    <footer className="bg-[#224236] text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* COLUMNA 1 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Psicóloga Sandra Fernández
          </h3>
          <p className="text-sm">
            Acompañamiento psicológico cercano y profesional para ayudarte a
            mejorar tu bienestar emocional.
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Enlaces
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="/sobre-mi" className="hover:text-white transition">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="/servicios" className="hover:text-white transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contacto
          </h4>
          <ul className="text-sm space-y-2">
            <li>📞 +34 600 000 000</li>
            <li>✉️ info@psicologia.com</li>
            <li>📍 Valladolid, España</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#83A68E] border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Psicóloga Sandra Fernández — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;