import { DonorEntity } from "@/domain/entities/DonorEntity";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { s } from "./styles";
import UserCard from "@/components/user-card/user-card";

const RegisterUserScreen = () => {
    const params = useLocalSearchParams();
    const donorData: DonorEntity =
      typeof params.donorData === "string" ? JSON.parse(params.donorData) : null;
  
    return (
      <View
        style={s.container}
      >
        {donorData && (
          <View>
              <UserCard donorData={donorData} />

          </View>
        )}
      </View>
    );
  };
  
  export default RegisterUserScreen;