import { useNavigate } from "react-router-dom";

type Props = {
  alojamento: {
    id: number;
    nome: string;
    categoria: string;
    provincia: string;
    estado: string;
    imagem: string;
  };
};

export default function AlojamentoCard({ alojamento }: Props) {
  const corEstado =
    alojamento.estado === "Aprovado"
      ? "bg-green-100 text-green-700"
      : alojamento.estado === "Pendente"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={alojamento.imagem}
        alt={alojamento.nome}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{alojamento.nome}</h2>

        <p className="text-gray-500 mt-2"> {alojamento.provincia}</p>

        <p className="text-gray-500"> {alojamento.categoria}</p>

        <span
          className={`inline-block mt-4 px-3 py-1 rounded-full text-sm font-semibold ${corEstado}`}
        >
          {alojamento.estado}
        </span>

        <div className="grid grid-cols-2 gap-2 mt-6">
          <button className="bg-blue-600 text-white rounded-lg py-2">
            Ver
          </button>

          <button className="bg-green-600 text-white rounded-lg py-2">
            Aprovar
          </button>

          <button className="bg-red-600 text-white rounded-lg py-2">
            Rejeitar
          </button>
        </div>
      </div>
    </div>
  );
}
