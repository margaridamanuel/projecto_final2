export interface cardDepoimentoProps {
  name: string;
  comment: string;
}

function CardDepoimento({ name, comment }: cardDepoimentoProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <p className="italic text-gray-600">"{comment}"</p>

      <h3 className="font-bold mt-4">{name}</h3>
    </div>
  );
}

export default CardDepoimento;
