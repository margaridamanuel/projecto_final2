type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step5Conta({ formData, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-2 font-semibold">Nome do Proprietário</label>

        <input
          type="text"
          name="proprietario"
          value={formData.proprietario}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-600 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Telefone</label>

        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Palavra-passe</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">
          Confirmar Palavra-passe
        </label>

        <input
          type="password"
          name="confirmarPassword"
          value={formData.confirmarPassword}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>
    </div>
  );
}
