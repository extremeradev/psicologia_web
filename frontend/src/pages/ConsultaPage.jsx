import { Helmet } from "react-helmet-async";
import Consulta from "../components/consulta/Consulta";

export default function ConsultaPage() {
  return (
    <>
      <Helmet>
        <title>Consulta presencial en Jaén | Sandra Fernández Psicóloga</title>
        <meta
          name="description"
          content="Galería de fotos de la consulta de Sandra Fernández, psicóloga en Jaén."
        />
      </Helmet>
      <Consulta />
    </>
  );
}
