import axios from "axios";
import { API_URL } from "../Config/api";

export const getDestinos = async () => {
  const response = await axios.get(`${API_URL}/destinos`);
  return response.data;
};
