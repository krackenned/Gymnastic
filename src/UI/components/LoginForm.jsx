import React from "react";
import { View } from "react-native";
import { TextField, Button, Link } from "@material-ui/core";

export default function LoginForm() {
  return (
    <View>
      <TextField id="outlined-basic" label="Usuario" variant="outlined" />
      <TextField
        id="outlined-password"
        type="password"
        label="Contraseña"
        variant="outlined"
      />
      <Button variant="contained">Enviar</Button>
      <Button variant="outlined">Cancelar</Button>
      <Link href="http://epet20.com.ar/">Registrarse</Link>
    </View>
  );
}
