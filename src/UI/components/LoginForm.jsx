import React from "react";
import { View, Text } from "react-native";
import { TextField, Button } from "@material-ui/core";

export default function LoginForm() {
  return (
    <View>
      <TextField id="filled-basic" label="Usuario" variant="filled" />
      <TextField id="filled-basic" label="Contraseña" variant="filled" />
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </View>
  );
}
