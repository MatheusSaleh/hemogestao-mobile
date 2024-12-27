import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#F8EDED",
    marginBottom: 15,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#E33C37",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#999",
    fontSize: 14,
    marginBottom: 15,
  },
  register: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 15,
  },
  orText: {
    color: "#999",
    fontSize: 14,
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconButton: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    fontWeight: "bold",
  },
});