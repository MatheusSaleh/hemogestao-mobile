import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles";


const quizzes = [
    {
      id: '1',
      title: 'Sangue: O Quanto você sabe?',
      description: 'Teste os seus conhecimentos sobre os diferentes tipos de sangue e suas características',
      questions: '5 Questões',
      image: 'https://via.placeholder.com/300', 
    },
    {
      id: '2',
      title: 'Quando você pode doar?',
      description: 'Teste seus conhecimentos sobre os períodos em que se pode doar sangue',
      questions: '5 Questões',
      image: 'https://via.placeholder.com/300', 
    }
  ];

const Quizes = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Quizes</Text>
          <FlatList
            data={quizzes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.questions}>{item.questions}</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Responder</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      );
}
export default Quizes;