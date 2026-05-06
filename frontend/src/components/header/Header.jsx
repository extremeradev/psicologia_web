import { useState } from "react";
import psi from "../../assets/psi.png";

const Header = () => {
  // --- HOOKS ---
  const [open, setOpen] = useState(false);

  // --- RENDER ---
  return (
    <header className="sticky top-0 bg-[#DCF2E4] relative z-50">

      <nav className="mx-auto px-6 py-1 relative">

        <div className="flex justify-between items-center md:justify-start">

          {/* IZQUIERDA */}
          <div className="flex items-center gap-2">
            <img src={psi} alt="psi" className="w-12 md:w-20" />
            <h2 
              onClick={() => window.location.href = "/"}
              className="font-semibold text-gray-800 text-sm md:text-xl hover:scale-105 transition cursor-pointer">
              Sandra Psicología
            </h2>
          </div>

          {/* MENU DESKTOP */}
          <ul className="md:ml-50 font-semibold hidden md:flex gap-20 text-gray-600 text-lg">
            <li 
            onClick={() => window.location.href = "/"}
            className="hover:scale-105 transition cursor-pointer">Inicio</li>
            <li 
            onClick={() => window.location.href = "/servicios"}
            className="hover:scale-105 transition cursor-pointer">Servicios</li>
            <li className="hover:scale-105 transition cursor-pointer">Sobre mí</li>
            <li className="hover:scale-105 transition cursor-pointer">Contacto</li>
          </ul>

          {/* HAMBURGUESA */}
          <button
            className="justify-between md:hidden text-3xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

        {/* MENU MOBILE */}
        <div
          className={`
            md:hidden absolute left-0 right-0 top-full bg-[#DCF2E4]/90 backdrop-blur-md
            px-6 py-4 shadow-md z-50 origin-top transition-all duration-300
            ${open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col gap-4 text-gray-600">
            <li onClick={() => window.location.href = "/"}>Inicio</li>
            <li onClick={() => window.location.href = "/servicios"}>Servicios</li>
            <li onClick={() => setOpen(false)}>Sobre mí</li>
            <li onClick={() => setOpen(false)}>Contacto</li>
          </ul>
        </div>

      </nav>

    </header>
  );
};

export default Header;