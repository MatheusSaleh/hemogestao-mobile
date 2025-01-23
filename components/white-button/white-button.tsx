import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { s } from "./styles"

type WhiteButtonProps = {
    text: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>; 
    textStyle?: StyleProp<TextStyle>;
}

const WhiteButton = ({ text, onPress, buttonStyle, textStyle }: WhiteButtonProps) => (
    <TouchableOpacity style={[s.button, s.whiteButton, buttonStyle]} onPress={onPress}>
        <Text style={[s.whiteButtonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
);
export default WhiteButton;