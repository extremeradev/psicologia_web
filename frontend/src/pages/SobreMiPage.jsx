import SobreMi from "../components/sobremi/SobreMi";
import { Helmet } from "react-helmet-async";

export default function SobreMiPage() {
  return (
    <>
      <Helmet>
        <title>Sobre Mí - Sandra Fernández Psicóloga en Jaén</title>
        <meta
          name="description"
          content="Conoce mi trayectoria, metodología de trabajo
y compromiso con tu salud mental en un
espacio seguro y confidencial."
        />
      </Helmet>
      {/* Contenido de la página */}
      <SobreMi />
    </>
  );
}
