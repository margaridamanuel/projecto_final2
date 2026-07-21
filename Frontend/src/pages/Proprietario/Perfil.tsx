import { useEffect, useState } from "react";
import ProprietarioLayout from "../../components/Proprietario/ProprietarioLayout";
import { authService } from "../../service/authService";

export default function PerfilProprietario() {
  const [usuario, setUsuario] = useState<any>(null);

  useEffect(() => {
    const user = authService.getSession();

    if (user) {
      setUsuario(user);
    }
  }, []);

  if (!usuario) {
    return (
      <ProprietarioLayout>
        <h1 className="text-2xl font-bold">Utilizador não encontrado</h1>
      </ProprietarioLayout>
    );
  }

  return (
    <ProprietarioLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>

        <div className="bg-white shadow rounded-xl p-8">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 rounded-full bg-orange-600 text-white flex items-center justify-center text-3xl font-bold">
              {usuario.nome?.charAt(0)}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">{usuario.nome}</h2>

              <p className="text-gray-500">Proprietário de Alojamento</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-gray-500">Nome</label>

              <p className="font-medium">{usuario.nome}</p>
            </div>

            <div>
              <label className="text-gray-500">Email</label>

              <p className="font-medium">{usuario.email}</p>
            </div>

            <div>
              <label className="text-gray-500">Grupo</label>

              <p className="font-medium">{usuario.groups?.join(", ")}</p>
            </div>

            <div>
              <label className="text-gray-500">ID do utilizador</label>

              <p className="font-medium">{usuario.id}</p>
            </div>
          </div>

          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg">
            Editar Perfil
          </button>
        </div>
      </div>
    </ProprietarioLayout>
  );
}
