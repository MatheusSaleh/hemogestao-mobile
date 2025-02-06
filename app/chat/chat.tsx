import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { s } from "./styles";


const Chat = () => {

  const WS_URL: string = "ws://172.100.127.106:8080/chat";
  interface Message {
    sender: string;
    message: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);


  useEffect(() => {
    const connectWebSocket = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        if (!token) {
          console.error("Token JWT não encontrado!");
          return;
        }

        console.log("🔑 Token recuperado:", token);

        const socket = new WebSocket(`${WS_URL}?token=${token}`);

        socket.onopen = () => {
          console.log("Conectado ao WebSocket");
          setWs(socket);
        };

        socket.onmessage = (event) => {
          console.log("Mensagem recebida:", event.data);
          setMessages((prev) => [...prev, { message: event.data, sender: "outro" }]);
        };

        socket.onerror = (error) => {
          console.error("❌ Erro no WebSocket:", error);
        };

        socket.onclose = () => {
          console.log("🔌 Conexão fechada");
        };

        return () => {
          socket.close();
        };
      } catch (error) {
        console.error("⚠️ Erro ao recuperar o token:", error);
      }
    };

    connectWebSocket();
  }, []);
  
  const sendMessage = async () => {
    if (ws && ws.readyState === WebSocket.OPEN && input.trim()) {
      try {
        const username = "fernandao";
        if (!username) {
          console.error("Nome de usuário não encontrado.");
          return;
        }
  
        const formattedMessage = `${username}:${input}`; 
        ws.send(formattedMessage); 
  
        console.log("📤 Mensagem enviada:", formattedMessage);
        setMessages((prev) => [...prev, { message: formattedMessage, sender: "eu" }]);
        setInput("");
      } catch (error) {
        console.error("Erro ao recuperar o nome do usuário:", error);
      }
    } else {
      console.error("Conexão WebSocket não está aberta.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              s.message,
              item.sender === "eu" ? s.myMessage : s.otherMessage,
            ]}
          >
            <Text style={[
              s.message,
              item.sender === "eu" ? s.myMessageText : s.otherMessageText,
            ]}>{item.message.split(":")[1] || item.message}</Text>
          </View>
        )}
      />
      <View style={s.inputContainer}>
        <TextInput
          style={s.input}
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
        />
        <TouchableOpacity style={s.sendButton} onPress={sendMessage}>
          <Text style={s.sendText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
