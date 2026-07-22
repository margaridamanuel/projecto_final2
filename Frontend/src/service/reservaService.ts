import axios from "axios";
import { API_URL } from "../Config/api";

export async function getReservas() {
  const response = await axios.get(`${API_URL}/reservas`);

  console.log("RESPOSTA COMPLETA:", response);

  return response.data;
}
