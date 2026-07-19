export default function Header() {
  return (
    <header className="bg-white shadow-sm h-20 flex items-center justify-between px-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Painel do Proprietário
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
          P
        </div>

        <div>
          <p className="font-semibold">Proprietário</p>
          <p className="text-gray-500 text-sm">proprietario@travelangola.com</p>
        </div>
      </div>
    </header>
  );
}
