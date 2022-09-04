import React from "react";
import { View, Text } from "react-native";
import LoginForm from "./UI/components/LoginForm";
import InformacionScreen from "./UI/components/InformacionScreen";

export default function App() {
  return (
    <View>
      <div class="container">
        <div class="pantalla_info">
          <InformacionScreen />
        </div>

        <Text> </Text>

        <div class="pantalla_loginform">
          <LoginForm />
        </div>
      </div>
    </View>
  );
}
