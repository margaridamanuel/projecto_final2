import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <div className="text-gray-500 mb-8">
      <Link to="/">Home</Link>
      {" > "}
      <Link to="/destinos">Destinos</Link>
      {" > "}
      Malanje
    </div>
  );
}
