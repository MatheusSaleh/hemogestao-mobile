import { DonationEntity } from "@/domain/entities/DonationEntity";
import { API_URL } from "./api";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
const URL = `${API_URL}/donation`;

export const getDonorDonationsRequest = async (
  idDonor: number
): Promise<DonationEntity[]> => {
  const token = await SecureStore.getItemAsync("token");

  if(!token) {
    return [] as DonationEntity[];
  }

  try {
    const response = await axios.get(`${URL}/donor/${idDonor}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200 && response.data) {
      return response.data;
    } else {
      return [] as DonationEntity[];
    }
  } catch (error) {
    console.error("Erro ao buscar doações do doador:", error);
    return [] as DonationEntity[];
  }
};