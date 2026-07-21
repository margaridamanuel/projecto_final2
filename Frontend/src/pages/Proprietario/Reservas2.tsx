import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../Config/api";
import ProprietarioLayout from "../../components/Proprietario/ProprietarioLayout";

export default function MinhasReservas() {
  const [reservas, setReservas] = useState<any[]>([]);

  async function carregarReservas() {
    try {
      const response = await axios.get(`${API_URL}/reservas`);

      setReservas(response.data);
    } catch (error) {
      console.error("Erro ao carregar reservas", error);
    }
  }

  async function alterarEstado(id: number, status: string) {
    try {
      await axios.patch(`${API_URL}/reservas/${id}/status`, {
        status,
      });

      carregarReservas();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    carregarReservas();
  }, []);

  return (
    <ProprietarioLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Reservas Recebidas</h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="p-4">Cliente</th>

                <th>Alojamento</th>

                <th>Entrada</th>

                <th>Saída</th>

                <th>Total</th>

                <th>Estado</th>

                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {reservas.map((reserva) => (
                <tr key={reserva.id} className="border-b">
                  <td className="p-4">{reserva.user?.nome}</td>

                  <td>{reserva.alojamento?.nome}</td>

                  <td>{new Date(reserva.checkIn).toLocaleDateString()}</td>

                  <td>{new Date(reserva.checkOut).toLocaleDateString()}</td>

                  <td>{Number(reserva.total).toLocaleString()} Kz</td>

                  <td>{reserva.status}</td>

                  <td>
                    <button
                      onClick={() => alterarEstado(reserva.id, "CONFIRMADA")}
                      className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Confirmar
                    </button>

                    <button
                      onClick={() => alterarEstado(reserva.id, "CANCELADA")}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ProprietarioLayout>
  );
}
