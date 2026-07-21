import { Navigate } from "react-router-dom";
import { authService } from "../service/authService";

type Props = {
  children: React.ReactNode;
  grupo: string;
};

export default function ProtectedRoute({ children, grupo }: Props) {
  const usuario = authService.getSession();

  // Não autenticado
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  // Não pertence ao grupo permitido
  if (!usuario.groups.includes(grupo)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
