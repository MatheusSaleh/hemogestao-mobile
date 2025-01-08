import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import { s } from "./styles";

type LoginScreenProps = {
  onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {

  const handleLogin = () => {
    onLogin();
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>Bem-Vindo ao Hemogestão App</Text>

      <TextInput
        style={s.input}
        placeholder="Escreva o seu email"
        placeholderTextColor="#999"
      />
      <TextInput
        style={s.input}
        placeholder="Escreva a sua senha"
        placeholderTextColor="#999"
        secureTextEntry
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

      <Text style={s.orText}>Ou entre com</Text>

      <View style={s.socialIcons}>
        <TouchableOpacity style={s.iconButton}>
          <Text style={s.icon}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.iconButton}>
          <Text style={s.icon}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default LoginScreen;
