import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ViewBase } from "react-native";

import NumberContainer from "../../components/number-container/number-container";
import Card from "../../components/card/card";

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
  return (
    <View style={styles.screen}>
      <Text>OPPONENT'S GUESS</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
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
