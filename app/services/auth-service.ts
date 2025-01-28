import { getAuthenticatedDonor } from "./get-authenticated-donor";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

export const fetchAuthenticatedDonor = async () => {
  try {
    const storedToken = await SecureStore.getItemAsync("token");
    if (storedToken) {
      const decodedToken: any = jwtDecode(storedToken);
      if (typeof decodedToken.sub === "string") {
        return await getAuthenticatedDonor(decodedToken.sub);
      } else {
        console.error("Token sub is not a string:", decodedToken.sub);
      }
    } else {
      console.log("Token não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar token:", error);
    throw error;
  }
  return null;
};
