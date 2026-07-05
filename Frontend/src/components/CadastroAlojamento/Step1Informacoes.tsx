type FormData = {
  nome: string;
  categoria: string;
  descricao: string;
  quartos: string;
  preco: string;

  provincia: string;
  municipio: string;
  endereco: string;

  servicos: string[];
  fotos: File[];

  proprietario: string;
  email: string;
  telefone: string;
  password: string;
  confirmarPassword: string;
};

type Props = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Step1Informacoes({ formData, setFormData }: Props) {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block mb-2 font-semibold">Nome do alojamento</label>

        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Ex.: Hotel Miramar"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-600 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-semibold">Categoria</label>

        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-600 outline-none"
        >
          <option value="">Selecione</option>
          <option>Hotel</option>
          <option>Resort</option>
          <option>Pousada</option>
          <option>Hospedaria</option>
          <option>Apartamento</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-semibold">Descrição</label>

        <textarea
          rows={5}
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descreva o alojamento..."
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-600 outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold">Número de quartos</label>

          <input
            type="number"
            name="quartos"
            value={formData.quartos}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-600 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Preço por noite (Kz)
          </label>

          <input
            type="number"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-600 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
