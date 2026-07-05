import { useEffect, useState } from "react";
import HeroDestinos from "../components/HeroDestinos";
import CategoriaDestino from "../components/CategoriaDestino";
import DestinoCard from "../components/DestinoCard";
import Navbar from "../components/NavBar";
import { getDestinos } from "../service/destinosServices";
import Footer from "../components/Footer";

export default function Destinos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [pesquisa, setPesquisa] = useState<string>("");
  const [destinos, setDestinos] = useState<any[]>([]);

  useEffect(() => {
    const fetchDestinos = async () => {
      const data = await getDestinos();
      setDestinos(data);
    };
    fetchDestinos();
  }, []);
  const destinosFiltrados =
    categoriaSelecionada === "Todos"
      ? destinos
      : destinos.filter(
          (destino) => destino.categoria === categoriaSelecionada,
        );
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroDestinos onSearch={setPesquisa} />

      <CategoriaDestino
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
      />

      <div className=" max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinosFiltrados.map((destino) => (
          <DestinoCard
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            provincia={destino.provincia}
            descricao={destino.descricao}
            imagem={destino.imagem}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
