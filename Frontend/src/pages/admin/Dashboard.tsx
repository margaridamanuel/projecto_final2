import AdminLayout from "../../components/Admin/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-gray-600">
            Bem-vindo ao painel de administração do Travel Angola.
          </p>
        </div>

        {/* Resumo */}
        <div className="border rounded p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4">Resumo do Sistema</h2>

          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-2">Alojamentos Pendentes</td>
                <td className="text-right font-bold">8</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Alojamentos Aprovados</td>
                <td className="text-right font-bold">25</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Reservas Pendentes</td>
                <td className="text-right font-bold">12</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">Reservas Confirmadas</td>
                <td className="text-right font-bold">35</td>
              </tr>

              <tr>
                <td className="py-2">Utilizadores</td>
                <td className="text-right font-bold">138</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Últimos alojamentos */}
        <div className="border rounded p-4 bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Últimos alojamentos cadastrados
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="text-left p-2">Nome</th>
                <th className="text-left p-2">Província</th>
                <th className="text-left p-2">Estado</th>
                <th className="text-left p-2">Data</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-2">Hotel Miramar</td>
                <td className="p-2">Luanda</td>
                <td className="p-2">Pendente</td>
                <td className="p-2">01/07/2026</td>
              </tr>

              <tr className="border-b">
                <td className="p-2">Resort Baía Azul</td>
                <td className="p-2">Benguela</td>
                <td className="p-2">Aprovado</td>
                <td className="p-2">30/06/2026</td>
              </tr>

              <tr>
                <td className="p-2">Pousada Namibe</td>
                <td className="p-2">Namibe</td>
                <td className="p-2">Pendente</td>
                <td className="p-2">29/06/2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
