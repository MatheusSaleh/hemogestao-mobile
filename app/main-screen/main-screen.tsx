import { s } from "./styles";
import { View, Text, ScrollView } from "react-native";

import Header from "@/components/header/header";
import MainMenu from "@/components/main-menu/main-menu";
import DonationSection from "@/components/donation-section/donation-section";
import HistoryItem from "@/components/history-item/history-item";
import { useDonor } from "../hooks/useDonor";
import { useDonorDonations } from "../hooks/useDonorDonations";
import { useDonorSchedulings } from "../hooks/useDonorSchedulings";

const MainScreen = () => {
  const { donor, loading, error } = useDonor();
  const donorDonations = useDonorDonations(donor?.id);
  const donorSchedulings = useDonorSchedulings(donor?.id);

  if (loading) {
    return <Text>Carregando Informações...</Text>;
  }

  if (error) {
    return <Text>Erro ao carregar informações</Text>;
  }

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
        profileImage="https://via.placeholder.com/60"
        subtitle={`Você já doou ${donor?.numberOfDonations} vezes`}
      />
      <MainMenu />
      {donorSchedulings.map((scheduling, index) => {
        return (
          <DonationSection
            key={scheduling.id || index}
            nextDonationDate={scheduling.dateTimeSchedule ?? ""}
            nextDonation={scheduling.status ?? ""}
          />
        );
      })}
      <DonationSection
        nextDonation="Sangue Completo"
        nextDonationDate="01/01/2025 - 08:00"
      />

      <View style={s.section}>
        <Text style={s.sectionTitle}>Histórico de Doações</Text>
        {donorDonations.map((donation, index) => {
          const formattedDate = new Date(
            donation.dateDonation
          ).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
          return (
            <HistoryItem
              key={donation.id || index}
              date={formattedDate}
              type={donation.donatioType ?? ""}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default MainScreen;
