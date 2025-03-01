import { View, Text } from "react-native";
import { styles } from "./styles";
import { Card } from "react-native-paper";

const Donors = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Sua Classficação</Text>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Sua Posição:</Text>
          <Text style={styles.cardValue}>29°</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Você está na frente de</Text>
          <Text style={styles.cardValue}>79</Text>
          <Text style={styles.cardText}>Pessoas</Text>
        </Card>
      </View>
    )
}
export default Donors;