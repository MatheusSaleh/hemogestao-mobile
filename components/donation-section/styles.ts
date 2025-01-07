import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
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
});