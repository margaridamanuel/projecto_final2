import axios from "axios";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import { API_URL } from "../../Config/api";

export default function Dashboard() {
  const [utilizadores, setUtilizadores] = useState<any[]>([]);
  const [alojamentos, setAlojamentos] = useState<any[]>([]);
  const [reservas, setReservas] = useState<any[]>([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resUtilizadores, resAlojamentos, resReservas] =
          await Promise.all([
            axios.get(`${API_URL}/utilizadores`),

            axios.get(`${API_URL}/alojamentos`),

            axios.get(`${API_URL}/reservas`),
          ]);

        setUtilizadores(resUtilizadores.data.data || resUtilizadores.data);

        setAlojamentos(resAlojamentos.data.data || resAlojamentos.data);

        setReservas(resReservas.data.data || resReservas.data);
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    carregarDados();
  }, []);

  const alojamentosPendentes = alojamentos.filter(
    (a) => a.status === "PENDENTE",
  ).length;

  const alojamentosAprovados = alojamentos.filter(
    (a) => a.status === "APROVADO",
  ).length;

  const reservasConfirmadas = reservas.filter(
    (r) => r.status === "CONFIRMADA",
  ).length;

  const reservasPendentes = reservas.filter(
    (r) => r.status === "PENDENTE",
  ).length;

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Administrador</h1>

          <p className="text-gray-600">
            Gestão geral da plataforma TravelAngola
          </p>
        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-5 gap-5">
          <Card titulo="Utilizadores" valor={utilizadores.length} />

          <Card titulo="Alojamentos" valor={alojamentos.length} />

          <Card titulo="Pendentes" valor={alojamentosPendentes} />

          <Card titulo="Aprovados" valor={alojamentosAprovados} />

          <Card titulo="Reservas" valor={reservas.length} />
        </div>

        {/* ALOJAMENTOS RECENTES */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-5">Últimos Alojamentos</h2>

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Nome</th>

                <th>Província</th>

                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {alojamentos.slice(0, 5).map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.nome}</td>

                  <td>{item.provincia}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded text-sm ${
                        item.status === "APROVADO"
                          ? "bg-green-200 text-green-700"
                          : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RESERVAS RECENTES */}

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-5">Reservas Recentes</h2>

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Cliente</th>

                <th>Alojamento</th>

                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {reservas.slice(0, 5).map((reserva) => (
                <tr key={reserva.id} className="border-b">
                  <td className="p-3">{reserva.user?.nome || "Cliente"}</td>

                  <td>{reserva.alojamento?.nome || "N/A"}</td>

                  <td>{reserva.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

function Card({ titulo, valor }: { titulo: string; valor: number }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h3 className="text-gray-500">{titulo}</h3>

      <p className="text-4xl font-bold mt-3">{valor}</p>
    </div>
  );
}
