import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useWebSocket from "react-use-websocket";
import { API_URL } from "../services/api";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `ws://172.100.127.106:8080/chat`
  );

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <View>
      <Text>Chat</Text>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
      />
      <Button title="Send" onPress={handleSendMessage} />
      <Text>{lastMessage?.data}</Text>
    </View>

  );
};

export default Chat;
