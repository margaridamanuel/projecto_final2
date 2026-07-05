import axios from "axios";
import { API_URL } from "../Config/api";

export const getAlojamentos = async () => {
  const response = await axios.get(`${API_URL}/alojamentos`);
  return response.data;
};
