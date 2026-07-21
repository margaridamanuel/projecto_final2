import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";

const slides = [
  {
    titulo: "ANGOLA",
    descricao: "Descubra Angola",
    imagem: "https://picsum.photos/id/1018/1920/1080",
  },
  {
    titulo: "MALANJE",
    descricao: "Pedras Negras de Pungo Andongo",
    imagem:
      "https://i.pinimg.com/originals/d2/1e/62/d21e62ed2e0ad5745717e36d393d1183.jpg",
  },
  {
    titulo: "LUANDA",
    descricao: "Miradouro da Lua",
    imagem:
      "https://images.pexels.com/photos/15787520/pexels-photo-15787520.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
  },
];

const destinos = [
  {
    nome: "Quedas de Kalandula",
    provincia: "Malanje",
    imagem:
      "https://i.pinimg.com/736x/99/9c/c5/999cc5247f1691b0f7bad951d78d6eb9.jpg",
  },
  {
    nome: "Ilha do Mussulo",
    provincia: "Luanda",
    imagem:
      "https://welcometoangola.co.ao/wp-content/uploads/2021/06/Ilha-de-Luanda....jpg",
  },
  {
    nome: "Fenda da Tundavala",
    provincia: "Huíla",
    imagem:
      "https://i.pinimg.com/1200x/e8/3c/93/e83c9345018642ecb98c8adb8f1a9c2b.jpg",
  },
];
export default function HeroPremium() {
  const navigate = useNavigate();
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section className="relative h-screen">
            <img
              src={slide.imagem}
              alt={slide.titulo}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex h-full items-center justify-between px-20">
              <div className="max-w-xl">
                <p className="uppercase tracking-[8px] text-white mb-4">
                  Explore Angola
                </p>

                <h1 className="text-7xl font-black text-white leading-none">
                  {slide.titulo}
                </h1>

                <p className="mt-8 text-lg text-gray-200">{slide.descricao}</p>

                <button
                  onClick={() => navigate("/destinos")}
                  className="mt-8 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold transition shadow-xl"
                >
                  Explorar Destinos →
                </button>
              </div>

              {/* Cartões */}

              <div className="hidden lg:flex gap-6">
                {destinos.map((destino, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105 ${
                      index === 0
                        ? "w-60 h-[420px]"
                        : index === 1
                          ? "w-56 h-[360px] mt-10"
                          : "w-52 h-[300px] mt-20"
                    }`}
                  >
                    <img
                      src={destino.imagem}
                      alt={destino.nome}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm">{destino.provincia}</p>

                      <h3 className="text-2xl font-bold">{destino.nome}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
