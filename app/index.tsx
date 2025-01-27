import LoginScreen from '@/app/login/login-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationIndependentTree } from '@react-navigation/native';

import { View } from 'react-native';	
import MainScreen from './main-screen/main-screen';
import Challenge from './challenge/challenge';
import NavBar from '@/components/navbar/navbar';
import { useState } from 'react';
import Donors from './donors/Donors';
import Quizes from './quizes/Quizes';
import Chat from './chat/chat';
import Hemocenter from './hemocenter/Hemocenter';


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
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
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

