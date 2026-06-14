function Hero() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-5xl mx-auto  mt-10">
      {/* Inputs */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 p-3 border-b md:border-b-0 md:border-r">
          <label className="text-xs text-gray-500">Destino</label>
          <input
            type="text"
            placeholder="Para onde vais?"
            className="w-full outline-none text-gray-700"
          />
        </div>

        <div className="flex-1 p-3 border-b md:border-b-0 md:border-r">
          <label className="text-xs text-gray-500">Check-in</label>
          <input type="date" className="w-full outline-none text-gray-700" />
        </div>

        <div className="flex-1 p-3 border-b md:border-b-0 md:border-r">
          <label className="text-xs text-gray-500">Check-out</label>
          <input type="date" className="w-full outline-none text-gray-700" />
        </div>

        <div className="flex-1 p-3">
          <label className="text-xs text-gray-500">Hóspedes</label>
          <select className="w-full outline-none text-gray-700">
            <option>1 adulto</option>
            <option>2 adultos</option>
            <option>Família</option>
          </select>
        </div>
      </div>

      {/* Botão */}
      <div className="bg-blue-600 flex items-center justify-center px-8">
        <button className="text-white font-bold">Pesquisar</button>
      </div>
    </div>
  );
}

export default Hero;
