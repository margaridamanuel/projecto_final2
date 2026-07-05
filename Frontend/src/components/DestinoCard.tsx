import { Link } from "react-router-dom";
interface Props {
  id: number;
  nome: string;
  provincia: string;
  descricao: string;
  imagem: string;
}

export default function DestinoCard({
  id,
  nome,
  provincia,
  descricao,
  imagem,
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
      <img src={imagem} alt={nome} className="w-full h-64 object-cover" />

      <div className="p-6">
        <h2 className="text-2xl font-bold">{nome}</h2>

        <p className="text-gray-500 mt-2">📍 {provincia}</p>

        <div className="mt-3 text-yellow-500">⭐⭐⭐⭐⭐</div>

        <p className="mt-4 text-gray-600">{descricao}</p>
        <Link
          to={`/destinos/${id}`}
          className="mt-5 inline-block bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
