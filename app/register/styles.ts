import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      },
      errorInput: {
        borderColor: "red",
      },
      errorText: {
        color: "red",
        marginBottom: 10,
      }
}); 