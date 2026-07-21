import { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [grupo, setGrupo] = useState("geral");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmarPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/utilizadores",
        {
          nome,
          email,
          password,
          grupo,
        },
      );

      console.log(response.data);
      alert("Utilizador criado com sucesso!");
    } catch (error) {
      //console.error(error);
      //alert("Erro ao criar utilizador.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "nome":
        setNome(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmarPassword(value);
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleRegister}
          className="bg-white p-10 shadow-md rounded-xl w-96"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">Criar Conta</h1>

          <input
            type="text"
            placeholder="Nome completo"
            name="nome"
            value={nome}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />

          <div className="mb-4">
            <label className="block mb-2 font-medium">Tipo de Conta</label>

            <select
              value={grupo}
              onChange={(e) => setGrupo(e.target.value)}
              className="w-full border p-3 rounded"
            >
              <option value="/geral">Turista</option>
              <option value="/host">Proprietário</option>
            </select>
          </div>

          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />

          <input
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            value={confirmarPassword}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />

          <button className="bg-orange-600 text-white w-full py-3 rounded hover:bg-orange-400">
            Registrar
          </button>

          <p className="text-center mt-4">
            Já possui uma conta?{" "}
            <Link to="/login" className="text-orange-600 font-semibold">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registro;
