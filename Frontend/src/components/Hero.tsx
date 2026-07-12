import { useState } from "react";

interface HeroProps {
  onSearch: (dados: {
    destino: string;
    checkin: string;
    checkout: string;
    hospedes: string;
  }) => void;
}

function Hero({ onSearch }: HeroProps) {
  const [destino, setDestino] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [hospedes, setHospedes] = useState("1 adulto");

  function handleSearch() {
    onSearch({
      destino,
      checkin,
      checkout,
      hospedes,
    });
  }

  return (
    <div className="bg-transparent rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto mt-10">
      {/* Inputs */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 p-3 border-b md:border-b-0 md:border-r">
          <label className="text-xs text-gray-800">Destino</label>

          <input
            type="text"
            placeholder="Para onde vais?"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-full outline-none text-gray-800"
          />
        </div>

        <div className="flex-1 p-3 border-b md:border-b-0 md:border-r">
          <label className="text-xs text-gray-800">Check-in</label>

          <input
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="w-full outline-none text-gray-800"
          />
        </div>

        <div className="flex-1 p-3 border-b md:border-b-0 md:border-r">
          <label className="text-xs text-gray-800">Check-out</label>

          <input
            type="date"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="w-full outline-none text-gray-800"
          />
        </div>

        <div className="flex-1 p-3">
          <label className="text-xs text-gray-800">Hóspedes</label>

          <select
            value={hospedes}
            onChange={(e) => setHospedes(e.target.value)}
            className="w-full outline-none text-gray-800"
          >
            <option>1 adulto</option>
            <option>2 adultos</option>
            <option>Família</option>
          </select>
        </div>
      </div>

      {/* Botão */}
      <div className="bg-orange-500 flex items-center justify-center px-8">
        <button
          onClick={handleSearch}
          className="text-white font-bold h-full w-full py-4"
        >
          Pesquisar
        </button>
      </div>
    </div>
  );
}

export default Hero;
