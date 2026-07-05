import { Link } from "react-router-dom";

interface Props {
  id: number;

  nome: string;

  descricao: string;

  preco: string;

  capacidade: number;

  imagem: string;
}

export default function QuartoCard({
  id,
  nome,
  descricao,
  preco,
  capacidade,
  imagem,
}: Props) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-md
        mt-10
        "
    >
      <img
        src={imagem}
        className="
                h-64
                w-full
                object-cover
                "
      />

      <div className="p-6">
        <h2 className="text-2xl font-bold">{nome}</h2>

        <p className="mt-4 text-gray-600">{descricao}</p>

        <p className="mt-4">👥 Capacidade: {capacidade} pessoas</p>

        <p
          className="
                mt-5
                text-blue-600
                text-2xl
                font-bold
                "
        >
          {preco}
        </p>

        <Link
          to={`/reserva/${id}`}
          className="
                    mt-6
                    inline-block
                    bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    hover:bg-green-700
                    "
        >
          Reservar
        </Link>
      </div>
    </div>
  );
}
