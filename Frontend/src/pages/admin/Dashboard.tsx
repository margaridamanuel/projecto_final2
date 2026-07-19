import axios from "axios";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

export default function Dashboard() {
  const [utilizadores, setUtilizadores] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/utilizadores")
      .then((response) => {
        console.log("Resposta da API:", response.data);

        setUtilizadores(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar utilizadores:", error);
      });
  }, []);

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
                <td className="text-right font-bold">8</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Alojamentos Aprovados</td>
                <td className="text-right font-bold">25</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Reservas Pendentes</td>
                <td className="text-right font-bold">12</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Reservas Confirmadas</td>
                <td className="text-right font-bold">35</td>
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
