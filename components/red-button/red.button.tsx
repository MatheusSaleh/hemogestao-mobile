import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { s } from "./styles";

type RedButtonProps = {
    text: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const RedButton = ({ text, onPress, buttonStyle, textStyle }: RedButtonProps) => (
    <TouchableOpacity style={[s.button, s.redButton, buttonStyle]} onPress={onPress}>
        <Text style={[s.redButtonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
);
export default RedButton;