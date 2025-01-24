import { KeyboardTypeOptions, TextInput, View, Text } from "react-native";
import { s } from "./styles";
import { Key } from "react";

type InputFieldProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  keyBoardType?: KeyboardTypeOptions;
  errors?: any;
};

const InputField = ({
  placeholder,
  onChangeText,
  value,
  secureTextEntry,
  keyBoardType,
  errors,
}: InputFieldProps) => {
  return (
    <View>
    <TextInput
      style={s.input}
      placeholder={placeholder}
      placeholderTextColor="#999"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyBoardType}
    />
    {errors && <Text style={s.errorText}>{errors.message}</Text>}
    </View>
  );
};

export default InputField;
