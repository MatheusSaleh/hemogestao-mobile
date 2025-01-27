import { UserEntity } from "@/domain/entities/UserEntity";
import { API_URL } from "./api";
import { DonorEntity } from "@/domain/entities/DonorEntity";
import axios, { AxiosError } from "axios";

const URL = `${API_URL}/auth`;

export const registerDonorRequest = async (user: UserEntity, donor: DonorEntity) => {
    user.role = "USER";
    user.donorId = donor.id;
    console.log(user);
    if (donor.id !== undefined) {
      user.donorId = donor.id;
    } else {
      throw new Error("Donor ID is undefined");
    }
    try {
      const response = await axios.post(`${URL}/register-donor`, user );
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
  }