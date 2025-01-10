import axios, { AxiosError } from "axios";
import { API_URL } from "./api";

const URL = `${API_URL}/auth`;

export const loginRequest = async (loginData: {
  login: string;
  password: string;
}): Promise<boolean> => {
  console.log(loginData);
  try {
    const response = await axios.post(`${URL}/login`, loginData);
    if (response.status === 200 && response.data) {
      return true;
    }
    return false;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Erro Axios:", error.response?.data || error.message);
      if (error.response) {
        console.log("Resposta de erro do servidor:", error.response.status, error.response.data);
      }
    } else {
      console.error("Erro desconhecido:", error);
    }
    return false;
  }
};
