import { MaskedTextInput } from 'react-native-mask-text';
import { s } from './styles';
import { KeyboardTypeOptions, View, Text } from 'react-native';

type MaskInputFieldProps = {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
    mask: string;
    keyBoardType: KeyboardTypeOptions;
    error: any;
}

const MaskInputField = ({
    placeholder, 
    onChangeText,
    value, 
    secureTextEntry,
    mask,
    keyBoardType,
    error
}: MaskInputFieldProps) => {
    return (
        <View>
        <MaskedTextInput
            style={s.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            mask={mask}
            keyboardType={keyBoardType}
        />
        {error && <Text style={s.errorText}>{error.message}</Text>}
        </View>
    );
};

export default MaskInputField;