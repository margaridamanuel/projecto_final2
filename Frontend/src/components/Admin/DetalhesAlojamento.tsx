import { useParams } from "react-router-dom";

export default function DetalhesAlojamento() {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Detalhes do Alojamento</h1>

      <p className="mt-4">ID do alojamento: {id}</p>
    </div>
  );
}
