import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import CardDestino from "../components/CardDestino";
import CardDepoimento from "../components/CardDepoimento";
import ProvinciaDestaque from "../components/ProvinciaDestaque";
import Footer from "../components/Footer";

function Home() {
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

  return (
    <div>
      <Navbar />

      <Hero />

      {/* DESTINOS */}
      <section className="p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Destinos Populares
        </h2>

        <div className="grid md:grid-cols-3 gap-20">
          {destinations.map((destination, index) => (
            <CardDestino
              key={index}
              title={destination.title}
              description={destination.description}
              image={destination.image}
            />
          ))}
        </div>
      </section>
      <ProvinciaDestaque />

      {/* TESTEMUNHOS */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Comentários dos Clientes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <CardDepoimento
              key={index}
              name={testimonial.name}
              comment={testimonial.comment}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
