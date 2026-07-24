import { Link, useLocation, useNavigate } from "react-router-dom";
import { authService } from "../../service/authService";

const menu = [
  { nome: "Dashboard", rota: "/admin" },
  { nome: "Alojamentos", rota: "/admin/alojamentos" },
  { nome: "Reservas", rota: "/admin/reservas" },
  { nome: "Utilizadores", rota: "/admin/utilizadores" },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function sair() {
    authService.logout();

    // limpar dados guardados no login
    localStorage.removeItem("utilizador");
    localStorage.removeItem("token");

    sessionStorage.clear();

    navigate("/login");
  }

  return (
    <aside className="w-64 bg-slate-700 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-slate-600">
        <h1 className="text-2xl font-bold">Travel Angola</h1>

        <p className="text-sm text-orange-100">Administração</p>
      </div>

      <nav className="mt-6 flex-1">
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

      <div className="p-6">
        <button
          onClick={sair}
          className="
            w-full
            bg-red-600
            hover:bg-red-700
            text-white
            py-3
            rounded-lg
            transition
          "
        >
          Sair
        </button>
      </div>
    </aside>
  );
}
