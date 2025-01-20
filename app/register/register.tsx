import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { DonorEntity } from "@/domain/entities/DonorEntity";

import {s} from "./styles";
import InputField from "@/components/input-field/input-field";

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: DonorEntity) => {
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={s.container}>
      <Text style={s.title}>Cadastro de Doador</Text>

      <Text>Nome Completo</Text>
      <Controller
        control={control}
        name="people.fullName"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, value } }) => (
          <InputField
            placeholder="Nome Completo"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
    </ScrollView>
  );
};



export default RegisterScreen;
