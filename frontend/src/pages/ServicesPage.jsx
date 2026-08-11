import Services from "../components/services/Services";
import { Helmet } from "react-helmet-async";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Servicios de Terapia Psicológica | Sandra Fernández Psicóloga en Jaén</title>
        <meta
          name="description"
          content="Tratamientos personalizados para ansiedad,
depresión, duelo y desarrollo personal.
Descubre cómo puedo ayudarte."
        />
      </Helmet>
      {/* Contenido de la página */}
      <Services />
    </>
  );
}
