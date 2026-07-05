interface Props {
  media: number;
  total: number;
}

export default function AvaliacaoDestino({ media, total }: Props) {
  return (
    <div className="text-yellow-500 text-xl">
      ⭐⭐⭐⭐⭐
      <span className="text-gray-700 ml-3">
        {media} ({total} avaliações)
      </span>
    </div>
  );
}
