import Header from "./components/header/Header";
import CookiesBanner from "./components/cookies/CookiesBanner";
import { HashRouter, Routes, Route } from "react-router-dom"; // <-- Cambiado de BrowserRouter a HashRouter
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SobreMiPage from "./pages/SobreMiPage";
import ContactoPage from "./pages/ContactoPage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <HashRouter>
      <Header />

      <CookiesBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/sobre-mi" element={<SobreMiPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;