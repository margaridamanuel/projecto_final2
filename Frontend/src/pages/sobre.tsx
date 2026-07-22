import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Target, Eye, HeartHandshake } from "lucide-react";

export default function Sobre() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="h-[60vh] bg-blue-900 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl font-bold">Sobre a TravelAngola</h1>

          <p className="mt-4 text-lg max-w-2xl">
            Descubra os destinos mais incríveis de Angola, encontre alojamentos
            e planeie a sua próxima aventura.
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-orange-600 mb-6">Quem Somos</h2>

        <p className="text-gray-600 leading-8">
          A TravelAngola é uma plataforma dedicada à promoção do turismo em
          Angola, reunindo destinos, alojamentos e informações úteis num único
          lugar. O nosso objetivo é facilitar o planeamento de viagens e
          valorizar as riquezas naturais, culturais e históricas do país.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-xl transition">
            <Target className="mx-auto text-orange-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">Missão</h3>
            <p className="text-gray-600">
              Promover o turismo em Angola através da tecnologia.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-xl transition">
            <Eye className="mx-auto text-orange-600 mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-3">Visão</h3>
            <p className="text-gray-600">
              Ser a principal plataforma turística de Angola.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-xl transition">
            <HeartHandshake
              className="mx-auto text-orange-600 mb-4"
              size={40}
            />
            <h3 className="text-xl font-semibold mb-3">Valores</h3>
            <p className="text-gray-600">
              Inovação, qualidade, confiança e compromisso com o turismo.
            </p>
          </div>
        </div>
      </section>

      {/* Porque escolher */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-orange-600 mb-10">
            Porque escolher a TravelAngola?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>✔ Destinos turísticos de norte a sul do país.</div>
            <div>✔ Alojamentos cuidadosamente selecionados.</div>
            <div>✔ Pesquisa rápida e intuitiva.</div>
            <div>✔ Informações atualizadas.</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
