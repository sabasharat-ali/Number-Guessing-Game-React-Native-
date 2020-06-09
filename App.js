import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header/header";
import StartGameScreen from "./screens/StartGameScreen/startgamescreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="GUESS A NUMBER" />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
