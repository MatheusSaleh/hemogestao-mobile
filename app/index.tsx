import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationIndependentTree } from '@react-navigation/native';

import MainScreen from './main-screen/main-screen';
import Challenge from './challenge/challenge';
import NavBar from '@/components/navbar/navbar';
import { useState } from 'react';
import Donors from './donors/Donors';
import Quizes from './quizes/Quizes';
import Chat from './chat/chat';
import Hemocenter from './hemocenter/Hemocenter';
import { LoginScreen } from './login/login-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';


export type RootTabParamList = {
  Início: undefined;
  Desafios: undefined;
  Doadores: undefined;
  Quizes: undefined;
  Chat: undefined;
  Hemocentro: undefined;   
} 


const Tab = createBottomTabNavigator<RootTabParamList>();

export default function Index() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  console.log('isLoggedIn', isLoggedIn);

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container} >
        <View style={styles.content}>
          <LoginScreen onLogin={() => setIsLoggedIn(true)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <NavigationIndependentTree>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            display: "none",
          },
          headerShown: false,
        }}
      >
        <Tab.Screen name="Início" component={MainScreen} />
        <Tab.Screen name="Desafios" component={Challenge} />
        <Tab.Screen name="Doadores" component={Donors} />
        <Tab.Screen name="Quizes" component={Quizes} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Hemocentro" component={Hemocenter} />
      </Tab.Navigator>
      <NavBar />
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Defina a cor de fundo desejada
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});