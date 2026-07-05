type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

export default function Step4Fotos({ formData, setFormData }: Props) {
  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    setFormData({
      ...formData,
      fotos: Array.from(e.target.files),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Fotografias</h2>

      <p className="text-gray-500 mb-6">
        Adicione fotografias de boa qualidade do seu alojamento.
      </p>

      <label className="border-2 border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-green-600 transition">
        <span className="text-5xl mb-4"></span>

        <span className="font-semibold">
          Clique para selecionar fotografias
        </span>

        <span className="text-sm text-gray-500 mt-2">
          Pode selecionar várias imagens.
        </span>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFiles}
          className="hidden"
        />
      </label>

      {formData.fotos.length > 0 && (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {formData.fotos.map((foto: File, index: number) => (
            <img
              key={index}
              src={URL.createObjectURL(foto)}
              alt=""
              className="w-full h-40 object-cover rounded-lg shadow"
            />
          ))}
        </div>
      )}
    </div>
  );
}
