function NavBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-blue-600">TravelAngola</h1>

      <div className="space-x-6">
        <a href="./Destinos" className="text-gray-600">
          Destinos
        </a>
        <a href="./Hotéis" className="text-gray-600">
          Hotéis
        </a>
        <a href="./Login" className="text-gray-600">
          Login
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
