import axios from "axios";
axios.defaults.headers.common["Accept"] = "application/json";
const API_URL = "http://localhost:3000/";

/* -------- LISTAR USUÁRIOS -------- */
export const apiGetUsuarios = () => {
  return axios
    .get("http://localhost:3000/usuarios", {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") || "null",
        )}`,
      },
    })
    .then((response: any) => response.data)
    .catch((err) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};

export const apiGetUsuarioById = (id: number) => {
  return axios
    .get(`http://localhost:3000/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") || "null",
        )}`,
      },
    })
    .then((response: any) => response.data)
    .catch((err: any) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};

export const apiGetUsuarioByIdentificador = (identificador: string) => {
  return axios
    .get(`http://localhost:3000/usuarios/identificador/${identificador}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") || "null",
        )}`,
      },
    })
    .then((response: any) => response.data)
    .catch((err: any) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};
/* -------- CRIAR USUÁRIO -------- */
export const apiCreateUsuario = (data: {
  identificador: string;
  nome: string;
  role: string;
  activo: boolean;
  password?: string;
}) => {
  return axios
    .post("http://localhost:3000/usuarios", data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") || "null",
        )}`,
      },
    })
    .then((response: any) => response.data)
    .catch((err: any) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};

/* -------- ATUALIZAR USUÁRIO -------- */
export const apiUpdateUsuario = (
  id: number,
  data: Partial<{
    identificador: string;
    nome: string;
    role: string;
    activo: boolean;
    password: string;
  }>,
) => {
  return axios
    .put(`http://localhost:3000/usuarios/${id}`, data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") || "null",
        )}`,
      },
    })
    .then((response: any) => response.data)
    .catch((err: any) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};

/* -------- APAGAR USUÁRIO -------- */
export const apiDeleteUsuario = (id: string) => {
  return axios
    .delete(`http://localhost:3000/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("token") || "null",
        )}`,
      },
    })
    .then((response: any) => response.data)
    .catch((err: any) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};

export const apiSignIn = (identificador: string, password: string) => {
  return axios
    .post(
      "http://localhost:3000/login",
      {
        identificador,
        password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      },
    )
    .then((response: any) => {
      if (response) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response;
    })
    .catch((err: any) => {
      throw err.response?.data || { message: "Erro inesperado" };
    });
};

export const apiLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const apiRefreshSignIn = () => {
  return axios
    .get("http://localhost:3000/entrar")
    .then((response: any) => {
      return response.data;
    })
    .catch((error: any) => {
      return error;
    });
};
