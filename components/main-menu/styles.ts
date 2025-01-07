import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    mainMenu: {
        flexDirection: "column",
        alignItems: "center",
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

    redButton: {
        backgroundColor: "#FF0000",
    },

    redButtonText: {
        color: "white",
        textAlign: "center",
    },

    whiteButton: {
        backgroundColor: "#F2E8E8",
    },

    whiteButtonText: {
        color: "black",
        textAlign: "center",
    },

    
});