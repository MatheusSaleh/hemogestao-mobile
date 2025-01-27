import axios, { AxiosError } from "axios";
import { API_URL } from "./api";

const URL = `${API_URL}/auth`;

import * as SecureStore from "expo-secure-store";

export const loginRequest = async (loginData: {
  login: string;
  password: string;
}): Promise<boolean> => {
  try {
    const response = await axios.post(`${URL}/login`, loginData);
    if (response.status === 200 && response) {
      const token = response.data;
      await SecureStore.setItemAsync("token", token);
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
