import { View, Text, Image } from "react-native";
import { s } from "./styles";

type HeaderProps = {
    date: string;
    greeting: string;
    bloodType: string;
    profileImage: string;
    subtitle: string;
}

const Header = ({ date, greeting, bloodType, profileImage, subtitle }: HeaderProps) => (
    <View style={s.header}>
        <Text style={s.date}>{date}</Text>
        <View style={s.headerContent}>
            <Text style={s.greeting}>{greeting}</Text>
            <View style={s.profileSection}>
                <Text style={s.bloodType}>{bloodType}</Text>
                <Image source={{ uri: profileImage }} style={s.profileImage}/>
            </View>
        </View>
        <Text style={s.subtitle}>{subtitle}</Text>
    </View>
);

export default Header;