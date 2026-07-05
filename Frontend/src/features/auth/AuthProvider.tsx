import { useEffect, useState } from "react";
import keycloak from "./keycloak";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    keycloak
      .init({
        onLoad: "login-required",
        checkLoginIframe: false,
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error: unknown) => {
        console.error("Erro ao inicializar o Keycloak:", error);
      });
  }, []);

  if (loading) {
    return <p>A carregar...</p>;
  }

  return <>{children}</>;
}
