import { SchedulingEntity } from "@/domain/entities/SchedulingEntity";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "./api";

const URL = `${API_URL}/scheduling`;

export const listDonorScheduling = async (idDonor: number): Promise<SchedulingEntity[]> => {
    const token = await SecureStore.getItemAsync("token");

    if(!token) {
        return [] as SchedulingEntity[];
    }

    try{
        const response = await axios.get(`${URL}/donor/${idDonor}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if(response.status === 200 && response.data){
            return response.data;
        } else {
            return [] as SchedulingEntity[];
        }
    } catch (error) {
        console.error("Erro ao buscar agendamentos do doador:", error);
        return [] as SchedulingEntity[];
    }
}	