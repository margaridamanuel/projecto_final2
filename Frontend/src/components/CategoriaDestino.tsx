interface Props {
  categoriaSelecionada: string;
  setCategoriaSelecionada: (categoria: string) => void;
}

export default function CategoriaDestino({
  categoriaSelecionada,
  setCategoriaSelecionada,
}: Props) {
  const categorias = ["Todos", "Praias", "Cultura", "Natureza", "Montanhas"];

  return (
    <div className="flex justify-center gap-4 py-10 flex-wrap">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => setCategoriaSelecionada(categoria)}
          className={`px-8 py-4 rounded-full transition shadow-md ${
            categoriaSelecionada === categoria
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}
