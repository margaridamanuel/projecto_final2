export interface Usuario {
  id: number;
  identificador: string;
  nome: string;
  role: string;
  activo: boolean;
}

export interface AuthState {
  users: Usuario[];
  user: Usuario | null;
  loading: boolean;
  error: string | null;
}
