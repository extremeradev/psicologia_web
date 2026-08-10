import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Usamos una clave neutra que los bloqueadores no interceptan
    const consent = localStorage.getItem("site-consent-given");
    if (!consent) setVisible(true);
  }, []);

  const aceptar = () => {
    localStorage.setItem("site-consent-given", "true");
    setVisible(false);
  };

  const rechazar = () => {
    localStorage.setItem("site-consent-given", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Valoramos tu privacidad. Utilizamos cookies para mejorar tu experiencia
          y analizar la navegación en nuestro sitio web. Puedes aceptarlas o
          rechazarlas en cualquier momento.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={aceptar}
            className="px-6 py-2.5 rounded-xl bg-[#83A68E] text-white text-sm font-semibold hover:bg-[#6d8c75] transition-colors cursor-pointer"
          >
            Aceptar
          </button>
          <button
            onClick={rechazar}
            className="px-6 py-2.5 rounded-xl border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Rechazar
          </button>
        </div>
        <button
          onClick={rechazar}
          className="absolute top-3 right-3 sm:relative sm:top-auto sm:right-auto text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}