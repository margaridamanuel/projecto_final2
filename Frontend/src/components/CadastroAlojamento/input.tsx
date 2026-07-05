type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

export default function Input({
  label,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block font-semibold text-gray-700">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-lg border p-3 outline-none transition
        ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-400"
            : "border-gray-300 focus:ring-2 focus:ring-orange-600"
        }`}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
