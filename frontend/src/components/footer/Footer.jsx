import { Link } from "react-router-dom"; // <-- Importamos Link

const Footer = () => {
  return (
    <footer className="bg-[#3A3B70] text-gray-300 mt-20">
      {/* Se cambió gap-10 por gap-12 md:gap-16 para mayor separación */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-22">
        
        {/* COLUMNA 1 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Sandra Fernández Psicóloga
          </h3>
          <p className="text-sm leading-relaxed">
            Terapia psicológica cercana y profesional con perspectiva contextual
          </p>
        </div>

        {/* COLUMNA 2 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Enlaces
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              {/* Cambiado <a> por <Link to="..."> */}
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre-mi" className="hover:text-white transition">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:text-white transition">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contacto
          </h4>
          <ul className="text-sm space-y-3">
            <li>
              <a
                href="https://www.instagram.com/sandrafernandez.psico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@sandrafernandez.psico</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/34711242379"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition inline-block"
              >
                📞 +34 711 24 23 79
              </a>
            </li>
            <li>
              <a
                href="mailto:sandrafernandez.psico@gmail.com"
                className="hover:text-white transition inline-block"
              >
                ✉️ sandrafernandez.psico@gmail.com
              </a>
            </li>
            <li>📍 Jaén, España</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#C2CDFF] text-black border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Sandra Fernández Psicóloga — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;