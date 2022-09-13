import React from "react";
import { View, Text} from "react-native";
import { Grid } from "@material-ui/utils";

export default function InformacionScreen() {
  return 
  <View>
    <Text>¿Que eventos se realizan?</Text>
    <Text>Se pueden realizar todo tipo de eventos menos ferias</Text>
    <Text>¿Que dias y que horarios?</Text>
    <Text>Solo feriados y fines de semana</Text>
    <Text>¿Que metodos de pago se aceptan?</Text>
    <Text>Se alquila a cambio de productos de limpieza</Text>
    <Text>Terminos y condiciones para alquilar:</Text>
    <Text>
       Cumplir con el orden y la limpieza, 
       no romper ni extraviar ningun elemento, 
       de ser así deberá ser notificado y hacerse responsable
      </Text>
  </View>;
}
