import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { DonorEntity } from "@/domain/entities/DonorEntity";

import { s } from "./styles";
import InputField from "@/components/input-field/input-field";
import RedButton from "@/components/red-button/red.button";
import MaskInputField from "@/components/mask-input-field/mask-input-field";
import DropdownField from "@/components/dropdown/dropdown-field";
import { createDonorRequest } from "../services/create-donor-request";
import { convertDateToISO } from "@/utils/convert-date-to-iso";
import WhiteButton from "@/components/white-button/white-button";
import { useRouter } from "expo-router";

const RegisterDonorScreen = () => {

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DonorEntity>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: DonorEntity) => {
    const date = convertDateToISO(data.people.dateOfBirth);
    data.people.dateOfBirth = date;
    try {
      const donorData = await createDonorRequest(data);
      if (donorData) {
        console.log(donorData);
      } else {
        console.error("Cadastro falhou");
      }
    } catch (error) {
      console.error("Erro ao cadastrar doador:", error);
    }
  };

  const bloodTypes = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const genders = [
    { label: "Masculino", value: "M" },
    { label: "Feminino", value: "F" },
    { label: "Outro", value: "O" },
  ];

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
          <MaskInputField
            placeholder="Data de Nascimento"
            onChangeText={onChange}
            value={value}
            mask="99/99/9999"
            keyBoardType="numeric"
          />
        )}
      />

      <DropdownField
        control={control}
        name="people.gender"
        label="Gênero"
        data={genders}
        rules={{ required: "Campo obrigatório" }}
        errors={errors.people?.gender}
      />

      <Text>Email</Text>
      <Controller
        control={control}
        name="people.email"
        rules={{
          required: "Campo obrigatório",
        }}
        render={({ field: { onChange, value } }) => (
          <InputField
            placeholder="Email"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <DropdownField
        control={control}
        name="bloodType"
        label="Tipo Sanguíneo"
        data={bloodTypes}
        rules={{ required: "Campo obrigatório" }}
        errors={errors.bloodType}
      />

      <View style={{ display: "flex", flexDirection: "row" }}>
        <RedButton text="Continuar" onPress={handleSubmit(onSubmit)} />
        <WhiteButton text="Voltar" onPress={() => {
          router.push('/login/login-screen')
        }} />
      </View>
    </ScrollView>
  );
};

export default RegisterDonorScreen;
