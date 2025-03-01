import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    card: { backgroundColor: '#fff', padding: 15, marginBottom: 20, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
    image: { width: '100%', height: 150, borderRadius: 10 },
    title: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
    description: { fontSize: 14, color: '#666', marginBottom: 5 },
    questions: { fontSize: 12, color: '#999', marginBottom: 10 },
    button: { backgroundColor: 'red', padding: 10, borderRadius: 5, alignItems: 'center' },
    buttonText: { color: 'white', fontWeight: 'bold' },
  });