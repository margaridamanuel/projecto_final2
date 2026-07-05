import { Link, useLocation } from "react-router-dom";

const menu = [
  { nome: "Dashboard", rota: "/admin" },
  { nome: "Alojamentos", rota: "/admin/alojamentos" },
  { nome: "Reservas", rota: "/admin/reservas" },
  { nome: "Utilizadores", rota: "/admin/utilizadores" },
  { nome: "Avaliações", rota: "/admin/avaliacoes" },
  { nome: "Configurações", rota: "/admin/configuracoes" },
];
export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-700 text-white min-h-screen">
      <div className="p-6 border-b border-slate-600">
        <h1 className="text-2xl font-bold">Travel Angola</h1>

        <p className="text-sm text-orange-100">Administração</p>
      </div>

      <nav className="mt-6">
        {menu.map((item) => (
          <Link
            key={item.rota}
            to={item.rota}
            className={`block px-6 py-4 transition ${
              location.pathname === item.rota
                ? "bg-slate-600"
                : "hover:bg-slate-600"
            }`}
          >
            {item.nome}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
