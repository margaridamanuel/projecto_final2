const servicosDisponiveis = [
  "Wi-Fi",
  "Piscina",
  "Restaurante",
  "Bar",
  "Estacionamento",
  "Ar condicionado",
  "Pequeno-almoço",
  "Lavandaria",
  "Ginásio",
  "Transfer",
];

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step3Servicos({ formData, setFormData }: Props) {
  const toggleServico = (servico: string) => {
    const existe = formData.servicos.includes(servico);

    if (existe) {
      setFormData({
        ...formData,
        servicos: formData.servicos.filter((s: string) => s !== servico),
      });
    } else {
      setFormData({
        ...formData,
        servicos: [...formData.servicos, servico],
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Serviços e Comodidades</h2>

      <p className="text-gray-500 mb-6">
        Selecione os serviços oferecidos pelo seu alojamento.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {servicosDisponiveis.map((servico) => (
          <label
            key={servico}
            className="flex items-center gap-3 border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={formData.servicos.includes(servico)}
              onChange={() => toggleServico(servico)}
            />

            <span>{servico}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
