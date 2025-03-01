import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    card: { flex: 1, padding: 15, margin: 5, backgroundColor: '#F8F8F8' },
    cardTitle: { fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
    cardValue: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
    bcoins: { color: 'red' },
    button: { marginTop: 5, backgroundColor: 'red' },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
    challengeCard: { padding: 15, marginBottom: 10 },
    challengeTitle: { fontSize: 14, fontWeight: 'bold' },
    challengeSubtitle: { fontSize: 12, color: 'gray' },
    progressBar: { height: 8, marginTop: 5 }
  });