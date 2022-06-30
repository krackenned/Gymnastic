import React from "react";
import { View, TextInput, Button } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Apellido" />
      <TextInput placeholder="DNI" />
      <TextInput placeholder="Edad" />
      <TextInput placeholder="Domicilio" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Sexo" />
      <Button title="Cancelar" onPress={() => console.log("Cancelado")} />
      <Button title="Enviar" onPress={() => console.log("Enviado")} />
    </View>
  );
}
