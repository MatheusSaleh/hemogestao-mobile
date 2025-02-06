import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#DE2121",
    padding: 10,
    borderRadius: 5,
  },
  sendText: {
    color: "#fff",
  },
  disabled: {
    backgroundColor: "#ccc",
  },
});