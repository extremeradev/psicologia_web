import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import image1 from "../../assets/sobremibooks.webp";
import image2 from "../../assets/hero3.webp";
import { Brain } from "lucide-react";

export default function SobreMi() {
  return (
    <section className="group text-white">
      {/* Hero Header */}
      <div className="relative m-0 p-0 pb-10 overflow-hidden">
        {/* Imagen de fondo */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image1}
          alt=""
        />

        {/* Capa grisácea (Overlay) */}
        <div className="absolute inset-0 bg-gray-900/50" />

        {/* Título en blanco resaltado */}
        <div className="relative p-8 space-y-6 z-10">
          <FadeInOnScroll>
            <div className="text-center mb-16 mt-20">
              <h1 className="text-5xl font-bold text-white">Sobre mí</h1>
            </div>
          </FadeInOnScroll>
        </div>
      </div>

      {/* ICONO CENTRADO Y DATOS PERSONALES */}
      <FadeInOnScroll>
        <div className="flex flex-col items-center mb-4 md:mb-12 px-6 py-8 md:py-16 text-center">
          <Brain className="w-10 h-10 text-[#3A3B70] mb-4" />
          <h1 className="text-black font-bold text-xl md:text-3xl">
            Sandra Fernández Pérez
          </h1>
          <h3 className="text-black text-lg md:text-2xl mt-1">
            Psicóloga General Sanitaria - Colegiada: AO 14236
          </h3>
        </div>
      </FadeInOnScroll>

      {/* BLOQUE FORMACIÓN (IMAGEN + LISTA) */}
      <FadeInOnScroll>
        <div className="max-w-5xl mx-auto mb-20 px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* IMAGEN */}
            <div className="w-52 h-52 md:w-64 md:h-64 overflow-hidden flex-shrink-0 rounded-full">
              <img
                src={image2}
                className="w-full h-full object-cover"
                alt="Sandra"
              />
            </div>

            {/* LISTA DE FORMACIÓN */}
            <div className="text-center md:text-left text-black flex-1">
              <ul className="space-y-3 list-disc list-inside md:list-outside md:ml-4 leading-relaxed">
                <li>
                  <span className="font-medium">Grado en Psicología</span> por
                  la Universidad de Granada.
                </li>
                <li>
                  <span className="font-medium">
                    Máster en Psicología General Sanitaria
                  </span>{" "}
                  por la Universidad de Jaén.
                </li>
                <li>
                  <span className="font-medium">
                    Formación y especialización
                  </span>{" "}
                  en terapias contextuales / de tercera generación (Terapia de
                  Aceptación y Compromiso y Terapia Dialéctico-Conductual).
                </li>
                <li>
                  <span className="font-medium">Publicación:</span> Fernández,
                  S., Guiote, J. M., & Miró, E. (2024).{" "}
                  <em>
                    Revisión de los factores protectores y predisponentes en la
                    traumatización vicaria de los psicoterapeutas
                  </em>
                  . Papeles del psicólogo, 45(2), 65-72.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInOnScroll>

      {/* NUEVA SECCIÓN: MÁS SOBRE MÍ */}
      <FadeInOnScroll>
        <div className="max-w-3xl mx-auto mb-28 px-6 text-black">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left font-serif">
            Más sobre mí
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Todo esto forma parte de mi recorrido, pero creo que también es
              importante contarte cómo entiendo la terapia y cómo trabajo.
            </p>
            <p>
              Para mí, el malestar no es algo individual sino que tiene mucho
              que ver con nuestra historia, el contexto en el que vivimos y las
              experiencias que nos han ido moldeando. Creo que el sufrimiento
              forma parte de la vida y que muchas de las cosas que hacemos para
              sentirnos mejor nos han servido en algún momento, aunque con el
              tiempo dejen de ayudarnos. En consulta no me interesa tanto poner
              etiquetas sino entender qué está manteniendo ese malestar y
              encontrar juntxs formas más flexibles de relacionarnos con él.
            </p>

            <p>
              Si alguna vez has estado conmigo en terapia, probablemente ya
              sepas que nunca voy a decirte qué decisiones tienes que tomar. No
              creo que mi papel sea dirigirte, sino acompañarte a explorar qué
              tiene sentido para ti, ayudarte a desarrollar tu propio criterio y
              construir una vida más coherente con aquello que realmente
              valoras.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
}
