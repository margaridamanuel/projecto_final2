type Props = {
  onSearch: (texto: string) => void;
};

export default function HeroAlojamentos({ onSearch }: Props) {
  return (
    <section
      className="
      h-[350px]
      bg-blue-950
      text-white
      flex
      items-center
      justify-center
      "
    >
      <div />

      <div className="relative z-10 text-center text-white max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          Encontre o alojamento perfeito
        </h1>

        <p className="text-lg mb-8">
          Hotéis, Resorts e Guesthouses em todo o território nacional.
        </p>

        <div className="bg-white rounded-full shadow-xl flex items-center px-3 py-3 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder=""
            onChange={(e) => onSearch(e.target.value)}
            className="flex-1 px-4 outline-none text-gray-700"
          />

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition">
            Pesquisar
          </button>
        </div>
      </div>
    </section>
  );
}
