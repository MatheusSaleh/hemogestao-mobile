import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import { s } from "./styles";
import { loginRequest } from "@/app/services/login-request";
import { useRouter } from "expo-router";
import InputField from "../../components/input-field/input-field";
import RedButton from "@/components/red-button/red.button";
import WhiteButton from "@/components/white-button/white-button";

type LoginScreenProps = {
  onLogin: () => void;
};

export const LoginScreen = ({ onLogin }: LoginScreenProps) => {

  const router = useRouter();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const loginData = { login, password };

    try {
      const isSuccess = await loginRequest(loginData);
      if (isSuccess) {
        onLogin();
      } else {
        console.error("Login falhou");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={s.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={s.title}>Bem-Vindo ao Hemogestão App</Text>

      <InputField
        placeholder="Escreva o seu email"
        onChangeText={setLogin}
        value={login}
      />
      <InputField
        placeholder="Escreva a sua senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
  
      <RedButton onPress={handleLogin}  text="Entrar" buttonStyle={s.loginButton} textStyle={s.loginText}  />

      <WhiteButton onPress={() => router.push('/register-donor/register-donor')} text="Cadastrar-se" textStyle={s.register} buttonStyle={s.registerButton}/>

    </SafeAreaView>
  );
};

