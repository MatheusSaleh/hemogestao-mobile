import { DonorEntity } from "@/domain/entities/DonorEntity";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TextInput } from "react-native";
import { s } from "./styles";
import UserCard from "@/components/user-card/user-card";
import { UserEntity } from "@/domain/entities/UserEntity";
import { Controller, useForm } from "react-hook-form";
import InputField from "@/components/input-field/input-field";
import RedButton from "@/components/red-button/red.button";
import { registerDonorRequest } from "../services/register-donor-request";

const RegisterUserScreen = () => {
  const params = useLocalSearchParams();

  const donorData: DonorEntity =
    typeof params.donorData === "string" ? JSON.parse(params.donorData) : null;

  const {control, handleSubmit, formState: {errors}} = useForm<UserEntity>();

  const router = useRouter();

  const onSubmit = async (data: UserEntity) => {
    data.employeeId = null;
    try {
      const response = await registerDonorRequest(data, donorData);
      if (response) {
        console.log("Usuário cadastrado com sucesso");
        router.push("/login/login-screen");
      } else {
        console.error("Cadastro falhou");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  } 

  return (
    <View style={s.container}>
      {donorData && (
        <View>
          <UserCard donorData={donorData} />
          <Text>Login</Text>
          <Controller
            control={control}
            name="login"
            rules={{ required: "Campo obrigatório" }}
            render={({ field: { onChange, value }, fieldState: {error} }) => (
              <InputField
                placeholder="Login"
                value={value}
                onChangeText={onChange}
                errors={error}
              />
            )}
            />
            <Text>Senha</Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: "Campo obrigatório" }}
              render={({ field: { onChange, value }, fieldState: {error} }) => (
                <InputField
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  errors={error}
                />
              )}
            />
            <RedButton onPress={handleSubmit(onSubmit)} text="Cadastrar" />
        </View>
      )}
    </View>
  );
};

export default RegisterUserScreen;
