import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { authService, Usuario } from "../service/authService";
import React from "react";

function Login({ onLogin }: { onLogin: (usuario: Usuario) => void }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [erro, setErro] = React.useState("");
  const [carregando, setCarregando] = React.useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const usuario = await authService.login({ username, password });

      // guardar utilizador logado
      localStorage.setItem("utilizador", JSON.stringify(usuario));

      onLogin(usuario);
    } catch (error) {
      setErro(
        error instanceof Error ? error.message : "Não foi possível fazer login",
      );
    } finally {
      setCarregando(false);
    }
  }
  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-10 shadow-md rounded-xl w-96">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border p-3 mb-4"
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border p-3 mb-4"
          />

          <button
            className="bg-orange-600 text-white w-full py-3 rounded"
            type="submit"
            onClick={submit}
            disabled={carregando}
          >
            Entrar
          </button>
          <p className="text-center mt-4">
            Não possui conta?{" "}
            <Link to="/Registro" className="text-orange-600 font-semibold">
              Criar conta
            </Link>
          </p>
          <p className="text-center mt-4">
            Deseja cadastrar um alojamento?{" "}
            <Link to="/cadastro-alojamento" className="text-orange-600 ">
              Cadastrar Alojamento
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
