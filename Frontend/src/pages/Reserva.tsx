import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { quartos } from "../data/quartos";
export default function Reserva() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className=" max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-6">
        {/* Coluna esquerda */}
        <div className="space-y-6">
          {/* A sua seleção */}
          <div className="bg-white p-6 rounded-3xl shadow">
            <h2 className="text-2xl font-bold">A sua seleção</h2>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              className=" mt-5 rounded-2xl"
            />

            <h3 className="text-xl font-bold mt-5">Hotel Epic Sana</h3>
            <p className="mt-3"> Luanda</p>
            <p className="mt-3">Quarto Standard</p>
          </div>
          {/* Resumo do preço */}
          <div className="bg-white p-6 rounded-3xl shadow">
            <h2 className="text-2xl font-bold">Preço</h2>
            <div className="mt-5">
              <p>80.000 Kz × 3 noites</p>
              <hr className="my-4" />
              <h3 className="text-3xl font-bold text-orange-600">240.000 Kz</h3>
            </div>
          </div>
        </div>
        {/* Coluna direita */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow">
          <h1 className="text-4xl font-bold">Insira os seus dados</h1>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div>
              <label>Nome</label>

              <input
                className="
                border
                rounded-xl
                p-4
                w-full
                mt-2
                "
              />
            </div>

            <div>
              <label>Apelido</label>

              <input
                className="
                border
                rounded-xl
                p-4
                w-full
                mt-2
                "
              />
            </div>
          </div>

          <div className="mt-6">
            <label>Email</label>

            <input
              className="
              border
              rounded-xl
              p-4
              w-full
              mt-2
              "
            />
          </div>

          <div className="mt-6">
            <label>Morada</label>

            <input
              className="
              border
              rounded-xl
              p-4
              w-full
              mt-2
              "
            />
          </div>

          <div className="mt-6">
            <label>Cidade</label>

            <input
              className="
              border
              rounded-xl
              p-4
              w-full
              mt-2
              "
            />
          </div>

          <div className="mt-6">
            <label>Telefone</label>

            <input
              className="
              border
              rounded-xl
              p-4
              w-full
              mt-2
              "
            />
          </div>

          <button
            className="
            w-full
            mt-10
            bg-orange-600
            text-white
            py-4
            rounded-2xl
            text-xl
            hover:bg-orange-700
            "
          >
            Finalizar Reserva
          </button>
        </div>
      </div>
    </div>
  );
}
