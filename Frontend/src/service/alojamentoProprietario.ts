import axios from "axios";
import { API_URL } from "../Config/api";

export const eliminarAlojamento = async (id: number) => {
  return axios.delete(`${API_URL}/alojamentos/${id}`);
};
export async function atualizarAlojamento(id: number, dados: any) {
  return axios.put(`${API_URL}/alojamentos/${id}`, dados);
}
