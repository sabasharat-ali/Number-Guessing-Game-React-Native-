import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
};

const styles = StyleSheet.create({});

export default GameScreen;
