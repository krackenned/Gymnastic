import React from "react";
import { View, Text } from "react-native";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <View>
      <Text>Soy un text en app.js</Text>
      <LoginForm />
    </View>
  );
}
