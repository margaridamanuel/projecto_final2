import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import CardDestino from "../components/CardDestino";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const navigate = useNavigate();
  const destinations = [
    {
      title: "Quedas de Kalandula",
      description: "Uma das maiores quedas de água de África.",
      image:
        "https://i.pinimg.com/736x/6d/a3/14/6da314759e3e788fe685d8e10db58110.jpg",
    },

    {
      title: "Ilha do Mussulo",
      description: "Destino paradisíaco em Luanda.",
      image:
        "https://welcometoangola.co.ao/wp-content/uploads/2021/06/Ilha-de-Luanda....jpg",
    },
    {
      title: "Fenda da Tundavala",
      description:
        "Desfiladeiro com mais de 2.200 m de altitude e com vistas panorâmicas.",
      image:
        "https://welcometoangola.co.ao/wp-content/uploads/2021/11/e7e75f835299fe5f7ed1-1.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Ana Silva",
      comment: "A melhor experiência turística que já tive.",
    },
    {
      name: "Carlos Mendes",
      comment: "Excelente plataforma para reservas.",
    },
  ];

  const imagens = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
  ];

  return (
    <div className=" bg-white">
      <Navbar />
      <Hero />

      {/* DESTINOS */}
      <section className="p-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          Destinos em destaque
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {destinations.map((d, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img src={d.image} className="h-56 w-full object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-bold">{d.title}</h3>
                <p className="text-gray-600 mt-2">{d.description}</p>

                <div className="mt-4 flex justify-between items-center">
                  <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Experiências únicas
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {["Safari", "Praias", "Cultura", "Aventura"].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-900 text-white p-16 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Porquê escolher o TravelAngola?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold">Guias locais</h3>
            <p>Experiência autêntica com especialistas locais.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold"> Reservas seguras</h3>
            <p>Sistema confiável e fácil de usar.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold"> Experiência premium</h3>
            <p>Viagens pensadas para turistas exigentes.</p>
          </div>
        </div>
      </section>
      {/* <section className="p-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-10">
          O que dizem os viajantes
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="italic">"{t.comment}"</p>
              <h4 className="mt-4 font-bold">- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>
      {/*<section className="relative h-[350px] overflow-hidden">
        <div className="max-w-5xl mx-auto relative h-[350px] overflow-x-hidden rounded-2xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop
            className="absolute inset-0 h-full"
          >
            {imagens.map((imagem, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imagem}
                  alt={`Destino ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

         Fundo escurecido 
        <div className="absolute inset-0 bg-withe"></div>

        {/* Texto 
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para a tua próxima aventura?
          </h2>

          <p className="mb-6 text-lg">
            Explora Angola e cria memórias inesquecíveis.
          </p>

          <button
            onClick={() => navigate("/destinos")}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition"
          >
            Começar agora
          </button>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default Home;
