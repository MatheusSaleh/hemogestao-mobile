import axios from "axios";
import { API_URL } from "./api";
import * as SecureStore from "expo-secure-store";
import { DonorEntity } from "@/domain/entities/DonorEntity";

const URL = `${API_URL}/auth`;

export const getAuthenticatedDonor = async (
  sub: string
): Promise<DonorEntity> => {
  const token = SecureStore.getItem("token");

  try {
    const response = await axios.get(`${URL}/get-authenticated-donor/${sub}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      return {} as DonorEntity;
    }
  } catch (error) {
    console.error("Erro ao buscar doador autenticado:", error);
    return {} as DonorEntity;
  }
};
