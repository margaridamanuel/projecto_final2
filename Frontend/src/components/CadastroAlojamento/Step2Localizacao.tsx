type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step2Localizacao({ formData, setFormData }: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-2 font-semibold">Província</label>

        <select
          name="provincia"
          value={formData.provincia}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600"
        >
          <option value="">Selecione a província</option>

          <option>Luanda</option>
          <option>Bengo</option>
          <option>Benguela</option>
          <option>Bié</option>
          <option>Cabinda</option>
          <option>Cuando Cubango</option>
          <option>Cuanza Norte</option>
          <option>Cuanza Sul</option>
          <option>Cunene</option>
          <option>Huambo</option>
          <option>Huíla</option>
          <option>Lunda Norte</option>
          <option>Lunda Sul</option>
          <option>Malanje</option>
          <option>Moxico</option>
          <option>Namibe</option>
          <option>Uíge</option>
          <option>Zaire</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">Município</label>

        <input
          type="text"
          name="municipio"
          value={formData.municipio}
          onChange={handleChange}
          placeholder="Ex.: Talatona"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Endereço</label>

        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Rua, bairro..."
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600"
        />
      </div>
    </div>
  );
}
