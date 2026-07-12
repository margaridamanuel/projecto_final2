import AdminLayout from "../../components/Admin/AdminLayout";

//import { alojamentosAdmin } from "../../data/alojamentosAdmin";

import { useEffect, useState } from "react";
import {
  getAlojamentos,
  aprovarAlojamento,
  rejeitarAlojamento,
} from "../../service/alojamentosService";
import { useNavigate } from "react-router-dom";
export default function Alojamentos() {
  const navigate = useNavigate();
  const [alojamentos, setAlojamentos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    carregarAlojamentos();
  }, []);

  const aprovar = async (id: number) => {
    try {
      await aprovarAlojamento(id);

      alert("Alojamento aprovado com sucesso!");

      carregarAlojamentos();
    } catch (error) {
      console.error(error);
      alert("Erro ao aprovar alojamento.");
    }
  };

  const rejeitar = async (id: number) => {
    try {
      await rejeitarAlojamento(id);

      alert("Alojamento rejeitado com sucesso!");

      carregarAlojamentos();
    } catch (error) {
      console.error(error);
      alert("Erro ao rejeitar alojamento.");
    }
  };

  const carregarAlojamentos = async () => {
    try {
      setLoading(true);

      const data = await getAlojamentos();

      setAlojamentos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

            <th className="border p-2">Tipo</th>

            <th className="border p-2">Estado</th>

            <th className="border p-2">Ações</th>
          </tr>
        </thead>

        <tbody>
          {alojamentos.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.nome}</td>

              <td className="border p-2">{item.provincia}</td>

              <td className="border p-2">{item.tipo}</td>

              <td className="border p-2">
                <span
                  className="
            bg-yellow-100 
            px-3 
            py-1 
            rounded-full
            text-sm
          "
                >
                  {item.status}
                </span>
              </td>

              <td className="border p-2 space-x-2">
                <button
                  onClick={() => navigate(`/admin/alojamentos/${item.id}`)}
                  className="bg-orange-600 text-white rounded-lg  px-3  py-2"
                >
                  Ver
                </button>

                <button
                  onClick={() => aprovar(item.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Aprovar
                </button>

                <button
                  onClick={() => rejeitar(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Rejeitar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
