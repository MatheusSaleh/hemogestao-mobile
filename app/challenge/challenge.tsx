import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, ProgressBar, Card } from 'react-native-paper';
import { styles } from './styles';

const ChallengesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Desafios, Recompensas e Badges</Text>
      <View style={styles.statsContainer}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Total de Desafios Atribuídos a Você</Text>
          <Text style={styles.cardValue}>3</Text>
          <Button mode="contained" style={styles.button}>Desafios</Button>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Total de Recompensas</Text>
          <Text style={styles.cardValue}>7</Text>
          <Button mode="contained" style={styles.button}>Recompensas</Button>
        </Card>
      </View>
      <View style={styles.statsContainer}>
        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Badges</Text>
          <Text style={styles.cardValue}>4</Text>
          <Button mode="contained" style={styles.button}>Badges</Button>
        </Card>
        <Card style={styles.card}>
          <Text style={[styles.cardValue, styles.bcoins]}>195 BCOINS</Text>
        </Card>
      </View>
      <Text style={styles.sectionTitle}>Meus Desafios em Andamento</Text>
      <Card style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Indique 5 Doadores</Text>
        <Text style={styles.challengeSubtitle}>Encerra em 2 dias</Text>
        <ProgressBar progress={0.8} color="red" style={styles.progressBar} />
      </Card>
      <Card style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Compartilhe o aplicativo com 5 amigos</Text>
        <Text style={styles.challengeSubtitle}>Encerra em 2 dias</Text>
        <ProgressBar progress={0.8} color="red" style={styles.progressBar} />
      </Card>
      <Card style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Doe 1 Litro de Sangue</Text>
        <Text style={styles.challengeSubtitle}>Encerra em 12 dias</Text>
        <ProgressBar progress={0.5} color="red" style={styles.progressBar} />
      </Card>
    </ScrollView>
  );
};



export default ChallengesScreen;
