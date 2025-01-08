import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { s } from './styles';
import { RootTabParamList } from '@/app';

type NavBarNavigationProp = {
  navigate: (screen: keyof RootTabParamList) => void;
};

const NavBar = () => {
  const navigation = useNavigation<NavBarNavigationProp>(); 

  const navigateToScreen = (screenName: keyof RootTabParamList) => {
    navigation.navigate(screenName); 
  };

  return (
    <View style={s.navBar}>
      <TouchableOpacity style={s.navButton} onPress={() => navigateToScreen('Início')}>
        <Icon name="home" size={20} style={s.navIcon} />
        <Text style={s.navText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.navButton} onPress={() => navigateToScreen('Desafios')}>
        <Icon name="fire" size={20} style={s.navIcon} />
        <Text style={s.navText}>Desafios</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.navButton} onPress={() => navigateToScreen('Doadores')}>
        <Icon name="users" size={20} style={s.navIcon} />
        <Text style={s.navText}>Doadores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.navButton} onPress={() => navigateToScreen('Quizes')}>
        <Icon name="question" size={20} style={s.navIcon} />
        <Text style={s.navText}>Quizes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.navButton} onPress={() => navigateToScreen('Chat')}>
        <Icon name="comments" size={20} style={s.navIcon} />
        <Text style={s.navText}>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.navButton} onPress={() => navigateToScreen('Hemocentro')}>
        <Icon name="hospital-o" size={20} style={s.navIcon} />
        <Text style={s.navText}>Hemocentro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
