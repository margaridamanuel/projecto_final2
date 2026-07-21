import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../Config/api";

export default function Reserva() {
  // dados recebidos da página de alojamentos
  const { id } = useParams();

  const [alojamento, setAlojamento] = useState<any>(null);

  useEffect(() => {
    async function carregarAlojamento() {
      try {
        console.log("ID recebido:", id);

        const response = await axios.get(`${API_URL}/alojamentos/${id}`);

        console.log("Resposta completa:", response);

        console.log("Dados recebidos:", response.data);

        setAlojamento(response.data.data ?? response.data);
      } catch (error) {
        console.error("Erro ao carregar alojamento:", error);
      }
    }

    if (id) {
      carregarAlojamento();
    }
  }, [id]);
  const [form, setForm] = useState({
    nome: "",
    apelido: "",
    email: "",
    morada: "",
    cidade: "",
    telefone: "",
    checkin: "",
    checkout: "",
  });

  const [mensagem, setMensagem] = useState("");

  // alterar campos
  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // calcular noites
  function calcularNoites() {
    if (!form.checkin || !form.checkout) return 0;

    const entrada = new Date(form.checkin);
    const saida = new Date(form.checkout);

    const diferenca = saida.getTime() - entrada.getTime();

    const noites = diferenca / (1000 * 60 * 60 * 24);

    return noites > 0 ? noites : 0;
  }

  const noites = calcularNoites();

  const total = alojamento ? noites * alojamento.preco : 0;

  async function finalizarReserva() {
    if (
      !form.nome ||
      !form.email ||
      !form.telefone ||
      !form.checkin ||
      !form.checkout
    ) {
      alert("Preencha todos os campos obrigatórios");

      return;
    }

    try {
      const dadosReserva = {
        checkIn: form.checkin,
        checkOut: form.checkout,
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
        alojamentoId: alojamento.id,
        total,
      };

      await axios.post(`${API_URL}/reservas`, dadosReserva);

      setMensagem("Reserva feita com sucesso!");

      // limpar formulário

      setForm({
        nome: "",
        apelido: "",
        email: "",
        morada: "",
        cidade: "",
        telefone: "",
        checkin: "",
        checkout: "",
      });
    } catch (error) {
      console.log(error);

      alert("Erro ao realizar reserva");
    }
  }

  if (!alojamento) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">A carregar alojamento...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-6">
        {/* RESUMO */}

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow">
            <h2 className="text-2xl font-bold">A sua seleção</h2>

            <img
              src={
                alojamento.imagem?.startsWith("http")
                  ? alojamento.imagem
                  : `http://localhost:3000/uploads/${alojamento.imagem}`
              }
              className="mt-5 rounded-2xl w-full h-60 object-cover"
            />

            <h3 className="text-xl font-bold mt-5">{alojamento.nome}</h3>

            <p>{alojamento.provincia}</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow">
            <h2 className="text-2xl font-bold">Preço</h2>

            <p className="mt-5">
              {alojamento.preco.toLocaleString()} Kz × {noites} noites
            </p>

            <hr className="my-4" />

            <h3 className="text-3xl font-bold text-orange-600">
              {total.toLocaleString()} Kz
            </h3>
          </div>
        </div>

        {/* FORMULARIO */}

        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow">
          <h1 className="text-4xl font-bold">Insira os seus dados</h1>

          {mensagem && (
            <div className="bg-green-100 text-green-700 p-4 rounded-xl mt-5">
              {mensagem}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              ["nome", "Nome"],
              ["apelido", "Apelido"],
              ["email", "Email"],
              ["morada", "Morada"],
              ["cidade", "Cidade"],
              ["telefone", "Telefone"],
            ].map(([campo, label]) => (
              <div key={campo}>
                <label>{label}</label>

                <input
                  name={campo}
                  value={(form as any)[campo]}
                  onChange={handleChange}
                  className="border rounded-xl p-4 w-full mt-2"
                />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <label>Data Entrada</label>

              <input
                type="date"
                name="checkin"
                value={form.checkin}
                onChange={handleChange}
                className="border rounded-xl p-4 w-full mt-2"
              />
            </div>

            <div>
              <label>Data Saída</label>

              <input
                type="date"
                name="checkout"
                value={form.checkout}
                onChange={handleChange}
                className="border rounded-xl p-4 w-full mt-2"
              />
            </div>
          </div>

          <button
            onClick={finalizarReserva}
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
