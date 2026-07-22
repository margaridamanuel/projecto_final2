import axios from "axios";
import { API_URL } from "../Config/api";

export const getDashboard = async (proprietarioId: number) => {
  const response = await axios.get(
    `${API_URL}/proprietario/${proprietarioId}/dashboard`,
  );

  return response.data;
};
