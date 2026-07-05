// Footer.tsx

function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* LOGO */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-orange-600">
            TravelAngola
          </h2>
          <p className="text-gray-800 leading-7">
            Descubra as maravilhas de Angola e encontre os melhores destinos
            turísticos do país.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-5">
            Links Rápidos
          </h3>

          <ul className="space-y-3 text-gray-800">
            <li className="hover:text-orange-600 cursor-pointer transition">
              Início
            </li>

            <li className="hover:text-orange-600 cursor-pointer transition">
              Destinos
            </li>

            <li className="hover:text-orange-600 cursor-pointer transition">
              Reservas
            </li>

            <li className="hover:text-orange-600 cursor-pointer transition">
              Hotéis
            </li>

            <li className="hover:text-orange-600 cursor-pointer transition">
              Contactos
            </li>
          </ul>
        </div>

        {/* CONTACTOS */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-5">
            Contactos
          </h3>

          <div className="space-y-3 text-gray-800">
            <p>Luanda, Angola</p>
            <p> +244 900 000 000</p>
            <p>contato@travelangola.com</p>
          </div>
        </div>

        {/* REDES */}
        <div>
          <h3 className="text-orange-600 text-xl font-semibold mb-5">
            Redes Sociais
          </h3>

          <div className="flex flex-col gap-3 text-gray-800">
            <span className="hover:text-orange-600 cursor-pointer transition">
              Facebook
            </span>

            <span className="hover:text-orange-600 cursor-pointer transition">
              Instagram
            </span>

            <span className="hover:text-orange-600 cursor-pointer transition">
              TikTok
            </span>

            <span className="hover:text-orange-600 cursor-pointer transition">
              YouTube
            </span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-800 text-sm">
        © 2026 TravelAngola — Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
