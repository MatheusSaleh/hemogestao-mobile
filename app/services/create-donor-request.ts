import axios, { AxiosError } from "axios";
import { API_URL } from "./api";
import { DonorEntity } from "@/domain/entities/DonorEntity";

const URL = `${API_URL}/donor/create-donor-mobile`;

export const createDonorRequest = async (donorData: DonorEntity): Promise<DonorEntity> => {
  try {
    const response = await axios.post(`${URL}`, donorData);
    if (response.status === 200 && response.data) {
      console.log(response.data);
      return response.data;
    }
    return {} as DonorEntity;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Erro Axios:", error.response?.data || error.message);
      if (error.response) {
      }
    } else {
      console.error("Erro desconhecido:", error);
    }
    return {} as DonorEntity;
  }
};
