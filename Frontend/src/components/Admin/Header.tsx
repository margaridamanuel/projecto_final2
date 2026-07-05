export default function Header() {
  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-gray-700">
        Painel Administrativo
      </h2>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-orange-700 text-white flex items-center justify-center font-bold">
          A
        </div>

        <div>
          <p className="font-semibold">Administrador</p>

          <p className="text-sm text-gray-500">admin@travelangola.com</p>
        </div>
      </div>
    </header>
  );
}
