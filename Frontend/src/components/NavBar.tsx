import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();

  const [utilizador, setUtilizador] = useState(
    localStorage.getItem("utilizador"),
  );

  const logout = () => {
    localStorage.removeItem("utilizador");
    localStorage.removeItem("token");

    setUtilizador(null);

    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <Link to="/" className="text-3xl font-bold text-orange-600">
        TravelAngola
      </Link>

      <div className="space-x-6">
        <Link to="/Destinos" className="text-orange-600">
          Destinos
        </Link>

        <Link to="/Alojamentos" className="text-orange-600">
          Alojamentos
        </Link>

        {utilizador ? (
          <button onClick={logout} className="text-red-600 font-semibold">
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-orange-600 font-semibold">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
