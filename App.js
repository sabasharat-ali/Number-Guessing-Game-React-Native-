import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header/header";
import StartGameScreen from "./screens/StartGameScreen/startgamescreen";
import GameScreen from "./screens/GameScreen/gamescreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startScreenHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
  };

  let content = <StartGameScreen onGameStart={startScreenHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="GUESS A NUMBER" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
