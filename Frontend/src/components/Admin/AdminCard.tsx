type AdminCardProps = {
  titulo: string;
  valor: number | string;
  cor?: string;
};

export default function AdminCard({
  titulo,
  valor,
  cor = "bg-white",
}: AdminCardProps) {
  return (
    <div
      className={`${cor} rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300`}
    >
      <p className="text-gray-500 text-sm">{titulo}</p>

      <h2 className="text-4xl font-bold mt-3 text-gray-800">{valor}</h2>
    </div>
  );
}
