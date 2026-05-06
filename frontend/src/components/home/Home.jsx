import { Link } from "react-router-dom";
import HeroSection from "../hero/HeroSection";
import FeaturesSection from "../features/FeaturesSection";
import AboutSection from "../about/AboutSection";
import ServicesSection from "../servicesSection/ServicesSection";
import CTASection from "../cta/CTASection";
import Footer from "../footer/Footer";
import FadeInOnScroll from "../fadeinonscroll/FadeInOnScroll";

const Home = () => {
  return (
    <>
      <FadeInOnScroll>
        <HeroSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <FeaturesSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <AboutSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ServicesSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <CTASection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>
    </>
  );
};

export default Home;
