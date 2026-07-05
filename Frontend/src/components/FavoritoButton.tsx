import { useState } from "react";
export default function FavoritoButton() {
  const [favorito, setFavorito] = useState(false);
  return (
    <button
      onClick={() => setFavorito(!favorito)}
      className={"bg-white shadow rounded-xl px-5 py-2"}
    >
      {favorito ? "Favorito" : "Adicionar aos Favoritos"}
    </button>
  );
}
