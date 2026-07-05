import { useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { getAlojamentos } from "../service/alojamentosService";
import { useEffect, useState } from "react";
export default function AlojamentoDetalhes() {
  const { id } = useParams();
  const [alojamentos, setAlojamentos] = useState<any[]>([]);

  useEffect(() => {
    const fetchAlojamentos = async () => {
      const data = await getAlojamentos();
      setAlojamentos(data);
    };
    fetchAlojamentos();
  }, []);

  const alojamento = alojamentos.find((item) => item.id === Number(id));

  if (!alojamento) {
    return <p>Alojamento não encontrado</p>;
  }
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Nome do alojamento */}
        <h1 className="text-5xl font-bold mt-3">{alojamento.nome}</h1>

        {/* Linha da localização e botão */}
        <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
          <p className="text-gray-600 text-lg"> {alojamento.local}</p>
        </div>
        {/* Galeria de imagens */}

        <section className="mt-10">
          <div className="grid grid-cols-4 gap-3">
            {/* Imagem principal */}

            <div className="col-span-2 row-span-2">
              <img
                src={alojamento.imagem}
                alt="Hotel"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Imagens pequenas */}

            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882"
              alt=""
              className="rounded-2xl h-52 w-full object-cover"
            />
          </div>
        </section>
        {/* Informações do alojamento */}

        <section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Coluna da esquerda */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Sobre este alojamento</h2>

            <p className="text-gray-600 leading-8">
              O Hotel Presidente está localizado no centro de Luanda e oferece
              uma experiência confortável para turistas e viajantes de negócios.
              Dispõe de quartos modernos, restaurante, piscina, estacionamento
              privado e acesso gratuito à Internet.
            </p>

            {/* Comodidades */}

            <h3 className="text-2xl font-bold mt-10 mb-5">Comodidades</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-xl">Wi-Fi gratuito</div>

              <div className="bg-gray-100 p-4 rounded-xl">Piscina</div>

              <div className="bg-gray-100 p-4 rounded-xl">Restaurante</div>

              <div className="bg-gray-100 p-4 rounded-xl">Estacionamento</div>

              <div className="bg-gray-100 p-4 rounded-xl">Ar-condicionado</div>

              <div className="bg-gray-100 p-4 rounded-xl">Pequeno-almoço</div>
            </div>
          </div>

          {/* Coluna da direita */}

          <div>
            <div className="border rounded-2xl shadow-lg p-6 sticky top-24">
              <p className="text-gray-500">Preço por noite</p>

              <h2 className="text-4xl font-bold text-orange-500 mt-2">
                {alojamento.preco}
              </h2>

              <div className="mt-4 flex items-center gap-2">
                ⭐⭐⭐⭐⭐
                <span className="font-semibold">{alojamento.estrelas}</span>
              </div>

              <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition">
                Reservar Agora
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
