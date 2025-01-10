import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { s } from "./styles";
import { loginRequest } from "@/app/services/login-request";

type LoginScreenProps = {
  onLogin: () => void;
};

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
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

      <TextInput
        style={s.input}
        placeholder="Escreva o seu email"
        placeholderTextColor="#999"
        onChangeText={setLogin}
        value={login}
      />
      <TextInput
        style={s.input}
        placeholder="Escreva a sua senha"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={s.loginButton} onPress={handleLogin}>
        <Text style={s.loginText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={s.forgotPassword}>Esqueceu a sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={s.register}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
