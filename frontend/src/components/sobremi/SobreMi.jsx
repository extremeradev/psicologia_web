import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";
import image1 from "../../assets/IMG_8649.webp";
import image1Avif from "../../assets/IMG_8649.avif";
import image2 from "../../assets/hero3.webp";
import image2Avif from "../../assets/hero3.avif";
import { Brain } from "lucide-react";

export default function SobreMi() {
  return (
    <section className="group text-white">
      {/* Hero Header */}
      <div className="relative m-0 p-0 pb-10 overflow-hidden">
        {/* Imagen de fondo */}
        <picture className="absolute inset-0 block">
          <source srcSet={image1Avif} type="image/avif" />
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={image1}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Capa grisácea (Overlay) */}
        <div className="absolute inset-0 bg-gray-900/50" />

        {/* Título en blanco resaltado */}
        <div className="relative z-10 px-6 py-16 md:py-24">
          <FadeInOnScroll>
            <div className="text-center max-w-3xl mx-auto text-white">
              <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Conóceme
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-2 drop-shadow-sm">
                Sobre mí
              </h1>
              <p className="text-sm md:text-lg mt-3 text-white/90 leading-relaxed drop-shadow-sm">
                Conoce mi trayectoria y cómo entiendo la terapia
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>

      {/* ICONO CENTRADO Y DATOS PERSONALES */}
      <FadeInOnScroll>
        <div className="relative z-10 -mt-8 md:-mt-12 rounded-t-3xl bg-[#F6F8FF] flex flex-col items-center mb-4 md:mb-12 px-6 pt-12 pb-8 md:pt-16 md:pb-16 text-center">
          <Brain className="w-10 h-10 text-[#3A3B70] mb-4" />
          <h2 className="text-black font-bold text-xl md:text-3xl">
            Sandra Fernández Pérez
          </h2>
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
              <picture className="block h-full w-full">
                <source srcSet={image2Avif} type="image/avif" />
                <img
                  src={image2}
                  className="w-full h-full object-cover"
                  alt="Sandra Fernández, psicóloga"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
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
