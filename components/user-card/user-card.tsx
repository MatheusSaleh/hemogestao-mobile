import { DonorEntity } from "@/domain/entities/DonorEntity";
import { s } from "./styles";
import { View, Text } from "react-native";

type UserCardProps = {
    donorData: DonorEntity;
}


const UserCard = ({ donorData }: UserCardProps) => (
  <View style={s.userCard}>
    <Text style={s.userCardTitle}>Usuário a ser criado:</Text>
    <Text style={s.userCardInfo}>Nome: {donorData.people.fullName}</Text>
    <Text style={s.userCardInfo}>Email: {donorData.people.email}</Text>
  </View>
);
export default UserCard;
