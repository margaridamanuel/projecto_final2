import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { getDestinos } from "../service/destinosServices";
import { getAlojamentos } from "../service/alojamentosService";
import { API_URL } from "../Config/api";
interface Destino {
  id: number;
  nome: string;
  provincia: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

interface Alojamento {
  id: number;
  nome: string;
  provincia: string;
  descricao: string;
  imagem: string;
}

export default function DetalhesDestino() {
  const navigate = useNavigate();
  const { id } = useParams();
  const irParaReservas = (id: number) => {
    navigate(`/reserva/${id}`);
  };

  const [destino, setDestino] = useState<Destino | null>(null);
  const [alojamentos, setAlojamentos] = useState<Alojamento[]>([]);
  const [mostrarAlojamentos, setMostrarAlojamentos] = useState(false);

  const carregarAlojamentos = async () => {
    try {
      const resposta = await getAlojamentos();

      console.log("ALOJAMENTOS:", resposta);

      setAlojamentos(resposta);
    } catch (error) {
      console.error("Erro ao carregar alojamentos", error);
    }
  };

  const carregarDestino = async () => {
    try {
      const resposta = await getDestinos();

      const encontrado = resposta.data.find(
        (d: Destino) => d.id === Number(id),
      );

      setDestino(encontrado);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    carregarDestino();
    carregarAlojamentos();
  }, []);

  if (!destino) {
    return <p className="text-center mt-20">Carregando destino...</p>;
  }

  const alojamentosProximos = alojamentos.filter(
    (a) => a.provincia === destino?.provincia,
  );
  const obterImagem = (imagem: string) => {
    if (!imagem) return "";

    if (imagem.startsWith("http")) {
      return imagem;
    }

    return `${API_URL.replace("/api/v1", "")}/uploads/${imagem}`;
  };

  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src={destino.imagem}
            alt={destino.nome}
            className="
          w-full
          h-96
          object-cover
          rounded-3xl
          "
          />

          <div>
            <span
              className="
          bg-orange-100
          text-orange-500
          px-4
          py-2
          rounded-full
          "
            >
              {destino.categoria}
            </span>

            <h1 className="text-4xl font-bold mt-5">{destino.nome}</h1>

            <p className="text-gray-500 text-lg mt-3"> {destino.provincia}</p>

            <p className="mt-6 text-gray-700">{destino.descricao}</p>

            <button
              onClick={() => setMostrarAlojamentos(true)}
              className=" mt-8 bg-orange-600 text-white px-6 py-3 rounded-xl "
            >
              Ver alojamentos próximos
            </button>
          </div>
        </div>
      </section>

      {mostrarAlojamentos && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <button
            onClick={() => setMostrarAlojamentos(!mostrarAlojamentos)}
            className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-xl"
          >
            {mostrarAlojamentos
              ? "Ocultar alojamentos"
              : "Ver alojamentos próximos"}
          </button>

          {alojamentosProximos.length === 0 ? (
            <p className="text-gray-500">
              Nenhum alojamento disponivel nesta região.
            </p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {alojamentosProximos.map((hotel) => (
                <div
                  key={hotel.id}
                  className="rounded-2xl shadow-lg overflow-hidden bg-white"
                >
                  <img
                    src={obterImagem(hotel.imagem)}
                    alt={hotel.nome}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold">{hotel.nome}</h3>

                    <p className="text-gray-500"> {hotel.provincia}</p>

                    <p className="mt-2">{hotel.descricao}</p>

                    <button
                      onClick={() => irParaReservas(hotel.id)}
                      className="mt-4 bg-orange-600 text-white px-5 py-2 rounded-lg"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      <Footer />
    </>
  );
}
