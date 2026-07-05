import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroHoteis from "../components/HeroHoteis";
import { getAlojamentos } from "../service/alojamentosService";

import { API_URL } from "../Config/api";

import { useEffect, useState } from "react";
//import { alojamentos } from "../data/alojamentos";

export default function Alojamentos() {
  const navigate = useNavigate();
  const [alojamentos, setAlojamentos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    getAlojamentos()
      .then((data) => {
        console.log("Dados recebidos:", data);
        setAlojamentos(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  const alojamentosFiltrados = alojamentos.filter((item) => {
    const correspondeCategoria =
      categoriaSelecionada === "Todos" || item.tipo === categoriaSelecionada;

    const correspondePesquisa = item.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    return correspondeCategoria && correspondePesquisa;
  });
  console.log("Alojamentos:", alojamentos[0]?.imagem);
  return (
    <>
      <Navbar />

      {/* Hero */}
      <HeroHoteis />

      {/* Categorias */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">
          Escolha o seu alojamento
        </h2>
        <div className="max-w-lg mx-auto mb-8">
          <input
            type="text"
            placeholder=" Procurar alojamento..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => setCategoriaSelecionada("Todos")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              categoriaSelecionada === "Todos"
                ? "bg-orange-500 text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            Todos
          </button>

          <button
            onClick={() => setCategoriaSelecionada("Hotel")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              categoriaSelecionada === "Hotel"
                ? "bg-orange-500 text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            Hotéis
          </button>

          <button
            onClick={() => setCategoriaSelecionada("Resort")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              categoriaSelecionada === "Resort"
                ? "bg-orange-500 text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            Resorts
          </button>

          <button
            onClick={() => setCategoriaSelecionada("Pensão")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              categoriaSelecionada === "Pensão"
                ? "bg-orange-500 text-white"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            Pensões
          </button>
        </div>
      </section>

      {/* Destaques */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-10">Alojamentos em Destaque</h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[650px]">
          {alojamentos.map((alojamento) => (
            <div className="row-span-2 relative rounded-3xl overflow-hidden group">
              <img
                src={alojamento.imagem}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-orange-500 px-3 py-1 rounded-full">
                  {alojamento.tipo}
                </span>

                <h3 className="text-3xl font-bold mt-3">{alojamento.nome}</h3>

                <p>{alojamento.local}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lista completa */}

      {/* Todos os Alojamentos */}

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Todos os Alojamentos</h2>

        {alojamentosFiltrados.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-500">
              Nenhum alojamento encontrado.
            </h3>

            <p className="text-gray-400 mt-3">
              Tente pesquisar outro nome ou escolha outra categoria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {alojamentosFiltrados.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Imagem */}

                <div className="overflow-hidden">
                  <img
                    src={item.imagem}
                    alt={item.nome}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Conteúdo */}

                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{item.nome}</h3>

                    <span className="text-yellow-500 font-semibold">
                      ⭐ {item.estrelas}
                    </span>
                  </div>

                  <p className="text-gray-500 mt-2">{item.local}</p>

                  <p className="text-orange-500 font-bold text-lg mt-3">
                    {item.preco}
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                      {item.tipo}
                    </span>

                    <button
                      onClick={() => navigate(`/alojamentos/${item.id}`)}
                      className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full font-semibold"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Vantagens */}

      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="font-bold mt-3">Melhores avaliações</h3>
          </div>

          <div>
            <h3 className="font-bold mt-3">Reservas seguras</h3>
          </div>

          <div>
            <h3 className="font-bold mt-3">Pagamento simples</h3>
          </div>

          <div>
            <h3 className="font-bold mt-3">Em todo o território nacional</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
