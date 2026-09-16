import { useEffect, useRef } from "react";

const InstagramFeed = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById("lightwidget-script")) {
      const script = document.createElement("script");
      script.id = "lightwidget-script";
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-[#C2CDFF]/15">
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-8 text-center">
        <h2 className="text-3xl font-semibold text-[#3A3B70]">
          Novedades
        </h2>
        <p className="text-gray-600 mt-2 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#3A3B70]"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <a
            href="https://www.instagram.com/sandrafernandez.psico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3A3B70] font-medium underline hover:opacity-80 transition"
          >
            @sandrafernandez.psico
          </a>
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="max-w-[360px] md:max-w-none mx-auto">
          <iframe
            ref={iframeRef}
            src="https://cdn.lightwidget.com/widgets/dfb656148ca251d2b80e77e1de308e68.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget"
            style={{ width: "100%", border: "0", overflow: "hidden" }}
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
