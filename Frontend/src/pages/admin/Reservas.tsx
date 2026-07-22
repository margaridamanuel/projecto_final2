import { useEffect, useState } from "react";
import { getReservas } from "../../service/reservaService";
import AdminLayout from "../../components/Admin/AdminLayout";

export default function Reservas() {
  const [reservas, setReservas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarReservas();
  }, []);

  async function carregarReservas() {
    try {
      const dados = await getReservas();

      console.log("RESERVAS API:", dados);

      setReservas(dados);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p className="p-6">A carregar reservas...</p>;
  }

  return (
    <AdminLayout>
      <div className="p-8 ">
        <h1 className="text-3xl font-bold mb-6">Reservas</h1>

        <div className="bg-white rounded shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Cliente</th>
                <th>Alojamento</th>
                <th>Entrada</th>
                <th>Saída</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {reservas.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center p-6 text-gray-500">
                    Nenhuma reserva encontrada
                  </td>
                </tr>
              ) : (
                reservas.map((reserva) => (
                  <tr key={reserva.id} className="border-b">
                    <td className="p-3">{reserva.utilizador?.name || "N/A"}</td>

                    <td>{reserva.alojamento?.nome || "N/A"}</td>

                    <td>{reserva.dataEntrada}</td>

                    <td>{reserva.dataSaida}</td>

                    <td>
                      <span className="bg-yellow-200 px-3 py-1 rounded">
                        {reserva.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
