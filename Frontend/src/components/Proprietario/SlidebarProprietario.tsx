import { Link, useLocation } from "react-router-dom";

const menu = [
  { nome: "Dashboard", rota: "/proprietario" },
  { nome: "Meus Alojamentos", rota: "/proprietario/alojamentos" },
  { nome: "Reservas", rota: "/proprietario/reservas" },
  { nome: "Perfil", rota: "/proprietario/perfil" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-blue-950 text-white min-h-screen">
      <div className="p-6 border-b border-blue-600">
        <h1 className="text-2xl font-bold">Travel Angola</h1>

        <p className="text-sm text-orange-100">Proprietário</p>
      </div>

      <nav className="mt-6">
        {menu.map((item) => (
          <Link
            key={item.rota}
            to={item.rota}
            className={`block px-6 py-4 transition ${
              location.pathname === item.rota
                ? "bg-blue-600"
                : "hover:bg-blue-700"
            }`}
          >
            {item.nome}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
