import axios from "axios";
import { API_URL } from "../Config/api";

export const getAlojamentos = async () => {
  const response = await axios.get(`${API_URL}/alojamentos`);
  return response.data;
};

// Aprovar alojamento
export const aprovarAlojamento = async (id: number) => {
  const response = await axios.patch(`${API_URL}/alojamentos/${id}/status`, {
    status: "APROVADO",
  });

  return response.data;
};

// Rejeitar alojamento
export const rejeitarAlojamento = async (id: number) => {
  const response = await axios.patch(`${API_URL}/alojamentos/${id}/status`, {
    status: "REJEITADO",
  });

  return response.data;
};
