import { s } from "./styles";
import { View, Text, ScrollView } from "react-native";

import Header from "@/components/header/header";
import MainMenu from "@/components/main-menu/main-menu";
import DonationSection from "@/components/donation-section/donation-section";
import HistoryItem from "@/components/history-item/history-item";
import { useDonor } from "../hooks/useDonor";

const MainScreen = () => {

  const donor = useDonor();

  return (
    <ScrollView style={s.container}>
      <Header
        date={new Date().toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
        greeting={`Olá, ${donor?.people.fullName}`}
        bloodType={donor?.bloodType ?? ""}
        profileImage="https://via.placeholder.com/90"
        subtitle={`Você já doou ${donor?.numberOfDonations} vezes`}
      />
      <MainMenu />
      <DonationSection
        nextDonation="Sangue Completo"
        nextDonationDate="01/01/2025 - 08:00"
      />

      <View style={s.section}>
        <Text style={s.sectionTitle}>Histórico de Doações</Text>
        <HistoryItem date="12/01/2023" type="Sangue Completo" />
        <HistoryItem date="11/09/2022" type="Sangue Completo" />
        <HistoryItem date="12/07/2022" type="Sangue Completo" />
      </View>
    </ScrollView>
  );
};

export default MainScreen;
