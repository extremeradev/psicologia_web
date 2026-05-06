import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import "./CalendarioClinica.css";

const CalendarioClinica = () => {
  // --- LOS HOOKS SIEMPRE AQUÍ DENTRO ---
  const calendarRef = useRef(null);
  const [view, setView] = useState("dayGridMonth");
  const [showModal, setShowModal] = useState(false);
  const [reserva, setReserva] = useState({
    fecha: "",
    hora: "",
    motivo: "",
    nombre: "",
  });

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.135:8080/api/events")
      .then((res) => res.json())
      .then((data) => {
        const parsedEvents = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));

        setEvents(parsedEvents);
        console.log("EVENTOS:", parsedEvents)
      })
      .catch((err) => console.error(err));
  }, []);

  const handleDateClick = (info) => {
    const hour = info.date.getHours();

    if (hour >= 13 && hour < 16) {
      return;
    }

    setReserva({
      ...reserva,
      fecha: info.date.toLocaleDateString("es-ES"),
      hora: info.date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      rawDate: info.date,
    });
    // Pequeño delay para que el móvil llegue a pintar el fondo azul del click
    setTimeout(() => {
      setShowModal(true);
    }, 100);
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const telefono = "34600000000"; // Cambia esto por el real
    const texto = `Hola, soy ${reserva.nombre}. Me gustaría reservar el hueco del ${reserva.fecha} a las ${reserva.hora}. Motivo de consulta: ${reserva.motivo}`;

    window.open(
      `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`,
      "_blank",
    );
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setView("timeGridDay");
      } else {
        setView("timeGridWeek");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100">
      {/* Cabecera Móvil */}
      <div className="p-4 bg-indigo-600 text-white md:hidden">
        <h2 className="text-lg font-bold text-center">Agenda Diaria</h2>
      </div>

      <div className="p-2 md:p-6 calendar-container">
        <FullCalendar
          ref={calendarRef}
          selectable={true}
          eventDisplay="block"
          height="auto"
          contentHeight="auto"
          selectAllow={(selectInfo) => {
            const hour = selectInfo.start.getHours();

            // ❌ bloquear de 13 a 16
            if (hour >= 13 && hour < 16) {
              return false;
            }

            return true;
          }}
          allDaySlot={false}
          weekends={false}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={view}
          key={view}
          locales={[esLocale]}
          locale="es"
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "",
          }}
          dateClick={handleDateClick}
          selectMirror={true}
          unselectAuto={true}
          height="75vh"
          slotMinTime="09:00:00"
          slotMaxTime="21:00:00"
          /*events={async (info, successCallback, failureCallback) => {
            try {
              const res = await fetch("http://localhost:8080/api/events");
              const data = await res.json();
              console.log("EVENTOS BACKEND:", data);

              successCallback([
                ...data,
                {
                  daysOfWeek: [1, 2, 3, 4, 5],
                  startTime: "13:00",
                  endTime: "16:00",
                  display: "background",
                  backgroundColor: "#4c4c4c",
                },
              ]);
            } catch (error) {
              failureCallback(error);
            }
          }}*/

          events={[
            ...events,
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              startTime: "13:00",
              endTime: "16:00",
              display: "background",
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          ]}
        />
      </div>

      {/* --- MODAL DE FORMULARIO --- */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Solicitar Cita
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Día: <strong>{reserva.fecha}</strong> a las{" "}
                <strong>{reserva.hora}</strong>
              </p>

              <form onSubmit={enviarWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre Completo
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) =>
                      setReserva({ ...reserva, nombre: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Motivo de la consulta
                  </label>
                  <textarea
                    required
                    rows="3"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Cuéntanos brevemente..."
                    onChange={(e) =>
                      setReserva({ ...reserva, motivo: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2"
                  >
                    Ir a WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarioClinica;
