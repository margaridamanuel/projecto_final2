import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <Link to="/" className="text-3xl font-bold text-orange-600">
        TravelAngola
      </Link>

      <div className="space-x-6">
        <Link to="/Destinos" className="text-orange-600  ">
          Destinos
        </Link>
        <Link to="/Alojamentos" className="text-orange-600 ">
          Alojamentos
        </Link>
        <Link to="/Login" className="text-orange-600 ">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
