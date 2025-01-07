import { TouchableOpacity, View, Text } from "react-native";
import { s } from "./styles";

const MainMenu = () => (
    <View style={s.mainMenu}>
        <View style={s.buttonSection}>
            <TouchableOpacity style={[s.button, s.whiteButton]}>
                <Text style={s.whiteButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[s.button, s.redButton]}>
                <Text style={s.redButtonText}>Configurações</Text>
            </TouchableOpacity>
        </View>
        <View style={s.buttonSection}>
            <TouchableOpacity style={[s.button, s.whiteButton]}>
                <Text style={s.whiteButtonText}>Agendar Doação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[s.button, s.redButton]}>
                <Text style={s.redButtonText}>Solicitações de Doação</Text>
            </TouchableOpacity>
        </View>
    </View>
)
export default MainMenu;