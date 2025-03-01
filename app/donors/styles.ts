import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 20 },
  card: { width: '90%', padding: 20, marginBottom: 15, backgroundColor: '#F8F0F0', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardTitle: { fontSize: 14, fontWeight: 'bold' },
  cardValue: { fontSize: 32, fontWeight: 'bold', color: 'red' },
  cardText: { fontSize: 14, fontWeight: 'bold' },
});