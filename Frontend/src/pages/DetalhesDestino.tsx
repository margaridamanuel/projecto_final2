import HeroDestinos from "../components/HeroDestinos";
import CategoriaDestino from "../components/CategoriaDestino";
import Navbar from "../components/NavBar";
import DestinoCard from "../components/DestinoCard";
import GaleriaDestino from "../components/GaleriaDestino";
import ComentariosDestino from "../components/ComentariosDestino";
import FavoritosButton from "../components/FavoritoButton";
import HotelProximo from "../components/HotelProximo";
import { getDestinos } from "../service/destinosServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetalhesDestino() {
  const { id } = useParams();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [destinos, setDestinos] = useState<any[]>([]);
  useEffect(() => {
    const fetchDestinos = async () => {
      const data = await getDestinos();
      setDestinos(data);
    };

    fetchDestinos();
  }, []);

  const destino = destinos.find((d) => d.id === Number(id));

  if (!destino) {
    return <div className="p-20 text-4xl"> Destino não encontrado</div>;
  }
  return (
    <div className="p-20">
      <h1 className="text-5xl font-bold">{destino.nome}</h1>
      <p className="mt-5 text-gray-500">{destino.provincia}</p>
      <GaleriaDestino imagens={destino.galeria} />
      <p className="m-10 text-lg leading-8">
        {destino.descricao}
        <ComentariosDestino />
        <HotelProximo />
      </p>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroDestinos onSearch={(value) => console.log(value)} />

      <CategoriaDestino
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}
      />

      <p>pagina detalhes do destino</p>
    </div>
  );
}
