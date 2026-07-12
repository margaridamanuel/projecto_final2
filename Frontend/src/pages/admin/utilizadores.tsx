import axios from "axios";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

export default function Utilizadores() {
  const [utilizadores, setUtilizadores] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/utilizadores")
      .then((response) => {
        setUtilizadores(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar utilizadores:", error);
      });
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Utilizadores</h1>
          <p className="text-gray-600">
            Lista de todos os utilizadores registados.
          </p>
        </div>

        <div className="bg-white rounded shadow p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Nome</th>
                <th className="text-left p-2">Email</th>
              </tr>
            </thead>

            <tbody>
              {utilizadores.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-2">{user.id}</td>

                  <td className="p-2">{user.nome}</td>

                  <td className="p-2">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
