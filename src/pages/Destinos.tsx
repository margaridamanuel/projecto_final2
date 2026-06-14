import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

const Destinos = () => {
  const [destinos, setDestinos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/destinos")
      .then((res) => res.json())
      .then((data) => setDestinos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />

      <h1>Página Destinos</h1>
    </div>
  );
};

export default Destinos;
