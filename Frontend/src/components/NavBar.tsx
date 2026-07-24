import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const navigate = useNavigate();

  const [utilizador, setUtilizador] = useState(
    localStorage.getItem("utilizador"),
  );

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    function atualizarUtilizador() {
      setUtilizador(localStorage.getItem("utilizador"));
    }

    window.addEventListener("logout", atualizarUtilizador);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("logout", atualizarUtilizador);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("utilizador");
    localStorage.removeItem("token");

    setUtilizador(null);

    navigate("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        {/* Logo */}

        <Link
          to="/"
          className={`text-3xl font-extrabold ${
            scroll ? "text-orange-600" : "text-white"
          }`}
        >
          Travel<span className="text-orange-500">Angola</span>
        </Link>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-10">
          <Link
            to="/Destinos"
            className={`font-medium transition ${
              scroll
                ? "text-gray-700 hover:text-orange-500"
                : "text-white hover:text-orange-300"
            }`}
          >
            Destinos
          </Link>

          <Link
            to="/Alojamentos"
            className={`font-medium transition ${
              scroll
                ? "text-gray-700 hover:text-orange-500"
                : "text-white hover:text-orange-300"
            }`}
          >
            Alojamentos
          </Link>

          <Link
            to="/sobre"
            className={`font-medium transition ${
              scroll
                ? "text-gray-700 hover:text-orange-500"
                : "text-white hover:text-orange-300"
            }`}
          >
            Sobre
          </Link>

          {utilizador ? (
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
