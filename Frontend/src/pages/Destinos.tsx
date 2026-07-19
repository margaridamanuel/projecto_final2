import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroDestinos from "../components/HeroDestinos";
import { getDestinos } from "../service/destinosServices";
import { useNavigate } from "react-router-dom";

interface Destino {
  id: number;
  nome: string;
  provincia: string;
  descricao: string;
  imagem: string;
  categoria: string;
}

export default function Destinos() {
  const [destinos, setDestinos] = useState<Destino[]>([]);

  const [categoria, setCategoria] = useState("Todos");

  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  // Buscar destinos da API

  useEffect(() => {
    const carregarDestinos = async () => {
      try {
        const resposta = await getDestinos();

        setDestinos(resposta.data);
      } catch (error) {
        console.error("Erro ao carregar destinos", error);
      }
    };

    carregarDestinos();
  }, []);

  // Filtros

  const filtrados = destinos.filter((d) => {
    const matchCategoria = categoria === "Todos" || d.categoria === categoria;

    const matchPesquisa =
      d.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
      d.provincia.toLowerCase().includes(pesquisa.toLowerCase());

    return matchCategoria && matchPesquisa;
  });

  return (
    <>
      <Navbar />

      {/* HERO */}

      <HeroDestinos onSearch={setPesquisa} />

      {/* FILTROS */}

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            "Todos",
            "PRAIA",
            "NATUREZA",
            "CULTURA",
            "AVENTURA",
            "HISTORIA",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`
                  px-5 py-2 rounded-full
                  ${
                    categoria === cat
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100"
                  }
                `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GRID DESTINOS */}

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Destinos Populares
        </h2>

        {filtrados.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum destino encontrado.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filtrados.map((d) => (
              <div
                key={d.id}
                onClick={() => navigate(`/destinos/${d.id}`)}
                className="
                    rounded-3xl
                   overflow-hidden
                   shadow-lg
                   group
                   bg-white
                    cursor-pointer"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={d.imagem}
                    alt={d.nome}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition
                        "
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold">{d.nome}</h3>

                  <p className="text-gray-500"> {d.provincia}</p>

                  <p className="text-sm mt-2">{d.descricao}</p>

                  <span
                    className="
                        inline-block
                        mt-3
                        bg-gray-100
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        "
                  >
                    {d.categoria}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
