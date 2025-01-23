import { MaskedTextInput } from 'react-native-mask-text';
import { s } from './styles';
import { KeyboardTypeOptions } from 'react-native';

type MaskInputFieldProps = {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    secureTextEntry?: boolean;
    mask: string;
    keyBoardType: KeyboardTypeOptions;
}

const MaskInputField = ({
    placeholder, 
    onChangeText,
    value, 
    secureTextEntry,
    mask,
    keyBoardType
}: MaskInputFieldProps) => {
    return (
        <MaskedTextInput
            style={s.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            mask={mask}
            keyboardType={keyBoardType}
        />
    );
};

export default MaskInputField;