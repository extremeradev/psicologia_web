import psicologa from "../../assets/cr7.webp";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#DCF2E4]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 px-6">
        {/* IMAGEN */}
        <div className="flex-1">
          <div className="px-6">
            <img
              src={psicologa}
              alt="psicóloga"
              className="object-cover w-80 h-full shadow-xl"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800">Sobre mí</h2>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
