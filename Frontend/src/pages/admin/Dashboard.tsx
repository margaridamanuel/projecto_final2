import axios from "axios";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

export default function Dashboard() {
  const [utilizadores, setUtilizadores] = useState<any[]>([]);
  const [alojamentos, setAlojamentos] = useState<any[]>([]);
  const [reservas, setReservas] = useState<any[]>([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resUtilizadores, resAlojamentos, resReservas] =
          await Promise.all([
            axios.get("http://localhost:3000/api/v1/utilizadores"),

            axios.get("http://localhost:3000/api/v1/alojamentos"),

            axios.get("http://localhost:3000/api/v1/reservas"),
          ]);

        console.log("Utilizadores:", resUtilizadores.data);
        console.log("Alojamentos:", resAlojamentos.data);
        console.log("Reservas:", resReservas.data);

        setUtilizadores(resUtilizadores.data.data || []);

        setAlojamentos(resAlojamentos.data.data || []);

        setReservas(resReservas.data.data || []);
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    carregarDados();
  }, []);

  const alojamentosPendentes = alojamentos.filter(
    (item) => item.status === "PENDENTE",
  ).length;

  const alojamentosAprovados = alojamentos.filter(
    (item) => item.status === "APROVADO",
  ).length;

  const reservasPendentes = reservas.filter(
    (item) => item.status === "PENDENTE",
  ).length;

  const reservasConfirmadas = reservas.filter(
    (item) => item.status === "CONFIRMADA",
  ).length;

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-gray-600">
            Bem-vindo ao painel de administração do Travel Angola.
          </p>
        </div>

        {/* Resumo */}
        <div className="border rounded p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4">Resumo do Sistema</h2>

          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Alojamentos Pendentes</td>
                <td className="text-right font-bold">{alojamentosPendentes}</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Alojamentos Aprovados</td>
                <td className="text-right font-bold">{alojamentosAprovados}</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Reservas Pendentes</td>
                <td className="text-right font-bold">{reservasPendentes}</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Reservas Confirmadas</td>
                <td className="text-right font-bold">{reservasConfirmadas}</td>
              </tr>

              <tr>
                <td className="py-2">Utilizadores</td>
                <td className="text-right font-bold">{utilizadores.length}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Últimos alojamentos */}
      </div>
    </AdminLayout>
  );
}
