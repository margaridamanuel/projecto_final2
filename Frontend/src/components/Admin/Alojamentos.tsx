import AdminLayout from "../../components/Admin/AdminLayout";
//import { alojamentosAdmin } from "../../data/alojamentosAdmin";

import { useEffect, useState } from "react";
import { getAlojamentos } from "../../service/alojamentosService";
import { useNavigate } from "react-router-dom";
export default function Alojamentos() {
  const navigate = useNavigate();
  const [alojamentos, setAlojamentos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    getAlojamentos()
      .then((data) => {
        console.log("Dados recebidos:", data);
        setAlojamentos(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Gestão de Alojamentos</h1>

      {/* Pesquisa e filtros */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="Pesquisar alojamento..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Tabela */}
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nome</th>

            <th className="border p-2">Província</th>

            <th className="border p-2">Categoria</th>

            <th className="border p-2">Estado</th>

            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        /*
        <tbody>
          //
          {alojamentos.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.provincia}</td>

              <td className="border p-2">{item.categoria}</td>

              <td className="border p-2">{item.estado}</td>

              <td className="border p-2 space-x-2">
                <button className="border px-2 py-1">Ver</button>

                <button className="border px-2 py-1">Editar</button>

                <button className="border px-2 py-1">Aprovar</button>

                <button className="border px-2 py-1">Rejeitar</button>

                <button className="border px-2 py-1">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
