import { TextInput } from "react-native";
import { s } from "./styles";

type InputFieldProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
};

const InputField = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
}: InputFieldProps) => {
  return (
    <TextInput
      style={s.input}
      placeholder={placeholder}
      placeholderTextColor="#999"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default InputField;
