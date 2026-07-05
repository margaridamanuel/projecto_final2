import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Stepper from "../components/CadastroAlojamento/Stepper";
import Step1Informacoes from "../components/CadastroAlojamento/Step1Informacoes";
import Step2Localizacao from "../components/CadastroAlojamento/Step2Localizacao";
import Step3Servicos from "../components/CadastroAlojamento/Step3Servico";
import Step4Fotos from "../components/CadastroAlojamento/Step4Fotos";
import Step5Conta from "../components/CadastroAlojamento/Step5Conta";

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

    // Etapa 5
    proprietario: "",
    email: "",
    telefone: "",
    password: "",
    confirmarPassword: "",
  });

  const nextStep = () => {
    // Etapa 1
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

    // Etapa 2
    if (step === 2) {
      if (!formData.provincia || !formData.municipio || !formData.endereco) {
        alert("Preencha todos os campos da localização.");
        return;
      }
    }

    // Etapa 3
    if (step === 3) {
      if (formData.servicos.length === 0) {
        alert("Selecione pelo menos um serviço.");
        return;
      }
    }

    // Etapa 4
    if (step === 4) {
      if (formData.fotos.length === 0) {
        alert("Adicione pelo menos uma fotografia.");
        return;
      }
    }

    if (step < 5) {
      setStep(step + 1);
    }
  };

  const finalizarCadastro = () => {
    if (!formData.proprietario) {
      alert("Informe o nome do proprietário.");
      return;
    }

    if (!formData.email) {
      alert("Informe o e-mail.");
      return;
    }

    if (!formData.telefone) {
      alert("Informe o telefone.");
      return;
    }

    if (!formData.password) {
      alert("Informe a palavra-passe.");
      return;
    }

    if (formData.password !== formData.confirmarPassword) {
      alert("As palavras-passe não coincidem.");
      return;
    }

    // Aqui, mais tarde, vamos enviar os dados para o backend.
    console.log(formData);

    alert("Cadastro realizado com sucesso!");
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
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

          {/* Barra de progresso (temporária) */}
          <Stepper currentStep={step} />

          {/* Conteúdo */}
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
            {step === 5 && (
              <Step5Conta formData={formData} setFormData={setFormData} />
            )}
          </div>

          {/* Botões */}
          <div className="flex justify-between mt-8">
            {step < 5 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
              >
                Próximo
              </button>
            ) : (
              <button
                onClick={finalizarCadastro}
                className="px-6 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700"
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
