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

import DashboardProprietario from "./pages/Proprietario/Dashboard2";
import MeusAlojamentos from "./pages/Proprietario/MeusAlojamentos";
import Reservas2 from "./pages/Proprietario/Reservas2";
import AvaliacoesProprietario from "./pages/Proprietario/Avaliacoes";
import PerfilProprietario from "./pages/Proprietario/Perfil";

import ProtectedRoute from "./components/protectedRoute";
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
    const temPermissaoHost = usuarioLogado.groups.includes("/host");
    if (temPermissaoAdmin) {
      location.href = temPermissaoAdmin ? "/admin" : "/admin";
    }
    if (temPermissaoHost) {
      location.href = temPermissaoHost ? "/proprietario" : "/proprietario";
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
        <Route path="/reserva/:id" element={<Reserva />} />
        <Route
          path="/proprietario/avaliacoes"
          element={<AvaliacoesProprietario />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute grupo="/admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/alojamentos"
          element={
            <ProtectedRoute grupo="/admin">
              <AlojamentosAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/utilizadores"
          element={
            <ProtectedRoute grupo="/admin">
              <Utilizadores />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/alojamentos/:id"
          element={
            <ProtectedRoute grupo="/admin">
              <DetalhesAlojamento />
            </ProtectedRoute>
          }
        />
        <Route
          path="/proprietario"
          element={
            <ProtectedRoute grupo="/host">
              <DashboardProprietario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/proprietario/alojamentos"
          element={
            <ProtectedRoute grupo="/host">
              <MeusAlojamentos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/proprietario/perfil"
          element={
            <ProtectedRoute grupo="/host">
              <PerfilProprietario />
            </ProtectedRoute>
          }
        />

        <Route
          path="/proprietario/reservas"
          element={
            <ProtectedRoute grupo="/host">
              <Reservas2 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/proprietario/avaliacoes"
          element={
            <ProtectedRoute grupo="/host">
              <AvaliacoesProprietario />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// EXPORTA APP
export default App;
