import { useState } from "react";
interface props {
  imagens: string[];
}
export default function GaleriaDestino({ imagens }: props) {
  const [imagemPrincipal, setImagemPrincipal] = useState(imagens[0]);
  return (
    <div>
      <img
        src={imagemPrincipal}
        className="w-full h-[500px] object-cover rounded-3xl"
      />
      <div className="grid grid-cols-4 gap-4 mt-5">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            src={imagem}
            onClick={() => setImagemPrincipal(imagem)}
            className="h-32 w-full object-cover rounded-xl cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}
