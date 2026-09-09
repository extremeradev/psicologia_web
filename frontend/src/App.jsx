import Header from "./components/header/Header";
import CookiesBanner from "./components/cookies/CookiesBanner";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SobreMiPage from "./pages/SobreMiPage";
import ContactoPage from "./pages/ContactoPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <CookiesBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/sobre-mi" element={<SobreMiPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
