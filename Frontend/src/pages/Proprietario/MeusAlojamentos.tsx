import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProprietarioLayout from "../../components/Proprietario/ProprietarioLayout";
import { API_URL } from "../../Config/api";
import { authService } from "../../service/authService";

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
            <tr className="border-b">
              <th className="text-left py-3">Nome</th>
              <th className="text-left">Tipo</th>
              <th className="text-left">Província</th>
              <th className="text-left">Estado</th>
            </tr>
          </thead>

          <tbody>
            {alojamentos.map((alojamento) => (
              <tr key={alojamento.id} className="border-b">
                <td className="py-4">{alojamento.nome}</td>

                <td>{alojamento.tipo}</td>

                <td>{alojamento.provincia}</td>

                <td>{alojamento.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProprietarioLayout>
  );
}
