import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "#e0e0e0" },
    message: { padding: 7, borderRadius: 10, marginVertical: 5, maxWidth: "75%" },
    myMessage: { alignSelf: "flex-start", backgroundColor: "#DE2121" },
    otherMessage: { alignSelf: "flex-end", backgroundColor: "#F5F0F0" },
    myMessageText: { color: "#ffffff" },
    otherMessageText: { color: "#000000" },
    inputContainer: { flexDirection: "row", alignItems: "center", padding: 5 },
    input: { flex: 1, borderWidth: 1, borderColor: "#7f8c8d", borderRadius: 10, padding: 10, backgroundColor: "#ffffff" },
    sendButton: { backgroundColor: "#c0392b", padding: 10, borderRadius: 10, marginLeft: 5 },
    sendText: { color: "#ffffff" },
});