interface HeroDestinosProps {
  onSearch: (texto: string) => void;
}

export default function HeroDestinos({ onSearch }: HeroDestinosProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <section
      className="
      h-[400px]
      bg-blue-950
      text-white
      flex
      items-center
      justify-center
      "
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Descubra os melhores destinos de Angola
        </h1>

        <p className="mt-5 text-xl">
          Explore paisagens incríveis, cultura e aventura.
        </p>

        <input
          onChange={handleSearch}
          type="text"
          placeholder=" Pesquisar destinos..."
          className="
          mt-8
          w-[600px]
          p-4
          rounded-xl
          text-black
          "
        />
      </div>
    </section>
  );
}
