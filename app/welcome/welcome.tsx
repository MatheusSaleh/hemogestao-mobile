import { s } from "./styles";
import { View, Text, TouchableOpacity, Image } from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={s.container}>
      <Image
        style={s.image}
        resizeMode="contain"
        source={require("../../assets/images/blood-donor.png")}
      />

        <Text style={s.title}>Você pode salvar vidas doando sangue</Text>
        <Text style={s.subtitle}>
          A todo segundo, pessoas precisam de doação, sua doação pode salvar até 3 vidas
        </Text>

        <TouchableOpacity style={s.button}>
          <Text style={s.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>

      
  );
};

export default WelcomeScreen;