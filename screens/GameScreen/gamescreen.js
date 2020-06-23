import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberContainer from "../../components/number-container/number-container";
import Card from "../../components/card/card";
import MainButton from "../../components/main-button/main-button";

const randomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return randomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    randomNumberBetween(1, 100, props.UserChoice)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { UserChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === UserChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, UserChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.UserChoice) ||
      (direction === "greater" && currentGuess > props.UserChoice)
    ) {
      Alert.alert("Dont Lie", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = randomNumberBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextGuess);
    setRounds((currentRound) => currentRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>OPPONENT'S GUESS</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          LOWER
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          GREATER
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    maxWidth: "80%",
    width: 300,
  },
});

export default GameScreen;
