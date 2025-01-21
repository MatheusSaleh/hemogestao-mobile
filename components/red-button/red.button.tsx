import { TouchableOpacity, Text } from "react-native";
import { s } from "./styles";

type RedButtonProps = {
    text: string;
    onPress: () => void;
}

const RedButton = ({ text, onPress }: RedButtonProps) => (
    <TouchableOpacity style={[s.button, s.redButton]} onPress={onPress}>
        <Text style={s.redButtonText}>{text}</Text>
    </TouchableOpacity>
);