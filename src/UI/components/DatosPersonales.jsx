import React from "react";
import { View } from "react-native";
import { TextField, Button } from "@material-ui/core";

export default function DatosPersonales() {
  return (
    <View>
      <TextField id="outlined-nombre" variant="outlined" label="Nombre" />
      <TextField id="outlined-apellido" variant="outlined" label="Apellido" />
      <TextField id="outlined-dni" variant="outlined" label="Dni" />
      <TextField id="outlined-edad" variant="outlined" label="Edad" />
      <TextField id="outlined-domicilio" variant="outlined" label="Domicilio" />
      <TextField id="outlined-email" variant="outlined" label="Email" />
      <TextField id="outlined-genero" variant="outlined" label="Genero" />
      <Button variant="contained">Enviar</Button>
      <Button variant="default">Cancelar</Button>
    </View>
  );
}
