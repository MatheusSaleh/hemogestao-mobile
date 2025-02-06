import React from "react";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import { s } from "./styles";

interface MessageInputProps {
  input: string;
  setInput: (text: string) => void;
  onSendMessage: () => void;
  ws: WebSocket | null;
}

const MessageInput = ({ input, setInput, onSendMessage, ws }: MessageInputProps) => {
  return (
    <View style={s.inputContainer}>
      <TextInput
        style={s.input}
        value={input}
        onChangeText={setInput}
        placeholder="Digite sua mensagem..."
        autoCorrect={true}
        autoCapitalize="sentences"
        keyboardType="default"
      />
      <TouchableOpacity
        style={[s.sendButton, !ws || ws.readyState !== WebSocket.OPEN ? s.disabled : {}]}
        onPress={onSendMessage}
        disabled={!ws || ws.readyState !== WebSocket.OPEN}
      >
        <Text style={s.sendText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};



export default MessageInput;
