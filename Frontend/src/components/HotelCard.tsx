import { Link } from "react-router-dom";
interface Props {
  id: number;
  nome: string;
  provincia: string;
  classificacao: number;
  preco: string;
  imagem: string;
  descricao: string;
  galeria: string[];
}

export default function HotelCard({
  id,
  nome,
  provincia,
  classificacao,
  preco,
  imagem,
  descricao,
  galeria,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-md
      hover:shadow-2xl
      transition
      "
    >
      <img
        src={imagem}
        alt={nome}
        className="
        w-full
        h-64
        object-cover
        "
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold">{nome}</h2>

        <p className="text-gray-500 mt-2">📍 {provincia}</p>

        <div className="mt-3 text-yellow-500">{"⭐".repeat(classificacao)}</div>

        <p className="mt-5 text-xl font-semibold text-blue-600">{preco}</p>
        <button>
          <Link
            to={`/hoteis/${id}`}
            className="text-blue-600 hover:bg-blue-700"
          >
            Ver detalhes
          </Link>
        </button>
      </div>
    </div>
  );
}
