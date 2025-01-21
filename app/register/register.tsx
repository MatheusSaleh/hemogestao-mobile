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
      
      <Text>Data de Nascimento</Text>
      <Controller
        control={control}
        name="people.dateOfBirth"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, value } }) => (
          <InputField
            placeholder="Data de Nascimento"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Text>Gênero</Text>
      <Controller
        control={control}
        name="people.gender"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, value } }) => (
          <InputField
            placeholder="Gênero"
            onChangeText={onChange}
            value={value}
          />
        )}
        />

      <Text>Email</Text>
      <Controller
        control={control}
        name="people.email"
        rules={
          { 
            required: "Campo obrigatório",
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          }
        }
        render={({ field: { onChange, value } }) => (
          <InputField
            placeholder="Email"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Text>Tipo Sanguíneo</Text>
      <Controller
        control={control}
        name="bloodType"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, value } }) => (
          <InputField
            placeholder="Tipo Sanguíneo"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      
    </ScrollView>
  );
};



export default RegisterScreen;
