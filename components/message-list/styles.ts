import {StyleSheet} from 'react-native'

export const s = StyleSheet.create({
    message: {
        padding: 10,
        marginBottom: 5,
      },
      myMessage: {
        backgroundColor: "#DE2121",
        alignSelf: "flex-end",
      },
      otherMessage: {
        backgroundColor: "#F5F0F0",
        alignSelf: "flex-start",
      },
      messageText: {
        fontSize: 16,
      },
      myMessageText: {
        color: "#FFF",
      },
      otherMessageText: {
        color: "#333",
      },
      container: {
        flex: 1,
        padding: 10,
      },
})