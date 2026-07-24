import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProprietarioLayout from "../../components/Proprietario/ProprietarioLayout";
import { API_URL } from "../../Config/api";
import { authService } from "../../service/authService";
import { eliminarAlojamento } from "../../service/alojamentoProprietario";

export default function MeusAlojamentos() {
  const navigate = useNavigate();

  const [alojamentos, setAlojamentos] = useState<any[]>([]);

  useEffect(() => {
    const usuario = authService.getSession();

    if (!usuario) return;

    axios
      .get(`${API_URL}/alojamentos/proprietario/${usuario.id}`)
      .then((res) => {
        setAlojamentos(res.data);
      })
      .catch((erro) => {
        console.error("Erro ao buscar alojamentos:", erro);
      });
  }, []);

  const eliminar = async (id: number) => {
    if (!window.confirm("Pretende eliminar este alojamento?")) return;

    try {
      await eliminarAlojamento(id);

      setAlojamentos((lista) => lista.filter((a) => a.id !== id));
    } catch (error) {
      console.error(error);
      alert("Erro ao eliminar alojamento.");
    }
  };

  return (
    <ProprietarioLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Meus Alojamentos</h2>

        <button
          onClick={() => navigate("/cadastro-alojamento")}
          className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg"
        >
          + Novo Alojamento
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3">Imagem</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Província</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {alojamentos.map((alojamento) => (
              <tr key={alojamento.id} className="border-b">
                <td className="p-2">
                  <img
                    src={
                      alojamento.imagem?.startsWith("http")
                        ? alojamento.imagem
                        : `${API_URL.replace("/api/v1", "")}/uploads/${alojamento.imagem}`
                    }
                    alt={alojamento.nome}
                    className="w-20 h-16 object-cover rounded"
                  />
                </td>

                <td>{alojamento.nome}</td>

                <td>{alojamento.tipo}</td>

                <td>{alojamento.provincia}</td>

                <td>{alojamento.status}</td>

                <td className="space-x-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProprietarioLayout>
  );
}
