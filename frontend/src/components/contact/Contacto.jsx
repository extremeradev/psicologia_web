import { useState } from "react";
import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import image1 from "../../assets/contacto.jpg";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
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
  /*{
    icon: MapPin,
    title: "Dirección",
    value: "Calle Ejemplo, 12, Valladolid",
    href: "https://maps.google.com",
  },*/
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
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image1}
          alt=""
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <FadeInOnScroll>
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold">Contacto</h1>
              <p className="text-lg mt-4 text-white/80">
                Estoy aquí para ayudarte
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Info + Formulario */}
      <section className="py-20 md:py-28">
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
                  sesión, no dudes en contactarme. Estaré encantada de
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
      {/* <section className="w-full h-80 md:h-96">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps?q=1+Av.+del+Ej%C3%A9rcito+Espa%C3%B1ol+Ja%C3%A9n&output=embed"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>*/}
    </>
  );
}