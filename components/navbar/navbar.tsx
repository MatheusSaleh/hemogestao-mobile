import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {s} from "./styles";

const NavBar = () => (
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
);
export default NavBar;
