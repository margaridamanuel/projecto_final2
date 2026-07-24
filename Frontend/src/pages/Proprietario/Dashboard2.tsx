import { useEffect, useState } from "react";
import axios from "axios";
import ProprietarioLayout from "../../components/Proprietario/ProprietarioLayout";
import { API_URL } from "../../Config/api";
import { authService } from "../../service/authService";

export default function Dashboard() {
  const [dados, setDados] = useState({
    alojamentos: 0,
    reservasPendentes: 0,
    reservasConfirmadas: 0,
  });

  useEffect(() => {
    carregarDashboard();
  }, []);

  async function carregarDashboard() {
    try {
      const usuario = authService.getSession();

      console.log("UTILIZADOR LOGADO:", usuario);

      if (!usuario) {
        return;
      }

      // Buscar alojamentos
      const alojamentosResponse = await axios.get(`${API_URL}/alojamentos`);

      const alojamentos =
        alojamentosResponse.data.data || alojamentosResponse.data;

      console.log("ALOJAMENTOS:", alojamentos);

      // Filtrar alojamentos deste proprietário

      const meusAlojamentos = alojamentos.filter(
        (item: any) => item.proprietarioId === usuario.id,
      );

      console.log("MEUS ALOJAMENTOS:", meusAlojamentos);

      // Buscar reservas

      const reservasResponse = await axios.get(`${API_URL}/reservas`);

      const reservas = reservasResponse.data.data || reservasResponse.data;

      console.log("RESERVAS:", reservas);

      const meusIds = meusAlojamentos.map((item: any) => item.id);

      const minhasReservas = reservas.filter((reserva: any) =>
        meusIds.includes(reserva.alojamento?.id),
      );
      setDados({
        alojamentos: meusAlojamentos.length,

        reservasPendentes: minhasReservas.filter(
          (reserva: any) => reserva.status === "PENDENTE",
        ).length,

        reservasConfirmadas: minhasReservas.filter(
          (reserva: any) => reserva.status === "CONFIRMADA",
        ).length,
      });
    } catch (error) {
      console.log("Erro dashboard:", error);
    }
  }

  return (
    <ProprietarioLayout>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Alojamentos</h3>

          <p className="text-4xl font-bold mt-3">{dados.alojamentos}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Reservas Pendentes</h3>

          <p className="text-4xl font-bold mt-3">{dados.reservasPendentes}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Reservas Confirmadas</h3>

          <p className="text-4xl font-bold mt-3">{dados.reservasConfirmadas}</p>
        </div>
      </div>
    </ProprietarioLayout>
  );
}
