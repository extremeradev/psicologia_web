import Contacto from "../components/contact/Contacto";
import { Helmet } from "react-helmet-async";

export default function ContactoPage() {
  return (
    <>
      <Helmet>
        <title>Contacto y Cita Previa | Sandra Fernández Psicóloga en Jaén</title>
        <meta
          name="description"
          content="Pide información o solicita tu primera sesión
presencial u online. Estoy aquí para
acompañarte en tu proceso."
        />
      </Helmet>
      {/* Contenido de la página */}
      <Contacto />
    </>
  );
}
