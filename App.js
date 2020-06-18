import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header/header";
import StartGameScreen from "./screens/StartGameScreen/startgamescreen";
import GameScreen from "./screens/GameScreen/gamescreen";
import GameOverScreen from "./screens/GameOverScreen/gameoverscreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startScreenHandler = (enteredNumber) => {
    setUserNumber(enteredNumber);
    setGuessRound(0);
  };

  const restartGameHandler = () => {
    setGuessRound(0), setUserNumber(null);
  };

  const gameOverHandler = (noOfRounds) => {
    setGuessRound(noOfRounds);
  };

  let content = <StartGameScreen onGameStart={startScreenHandler} />;

  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen UserChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRound}
        restartGame={restartGameHandler}
      />
    );
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
