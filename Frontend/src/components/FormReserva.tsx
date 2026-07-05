import { useState } from "react";

function FormReserva() {
  const [formData, setFormData] = useState({
    checkin: "",
    checkout: "",
    guests: 1,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    alert("Reserva realizada com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fazer Reserva</h2>
      <input
        type="date"
        name="checkin"
        onChange={handleChange}
        className="w-full border p-3 mb-4"
      />

      <input
        type="date"
        name="checkout"
        onChange={handleChange}
        className="w-full border p-3 mb-4"
      />

      <input
        type="number"
        name="guests"
        placeholder="Número de hóspedes"
        onChange={handleChange}
        className="w-full border p-3 mb-4"
      />

      <button className="bg-green-600 text-white px-4 py-3 rounded w-full">
        Confirmar Reserva
      </button>
    </form>
  );
}

export default FormReserva;
