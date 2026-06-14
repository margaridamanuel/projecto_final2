import NavBar from "../components/NavBar";

function Login() {
  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-10 shadow-md rounded-xl w-96">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full border p-3 mb-4"
          />

          <button className="bg-blue-700 text-white w-full py-3 rounded">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
