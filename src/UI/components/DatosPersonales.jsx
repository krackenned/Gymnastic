import React from "react";
import { View } from "react-native";
import { TextField, Button } from "@material-ui/core";

export default function DatosPersonales() {
  return (
    <View>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-nombre" type="nombre" label="Nombre" />
      <TextField id="outlined-apellido" type="apellido" label="Apellido" />
      <TextField id="outlined-dni" type="Dni" label="Dni" />
      <TextField id="outlined-edad" type="edad" label="Edad" />
      <TextField id="outlined-domicilio" type="domicilio" label="Domicilio" />
      <TextField id="outlined-email" type="email" label="Email" />
      <TextField id="outlined-genero" type="genero" label="Genero" />
      <Button variant="contained">Enviar</Button>
      <Button variant="default">Cancelar</Button>
    </View>
  );
}
