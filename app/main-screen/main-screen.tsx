import { s } from "./styles";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome5';


const MainScreen = () => {
  return (
    <ScrollView style={s.container}>
      <View style={s.header}>
        <Text style={s.date}>Quinta-Feira, 12 de Setembro</Text>
        <View style={s.headerContent}>
            <Text style={s.greeting}>Bom Dia, Alex</Text>
            <View style={s.profileSection}>
              <Text style={s.bloodType}>B+</Text>
              <Image
                source={{ uri: "https://via.placeholder.com/90" }}
                style={s.profileImage}
              />
            </View>
        </View>
        <Text style={s.subtitle}>
          Você doou sangue 5 vezes. Você está fazendo a diferença!
        </Text>
      </View>

      <View style={s.mainMenu}>
        <View style={s.buttonSection}>
          <TouchableOpacity style={[s.button, s.whiteButton]}>
            <Text style={s.whiteButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.button, s.redButton]}>
            <Text style={s.redButtonText}>Configurações</Text>
          </TouchableOpacity>
        </View>
        <View style={[s.buttonSection]}>
          <TouchableOpacity style={[s.button, s.whiteButton]}>
            <Text style={s.whiteButtonText}>Agendar Doação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.button, s.redButton]}>
            <Text style={s.redButtonText}>Solicitações de Doação</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.section}>
        <View style={s.sectionHeader}>	
            <View>
                <Text style={s.sectionTitle}>Sua próxima doação</Text>
                <Text style={s.nextDonation}>
                  Doação no hemocentro de Assis
                </Text>
                <Text style={s.nextDonationDate}>
                  12/09/2022 - 14:00
                </Text>
            </View>
            <View>
                <TouchableOpacity >
                  <Icon name="chevron-right" size={16}/>
                </TouchableOpacity>
            </View>
        </View>
      </View>

      <View style={s.section}>
        <Text style={s.sectionTitle}>Histórico de Doações</Text>
        <View style={s.historyItem}>
          <Icon name="calendar" size={16} style={s.calendarIcon}/>
          <Text style={s.historyDate}>12/01/2023</Text>
          <Text style={s.historyType}>Sangue Completo</Text>
        </View>
        <View style={s.historyItem}>
            <Icon name="calendar" size={16} style={s.calendarIcon}/>
          <Text style={s.historyDate}>11/09/2022</Text>
          <Text style={s.historyType}>Sangue Completo</Text>
        </View>
        <View style={s.historyItem}>
            <Icon name="calendar" size={16} style={s.calendarIcon}/>
          <Text style={s.historyDate}>12/07/2022</Text>
          <Text style={s.historyType}>Sangue Completo</Text>
        </View>
        <View style={s.historyItem}>
            <Icon name="calendar" size={16} style={s.calendarIcon}/>
          <Text style={s.historyDate}>01/05/2022</Text>
          <Text style={s.historyType}>Sangue Completo</Text>
        </View>
      </View>

      <View style={s.navBar}>
        <TouchableOpacity style={s.navButton}>
          <Icon name="home" size={20} style={s.navIcon} />
            <Text style={s.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.navButton}>
          <Icon name="fire" size={20} style={s.navIcon} />
            <Text style={s.navText}>Desáfios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.navButton}>
          <Icon name="users" size={20} style={s.navIcon} />
            <Text style={s.navText}>Doadores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.navButton}>
          <Icon name="question" size={20} style={s.navIcon} />
            <Text style={s.navText}>Quizes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.navButton}>
            <Icon name="rocketchat" size={20} style={s.navIcon} />
                <Text style={s.navText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.navButton}>
            <Icon name="hospital" size={20} style={s.navIcon} />
                <Text style={s.navText}>Hemocentro</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MainScreen;
