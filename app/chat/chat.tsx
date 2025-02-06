import MessageInput from "@/components/message-input/message-input";
import MessageList from "@/components/message-list/message-list";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import WebSocketConnection from "../services/web-socket-connection";
import { s } from "./styles";	

const Chat = () => {
  const [messages, setMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);

  const onNewMessage = (message: { sender: string; message: string }) => {
    setMessages((prev) => [...prev, message]);
  };

  const sendMessage = () => {
    if (ws && ws.readyState === WebSocket.OPEN && input.trim()) {
      const username = "fernandao";
      const formattedMessage = `${username}:${input}`;
      ws.send(formattedMessage);
      console.log(" Mensagem enviada:", formattedMessage);
      setMessages((prev) => [
        ...prev,
        { message: formattedMessage, sender: "eu" },
      ]);
      setInput("");
    } else {
      console.error("WebSocket não está aberto.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={s.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={70}
    >
      <WebSocketConnection setWebSocket={setWs} onNewMessage={onNewMessage} />
      <MessageList messages={messages} />
      <MessageInput
        input={input}
        setInput={setInput}
        onSendMessage={sendMessage}
        ws={ws}
      />
    </KeyboardAvoidingView>
  );
};


export default Chat;
