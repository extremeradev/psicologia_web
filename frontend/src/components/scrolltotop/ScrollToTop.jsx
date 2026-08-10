import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar la ruta, desplaza el scroll arriba del todo instantáneamente
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}