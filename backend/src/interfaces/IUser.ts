export interface IUser {
  id: number;
  nome: string;
  email: string;
  password: string;
  keycloakId: string;
  role: "ADMIN" | "PROPRIETARIO" | "CLIENTE";
}
