import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { s } from "./styles";

type DonationSectionProps = {
  nextDonation: string;
  nextDonationDate: string;
};

const DonationSection = ({
  nextDonation,
  nextDonationDate,
}: DonationSectionProps) => {
  return (
    <View style={s.section}>
      <View style={s.sectionHeader}>
        <View>
          <Text style={s.sectionTitle}>Sua próxima doação</Text>
          <Text style={s.nextDonation}>{nextDonation}</Text>
          <Text style={s.nextDonationDate}>{nextDonationDate}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="chevron-right" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DonationSection;
