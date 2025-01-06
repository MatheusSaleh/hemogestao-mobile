import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },

  header: {
    marginBottom: 16,
  },

  date: {
    fontSize: 14,
    color: "#FF0000",
    fontWeight: "bold",
  },

  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

  profileImage: {
    width: 86,
    height: 86,
    borderRadius: 40,
  },

  bloodType: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FF0000",
    marginLeft: 12,
    marginTop: 60,
    padding: 3,
  },

  subtitle: {
    fontSize: 14,
    color: "#944F4F",
    marginTop: 8,
  },

  buttonSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  button: {
    backgroundColor: "#EFEFEF",
    padding: 12,
    borderRadius: 8,
    margin: 4,
    width: "45%",
    alignItems: "center",
  },

  mainMenu: {
    flexDirection: "column",
    alignItems: "center",
  },

  redButton: {
    backgroundColor: "#FF0000",
  },

  whiteButton: {
    backgroundColor: "#F2E8E8",
  },

  whiteButtonText: {
    color: "black",
    textAlign: "center",
  },

  redButtonText: {
    color: "white",
    textAlign: "center",
  },

  section: {
    marginVertical: 16
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  nextDonation: {
    fontSize: 16,
    color: "black",
  },

  nextDonationDate: {
    fontSize: 14,
    color: "#944F4F",
    marginTop: 5,
  },

  historyItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },

  historyDate: {
    fontSize: 14,
  },

  historyType: {
    fontSize: 14,
  },

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

  calendarIcon: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F2E8E8",
  }
});
