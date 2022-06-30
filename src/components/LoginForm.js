import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function LoginForm() {
  return (
    <View styles={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
