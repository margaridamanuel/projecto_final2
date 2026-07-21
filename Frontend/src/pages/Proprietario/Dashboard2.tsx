import ProprietarioLayout from "../../components/Proprietario/ProprietarioLayout";

export default function Dashboard() {
  return (
    <ProprietarioLayout>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Alojamentos</h3>

          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Reservas Pendentes</h3>

          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Reservas Confirmadas</h3>

          <p className="text-4xl font-bold mt-3">0</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500">Avaliação Média</h3>

          <p className="text-4xl font-bold mt-3">⭐ 0</p>
        </div>
      </div>
    </ProprietarioLayout>
  );
}
