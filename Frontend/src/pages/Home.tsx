import NavBar from "../components/heroHome/navbarhome";
import HeroPremium from "../components/heroHome/HeroPremium";
import CardDestino from "../components/CardDestino";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const verMais = () => {
    navigate("/destinos");
  };
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

  const hoteis = [
    {
      id: 1,
      nome: "Epic Sana",
      localizacao: "Luanda",
      imagem: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      nome: "Hotel Presidente",
      localizacao: "Luanda",
      imagem: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    {
      id: 3,
      nome: "Cabo Ledo Resort",
      localizacao: "Cabo Ledo",
      imagem: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f5",
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

  const [resultados, setResultados] = useState(hoteis);
  const handleSearch = (data: any) => {
    const destino = data.destino.toLowerCase();

    const filtrados = hoteis.filter((hotel) =>
      hotel.localizacao.toLowerCase().includes(destino),
    );

    setResultados(filtrados);
  };

  return (
    <div className=" bg-white">
      <NavBar />
      <HeroPremium />
      <Footer />
    </div>
  );
}

export default Home;
