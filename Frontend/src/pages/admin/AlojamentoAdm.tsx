import { useEffect, useState } from "react";
import axios from "axios";

interface Alojamento {
  id: number;
  nome: string;
  descricao: string;
  tipo: string;
  quartos: number;
  preco: number;
  provincia: string;
  municipio: string;
  endereco: string;
  servicos: string;
  imagem: string;
  status: string;
}

export default function Alojamentos() {
  const [alojamentos, setAlojamentos] = useState<Alojamento[]>([]);
  const [loading, setLoading] = useState(true);

  async function buscarAlojamentos() {
    try {
      const resposta = await axios.get(
        "http://localhost:3000/api/v1/alojamentos",
      );

      setAlojamentos(resposta.data);
    } catch (erro) {
      console.error("Erro ao buscar alojamentos:", erro);
    } finally {
      setLoading(false);
    }
  }

  async function alterarStatus(id: number, status: string) {
    try {
      await axios.patch(
        `http://localhost:3000/api/v1/alojamentos/${id}/status`,
        {
          status,
        },
      );

      buscarAlojamentos();
    } catch (error) {
      console.error("Erro ao alterar status:", error);
    }
  }

  useEffect(() => {
    buscarAlojamentos();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">A carregar alojamentos...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Alojamentos Cadastrados</h1>

      {alojamentos.length === 0 ? (
        <p className="text-gray-500">Nenhum alojamento cadastrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alojamentos.map((alojamento) => (
            <div key={alojamento.id} className="bg-white rounded-xl shadow p-5">
              <img
                src={
                  alojamento.imagem
                    ? `http://localhost:3000/uploads/${alojamento.imagem}`
                    : "/sem-imagem.jpg"
                }
                alt={alojamento.nome}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h2 className="text-xl font-bold mt-4">{alojamento.nome}</h2>

              <p className="text-gray-600">{alojamento.tipo}</p>

              <p>
                📍 {alojamento.provincia} - {alojamento.municipio}
              </p>

              <p>Quartos: {alojamento.quartos}</p>

              <p>Preço: {String(alojamento.preco)} Kz</p>

              <span className="inline-block mt-3 px-3 py-1 rounded-full text-sm bg-yellow-100">
                {alojamento.status}
              </span>
              <span className="inline-block mt-3 px-3 py-1 rounded-full text-sm bg-yellow-100">
                {alojamento.status}
              </span>

              {alojamento.status === "PENDENTE" && (
                <button
                  onClick={() => alterarStatus(alojamento.id, "APROVADO")}
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
                >
                  Aprovar
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
