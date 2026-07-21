import { useState } from "react";
import axios from "axios";

import { API_URL } from "../Config/api";
import { authService } from "../service/authService";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

import Stepper from "../components/CadastroAlojamento/Stepper";
import Step1Informacoes from "../components/CadastroAlojamento/Step1Informacoes";
import Step2Localizacao from "../components/CadastroAlojamento/Step2Localizacao";
import Step3Servicos from "../components/CadastroAlojamento/Step3Servico";
import Step4Fotos from "../components/CadastroAlojamento/Step4Fotos";

export default function CadastroAlojamento() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Etapa 1
    nome: "",
    categoria: "",
    descricao: "",
    quartos: "",
    preco: "",

    // Etapa 2
    provincia: "",
    municipio: "",
    endereco: "",

    // Etapa 3
    servicos: [] as string[],

    // Etapa 4
    fotos: [] as File[],
  });

  const nextStep = () => {
    if (step === 1) {
      if (
        !formData.nome ||
        !formData.categoria ||
        !formData.descricao ||
        !formData.quartos ||
        !formData.preco
      ) {
        alert("Preencha todos os campos da etapa 1.");
        return;
      }
    }

    if (step === 2) {
      if (!formData.provincia || !formData.municipio || !formData.endereco) {
        alert("Preencha todos os campos da localização.");
        return;
      }
    }

    if (step === 3) {
      if (formData.servicos.length === 0) {
        alert("Selecione pelo menos um serviço.");
        return;
      }
    }

    if (step < 4) {
      setStep(step + 1);
    }
  };

  const finalizarCadastro = async () => {
    const usuario = authService.getSession();

    if (!usuario) {
      alert("Precisa estar autenticado.");
      return;
    }

    try {
      const dados = new FormData();

      dados.append("nome", formData.nome);

      dados.append("categoria", formData.categoria);

      dados.append("descricao", formData.descricao);

      dados.append("quartos", String(formData.quartos));

      dados.append("preco", String(formData.preco));

      dados.append("provincia", formData.provincia);

      dados.append("municipio", formData.municipio);

      dados.append("endereco", formData.endereco);

      dados.append("servicos", JSON.stringify(formData.servicos));

      // ID do proprietário autenticado
      dados.append("proprietarioId", String(usuario.id));

      formData.fotos.forEach((foto) => {
        dados.append("fotos", foto);
      });

      const resposta = await axios.post(`${API_URL}/alojamentos`, dados, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("ALOJAMENTO CRIADO:", resposta.data);

      alert("Alojamento cadastrado com sucesso!");

      // limpar formulário
      setFormData({
        nome: "",
        categoria: "",
        descricao: "",
        quartos: "",
        preco: "",
        provincia: "",
        municipio: "",
        endereco: "",
        servicos: [],
        fotos: [],
      });

      setStep(1);
    } catch (erro) {
      console.error("ERRO AO CADASTRAR ALOJAMENTO:", erro);

      alert("Erro ao cadastrar alojamento.");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center text-orange-700">
            Cadastre o seu Alojamento
          </h1>

          <p className="text-center text-gray-500 mt-3 mb-10">
            Faça parte da Travel Angola e receba turistas de todo o mundo.
          </p>

          <Stepper currentStep={step} />

          <div className="min-h-[350px] flex items-center justify-center border rounded-xl bg-gray-50">
            {step === 1 && (
              <Step1Informacoes formData={formData} setFormData={setFormData} />
            )}

            {step === 2 && (
              <Step2Localizacao formData={formData} setFormData={setFormData} />
            )}

            {step === 3 && (
              <Step3Servicos formData={formData} setFormData={setFormData} />
            )}

            {step === 4 && (
              <Step4Fotos formData={formData} setFormData={setFormData} />
            )}
          </div>

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="px-6 py-3 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
              >
                Voltar
              </button>
            )}

            {step < 4 ? (
              <button
                onClick={nextStep}
                className="ml-auto px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
              >
                Próximo
              </button>
            ) : (
              <button
                onClick={finalizarCadastro}
                className="ml-auto px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
              >
                Finalizar Cadastro
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
