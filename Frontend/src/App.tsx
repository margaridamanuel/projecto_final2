// IMPORTA HOME
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destinos from "./pages/Destinos";
import Login from "./pages/login";
import Registro from "./pages/Registro";
import RegistroHotel from "./pages/RegistroHotel";
import MelhoresPrecos from "./components/MelhoresPrecos";
import Footer from "./components/Footer";
import DetalhesAlojamento from "./pages/AlojamentosDetalhes";
//import DetalheHotel from "./pages/DetalhesHotel";
import NavBar from "./components/NavBar";
import Reserva from "./pages/Reserva";
import DetalhesDestino from "./pages/DetalhesDestino";
import Alojamentos from "./pages/Alojamentos";
import AlojamentoDetalhes from "./pages/AlojamentosDetalhes";
import CadastroAlojamento from "./pages/CadastroAlojamento";
import Dashboard from "./pages/admin/Dashboard";
import AlojamentosAdmin from "./components/Admin/Alojamentos";
import { authService, Usuario } from "./service/authService";
import Utilizadores from "./pages/admin/utilizadores";
import React from "react";

// APP PRINCIPAL
type Tela = "login" | "geral" | "cadastro" | "lista";

function App() {
  const [usuario, setUsuario] = React.useState<Usuario | null>(() =>
    authService.getSession(),
  );
  const [tela, setTela] = React.useState<Tela>(() => {
    const usuarioSalvo = authService.getSession();

    if (!usuarioSalvo) {
      return "login";
    }

    return usuarioSalvo.groups.includes("/admin") ? "cadastro" : "geral";
  });
  const isAdministrador = usuario?.groups.includes("/admin") ?? false; // Permite ativar os botões de administração apenas para usuários do grupo /admin.
  const isGeral = usuario?.groups.includes("/geral") ?? false;

  function entrar(usuarioLogado: Usuario) {
    setUsuario(usuarioLogado);
    const temPermissaoAdmin = usuarioLogado.groups.includes("/admin");
    const temPermissaoGeral = usuarioLogado.groups.includes("/geral");
    if (temPermissaoAdmin) {
      location.href = temPermissaoAdmin ? "/admin" : "/admin";
    }
    if (temPermissaoGeral) {
      location.href = temPermissaoGeral ? "/" : "/";
    }
  }

  function sair() {
    authService.logout();
    setUsuario(null);
    setTela("login");
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/:id" element={<DetalhesDestino />} />
        <Route path="/Alojamentos" element={<Alojamentos />} />
        <Route path="/login" element={<Login onLogin={entrar} />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/cadastro-hotel" element={<RegistroHotel />} />
        <Route path="/reserva/:id" element={<Reserva />} />
        <Route path="/melhores-precos" element={<MelhoresPrecos />} />
        <Route path="/alojamentos/:id" element={<AlojamentoDetalhes />} />
        <Route path="/cadastro-alojamento" element={<CadastroAlojamento />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/alojamentos" element={<AlojamentosAdmin />} />
        <Route path="/reservas" element={<Reserva />} />
        <Route path="/admin/utilizadores" element={<Utilizadores />} />
        <Route path="/admin/alojamentos/:id" element={<DetalhesAlojamento />} />
        <Route path="/destinos/:id" element={<DetalhesDestino />} />
      </Routes>
    </BrowserRouter>
  );
}

// EXPORTA APP
export default App;
