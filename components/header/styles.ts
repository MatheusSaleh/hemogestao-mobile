import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  header: {
    marginBottom: 16,
  },

  date: {
    fontSize: 14,
    color: "#FF0000",
    fontWeight: "bold",
  },

  greeting: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 8,
    width: "60%",
  },

  profileSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  bloodType: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FF0000",
    marginLeft: 12,
    marginTop: 60,
    padding: 3,
  },

  profileImage: {
    width: 86,
    height: 86,
    borderRadius: 40,
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#944F4F",
    marginTop: 8,
  }
});
