import Header from "./components/header/Header";
import CookiesBanner from "./components/cookies/CookiesBanner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SobreMiPage from "./pages/SobreMiPage";
import ContactoPage from "./pages/ContactoPage";
import ConsultaPage from "./pages/ConsultaPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import StickyWhatsAppButton from "./components/contact/StickyWhatsAppButton";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <CookiesBanner />
      <StickyWhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/sobre-mi" element={<SobreMiPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/consulta" element={<ConsultaPage />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
