import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/header/header";
import StartGameScreen from "./screens/StartGameScreen/startgamescreen";
import GameScreen from "./screens/GameScreen/gamescreen";
import GameOverScreen from "./screens/GameOverScreen/gameoverscreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

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
