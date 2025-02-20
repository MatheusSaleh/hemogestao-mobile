import React, { useState } from "react";
import { View, Text, ScrollView, Button, Image } from "react-native";
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
import * as ImagePicker from 'expo-image-picker';

const RegisterDonorScreen = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DonorEntity>();

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [imageBase64, setImageBase64] = useState<string>('');

  const onSubmit = async (data: DonorEntity) => {
    const date = convertDateToISO(data.people.dateOfBirth);
    data.people.dateOfBirth = date;
    data.image = imageBase64;
    try {
      const donorData = await createDonorRequest(data);
      if (donorData) {
        router.push({
          pathname: "/register-user/register-user",
          params: { donorData: JSON.stringify(donorData) },
        })
      } else {
        console.error("Cadastro falhou");
      }
    } catch (error) {
      console.error("Erro ao cadastrar doador:", error);
    }
  };

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permissão negada');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      if (result.assets[0].base64) {
        setImageBase64(result.assets[0].base64);
      }
    }
  }

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

      <Button title="Selecionar Imagem" onPress={handleImagePick} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100, marginTop: 10 }} />}

      <Text accessible accessibilityLabel="Nome Completo">
        Nome Completo
      </Text>
      <Controller
        control={control}
        name="people.fullName"
        rules={{ required: "Campo obrigatório" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <InputField
            placeholder="Nome Completo"
            onChangeText={onChange}
            value={value}
            errors={error}
          />
        )}
      />

      <Text accessible accessibilityLabel="Data de Nascimento">
        Data de Nascimento
      </Text>
      <Controller
        control={control}
        name="people.dateOfBirth"
        rules={{
          required: "Campo obrigatório",
          pattern: { value: /^\d{2}\/\d{2}\/\d{4}$/, message: "Data Inválida" },
        }}
        render={({ field: { onChange, value }, fieldState: {error} }) => (
          <MaskInputField
            placeholder="Data de Nascimento"
            onChangeText={onChange}
            value={value}
            mask="99/99/9999"
            keyBoardType="numeric"
            error={error}
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

      <Text accessible accessibilityLabel="Email">Email</Text>
      <Controller
        control={control}
        name="people.email"
        rules={{
          required: "Campo obrigatório",
          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido"}
        }}
        render={({ field: { onChange, value }, fieldState: {error} }) => (
          <InputField
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            keyBoardType="email-address"
            errors={error}
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
        <WhiteButton
          text="Voltar"
          onPress={() => {
            router.replace("/");
          }}
        />
      </View>
    </ScrollView>
  );
};

export default RegisterDonorScreen;
function setImageUUID(arg0: string) {
  throw new Error("Function not implemented.");
}

