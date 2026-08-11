import { useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Importamos Link
import logo from "../../assets/logo.webp";
import {
  Home,
  Sparkles,
  User,
  Phone,
  Menu,
  X,
  Calendar,
} from "lucide-react";

const navItems = [
  { label: "Inicio", path: "/", icon: Home },
  { label: "Servicios", path: "/servicios", icon: Sparkles },
  { label: "Sobre mí", path: "/sobre-mi", icon: User },
  { label: "Contacto", path: "/contacto", icon: Phone },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 bg-[#C2CDFF] backdrop-blur-md border-b border-gray-100 relative z-50 shadow-sm">

      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 relative">

        <div className="flex justify-between items-center">

          {/* IZQUIERDA: Cambiado onClick con window.location por <Link> */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={logo}
              alt="logo"
              className="w-45 md:w-60 group-hover:scale-110 transition-transform"
            />
          </Link>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  {/* Cambiado <a> por <Link> y 'href' por 'to' */}
                  <Link
                    to={item.path}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${
                        active
                          ? "bg-[#3A3B70]/20 text-gray-200"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + HAMBURGUESA */}
          <div className="flex items-center gap-3">
            {/* Cambiado <a> por <Link> */}
            <Link
              to="/contacto"
              className="
                hidden md:inline-flex items-center gap-2
                px-5 py-2.5 rounded-xl text-sm font-semibold
                bg-[#3A3B70] text-white
                hover:bg-[#656AC9] transition-colors
              "
            >
              <Calendar className="w-4 h-4" />
              Pedir cita
            </Link>

            <button
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* MENU MOBILE */}
        <div
          className={`
            md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md
            px-4 py-5 shadow-lg z-50 origin-top transition-all duration-300 border-b border-gray-100
            ${open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
          `}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;
              return (
                <li key={item.path}>
                  {/* Cambiado <a> por <Link> */}
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${
                        active
                          ? "bg-[#3A3B70]/60 text-gray-200"
                          : "text-gray-600 hover:bg-gray-100"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-3 pt-3 border-t border-gray-100">
              {/* Cambiado <a> por <Link> */}
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold bg-[#C2CDFF] text-black"
              >
                <Calendar className="w-4 h-4" />
                Pedir cita
              </Link>
            </li>
          </ul>
        </div>

      </nav>

    </header>
  );
};

export default Header;