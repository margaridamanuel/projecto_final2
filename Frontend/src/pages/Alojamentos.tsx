import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../Config/api";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { authService } from "../service/authService";
import HeroAlojamentos from "../components/HeroAlojamentos";

export default function Alojamentos() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.state?.redirect || "/";
  const irParaReservas = (id: number) => {
    if (!authService.isAuthenticated()) {
      alert("Precisa de iniciar sessão para efetuar uma reserva.");

      navigate("/login", {
        state: {
          redirect: `/reserva/${id}`,
        },
      });

      return;
    }

    navigate(`/reserva/${id}`);
  };

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [alojamentos, setAlojamentos] = useState<any[]>([]);
  const [filtro, setFiltro] = useState({
    destino: "",
    checkin: "",
    checkout: "",
    hospedes: "",
  });

  useEffect(() => {
    const carregarAlojamentos = async () => {
      const response = await axios.get(`${API_URL}/alojamentos`);

      console.log("RESPOSTA DA API:", response.data);

      setAlojamentos(response.data.data || response.data);
    };

    carregarAlojamentos();
  }, []);

  const alojamentosFiltrados = alojamentos.filter((item) => {
    const categoria =
      categoriaSelecionada === "Todos" || item.tipo === categoriaSelecionada;

    const pesquisa = filtro.destino.trim().toLowerCase();

    const correspondePesquisa =
      pesquisa === "" ||
      item.nome.toLowerCase().includes(pesquisa) ||
      item.provincia.toLowerCase().includes(pesquisa);

    return categoria && correspondePesquisa;
  });
  const categorias = [
    { nome: "Todos", valor: "Todos" },
    { nome: "Hotéis", valor: "HOTEL" },
    { nome: "Resorts", valor: "RESORT" },
    { nome: "Guesthouse", valor: "GUESTHOUSE" },
  ];

  const obterImagem = (imagem: string) => {
    if (!imagem) return "";

    if (imagem.startsWith("http")) {
      return imagem;
    }

    return `http://localhost:3000/uploads/${imagem}`;
  };

  const formatarPreco = (preco: number | string) => {
    return Number(preco).toLocaleString("pt-AO") + " Kz";
  };

  return (
    <>
      <Navbar />

      <HeroAlojamentos
        onSearch={(texto) =>
          setFiltro((prev) => ({
            ...prev,
            destino: texto,
          }))
        }
      />

      {/* Pesquisa */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Alojamentos Disponíveis
          </h2>
          <p className="text-gray-600 mb-6">
            {alojamentosFiltrados.length} alojamento(s) encontrado(s)
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {categorias.map((categoria) => (
              <button
                key={categoria.valor}
                onClick={() => setCategoriaSelecionada(categoria.valor)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  categoriaSelecionada === categoria.valor
                    ? "bg-orange-500 text-white"
                    : "bg-white border hover:bg-orange-50"
                }`}
              >
                {categoria.nome}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}

      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-10">Alojamentos em Destaque</h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-[650px]">
          {alojamentos.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-3xl overflow-hidden group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={obterImagem(item.imagem)}
                alt={item.nome}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div
                className={`absolute text-white ${
                  index === 0 ? "bottom-6 left-6" : "bottom-4 left-4"
                }`}
              >
                {index === 0 && (
                  <span className="bg-orange-500 px-3 py-1 rounded-full">
                    {item.tipo}
                  </span>
                )}

                <h3
                  className={`font-bold ${
                    index === 0 ? "text-3xl mt-3" : "text-xl"
                  }`}
                >
                  {item.nome}
                </h3>

                {index === 0 && <p>{item.provincia}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Todos */}

      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10">Todos os Alojamentos</h2>

        {alojamentosFiltrados.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl text-gray-500 font-semibold">
              Nenhum alojamento encontrado.
            </h3>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alojamentosFiltrados.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={obterImagem(item.imagem)}
                  alt={item.nome}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold">{item.nome}</h3>

                    <div className="flex items-center gap-1 text-yellow-500">
                      {"★".repeat(item.estrelas)}
                      {"☆".repeat(5 - item.estrelas)}
                    </div>
                  </div>

                  <p className="text-gray-500 mt-2">
                    📍 {item.municipio}, {item.provincia}
                  </p>
                  <p className="text-gray-600 mt-3 line-clamp-2">
                    {item.descricao}
                  </p>
                  <div className="mt-5">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      Desde / Noite
                    </p>

                    <p className="text-3xl font-bold text-orange-500">
                      {formatarPreco(item.preco)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {item.tipo}
                    </span>

                    <button
                      onClick={() => irParaReservas(item.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
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

      {/* Benefícios */}

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-3"></div>
            <h3 className="font-bold">Melhores avaliações</h3>
          </div>

          <div>
            <div className="text-4xl mb-3"></div>
            <h3 className="font-bold">Reservas seguras</h3>
          </div>

          <div>
            <div className="text-4xl mb-3"></div>
            <h3 className="font-bold">Pagamento simples</h3>
          </div>

          <div>
            <div className="text-4xl mb-3"></div>
            <h3 className="font-bold">Em todo o território nacional</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
