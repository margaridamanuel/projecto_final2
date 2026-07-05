function CardDestino({ image, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Reservar
        </button>
      </div>
    </div>
  );
}

export default CardDestino;
