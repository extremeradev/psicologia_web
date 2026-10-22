import { Helmet } from "react-helmet-async";

const sectionClass = "mb-10 scroll-mt-24";
const headingClass = "text-2xl font-semibold text-[#3A3B70] mb-4 font-serif";
const paragraphClass = "text-gray-700 leading-relaxed mb-4";
const linkClass = "text-[#3A3B70] underline font-medium";

const contents = [
  ["responsable", "Responsable del tratamiento"],
  ["datos", "Datos que se tratan"],
  ["finalidades", "Finalidades y base jurídica"],
  ["conservacion", "Conservación de los datos"],
  ["destinatarios", "Destinatarios y servicios externos"],
  ["transferencias", "Transferencias internacionales"],
  ["derechos", "Tus derechos"],
  ["seguridad", "Seguridad y confidencialidad"],
  ["enlaces", "Enlaces externos"],
  ["actualizaciones", "Actualizaciones de esta política"],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 md:py-20">
      <Helmet>
        <title>Política de privacidad | Sandra Fernández Psicóloga</title>
        <meta
          name="description"
          content="Información sobre el tratamiento de datos personales en la web de Sandra Fernández, psicóloga en Jaén."
        />
      </Helmet>

      <header className="mb-10">
        <p className="text-sm font-medium uppercase tracking-wide text-[#3A3B70] mb-3">
          Información legal
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[#3A3B70] font-serif mb-5">
          Política de privacidad
        </h1>
        <p className={paragraphClass}>
          Esta política explica cómo se tratan los datos personales al navegar
          por esta web o contactar con Sandra Fernández.
        </p>
        <p className="text-sm text-gray-500">Última actualización: 22/10/2026</p>
      </header>

      <nav
        aria-label="Contenido de la política de privacidad"
        className="bg-[#C2CDFF]/15 rounded-2xl p-6 md:p-8 mb-12"
      >
        <h2 className="text-xl font-semibold text-[#3A3B70] mb-4">
          En esta página
        </h2>
        <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 list-decimal list-inside text-gray-700">
          {contents.map(([id, label]) => (
            <li key={id}>
              <a className={linkClass} href={`#${id}`}>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section id="responsable" className={sectionClass}>
        <h2 className={headingClass}>1. Responsable del tratamiento</h2>
        <p className={paragraphClass}>
          La responsable del tratamiento es Sandra Fernández, psicóloga con
          consulta en Paseo de la Estación, 23, entreplanta C, 23007 Jaén,
          España. Para consultas sobre privacidad o sobre el uso de tus datos,
          puedes escribir a{" "}
          <a className={linkClass} href="mailto:sandrafernandez.psico@gmail.com">
            sandrafernandez.psico@gmail.com
          </a>{" "}
          o llamar al{" "}
          <a className={linkClass} href="tel:+34711242379">
            +34 711 24 23 79
          </a>.
        </p>
      </section>

      <section id="datos" className={sectionClass}>
        <h2 className={headingClass}>2. Datos que se tratan</h2>
        <p className={paragraphClass}>
          Si completas el formulario de contacto, puedes facilitar tu nombre,
          correo electrónico, teléfono (opcional) y el contenido de tu consulta.
          El formulario prepara un mensaje y abre WhatsApp; la web no lo envía a
          un servidor propio. Los datos se transmiten cuando decides enviarlo
          desde WhatsApp.
        </p>
        <p className={paragraphClass}>
          Si contactas mediante los enlaces de teléfono, correo o redes sociales,
          el servicio correspondiente tratará los datos que incluyas en esa
          comunicación. Además, el navegador guarda tu elección sobre el aviso
          de privacidad en el almacenamiento local para recordarla en futuras
          visitas.
        </p>
        <p className={paragraphClass}>
          Por favor, no incluyas en el formulario diagnósticos, informes,
          antecedentes ni otros datos de salud tuyos o de terceras personas. La
          información necesaria para una atención psicológica se tratará, si
          procede, en el marco de la relación profesional y con información
          específica sobre ese tratamiento.
        </p>
      </section>

      <section id="finalidades" className={sectionClass}>
        <h2 className={headingClass}>3. Finalidades y base jurídica</h2>
        <p className={paragraphClass}>
          Los datos de contacto se utilizan para responder a tu consulta,
          facilitar información sobre los servicios y gestionar una cita si la
          solicitas. La base jurídica es la aplicación de medidas
          precontractuales a petición tuya, conforme al artículo 6.1.b del
          Reglamento General de Protección de Datos (RGPD).
        </p>
        <p className={paragraphClass}>
          La preferencia que guardas sobre el aviso se utiliza únicamente para
          recordar esa elección en este navegador. Los datos técnicos que puedan
          tratar los proveedores de los servicios integrados se usan para
          prestar y proteger dichos servicios, conforme a sus propias políticas.
        </p>
        <p className={paragraphClass}>
          Los datos de contacto no se usan para enviarte publicidad. Esta web no
          ofrece suscripciones a boletines ni toma decisiones automatizadas
          sobre las personas usuarias.
        </p>
      </section>

      <section id="conservacion" className={sectionClass}>
        <h2 className={headingClass}>4. Conservación de los datos</h2>
        <p className={paragraphClass}>
          La información recibida en una consulta se conservará durante el tiempo
          necesario para responder y gestionar la solicitud, y después durante
          los plazos exigidos por la ley o necesarios para atender posibles
          responsabilidades. Los mensajes enviados por WhatsApp también pueden
          permanecer en los sistemas de Meta según la configuración y las
          condiciones de ese servicio.
        </p>
        <p className={paragraphClass}>
          La elección del aviso de privacidad permanece en el almacenamiento
          local del navegador hasta que borres los datos del sitio o cambies esa
          preferencia.
        </p>
      </section>

      <section id="destinatarios" className={sectionClass}>
        <h2 className={headingClass}>5. Destinatarios y servicios externos</h2>
        <p className={paragraphClass}>
          La web no vende tus datos ni los facilita a terceros para que te hagan
          publicidad. Algunos proveedores pueden recibir datos técnicos cuando
          el navegador carga sus servicios:
        </p>
        <ul className="list-disc list-outside ml-5 space-y-3 text-gray-700 leading-relaxed mb-4">
          <li>
            <strong>WhatsApp/Meta:</strong> recibe el contenido del mensaje si
            decides enviarlo desde la aplicación o el servicio web de WhatsApp.
          </li>
          <li>
            <strong>Google Fonts:</strong> proporciona las tipografías usadas
            por la web y recibe los datos técnicos necesarios para descargarlas.
          </li>
          <li>
            <strong>LightWidget:</strong> presta el widget externo que muestra
            contenido de Instagram en la página de inicio.
          </li>
          <li>
            <strong>Alojamiento web:</strong> el proveedor que publica la web
            puede tratar datos técnicos de conexión para servir y proteger el
            sitio.
          </li>
        </ul>
        <p className={paragraphClass}>
          También pueden comunicarse datos cuando exista una obligación legal o
          una solicitud válida de una autoridad competente.
        </p>
      </section>

      <section id="transferencias" className={sectionClass}>
        <h2 className={headingClass}>6. Transferencias internacionales</h2>
        <p className={paragraphClass}>
          Algunos servicios externos pueden tratar información desde países
          situados fuera del Espacio Económico Europeo. Las condiciones, la
          ubicación del tratamiento y las garantías aplicables dependen de cada
          proveedor. Puedes consultar sus políticas para conocer cómo gestionan
          estos datos:
        </p>
        <ul className="list-disc list-outside ml-5 space-y-3 text-gray-700 leading-relaxed mb-4">
          <li>
            <a
              className={linkClass}
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidad de WhatsApp
            </a>
          </li>
          <li>
            <a
              className={linkClass}
              href="https://policies.google.com/privacy?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidad de Google
            </a>
          </li>
          <li>
            <a
              className={linkClass}
              href="https://lightwidget.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Información de privacidad de LightWidget
            </a>
          </li>
        </ul>
      </section>

      <section id="derechos" className={sectionClass}>
        <h2 className={headingClass}>7. Tus derechos</h2>
        <p className={paragraphClass}>
          Puedes solicitar el acceso a tus datos, su rectificación o supresión y,
          cuando corresponda, ejercer los derechos de limitación, oposición y
          portabilidad. Si el tratamiento se basa en tu consentimiento, puedes
          retirarlo en cualquier momento; la retirada no afecta a lo realizado
          previamente.
        </p>
        <p className={paragraphClass}>
          Para ejercer estos derechos, escribe a{" "}
          <a className={linkClass} href="mailto:sandrafernandez.psico@gmail.com">
            sandrafernandez.psico@gmail.com
          </a>. Se responderá dentro de los plazos previstos en la normativa. Si
          consideras que tus datos no se han tratado correctamente, puedes
          reclamar ante la{" "}
          <a
            className={linkClass}
            href="https://www.aepd.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agencia Española de Protección de Datos (AEPD)
          </a>.
        </p>
      </section>

      <section id="seguridad" className={sectionClass}>
        <h2 className={headingClass}>8. Seguridad y confidencialidad</h2>
        <p className={paragraphClass}>
          Se aplican medidas razonables para evitar el acceso, la pérdida o el
          uso no autorizado de la información. El acceso a los datos se limita a
          quienes lo necesitan para atender la solicitud o prestar los servicios
          descritos.
        </p>
      </section>

      <section id="enlaces" className={sectionClass}>
        <h2 className={headingClass}>9. Enlaces externos</h2>
        <p className={paragraphClass}>
          Esta web enlaza con servicios de terceros, como WhatsApp e Instagram.
          Si accedes a ellos, el uso de tus datos se regirá por las políticas y
          condiciones de cada servicio, que te recomendamos consultar.
        </p>
      </section>

      <section id="actualizaciones" className={sectionClass}>
        <h2 className={headingClass}>10. Actualizaciones de esta política</h2>
        <p className={paragraphClass}>
          Esta política podrá revisarse si cambian la web, los servicios
          utilizados o las normas aplicables. La fecha que aparece al inicio
          indica cuándo se actualizó por última vez.
        </p>
      </section>
    </main>
  );
}
