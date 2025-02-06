import { Message } from "@/domain/entities/Message";
import { FlatList, View, Text } from "react-native";
import { s } from "./styles";

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <FlatList
      style={s.container}
      data={messages}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View
          style={[
            s.message,
            item.sender === "eu" ? s.myMessage : s.otherMessage,
          ]}
        >
          <Text
            style={[
              s.messageText,
              item.sender === "eu" ? s.myMessageText : s.otherMessageText,
            ]}
          >
            {item.message.split(":")[1] || item.message}
          </Text>
        </View>
      )}
    />
  );
};
export default MessageList;