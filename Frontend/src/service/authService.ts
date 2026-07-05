import { API_URL } from "../Config/api";

const ACCESS_TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "usuario";

export type LoginRequest = {
  username: string;
  password: string;
};

export type Usuario = {
  name: string;
  groups: string[];
  accessToken: string;
  refreshToken: string;
};

type LoginResponse = {
  response?: {
    statusCode: number;
    message: string;
  };
  data?: {
    accessToken?: string;
    refreshToken?: string;
    userInfo?: {
      name?: string;
      groups?: string[];
      preferred_username?: string;
      email?: string;
    };
    groups?: string[];
  };
  name?: string;
  groups?: string[];
  AccesToken?: string;
  AccessToken?: string;
  accessToken?: string;
  RefreshToken?: string;
  refreshToken?: string;
};

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Erro ao comunicar com a API");
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function normalizeLoginResponse(data: LoginResponse): Usuario {
  const userInfo = data.data?.userInfo;

  return {
    name: userInfo?.name ?? data.name ?? userInfo?.preferred_username ?? "",
    groups: data.data?.groups ?? userInfo?.groups ?? data.groups ?? [],
    accessToken:
      data.data?.accessToken ??
      data.AccesToken ??
      data.AccessToken ??
      data.accessToken ??
      "",
    refreshToken:
      data.data?.refreshToken ?? data.RefreshToken ?? data.refreshToken ?? "",
  };
}

export const authService = {
  async login(credentials: LoginRequest) {
    const data = await request<LoginResponse>("/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const usuario = normalizeLoginResponse(data);

    sessionStorage.setItem(ACCESS_TOKEN_KEY, usuario.accessToken);
    sessionStorage.setItem(REFRESH_TOKEN_KEY, usuario.refreshToken);
    sessionStorage.setItem(USER_KEY, JSON.stringify(usuario));

    return usuario;
  },

  getSession() {
    const usuarioSalvo = sessionStorage.getItem(USER_KEY);
    const accessToken = sessionStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = sessionStorage.getItem(REFRESH_TOKEN_KEY);

    if (!usuarioSalvo || !accessToken || !refreshToken) {
      return null;
    }

    try {
      return JSON.parse(usuarioSalvo) as Usuario;
    } catch {
      this.logout();
      return null;
    }
  },

  logout() {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
  },
};
