import { useState } from "react";
import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import image1 from "../../assets/contacto1.webp";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    value: "+34 711 24 23 79",
    href: "https://wa.me/34711242379",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sandrafernandez.psico@gmail.com",
    href: "mailto:sandrafernandez.psico@gmail.com",
  },
  {
    icon: MapPin,
    title: "Dirección",
    value: "Paseo de la Estación, 23, entreplanta C, 23007 Jaén",
    href: "https://www.google.com/maps/search/?api=1&query=Paseo%20de%20la%20Estaci%C3%B3n%2023%2C%2023007%20Ja%C3%A9n%2C%20Espa%C3%B1a",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun–Vie: 09:00–20:00",
  },
];

const initialForm = { nombre: "", email: "", telefono: "", mensaje: "" };

export default function Contacto() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | success

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Número de teléfono de destino (formato internacional sin el signo '+')
    const phoneWhatsapp = "34711242379";

    // Construcción del mensaje predeterminado
    const textMessage = `*Nombre:* ${form.nombre}\n*Email:* ${form.email}\n*Teléfono:* ${form.telefono ? `+34 ${form.telefono}` : "No facilitado"}\n*Mensaje:* ${form.mensaje}`;

    // Codificar el texto para que sea seguro en una URL
    const encodedMessage = encodeURIComponent(textMessage);

    // Enlace a la API de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneWhatsapp}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, "_blank");

    // Opcional: mostrar mensaje de confirmación y reiniciar formulario
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96">
        <div className="absolute inset-0">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={image1}
            alt="Consulta de psicología de Sandra Fernández en Jaén"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <FadeInOnScroll>
            <div className="text-center text-white px-6 -translate-y-6 md:-translate-y-10">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Hablemos
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 drop-shadow-sm">
                Contacto
              </h1>
              <p className="text-sm md:text-lg mt-3 text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-sm">
                Estoy aquí para ayudarte a dar el siguiente paso
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Info + Formulario */}
      <section className="relative z-10 -mt-8 md:-mt-12 rounded-t-3xl bg-[#F6F8FF] pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Columna izquierda: datos de contacto */}
            <FadeInOnScroll>
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-serif">
                  Hablemos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Si tienes cualquier duda o quieres concertar una primera
                  sesión, no dudes en escribirme. Estaré encantada de
                  ayudarte.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-[#3A3B70]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[#3A3B70]" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{item.title}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-800 font-medium hover:text-[#83A68E] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-800 font-medium">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeInOnScroll>

            {/* Columna derecha: formulario */}
            <FadeInOnScroll>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 font-serif">
                  Envíame un mensaje
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3A3B70]/80 focus:ring-2 focus:ring-[#3A3B70]/10 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3A3B70]/80 focus:ring-2 focus:ring-[#3A3B70]/10 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none gap-1.5">
                        <span className="text-base">🇪🇸</span>
                        <span className="text-gray-400 font-medium text-sm">
                          +34
                        </span>
                      </div>
                      <input
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        type="tel"
                        placeholder="600 000 000"
                        className="w-full pl-[5.5rem] pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#3A3B70]/80 focus:ring-2 focus:ring-[#3A3B70]/10 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntame en qué puedo ayudarte..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3A3B70]/80 focus:ring-2 focus:ring-[#3A3B70]/10 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full inline-flex items-center justify-center gap-2
                      px-8 py-4 rounded-xl
                      bg-[#3A3B70]/80 text-white font-semibold
                      hover:bg-[#3A3B70] transition-colors
                      cursor-pointer
                    "
                  >
                    Enviar por WhatsApp
                    <Send className="w-4 h-4" />
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-3 rounded-xl">
                      <CheckCircle className="w-5 h-5" />
                      Redirigiendo a WhatsApp...
                    </div>
                  )}
                </form>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="w-full h-80 md:h-96">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps?q=Paseo%20de%20la%20Estaci%C3%B3n%2023%2C%2023007%20Ja%C3%A9n%2C%20Espa%C3%B1a&z=17&output=embed"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
