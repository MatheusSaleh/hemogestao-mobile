import { Text, TouchableOpacity } from "react-native"
import { s } from "./styles"

type WhiteButtonProps = {
    text: string;
    onPress: () => void;
}

const WhiteButton = ({ text, onPress }: WhiteButtonProps) => (
    <TouchableOpacity style={[s.button, s.whiteButton]} onPress={onPress}>
        <Text style={s.whiteButtonText}>{text}</Text>
    </TouchableOpacity>
);
export default WhiteButton;