import Home from "../components/home/Home";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Sandra Fernández - Psicóloga",
    "url": "https://sandrafernandezpsicologa.es",
    "telephone": "+34711242379",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaén",
      "addressCountry": "ES"
    },
    "openingHours": "Mo-Fr 09:00-20:00"
  };

  return (
    <>
      <Helmet>
        <title>Psicóloga en Jaén y Terapia Online | Sandra Fernández</title>
        <meta
          name="description"
          content="Consulta de psicología especializada en ansiedad, autoestima y bienestar emocional. Sesiones presenciales y terapia online. Reserva tu cita."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Contenido de la página */}
      <Home />
    </>
  );
}