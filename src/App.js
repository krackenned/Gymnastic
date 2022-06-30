import React from "react";
import { View, Text } from "react-native";
import LoginForm from "./components/LoginForm";
import Informacion from "./components/Informacion";

export default function App() {
  return (
    <View>
      <div class="container">
        <div class="pantalla_info">
          <Informacion />
        </div>

        <Text> </Text>

        <div class="pantalla_loginform">
          <LoginForm />
        </div>
      </div>
    </View>
  );
}
