// IMPORTA HOME
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Login from "./pages/login";
import RegistroHotel from "./pages/RegistroHotel";
import MelhoresPrecos from "./components/MelhoresPrecos";
import Footer from "./components/Footer";
/*import DashboardAdmin from "./pages/DashboardAdmin";*/
import Reserva from "./pages/Reserva";

// APP PRINCIPAL
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-hotel" element={<RegistroHotel />} />
        {/* <Route path="/admin" element={<DashboardAdmin />} /> */}
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/melhores-precos" element={<MelhoresPrecos />} />
      </Routes>
    </BrowserRouter>
  );
}

// EXPORTA APP
export default App;
