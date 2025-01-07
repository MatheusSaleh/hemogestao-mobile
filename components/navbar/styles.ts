import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FF0000",
    padding: 12,
    borderRadius: 8,
  },

  navButton: {
    flex: 1,
  },

  navIcon: {
    color: "#FFF",
    textAlign: "center",
  },

  navText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 10,
  },
})