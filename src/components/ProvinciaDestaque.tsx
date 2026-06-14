import { useState } from "react";

const provincias = [
  {
    nome: "Luanda",
    imagem:
      "https://welcometoangola.co.ao/wp-content/uploads/2021/06/Ilha-de-Luanda....jpg",
    precos: [
      { mes: "Junho", preco: "45.000 Kz" },
      { mes: "Julho", preco: "52.000 Kz" },
      { mes: "Agosto", preco: "60.000 Kz" },
      { mes: "Setembro", preco: "48.000 Kz" },
    ],
  },

  {
    nome: "Benguela",
    imagem: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    precos: [
      { mes: "Junho", preco: "35.000 Kz" },
      { mes: "Julho", preco: "40.000 Kz" },
      { mes: "Agosto", preco: "43.000 Kz" },
      { mes: "Setembro", preco: "38.000 Kz" },
    ],
  },

  {
    nome: "Uíge",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    precos: [
      { mes: "Junho", preco: "30.000 Kz" },
      { mes: "Julho", preco: "37.000 Kz" },
      { mes: "Agosto", preco: "45.000 Kz" },
      { mes: "Setembro", preco: "33.000 Kz" },
    ],
  },
  {
    nome: "Cabinda",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    precos: [
      { mes: "Junho", preco: "30.000 Kz" },
      { mes: "Julho", preco: "37.000 Kz" },
      { mes: "Agosto", preco: "45.000 Kz" },
      { mes: "Setembro", preco: "33.000 Kz" },
    ],
  },
  {
    nome: "Bié",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    precos: [
      { mes: "Junho", preco: "30.000 Kz" },
      { mes: "Julho", preco: "37.000 Kz" },
      { mes: "Agosto", preco: "45.000 Kz" },
      { mes: "Setembro", preco: "33.000 Kz" },
    ],
  },
  {
    nome: "Cuando Cubando",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    precos: [
      { mes: "Junho", preco: "30.000 Kz" },
      { mes: "Julho", preco: "37.000 Kz" },
      { mes: "Agosto", preco: "45.000 Kz" },
      { mes: "Setembro", preco: "33.000 Kz" },
    ],
  },
  {
    nome: "Cuanza Sul",
    imagem: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    precos: [
      { mes: "Junho", preco: "30.000 Kz" },
      { mes: "Julho", preco: "37.000 Kz" },
      { mes: "Agosto", preco: "45.000 Kz" },
      { mes: "Setembro", preco: "33.000 Kz" },
    ],
  },
];

const ProvinciaDestaque = () => {
  const [provinciaAtiva, setProvinciaAtiva] = useState(provincias[0]);

  return (
    <section className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-4xl font-bold mb-10">
        Descubra as melhores províncias de Angola
      </h2>

      {/* TABS */}
      <div className="flex gap-8 border-b pb-4 overflow-x-auto">
        {provincias.map((provincia) => (
          <button
            key={provincia.nome}
            onClick={() => setProvinciaAtiva(provincia)}
            className={`text-xl font-semibold pb-2 transition-all ${
              provinciaAtiva.nome === provincia.nome
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-700"
            }`}
          >
            {provincia.nome}
          </button>
        ))}
      </div>

      {/* CONTEÚDO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* IMAGEM */}
        <div>
          <img
            src={provinciaAtiva.imagem}
            alt={provinciaAtiva.nome}
            className="w-full h-[250px] object-cover rounded-3xl"
          />

          <p className="mt-4 text-gray-500">
            Explore hotéis, praias e atrações em {provinciaAtiva.nome}
          </p>
        </div>

        {/* PREÇOS */}
        <div className="flex flex-col gap-4">
          {provinciaAtiva.precos.map((item) => (
            <div
              key={item.mes}
              className="flex justify-between items-center border rounded-2xl px-2 py-1 hover:shadow-md transition-all cursor-pointer"
            >
              <span className="text-1xl font-semibold">{item.mes}</span>

              <span className="text-1xl font-bold">{item.preco}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvinciaDestaque;
