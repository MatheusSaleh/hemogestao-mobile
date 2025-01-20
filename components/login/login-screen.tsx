import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { s } from "./styles";
import { loginRequest } from "@/app/services/login-request";
import { useRouter } from "expo-router";
import InputField from "../input-field/input-field";

type LoginScreenProps = {
  onLogin: () => void;
};

const LoginScreen = ({ onLogin }: LoginScreenProps) => {

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
    <View style={s.container}>
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
  

      <TouchableOpacity style={s.loginButton} onPress={handleLogin}>
        <Text style={s.loginText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={s.forgotPassword}>Esqueceu a sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register/register')}>
        <Text style={s.register}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
