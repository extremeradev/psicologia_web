import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CalendarioPage from "./pages/CalendarioPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pedir-cita" element={<CalendarioPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
