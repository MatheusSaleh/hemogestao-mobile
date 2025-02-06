import React, { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const WS_URL = "ws://172.100.127.106:8080/chat";

interface WebSocketConnectionProps {
  setWebSocket: (socket: WebSocket | null) => void;
  onNewMessage: (message: { sender: string; message: string }) => void;
}

const WebSocketConnection = ({ setWebSocket, onNewMessage }: WebSocketConnectionProps) => {
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
          console.log("✅ Conectado ao WebSocket");
          setWebSocket(socket);
        };

        socket.onmessage = (event) => {
          console.log("📩 Mensagem recebida:", event.data);
          onNewMessage({ message: event.data, sender: "outro" });
        };

        socket.onerror = (error) => {
          console.error("❌ Erro no WebSocket:", error);
        };

        socket.onclose = () => {
          console.log("🔌 Conexão fechada");
          setWebSocket(null);
        };

      } catch (error) {
        console.error("⚠️ Erro ao recuperar o token:", error);
      }
    };

    connectWebSocket();

    return () => {
      setWebSocket(null);
    };
  }, []);

  return null;
};

export default WebSocketConnection;
